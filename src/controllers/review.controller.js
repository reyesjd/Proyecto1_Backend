import message from "../utils/message.util.js";
import reviewModel from "../models/review.model.js";
import postModel from "../models/post.model.js";

const onlyNumbers = (str) => {
  return /^[0-9]+$/.test(str);
};

export const createReview = async (req, res) => {
  try {
    const { user_id, product_id, rating, description } = req.body;
    if (!user_id || typeof user_id !== "string" || user_id.length == 0) {
      return message(res, "El usuario es requerido", 400);
    }

    if (
      !product_id ||
      typeof product_id != "string" ||
      product_id?.length == 0
    ) {
      return message(res, "El post es requerido", 400);
    }

    if (
      !rating ||
      typeof rating != "string" ||
      rating?.length == 0 ||
      !onlyNumbers(rating) ||
      rating > 5 ||
      rating < 0
    ) {
      return message(res, "El rating es requerido", 400);
    }

    if (
      !description ||
      typeof description != "string" ||
      description?.length == 0
    ) {
      return message(res, "El comentario es requerido", 400);
    }

    // TODO: Preguntar por esta validacion
    /*Esta verificacion permite que el usuario no pueda crear un review para un producto 
    el cual es de su propiedad*/
    /*const existingPost = await postModel.findOne({
      _id: product_id,
      owner_id: user_id,
    });

    if (existingPost != null) {
      return message(
        res,
        "No puede realizar una review a un post el cual usted es propietario.",
        400
      );
    }*/

    const review = await reviewModel.create({
      user_id,
      product_id,
      rating,
      description,
    });

    return message(res, "Review creado exitosamente!", 200, {});
  } catch (error) {
    console.log(error);
    return message(res, "No se ha podido agregar la review.", 500);
  }
};

export const getReviews = async (req, res) => {
  try {
    const { product_id, user_id } = req.query;
    let reviews = [];
    if (product_id != undefined) {
      reviews = await reviewModel.find({ product_id }).sort({ createdAt: -1 });
    } else if (user_id != undefined) {
      reviews = await reviewModel.find({ user_id }).sort({ createdAt: -1 });
    } else {
      return message(
        res,
        "No especifico el tipo de review que desea obtener.",
        400
      );
    }

    return message(res, "Review obtenidas correctamente", 200, reviews);
  } catch (error) {
    console.log(error);
    return message(res, "No se ha podido obtener las reviews.", 500);
  }
};
