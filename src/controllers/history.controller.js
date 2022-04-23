import message from "../utils/message.util.js";
import cartModel from "../models/cart.model.js";

export const getHistory = async (req, res) => {
  try {
    const { user_id } = req.params;

    if (!user_id || typeof user_id !== "string" || user_id.length === 0) {
      return message(res, "User ID es requerido", 400);
    }

    const history = await cartModel
      .find({
        user_id,
        state: false,
        wasBought: true,
      })
      .sort({ createdAt: -1 });

    return message(res, "Successfully get history", 200, history);
  } catch (error) {
    console.log(error);
    return message(res, "No se ha podido obtener el historial.", 500);
  }
};
