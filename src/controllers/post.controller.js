import message from "../utils/message.util.js";
import postModel from "../models/post.model.js";

export const getRecentPost = async (req, res) => {
  try {
    const posts = await postModel.find({}).sort({ createdAt: -1 });
    return message(res, "Posts obtenidos exitosamente", 200, posts);
  } catch (error) {
    console.log(error);
    return message(res, "Error al obtener los posts", 500);
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { user_id } = req.query;
    const posts = await postModel
      .find({ owner_id: user_id })
      .sort({ createdAt: -1 });
    return message(res, "Posts obtenidos exitosamente", 200, posts);
  } catch (error) {
    console.log(error);
    return message(res, "Error al obtener los posts", 500);
  }
};

const getSinglePost = async (req, res) => {
  try {
    const { post_id } = req.query;
    const post = await postModel.findById(post_id);
    return message(res, "Post obtenido exitosamente", 200, post);
  } catch (error) {
    console.log(error);
    return message(res, "Error al obtener el post", 500);
  }
};

export const getPosts = async (req, res) => {
  const { post_id, user_id } = req.query;
  if (post_id) {
    return getSinglePost(req, res);
  } else if (user_id) {
    return getUserPosts(req, res);
  } else {
    return getRecentPost(req, res);
  }
};

export const createPost = async (req, res) => {
  try {
    const { owner_id, img_url, display_name, description, price } = req.body;
    const post = await postModel.create({
      owner_id,
      img_url,
      display_name,
      description,
      price,
    });

    return message(res, "Post creado exitosamente", 200, post);
  } catch (error) {
    console.log(error);
    return message(res, "Error al crear el post", 500);
  }
};
