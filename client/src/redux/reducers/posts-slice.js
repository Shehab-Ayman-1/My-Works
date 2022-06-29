import logo from "../../images/logo.png";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData, createPost, deletePost, updatePost, likePost, disLikePost } from "../../util/server.js";

export const getPosts = createAsyncThunk("posts", fetchData);

const thunkSlice = createSlice({
	name: "posts",
	initialState: { loading: true, data: [] },

	reducers: {
		CREATE_POST: (state, action) => {
			createPost(action.payload);
		},

		DELETE_POST: (state, action) => {
			state.data = state.data.filter((post) => post._id !== action.payload);
			deletePost(action.payload);
		},

		UPDATE_POST: (state, action) => {
			const post = state.data.find((post) => post._id == action.payload.currentID);
			const index = state.data.indexOf(post);
			const newPost = action.payload.postsData;

			for (let key in newPost) {
				if (key === "selectedFile") {
					if (newPost[key] != logo) post[key] = newPost[key];
				} else {
					if (newPost[key] != "") post[key] = newPost[key];
				}
			}

			state.data[index] = post;
			updatePost(action.payload.currentID, post);
		},

		LIKE_POST: (state, action) => {
			const post = state.data.find((post) => post._id == action.payload._id);
			const index = state.data.indexOf(post);
			post.likes++;
			state.data[index] = post;
			likePost(action.payload._id, post);
		},

		DIS_LIKE_POST: (state, action) => {
			const post = state.data.find((post) => post._id == action.payload._id);
			const index = state.data.indexOf(post);
			post.disLikes++;
			state.data[index] = post;
			disLikePost(action.payload._id);
		},
	},

	extraReducers: {
		[getPosts.pending]: (state, action) => {
			state.loading = true;
		},

		[getPosts.fulfilled]: (state, action) => {
			state.loading = false;
			state.data = action.payload;
		},

		[getPosts.rejected]: (state, action) => {
			state.loading = true;
		},
	},
});

export const { CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST, DIS_LIKE_POST } = thunkSlice.actions;

export default thunkSlice.reducer;
