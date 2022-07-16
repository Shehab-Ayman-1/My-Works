import express from "express";
import { REGISTER_AUTH, SIGNIN_AUTH, GET_AUTHS, GET_AUTH, UPDATE_AUTH, DELETE_AUTH } from "../controllers/auths.controller.js";
import { verifyAdmin, verifyClient } from "../middleware/auth.middleware.js";

const Router = express.Router();

// REGISTER HOTEL
Router.post("/register", REGISTER_AUTH);

// SIGNIN HOTEL
Router.post("/signin", SIGNIN_AUTH);

// GET ALL
Router.get("/", verifyAdmin, GET_AUTHS);

// GET ONE
Router.get("/:id", verifyClient, GET_AUTH);

// UPDATE HOTEL
Router.put("/:id", verifyClient, UPDATE_AUTH);

// DELETE HOTEL
Router.delete("/:id", verifyClient, DELETE_AUTH);

export default Router;
