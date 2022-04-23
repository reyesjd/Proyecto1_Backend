import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    display_name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    state: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
