import axios from "axios";

const URL = "http://localhost:5000/posts";

export const fetchData = async () => {
	try {
		const response = await axios.get(URL);
		return response.data;
	} catch (error) {
		console.error(error.message);
	}
};

export const createPost = async (newPost) => {
	try {
		const response = await axios.post(URL, newPost);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const deletePost = async (id) => {
	try {
		const response = await axios.delete(`${URL}/${id}`);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const updatePost = async (postId, updatedPost) => {
	try {
		const response = await axios.patch(`${URL}/${postId}`, updatedPost);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const likePost = async (id, post) => {
	try {
		const response = axios.patch(`${URL}/${id}`, post);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const disLikePost = async (id) => {
	try {
		const response = await axios.patch(`${URL}/${id}/disLikePost`);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};
