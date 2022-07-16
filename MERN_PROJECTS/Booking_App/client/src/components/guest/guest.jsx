import React from "react";
import "./guest.scss";
import { Avatar, Box, Rating } from "@mui/material";

const Guest = ({ img, title, city, price, rate }) => {
	return (
		<Box className="guest-box">
			<Avatar className="avatar" src={img} alt="guest-img" />
			<div className="box-content">
				<p className="title">{title}</p>
				<p className="city">{city}</p>
				<p className="price">Starting From ${price}</p>
				<div className="rate">
					<Rating name="read-only" value={rate} />
					<span>
						{rate === 0 ? "Bad" : rate < 2.5 ? "Nice" : rate > 2.5 && rate < 5 ? "Good" : rate === 5 ? "Excellent" : ""}{" "}
					</span>
				</div>
			</div>
		</Box>
	);
};

export default Guest;
