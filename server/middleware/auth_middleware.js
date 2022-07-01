import jwt from "jsonwebtoken";

const auth_middleware = async (req, res, next) => {
	try {
		const token = req.header.authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;
		let decodedData;

		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, process.env.JWT_SECRET || "secret");
			req.userId = decodedData?.id;
		} else {
			decodedData = jwt.decode(token);
			req.userId = decodedData?.sub;
		}
		next();
	} catch (err) {
		console.error(err);
	}
};

export default auth_middleware;