// Import The Default Modules
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// Import Routes
import postsRoutes from "./routes/routes.js";

const app = express();

dotenv.config();

// Becoase We Using Env Package, We Get The Port From .env File
const PORT = process.env.PORT || 5000;

// Limit the size of the request body To Max 30 Megabytes
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Create Posts Routes
app.use("/posts", postsRoutes);

// Now, We Create A New Cluster On MongoDB.com And Connect To It
const mongooseCon_URL = "mongodb+srv://javascript_mastery:javascript_mastery123@cluster0.k0inq.mongodb.net/?retryWrites=true&w=majority";
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
