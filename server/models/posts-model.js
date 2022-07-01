import mongoose from "mongoose";

// Each Post Elements
const postSchema = mongoose.Schema({
	title: String,
	creator: String,
	message: String,
	tags: String,
	likes: { type: [String], default: [] },
	createdAt: { type: Date, default: new Date() },
	selectedFile: String,
});

// Make The Database
const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
