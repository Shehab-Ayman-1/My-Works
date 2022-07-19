import express from "express";
import { GET_ROOMS, GET_ROOM, CREATE_ROOM, UPDATE_ROOM, DELETE_ROOM, UPDATE_AVAILABLE_ROOMS } from "../controllers/rooms.controller.js";
import { verifyAdmin, verifyClient } from "../middleware/auth.middleware.js";

const Router = express.Router();

// GET ALL
Router.get("/", GET_ROOMS);

// GET ONE
Router.get("/room/:roomID", GET_ROOM);

// CREATE HOTEL
Router.post("/create/:hotelID", verifyAdmin, CREATE_ROOM);

// UPDATE HOTEL
Router.put("/update/:roomID", verifyAdmin, UPDATE_ROOM);

// UPDATE ROOM AVAILABILITY
Router.put("/update-available-rooms/:roomID", UPDATE_AVAILABLE_ROOMS);

// DELETE HOTEL
Router.delete("/delete/:roomID/:hotelID", verifyAdmin, DELETE_ROOM);

export default Router;
