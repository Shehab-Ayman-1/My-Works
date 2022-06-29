import { configureStore } from "@reduxjs/toolkit";
import posts from "../reducers/posts-slice.js";

const Store = configureStore({
	reducer: { posts },
});

export default Store;
