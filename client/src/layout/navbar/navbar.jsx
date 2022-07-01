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

	// dropdown
	const [dropdown, setDropdown] = useState(null);
	const open = Boolean(dropdown);
	const openDropdown = (event) => setDropdown(event.currentTarget);
	const closeDropdown = () => setDropdown(null);

	// logout
	const handleLogout = () => {
		dispatch(LOGOUT_AUTH());
	};

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
						<div className="user-profile" onClick={openDropdown}>
							<Avatar className="user-img" alt="img" sx={{ bgcolor: deepOrange[500] }}>
								{profile.tokenObj.name.charAt(0)}
							</Avatar>

							<Typography className="user-info" variant="h3">
								<span className="info-username">{profile.tokenObj.name}</span>
								<span className="info-email">{profile.tokenObj.email}</span>
							</Typography>
						</div>
						<Menu anchorEl={dropdown} open={open}>
							<MenuItem onClick={closeDropdown}>
								<Button variant="contained" color="secondary" onClose={closeDropdown} onClick={handleLogout}>
									Logout
								</Button>
							</MenuItem>
						</Menu>
					</>
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
