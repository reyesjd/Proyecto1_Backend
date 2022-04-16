import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const { user_id } = req.params;
});

router.post("/", (req, res) => {
  const { product_id, user_id } = req.body;
});

router.delete("/", (req, res) => {
  const { item_id } = req.params;
});

router.post("/buy", (req, res) => {
  const { user_id } = req.body;
});

export default router;
