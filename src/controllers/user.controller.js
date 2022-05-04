import message from "../utils/message.util.js";
import userModel from "../models/user.model.js";
import { encrypt, validate } from "../utils/crypt.utils.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (
      !username ||
      !password ||
      username?.length == 0 ||
      password?.length == 0
    ) {
      return message(res, "El usuario o la contraseña esta vacia.", 400);
    }

    const user = await userModel.findOne({ username });

    if (!user) {
      return message(res, "El usuario no existe!", 404);
    }

    const isValidPassword = await validate(password, user.password);

    if (isValidPassword == false || isValidPassword == null) {
      return message(res, "La contraseña es incorrecta!", 400);
    }

    return message(res, "Login exitoso!", 200, {
      _id: user._id,
    });
  } catch (error) {
    return message(
      res,
      "En este momento no se puede iniciar sesion, por intente mas tarde.",
      500
    );
  }
};

export const signup = async (req, res) => {
  try {
    const { display_name, username, password } = req.body;
    if (
      !display_name ||
      !username ||
      !password ||
      display_name?.length == 0 ||
      username?.length == 0 ||
      password?.length == 0
    ) {
      return message(res, "Todos los campos son requeridos", 400);
    }

    if (password.length < 6) {
      return message(
        res,
        "La contraseña debe tener al menos 6 caracteres",
        400
      );
    }

    const hashPassword = await encrypt(password);

    if (!hashPassword) {
      return message(res, "Error al encriptar la contraseña", 500);
    }

    const newUSer = await userModel.create({
      display_name,
      username,
      password: hashPassword,
    });
    if (newUSer) {
      return message(res, "Usuario creado con exito", 200, {
        _id: newUSer._id,
      });
    } else {
      return message(res, "No se pudo crear el usuario", 500);
    }
  } catch (error) {
    console.log(error);
    return message(
      res,
      "En este momento no se puede crear el usuario, por intente mas tarde.",
      500
    );
  }
};

export const prevLogin = async (req, res) => {
  try {
    const { user_id } = req.body;

    if (!user_id) {
      return message(res, "El usuario no existe!", 404);
    }

    const user = await userModel.findOne({ _id: user_id });

    if (!user) {
      return message(res, "El usuario no existe!", 404);
    }

    return message(res, "Sesión valida!", 200, {
      _id: user._id,
    });
  } catch (error) {
    return message(res, "En este momento no se puede validar la sesión.", 500);
  }
};

export const getUser = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return message(res, "El usuario no existe!", 404);
    }

    const user = await userModel.findOne({ _id: user_id });
    if (!user) {
      return message(res, "El usuario no existe!", 404);
    }

    return message(res, "Usuario encontrado!", 200, {
      _id: user._id,
      display_name: user.display_name,
      username: user.username,
    });
  } catch (error) {
    console.log(error);
    return message(res, "En este momento no se puede obtener el usuario.", 500);
  }
};
