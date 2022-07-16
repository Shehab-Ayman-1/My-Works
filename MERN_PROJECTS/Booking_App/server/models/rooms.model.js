import mongoose from "mongoose";

const roomsSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		price: Number,
		maxPeople: Number,
		roomNumbers: [{ number: { type: Number }, unavailableDates: { type: [Date] } }],
	},
	{ timestamps: true }
);

export default mongoose.model("rooms-database", roomsSchema);
