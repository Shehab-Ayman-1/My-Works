// This Package Is Using To Make The Authentication Information Is Encrypted
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import profileInfo from "../models/profile-model.js";

export const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const existingAuth = await profileInfo.findOne({ email });

		if (existingAuth) {
			const isPasswordCurrect = await bcrypt.compare(password, existingAuth.password);

			if (isPasswordCurrect) {
				const token = jwt.sign({ id: existingAuth._id, email: existingAuth.email }, process.env.JWT_SECRET || "secret", {
					expiresIn: "1h",
				});
				return res.status(200).json({ tokenObj: existingAuth, tokenID: token });
			} else {
				return res.status(404).json({ message: "Password is incorrect" });
			}
		} else {
			return res.status(404).json({ message: "User Don't Existing." });
		}
	} catch (error) {
		res.status(404).json({ message: "Something Went Wrong" });
	}
};

export const signUp = async (req, res) => {
	const { firstName, lastName, email, password, confimedPassword } = req.body;

	try {
		const existingAuth = await profileInfo.findOne({ email });
		if (!existingAuth) {
			if (password === confimedPassword) {
				const encreptedPassword = await bcrypt.hash(password, 12);
				const tokenObj = await profileInfo.create({ email, password: encreptedPassword, name: `${firstName} ${lastName}` });
				const tokenID = jwt.sign({ id: tokenObj._id, email: tokenObj.email }, process.env.JWT_SECRET || "secret", {
					expiresIn: "1h",
				});
				res.status(200).json({ tokenObj, tokenID });
			} else {
				res.status(400).json({ message: "Password and Confirmed Password is not match" });
			}
		} else {
			res.status(400).json({ message: "This User Is Already Exising" });
		}
	} catch (error) {}
};
