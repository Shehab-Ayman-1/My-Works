import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import authModul from "../models/auth-model.js";

// LOGIN AUTH
export const loginAuth = async (req, res) => {
	try {
		const body = req.body;
		const user = await authModul.findOne({ email: body.email }); // Get The User By Email

		// If The User Is Existing In The Database
		if (user) {
			if (!body.password) return res.status(200).send(user);

			// Compare If The Signin Password Is Match With The Database Password
			const isPasswordCurrect = await bcrypt.compare(body.password, user.password);

			// If The Passwords Are Matches
			if (isPasswordCurrect) {
				const token = JWT.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
				const { password, isAdmen, ...otherDetails } = user._doc;

				res.cookie("access_token", token, { httpOnly: true })
					.status(200)
					.send({ ...otherDetails });
				console.log(req.cookie);
			} else {
				res.status(401).json({ message: "Invalid Password" });
			}
		} else {
			res.status(404).json({ message: "User not found" });
		}
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err });
	}
};

// REGISTER AUTH
export const registerAuth = async (req, res) => {
	const body = req.body;
	try {
		let newUser;
		if (body.password) {
			const salt = bcrypt.genSaltSync(10);
			const password = bcrypt.hashSync(body.password, salt);
			newUser = new authModul({
				name: `${body.firstName} ${body.lastName}`,
				email: body.email,
				imageUrl: body.imageUrl,
				password,
				confirmedPassword: password,
			});
		} else {
			const password = "with_google_account";
			newUser = new authModul({
				name: `${body.firstName} ${body.lastName}`,
				email: body.email,
				imageUrl: body.imageUrl,
				password,
				confirmedPassword: password,
			});
		}

		await newUser.save();
		console.log(newUser);
		res.status(201).send(newUser);
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err });
	}
};

// GET ALL AUTHS
export const getAllAuths = async (req, res) => {
	try {
		const getAuths = await authModul.find();
		res.status(200).json(getAuths);
	} catch (err) {
		console.log("Get All Auths =>" + err);
		res.status(404).json({ msg: err });
	}
};

// GET AUTH
export const getAuth = async (req, res) => {
	try {
		const auth = await authModul.findById(req.params.id);
		console.log(auth);
		res.status(200).json(auth);
	} catch (err) {
		console.log("Get Auth => " + err);
		res.status(404).json({ msg: err });
	}
};

// DELETE AUTH
export const deleteAuth = async (req, res) => {
	try {
		if (mongoose.Types.ObjectId.isValid(req.params.id)) {
			await authModul.findByIdAndDelete(req.params.id);
			res.status(200).json({ msg: "Auth Was Deleted Successfully." });
		}
	} catch (err) {
		console.log("Delete Auth => " + err);
		res.status(404).json({ msg: err });
	}
};

// UPDATE AUTH
export const updateAuth = async (req, res) => {
	try {
		const { id } = req.params;

		if (mongoose.Types.ObjectId.isValid(id)) {
			const body = req.body;
			let updatedAuth;

			if (body.firstName && body.lastName) {
				updatedAuth = await authModul.findByIdAndUpdate(id, { ...body, name: `${body.firstName} ${body.lastName}` }, { new: true });
			} else {
				updatedAuth = await authModul.findByIdAndUpdate(id, { ...body }, { new: true });
			}

			res.status(200).json(updatedAuth);
		}
	} catch (err) {
		console.log("Update Auth => " + err);
		res.status(404).json({ msg: err });
	}
};
