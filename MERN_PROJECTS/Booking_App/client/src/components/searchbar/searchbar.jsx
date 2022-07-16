// React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchbar.scss";

// Material Ui
import { CalendarMonth, LocalHotel } from "@mui/icons-material";
import { Button, Grid, Menu, Stack, Typography } from "@mui/material";

// Date Range
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Searchbar = () => {
	const navigate = useNavigate();
	// onChange Input STATE
	const [destination, setDestination] = useState("");

	// React Date Range
	const [date, setDate] = useState([{ startDate: new Date(), endDate: new Date(), key: "selection" }]);

	const [calender, setCalender] = useState(null);
	const openCalender = Boolean(calender);
	const handleOpenCalender = (event) => setCalender(event.currentTarget);
	const handleCloseCalender = () => setCalender(null);

	// Right Section Search Bar
	const [options, setOptions] = useState({ adult: 0, children: 0, room: 0 });
	const [OptionsMenu, setOptionMenu] = useState(null);
	const openOptions = Boolean(OptionsMenu);
	const handleOpenOptions = (event) => setOptionMenu(event.currentTarget);
	const handleCloseOptions = () => setOptionMenu(null);
	const handleCreament = (name, operation) => {
		if (operation === "in") {
			setOptions({ ...options, [name]: (options[name] += 1) });
		} else {
			setOptions({ ...options, [name]: options[name] > 1 ? (options[name] -= 1) : options[name] });
		}
	};

	// Navigate To Search Page
	const handleChange = (event) => setDestination(event.target.value);
	const handleSearch = () => navigate("/hotels", { state: { destination, date: date[0], options } });

	return (
		<>
			<Grid container className="search-bar" spacing={2}>
				<Grid className="left-section section" item xs={12} sm={6} lg={3} sx={{ pb: 2 }}>
					<LocalHotel sx={{ mr: 2 }} />
					<input type="text" placeholder="Where Are You Going ?" value={destination} onChange={handleChange} />
				</Grid>

				<Grid className="meddle-section section" item xs={12} sm={6} lg={3} sx={{ pb: 2 }} onClick={handleOpenCalender}>
					<CalendarMonth sx={{ mr: 2 }} />
					<Typography variant="body2" className="date-to-date">
						{format(date[0].startDate, "MM/dd/yyyy")} | {format(date[0].endDate, "MM/dd/yyyy")}
					</Typography>
				</Grid>

				<Grid className="right-section section" item xs={12} sm={6} lg={4} sx={{ pb: 2 }} onClick={handleOpenOptions}>
					<LocalHotel sx={{ mr: 2 }} />
					<span className="right-option">
						<span>{options.adult} adult </span>
						<span>{options.children} children </span>
						<span>{options.room} room</span>
					</span>
				</Grid>

				<Grid className="submit-btn" item xs={12} sm={6} lg={2} sx={{ pb: 2 }} onClick={handleSearch}>
					<Button className="btn" variant="contained" color="primary" size="large">
						Search
					</Button>
				</Grid>
			</Grid>

			<Menu anchorEl={OptionsMenu} open={openOptions} onClose={handleCloseOptions}>
				<Stack direction="row" justifyContent="space-between" alignItems="center" width="250px" padding="10px 12px">
					<span>Adult</span>
					<div>
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ marginInline: 2, minWidth: "14px" }}
							onClick={() => handleCreament("adult", "de")}>
							-
						</Button>
						{options.adult}
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ ml: 2, minWidth: "14px" }}
							onClick={() => handleCreament("adult", "in")}>
							+
						</Button>
					</div>
				</Stack>

				<Stack direction="row" justifyContent="space-between" alignItems="center" width="250px" padding="10px 12px">
					<span>Children</span>
					<div>
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ marginInline: 2, minWidth: "14px" }}
							onClick={() => handleCreament("children", "de")}>
							-
						</Button>
						{options.children}
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ ml: 2, minWidth: "14px" }}
							onClick={() => handleCreament("children", "in")}>
							+
						</Button>
					</div>
				</Stack>

				<Stack direction="row" justifyContent="space-between" alignItems="center" width="250px" padding="10px 12px">
					<span>Room</span>
					<div>
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ marginInline: 2, minWidth: "14px" }}
							onClick={() => handleCreament("room", "de")}>
							-
						</Button>
						{options.room}
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ ml: 2, minWidth: "14px" }}
							onClick={() => handleCreament("room", "in")}>
							+
						</Button>
					</div>
				</Stack>
			</Menu>

			<Menu anchorEl={calender} open={openCalender} onClose={handleCloseCalender}>
				<DateRange
					onChange={(e) => setDate([e.selection])}
					className="calendar"
					ranges={date}
					editableDateInputs={true}
					moveRangeOnFirstSelection={false}
				/>
			</Menu>
		</>
	);
};

export default Searchbar;
