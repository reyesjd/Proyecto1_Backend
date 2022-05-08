import message from "../utils/message.util.js";
import cartModel from "../models/cart.model.js";

export const addToCart = async (req, res) => {
  try {
    const { product_id, user_id } = req.body;

    if (
      !product_id ||
      typeof product_id !== "string" ||
      product_id.length === 0
    ) {
      return message(res, "Product ID es requerido", 400);
    }

    if (!user_id || typeof user_id !== "string" || user_id.length === 0) {
      return message(res, "User ID es requerido", 400);
    }

    const newCart = cartModel.create({ product_id, user_id });

    return message(res, "Successfully added to cart", 200, newCart);
  } catch (error) {
    console.log(error);
    return message(res, "No se ha podido añadir el producto.", 500);
  }
};

export const getCart = async (req, res) => {
  try {
    const { user_id } = req.query;

    if (!user_id || typeof user_id !== "string" || user_id.length === 0) {
      return message(res, "User ID es requerido", 400);
    }

    const cart = await cartModel.find({ user_id, state: true });

    return message(res, "Successfully get cart", 200, cart);
  } catch (error) {
    console.log(error);
    return message(res, "No se ha podido obtener el carrito.", 500);
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { item_id } = req.query;

    if (!item_id || typeof item_id !== "string" || item_id.length === 0) {
      return message(res, "Item ID es requerido", 400);
    }

    await cartModel.findByIdAndUpdate(item_id, { state: false });

    return message(res, "Successfully remove from cart", 200, {});
  } catch (error) {
    console.log(error);
    return message(res, "No se ha podido eliminar el producto.", 500);
  }
};

export const buyCart = async (req, res) => {
  try {
    const { user_id } = req.body;

    if (!user_id || typeof user_id !== "string" || user_id.length === 0) {
      return message(res, "User ID es requerido", 400);
    }

    await cartModel
      .updateMany(
        { user_id, state: true },
        { $set: { state: false, wasBought: true } }
      )
      .exec();

    return message(res, "Successfully buy cart", 200, {});
  } catch (error) {
    console.log(error);
    return message(res, "No se ha podido comprar el carrito.", 500);
  }
};
