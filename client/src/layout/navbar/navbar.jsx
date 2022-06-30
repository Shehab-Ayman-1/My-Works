// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/logo.png";

// Material Ui
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
	const [user, setUser] = useState(null);
	return (
		// Header Tag
		<AppBar className="header" position="static" color="inherit">
			<Typography className="left-section" variant="h2" align="center">
				<span className="header-title">Memories</span>
				<img className="header-logo" src={logo} alt="Memories" />
			</Typography>

			<Toolbar className="right-section">
				{user ? (
					<div className="user-defined">
						<Avatar className="user-img" src={user.result.imageURL} alt={user.result.name}>
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography className="user-name" variant="h3">
							{user.result.name}
						</Typography>
						<Button className="logout" variant="contained" color="secondary">
							Logout
						</Button>
					</div>
				) : (
					<Button component={Link} to="/auth" variant="contained" color="primary">
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
