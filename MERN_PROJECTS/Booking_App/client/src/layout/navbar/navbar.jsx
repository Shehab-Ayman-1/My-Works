// React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

// Material Ui
import { AppBar, Avatar, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { AirplanemodeActive, DirectionsCarFilled, List, Cancel, Menu } from "@mui/icons-material/";
import { HelpOutline, Style, LocalHotel, DirectionsCar } from "@mui/icons-material/";
import { blue } from "@mui/material/colors";

// Images
import AmericanFlag from "../../images/american flag.webp";

const Navbar = () => {
	useEffect(() => {
		window.onscroll = () => {
			// Active Navbar
			const bottom_header = document.querySelector("header .header-bottom");
			console.log(bottom_header);
			if (window.scrollY > 0) {
				bottom_header.classList.add("hidden");
			} else {
				bottom_header.classList.remove("hidden");
			}
		};
	}, []);

	// Toggle Buttons
	const [current, setCurrent] = useState("Stays");
	const handleToggleButtons = (event, newCurrent) => setCurrent(newCurrent);

	// Navbar && Properties
	const handleNavbar = () => document.querySelector(".header .right-section").classList.toggle("show-display");
	const handleProperties = () => document.querySelector(".header .header-bottom").classList.toggle("show-display");
	const handleCloseProperties = () => document.querySelector(".header .header-bottom").classList.remove("show-display");

	return (
		<AppBar className="header" position="static" sx={{ bgcolor: blue[900], p: 2, boxShadow: "none" }}>
			<Stack className="header-top" direction="row" justifyContent="space-between" alignItems="center">
				<Typography component={Link} to="/" className="left-section" variant="h4" sx={{ color: "white", cursor: "pointer" }}>
					<Style className="icon" sx={{ mr: 2, fontSize: 30 }} />
					Hotel Booking
				</Typography>

				<div className="togglers">
					<List className="navbar-icon" onClick={handleProperties} />
					<Menu className="navbar-icon" onClick={handleNavbar} />
				</div>

				<Stack className="right-section" direction="row" justifyContent="flex-end" alignItems="center" gap={2}>
					<div className="more">
						<span style={{ fontSize: "14px" }}>Plan</span>
						<Avatar src={AmericanFlag} alt="image-flag" sx={{ width: 30, height: 30, cursor: "pointer" }} />
						<HelpOutline />
					</div>
					<div className="properties">
						<Button variant="outlined" color="primary" size="small" sx={{ color: "white", borderColor: "white" }}>
							List Your Property
						</Button>
					</div>
					<div className="auth">
						<Button
							variant="contained"
							size="small"
							sx={{ bgcolor: "white", color: "black", borderColor: "black", "&:hover": { color: "white" } }}>
							Sign Up
						</Button>
						<Button
							variant="contained"
							size="small"
							sx={{ bgcolor: "white", color: "black", borderColor: "black", "&:hover": { color: "white" } }}>
							Sign In
						</Button>
					</div>
				</Stack>
			</Stack>

			<div className="header-bottom">
				<Cancel className="cross-icon" onClick={handleCloseProperties} />
				<ToggleButtonGroup color="primary" value={current} onChange={handleToggleButtons} exclusive>
					<ToggleButton className="toggle-button" value="Stays" size="small">
						<LocalHotel className="icon" sx={{ mr: 2 }} />
						Stays
					</ToggleButton>
					<ToggleButton className="toggle-button" value="Flights" size="small">
						<AirplanemodeActive className="icon" sx={{ mr: 2 }} />
						Flights
					</ToggleButton>
					<ToggleButton className="toggle-button" value="CarRentals" size="small">
						<DirectionsCar className="icon" sx={{ mr: 2 }} />
						Car Rentals
					</ToggleButton>
					<ToggleButton className="toggle-button" value="Attractions" size="small">
						<LocalHotel className="icon" sx={{ mr: 2 }} />
						Attractions
					</ToggleButton>
					<ToggleButton className="toggle-button" value="AirportTaxis" size="small">
						<DirectionsCarFilled className="icon" sx={{ mr: 2 }} />
						Airport Taxis
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</AppBar>
	);
};

export default Navbar;
