// React
import React, { useContext, useState } from "react";
import "./list-reserve.scss";
import { Link } from "react-router-dom";

// Material Ui
import { Box, Button, Checkbox, Modal, Typography } from "@mui/material";

// Layout
import Loading from "../../layout/loading/loading";

// Components
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../context/hotel/context";
import { pink } from "@mui/material/colors";

const ListReserve = ({ id, isSignin, openReserve, handleCloseReserve }) => {
	const context = useContext(Context);
	const { data: reserveData, isLoading: reserveLoading } = useFetch(`rooms/room/${id}`);
	const [selectedRooms, setSelectedRooms] = useState([]);
	const handleSelectedRoom = (event) => {
		const value = event.target.value;
		const checked = event.target.checked;
		const filterValue = selectedRooms.filter((id) => id !== value);
		setSelectedRooms(checked ? [...selectedRooms, value] : filterValue);
	};

	const getRangeDate = () => {
		const start = new Date(context.state.date[0].startDate); // With Milliseconds
		const end = new Date(context.state.date[0].endDate); // With Milliseconds
		const list = [];

		while (start.getDate() <= end.getDate()) {
			list.push(new Date(start).getTime());
			start.setDate(start.getDate() + 1); // Update The Start Date To The Next Date => 4,3,2,1,0 break
		}
		return list;
	};

	const listOfDates = getRangeDate();

	const isAvailable = (roomNumber) => {
		const isFound = roomNumber.unavailableDates.map((date1) => {
			listOfDates.map((date2) => {
				if (date1 === date2) {
					return false;
				} else {
					console.log(new Date(1658185043379));
					return true;
				}
			});
		});
		// const isFound = roomNumber.unavailableDates.some((date) => listOfDates.includes(new Date(date).getTime()));
		return isFound;
	};

	const handleSubmitReserve = async () => {
		try {
			await Promise.all(
				selectedRooms.map((roomID) => {
					const response = axios.put(`http://localhost:5000/rooms/update-available-rooms/${roomID}`, { dates: listOfDates });
					return response.data;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Modal className="modal-container" open={openReserve} onClose={handleCloseReserve}>
			{isSignin ? (
				reserveLoading ? (
					<Box className="reserves-box">
						<Loading />
					</Box>
				) : (
					<div className="reserves-box">
						<Typography className="reserve-title" variant="h6">
							Select Your Room
						</Typography>
						{reserveData.map((room, i) => (
							<div className="reserve-room" key={i}>
								<div className="left-part">
									<Typography className="room-name" variant="h6">
										{room.title}
									</Typography>
									<Typography className="room-desc" variant="subtitle1">
										{room.description}
									</Typography>
									<Typography className="room-people" variant="subtitle2">
										Max People: {room.maxPeople}
									</Typography>
									<Typography className="room-price" variant="subtitle2">
										Price: ${room.price}
									</Typography>
								</div>
								<Box className="right-part room-roomnumbers" variant="body2">
									{room.roomNumbers.map((roomNum, i) => (
										<div key={i} style={{ cursor: "pointer" }}>
											<label htmlFor={roomNum._id} style={{ color: isAvailable(roomNum) ? "red" : "green" }}>
												{roomNum.number}
											</label>
											<Checkbox
												id={roomNum._id}
												value={roomNum._id}
												color="success"
												disabled={isAvailable(roomNum)}
												onChange={handleSelectedRoom}
												sx={{ color: pink[800], "&.Mui-checked": { color: "red" } }}
											/>
										</div>
									))}
								</Box>
							</div>
						))}
						<Button variant="contained" color="primary" size="large" fullWidth onClick={handleSubmitReserve}>
							Reserve Now !
						</Button>
					</div>
				)
			) : (
				<Box className="not-signin-box">
					<Typography className="box-title" variant="h6">
						Opps, You Are Not Authonticated
					</Typography>
					<Button component={Link} to="/auth/register" variant="contained" color="primary" size="large" sx={{ mr: 1 }}>
						Signin
					</Button>
					<Button component={Link} to="/auth/register" variant="contained" color="primary" size="large">
						Signup
					</Button>
				</Box>
			)}
		</Modal>
	);
};

export default ListReserve;
