import axios from "axios";

const Router = axios.create({ baseURL: "http://localhost:5000" });

export const fetchData = async () => {
	try {
		const response = await Router.get(`/posts/`);
		return response.data;
	} catch (error) {
		console.error(error.message);
	}
};

export const createPost = async (newPost) => {
	try {
		const response = await Router.post(`/posts/`, newPost);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const deletePost = async (id) => {
	try {
		const response = await Router.delete(`/posts/${id}`);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const updatePost = async (postId, updatedPost) => {
	try {
		const response = await Router.patch(`/posts/${postId}`, updatedPost);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const likePost = async (id, post) => {
	try {
		const response = await Router.patch(`/posts/${id}`, post);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const disLikePost = async (id) => {
	try {
		const response = await Router.patch(`/posts/${id}/disLikePost`);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const RegisterUser = async (newUser) => {
	try {
		const response = await Router.post(`/auth/register`, newUser);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const signInUser = async (newUser) => {
	try {
		const response = await Router.post(`/auth/login`, newUser);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};
