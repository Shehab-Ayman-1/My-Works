import JWT from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.cookies.access_token;

		if (!token) return res.status(404).json({ VERIFY_TOKEN: "You Are Not Authonticated.!" });

		JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
			if (err) return res.status(404).json({ VERIFY_TOKEN: "JWT => Some Thing Is Wrong.!!!" });
			// decode => Is The Data Is Send From JWT.Sign() In The Login [ id, isAdmin ]
			req.user = decode;
			next();
		});
	} catch (error) {
		res.status(404).json({ VERIFY_TOKEN: error });
	}
};

export const verifyClient = async (req, res, next) => {
	const isClient = () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(404).json({ VERIFY_CLIENT: "You Are Not Authonticated.!" });
		}
	};
	verifyToken(req, res, isClient);
};

export const verifyAdmin = async (req, res, next) => {
	const isAdmin = () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(404).json({ VERIFY_ADMIN: "You Are Not Admin.!" });
		}
	};
	verifyToken(req, res, isAdmin);
};
