// Import Express Frameword
import express from "express";

// Import Post Router Controllers
import { getPosts, createPost, deletePost, updatePost, likePost, disLikePost } from "../controllers/controllers.js";

// Create Post Router
const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);

router.delete("/:id", deletePost);

router.patch("/:id", updatePost);

router.patch("/:id", likePost);

router.patch("/:id/disLikePost", disLikePost);

export default router;
