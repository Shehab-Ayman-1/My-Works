// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/logo.png";

// Redux
import { useDispatch } from "react-redux";
import { LOGOUT_AUTH } from "../../redux/reducers/auth-slice";

// Material Ui
import { AppBar, Avatar, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const Navbar = () => {
	const dispatch = useDispatch();
	const [profile, setProfile] = useState(
		JSON.parse(window.localStorage.getItem("profile")) ? JSON.parse(window.localStorage.getItem("profile")) : []
	);

	// logout
	const handleLogout = () => dispatch(LOGOUT_AUTH());

	return (
		// Header Tag
		<AppBar className="header" position="static" color="inherit">
			<Typography className="left-section" variant="h2" align="center">
				<span className="header-title">Memories</span>
				<img className="header-logo" src={logo} alt="Memories" />
			</Typography>

			<Toolbar className="right-section">
				{profile.tokenObj ? (
					<>
						<div className="user-profile">
							<Typography className="user-info" variant="h3">
								<span className="info-username" align="right">
									{profile.tokenObj.name}
								</span>
								<span className="info-email" align="right">
									{profile.tokenObj.email}
								</span>
							</Typography>

							<Avatar className="user-img" alt="img" sx={{ bgcolor: deepOrange[500], mr: 3 }}>
								{profile.tokenObj.name.charAt(0)}
							</Avatar>
						</div>
						<Button variant="contained" color="secondary" onClick={handleLogout}>
							Logout
						</Button>
					</>
				) : (
					<Button variant="contained" color="primary" component={Link} to="/auth">
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
