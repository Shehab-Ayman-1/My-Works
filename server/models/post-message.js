import mongoose from "mongoose";

// Each Post Elements
const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: String,
	likes: { type: Number, default: 0 },
	disLikes: { type: Number, default: 0 },
	createdAt: { type: Date, default: new Date() },
	selectedFile: String,
});

// Make The Database
const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
