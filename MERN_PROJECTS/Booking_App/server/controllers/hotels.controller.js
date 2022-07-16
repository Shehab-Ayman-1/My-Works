import mongoose from "mongoose";
import hotelModel from "../models/hotels.model.js";

export const GET_HOTELS = async (req, res) => {
	try {
		const allHotels = await hotelModel.find();
		res.status(200).json(allHotels);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_HOTEL: error });
	}
};

export const GET_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ GET_HOTEL: "This ID Is Not Defined.!" });

		const hotel = await hotelModel.findById(id);
		res.status(201).json(hotel);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_HOTELS: error });
	}
};

export const CREATE_HOTEL = async (req, res) => {
	try {
		const newHotel = new hotelModel(req.body);
		const saveHotel = await newHotel.save();
		res.status(201).json(saveHotel);
	} catch (error) {
		console.log(error);
		res.status(404).json({ CREATE_HOTEL: error });
	}
};

export const UPDATE_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(401).json({ UPDATE_HOTEL: "This ID Is Not Defined.!" });

		const updatedHotel = await hotelModel.findByIdAndUpdate(id, body, { new: true });
		res.status(201).json(updatedHotel);
	} catch (error) {
		console.log(error);
		res.status(404).json({ UPDATE_HOTEL: error });
	}
};

export const DELETE_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ DELETE_HOTEL: "This ID Is Not Defined.!" });

		await hotelModel.findByIdAndRemove(id);
		res.status(201).json({ DELETE_HOTEL: "Success Deleting User." });
	} catch (error) {
		console.log(error);
		res.status(404).json({ DELETE_HOTEL: error });
	}
};
