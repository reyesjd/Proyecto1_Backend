import { Router } from "express";

const router = Router();

router.get("/:user_id", (req, res) => {
  const { user_id } = req.params;
});

router.get("/recent", (req, res) => {});

router.get("/", (req, res) => {
  const { post_id } = req.params;
});

router.post("/", (req, res) => {
  const { owner_id, img_url, display_name, description, price } = req.body;
});

export default router;
