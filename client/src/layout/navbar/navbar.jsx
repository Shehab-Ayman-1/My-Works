// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/logo.png";

// Redux
import { useDispatch } from "react-redux";
import { LOGOUT_AUTH } from "../../redux/reducers/auth-slice";

// Material Ui
import { AppBar, Avatar, Button, Divider, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";

const Navbar = () => {
	const dispatch = useDispatch();
	const [profile, setProfile] = useState(
		JSON.parse(window.localStorage.getItem("profile")) ? JSON.parse(window.localStorage.getItem("profile")) : []
	);

	// Menu Settings
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleOpen = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

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
						<Avatar sx={{ bgcolor: deepOrange[500], cursor: "pointer" }} onClick={handleOpen}>
							{profile.tokenObj.name.charAt(0)}
						</Avatar>
						<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
							<MenuItem>
								<Avatar src={profile.tokenObj.imageUrl} alt="img" sx={{ width: 32, height: 32, mr: 1 }} />
								{profile.tokenObj.name}
							</MenuItem>
							<MenuItem>
								<Avatar src={profile.tokenObj.imageUrl} alt="img" sx={{ width: 32, height: 32, mr: 1 }} />
								{profile.tokenObj.email}
							</MenuItem>
							<Divider />
							<MenuItem component={Link} to="/auth">
								<ListItemIcon>
									<PersonAdd />
								</ListItemIcon>
								Add another account
							</MenuItem>
							<MenuItem>
								<ListItemIcon>
									<Settings />
								</ListItemIcon>
								Settings
							</MenuItem>
							<MenuItem onClick={handleLogout}>
								<ListItemIcon>
									<Logout />
								</ListItemIcon>
								Logout
							</MenuItem>
						</Menu>
					</>
				) : (
					<Button variant="outlined" color="primary" component={Link} to="/auth">
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
