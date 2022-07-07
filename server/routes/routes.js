// Import Express Frameword
import express from "express";

// Import Post Router Controllers
import { getPosts, createPost, deletePost, updatePost, likePost, disLikePost } from "../controllers/posts-controller.js";
import { loginAuth, registerAuth } from "../controllers/auth-controller.js";

// Post Router
const postsRouter = express.Router();
postsRouter.get("/", getPosts);
postsRouter.post("/", createPost);
postsRouter.delete("/:id", deletePost);
postsRouter.patch("/:id", updatePost);
postsRouter.patch("/:id", likePost);
postsRouter.patch("/:id/disLikePost", disLikePost);

// Auth
const authRouter = express.Router();
authRouter.post("/register", registerAuth);
authRouter.post("/login", loginAuth);

export { postsRouter, authRouter };
