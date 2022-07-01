// Import The Default Modules
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// Import Routes
import { postsRouter, profileRouter } from "./routes/routes.js";

const app = express();

dotenv.config();

// Limit the size of the request body To Max 30 Megabytes
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Create Posts Routes
app.use("/posts", postsRouter);
// app.use("/profile", profileRouter);

// Now, We Create A New Cluster [ DB ] On MongoDB.com And Connect To It
const mongooseCon_URL = "mongodb+srv://MERN_PROJECT:MERN_PROJECT_123@cluster0.k0inq.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.mongooseCon_URL || mongooseCon_URL, { useNewURLParser: true, useUnifiedTopology: true })
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server Running On PORT: http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error(err);
	});
