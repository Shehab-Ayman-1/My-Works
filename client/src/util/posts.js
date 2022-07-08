import axios from "axios";

const Router = axios.create({ baseURL: "http://localhost:5000/posts" });

export const fetchData = async () => {
	try {
		const response = await Router.get(`/`);
		return response.data;
	} catch (error) {
		console.error(error.message);
	}
};

export const createPost = async (newPost) => {
	try {
		const response = await Router.post(`/`, newPost);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const deletePost = async (id) => {
	try {
		const response = await Router.delete(`/${id}`);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const updatePost = async (postId, updatedPost) => {
	try {
		const response = await Router.patch(`/${postId}`, updatedPost);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const likePost = async (id, post) => {
	try {
		const response = await Router.patch(`/${id}`, post);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const disLikePost = async (id) => {
	try {
		const response = await Router.patch(`/${id}/disLikePost`);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};
