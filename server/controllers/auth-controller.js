import bcrypt from "bcryptjs";
import authModul from "../models/auth-model.js";

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
				const { password, isAdmen, ...otherDetails } = user._doc;

				res.status(200).send({ ...otherDetails });
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
