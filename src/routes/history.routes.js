import { Router } from "express";
import { getHistory } from "../controllers/history.controller.js";
const router = Router();

router.get("/:user_id", getHistory);

export default router;
