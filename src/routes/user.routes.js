import { Router } from "express";

import {
  login,
  signup,
  prevLogin,
  getUser,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/login", login);

router.post("/prev-login", prevLogin);

router.post("/register", signup);

router.get("/", getUser);

export default router;
