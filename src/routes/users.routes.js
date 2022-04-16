import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
});

router.post("/prev-login", (req, res) => {
  const { user_id } = req.body;
});

router.post("/register", (req, res) => {
  const { display_name, username, password } = req.body;
});

router.get("/", (req, res) => {
  const { user_id } = req.params;
});

export default router;
