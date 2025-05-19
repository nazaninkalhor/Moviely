import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  likedItems: [
    {
      postId: { type: String, required: true },
      typeId: { type: String, enum: ["movie", "series"], required: true },
      postName: { type: String, required: true },
      postPosterPath: { type: String, required: true }
    }
  ],
});

export default models.User || model("User", userSchema);
