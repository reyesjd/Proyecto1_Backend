import { Router } from "express";
import { getReviews, createReview } from "../controllers/review.controller.js";
const router = Router();

router.post("/", createReview);
router.get("/", getReviews);

export default router;
