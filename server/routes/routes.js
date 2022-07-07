// Import Express Frameword
import express from "express";

// Import Routers Controllers
import { getPosts, createPost, deletePost, updatePost, likePost, disLikePost } from "../controllers/posts-controller.js";
import { loginAuth, registerAuth, getAllAuths, getAuth, deleteAuth, updateAuth } from "../controllers/auth-controller.js";
import { verifyToken, verifyUser, verifyAdmin } from "../middleware/verify.js";

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

/* Test The MiddleWare Verifies 
    // If The Token Is Defined In The Cookie => Access The Router Controller
    // authRouter.get("/checkauth", verifyToken, (req, res) => {
    // 	res.send("Hello User, You Are Logged In");
    // });

    // authRouter.get("/checkuser/:id", verifyUser, (req, res) => {
    // 	res.send("Hello User, Because The Login User's Token ID === The User ID, You Can Delete This Account");
    // });

    // authRouter.get("/checkadmin/:id", verifyAdmin, (req, res) => {
    // 	res.send("Hello Admin, Because The Login User's isAdmin === true, You Can Delete All Accounts.");
    // });
*/

authRouter.get("/", verifyAdmin, getAllAuths); // Just The Admin Can Get All The Users
authRouter.get("/:id", verifyUser, getAuth); // If The User Is Logged In, He Can Get His/Her Details
authRouter.delete("/:id", verifyUser, deleteAuth); // If The User Is Logged In, He Can Delete His/Her Account
authRouter.patch("/:id", verifyUser, updateAuth); // If The User Is Logged In, He Can Update His/Her Account

export { postsRouter, authRouter };
