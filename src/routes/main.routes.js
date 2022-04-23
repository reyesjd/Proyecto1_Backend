import { Router } from "express";
import message from "../utils/message.util.js"; // import message_format from "./utils/message.util";
import user_routes from "./user.routes.js";
import post_routes from "./post.routes.js";
import cart_routes from "./cart.routes.js";
import history_routes from "./history.routes.js";
import review_routes from "./review.routes.js";

const router = Router();

router.use("/users", user_routes);
router.use("/posts", post_routes);
router.use("/cart", cart_routes);
router.use("/history", history_routes);
router.use("/reviews", review_routes);

router.use("*", (req, res) => {
  return message(res, "Route not found!", 404); // If route not found then return 404
});

export default router;
