import { Router } from "express";
import {
  getRecentPost,
  getPosts,
  createPost,
} from "../controllers/post.controller.js";

const router = Router();

router.get("/recent", getRecentPost);

router.get("/", getPosts);

router.post("/", createPost);

export default router;
