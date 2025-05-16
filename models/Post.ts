import { Schema, model, models } from "mongoose";

const commentSchema = new Schema({
    userId: { type: String, required: true },
    username: { type: String, required: true },
    postId: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
});

const postSchema = new Schema({
    postId: { type: String, required: true },
    typeId: { type: String, required: true },
    comment: { type: [commentSchema], default: [] },
});

postSchema.index({ postId: 1, typeId: 1 }, { unique: true });

export default models.Post || model("Post", postSchema);
