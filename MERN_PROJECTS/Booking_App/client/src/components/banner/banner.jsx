import React from "react";
import "./banner.scss";
import { Button, Typography } from "@mui/material";

const Searchbar = () => {
	return (
		<>
			<Typography className="heading" variant="h3">
				A LifeTime Of Discounts? It's Genius.
			</Typography>
			<Typography className="content" variant="body1">
				Get Rewards For Your Travels - Saving Of 10% Or More With A Free Book.com
			</Typography>
			<Typography className="button">
				<Button variant="contained" color="primary" size="large">
					Signin / Register
				</Button>
			</Typography>
		</>
	);
};

export default Searchbar;
