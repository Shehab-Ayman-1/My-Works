/* 
    -- The Middle Ware Is Using To Verify The Token --
    If The Token Is Exist In The Cookie => Access The Router Controller
    And To Handle The Cookies, We Need To Use The JWT & next()
*/

import JWT from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	try {
		const token = req.cookies.access_token;
		if (token) {
			JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
				if (!err) {
					req.user = decoded;
					next();
				} else {
					res.status(401).json({ message: "Invalid Token!" });
				}
			});
		} else {
			res.status(404).json({ msg: "verifyToken => You Are Not Authenticated." });
		}
	} catch (err) {
		console.log("Verify Token => ", err);
		res.status(401).json({ msg: err });
	}
};

export const verifyUser = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json({ msg: "verifyAdmin => You are not authorized to perform this action." });
		}
	});
};

export const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json({ msg: "verifyAdmin => You are not authorized to perform this action." });
		}
	});
};
