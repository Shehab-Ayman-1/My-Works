import express from "express";
import { GET_HOTELS, GET_HOTEL, CREATE_HOTEL, UPDATE_HOTEL, DELETE_HOTEL } from "../controllers/hotels.controller.js";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const Router = express.Router();

// GET ALL
Router.get("/", GET_HOTELS);

// GET ONE
Router.get("/:id", GET_HOTEL);

// CREATE HOTEL
Router.post("/", verifyAdmin, CREATE_HOTEL);

// UPDATE HOTEL
Router.put("/:id", verifyAdmin, UPDATE_HOTEL);

// DELETE HOTEL
Router.delete("/:id", verifyAdmin, DELETE_HOTEL);

export default Router;
