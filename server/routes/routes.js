// Import Express Frameword
import express from "express";

// Import Post Router Controllers
import { getPosts, createPost, deletePost, updatePost, likePost, disLikePost } from "../controllers/posts-controller.js";
import { signIn, signUp } from "../controllers/profile-controller.js";
import auth_middleware from "../middleware/auth_middleware.js";

// Post Router
const postsRouter = express.Router();
postsRouter.get("/", getPosts);
postsRouter.post("/", createPost);
postsRouter.delete("/:id", deletePost);
postsRouter.patch("/:id", updatePost);
postsRouter.patch("/:id", likePost);
postsRouter.patch("/:id/disLikePost", disLikePost);

// profile Router
const profileRouter = express.Router();
profileRouter.post("/signin", signIn);
profileRouter.post("/signUp", signUp);

export { postsRouter, profileRouter };
