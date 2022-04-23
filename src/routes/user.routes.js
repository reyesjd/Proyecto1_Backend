import { Router } from "express";

import { login, signup } from "../controllers/user.controller.js";

const router = Router();

router.post("/login", login);

router.post("/prev-login", (req, res) => {
  const { user_id } = req.body;
});

router.post("/register", signup);

router.get("/", (req, res) => {
  const { user_id } = req.params;
});

export default router;
