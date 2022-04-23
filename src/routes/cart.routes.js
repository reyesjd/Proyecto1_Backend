import { Router } from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
  buyCart,
} from "../controllers/cart.controller.js";
const router = Router();

router.get("/", getCart);

router.post("/", addToCart);

router.delete("/", removeFromCart);

router.post("/buy", buyCart);

export default router;
