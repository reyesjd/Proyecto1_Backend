import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { user_id, product_id, rating, description } = req.body;
});
router.get("/", (req, res) => {
  const { product_id, user_id } = req.params;
});

export default router;
