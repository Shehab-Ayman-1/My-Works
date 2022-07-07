import mongoose from "mongoose";
import postMessage from "../models/posts-model.js";

export const getPosts = async (req, res) => {
	try {
		const postMessages = await postMessage.find();
		res.status(200).json(postMessages); // 200 => Is An Ajax Protocal Mean That The Request Is Success
	} catch (error) {
		res.status(404).json({ message: error.message }); // 404 => Is An Ajax Protocal Mean That The Request Is Failed
	}
};

export const createPost = async (req, res) => {
	const newPost = req.body;
	const newPostMessage = new postMessage(newPost);

	try {
		await newPostMessage.save();
		res.status(201).json(newPostMessage);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const deletePost = async (req, res) => {
	const { id } = req.params;

	if (mongoose.Types.ObjectId.isValid(id)) {
		await postMessage.findByIdAndRemove(id);
		return res.json({ message: "Post deleted successfully." });
	} else {
		return res.status(404).send(`No post with id: ${id}`);
	}
};

export const updatePost = async (req, res) => {
	// Make The ID Route Of The Link = Mongoose _id
	const { id: _id } = req.params;
	const post = req.body;

	if (mongoose.Types.ObjectId.isValid(_id)) {
		const updatedPost = await postMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
		return res.json(updatedPost);
	} else {
		return res.status(404).send("No Post Has This ID");
	}
};

export const likePost = async (req, res) => {
	// We Have 2 Ways To Change One Key In The Post Object
	// [1] The First Key
	const { id: _id } = req.params;
	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) {
		return res.status(404).send("No Post Has This ID");
	} else {
		const updatedPost = await postMessage.findByIdAndUpdate(_id, { ...post, likes: post.likes++ }, { new: true });
		return res.json(updatedPost);
	}
};

export const disLikePost = async (req, res) => {
	// [2] The Second Way
	const { id: _id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(_id)) {
		return res.status(404).send(`No Post Has This ID: ${_id}`);
	} else {
		const post = await postMessage.findById(_id);
		console.log(post);
		const updatedPost = await postMessage.findByIdAndUpdate(_id, { disLikes: post.disLikes + 1 }, { new: true });
		res.json(updatedPost);
	}
};
