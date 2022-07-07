import mongoose from "mongoose";

const authSchema = mongoose.Schema(
	{
		isAdmin: { type: Boolean, default: false },
		name: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, unique: true },
		confirmedPassword: { type: String, required: true, unique: true },
		imageUrl: { type: String },
	},
	{ timestamps: true }
);

const authModul = mongoose.model("auth", authSchema);

export default authModul;
