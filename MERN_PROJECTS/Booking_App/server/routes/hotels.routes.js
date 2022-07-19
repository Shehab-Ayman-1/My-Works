import express from "express";
import { GET_HOTELS, GET_HOTEL, GET_QUERY_HOTELS } from "../controllers/hotels.controller.js";
import { CREATE_HOTEL, UPDATE_HOTEL, DELETE_HOTEL } from "../controllers/hotels.controller.js";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const Router = express.Router();

// GET ALL
Router.get("/", GET_HOTELS);

// Get Query
Router.get("/query", GET_QUERY_HOTELS);

// GET ONE
Router.get("/find/:id", GET_HOTEL);

// CREATE HOTEL
Router.post("/post", verifyAdmin, CREATE_HOTEL);

// UPDATE HOTEL
Router.put("/put/:id/update", verifyAdmin, UPDATE_HOTEL);

// DELETE HOTEL
Router.delete("/delete/:id/delete", verifyAdmin, DELETE_HOTEL);

export default Router;
