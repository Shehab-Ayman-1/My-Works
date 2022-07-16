import express from "express";
import { GET_ROOMS, GET_ROOM, CREATE_ROOM, UPDATE_ROOM, DELETE_ROOM } from "../controllers/rooms.controller.js";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const Router = express.Router();

// GET ALL
Router.get("/", GET_ROOMS);

// GET ONE
Router.get("/:roomID", GET_ROOM);

// CREATE HOTEL
Router.post("/:hotelID", verifyAdmin, CREATE_ROOM);

// UPDATE HOTEL
Router.put("/:roomID", verifyAdmin, UPDATE_ROOM);

// DELETE HOTEL
Router.delete("/:roomID/:hotelID", verifyAdmin, DELETE_ROOM);

export default Router;
