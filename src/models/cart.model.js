import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    state: { type: Boolean, default: true },
    wasBought: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cart", CartSchema);
