// React
import React from "react";
import "./navbar.scss";
import logo from "../images/logo.png";

// Material Ui
import { AppBar, Typography } from "@mui/material";

const Navbar = () => {
	return (
		// Header Tag
		<AppBar className="header" position="static" color="inherit">
			<Typography className="header-title" variant="h2" align="center">
				Memories
				<img className="header-logo" src={logo} alt="Memories" />
			</Typography>
		</AppBar>
	);
};

export default Navbar;
