// React
import React, { useState } from "react";
import "./list-search.scss";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

// React Data Range
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const ListSearch = ({ destination, date, options }) => {
	// States
	const [state, setState] = useState({ destination, date, options, min: 0, max: 0 });
	const [option, setOption] = useState(options);
	const handleChange = (event) => {
		const key = Object.keys(state.options).filter((key) => key === event.target.name)[0];
		const value = event.target.value;

		if (key === "adult" || key === "children" || key === "room") {
			setOption({ ...option, [key]: value });
		} else {
			setState({ ...state, [event.target.name]: value });
		}
	};

	// Date Range
	const [calender, setCalender] = useState(null);
	const openCalender = Boolean(calender);
	const handleOpenCalender = (event) => setCalender(event.currentTarget);
	const handleCloseCalender = () => setCalender(null);

	return (
		<div className="list-search">
			<Typography variant="h6" className="main-title">
				Search.
			</Typography>

			<Typography className="subtitle" variant="overline">
				Destination
			</Typography>

			<input variant="filled" name="destination" value={state.destination} label="Destination" onChange={handleChange} />

			<div className="check-date">
				<Typography className="subtitle" variant="overline">
					Check In Date
				</Typography>
				<Typography className="date" variant="h6" onClick={handleOpenCalender}>
					{format(state.date.startDate, "MM/dd/yyyy")} : {format(state.date.endDate, "MM/dd/yyyy")}
				</Typography>
			</div>

			<div className="row">
				<span className="field-title">Min Price : </span>
				<input type="number" name="min" value={state.min} min="0" onChange={handleChange} />
			</div>
			<div className="row">
				<span className="field-title">Max Price : </span>
				<input type="number" name="max" value={state.max} min="0" onChange={handleChange} />
			</div>
			<div className="row">
				<span className="field-title">adult : </span>
				<input type="number" name="adult" value={option.adult} min="0" onChange={handleChange} />
			</div>
			<div className="row">
				<span className="field-title">children : </span>
				<input type="number" name="children" value={option.children} min="0" onChange={handleChange} />
			</div>
			<div className="row">
				<span className="field-title">room : </span>
				<input type="number" name="room" value={option.room} min="0" onChange={handleChange} />
			</div>
			<Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
				Search
			</Button>
			<Menu anchorEl={calender} open={openCalender} onClose={handleCloseCalender}>
				<MenuItem>
					<DateRange
						className="calendar"
						ranges={[state.date]}
						editableDateInputs={true}
						moveRangeOnFirstSelection={false}
						onChange={(event) => setState({ ...state, date: event.selection })}
					/>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default ListSearch;
