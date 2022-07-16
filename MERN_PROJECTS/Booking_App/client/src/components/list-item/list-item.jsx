// React
import React from "react";
import "./list-item.scss";
import { useNavigate } from "react-router-dom";

// Material Ui
import { Avatar, Button, Grid, Rating, Typography } from "@mui/material";

const ListItem = ({ id, img, title, rate }) => {
	const navigate = useNavigate();

	const handleNavigate = () => navigate(`/hotels/${id}`);

	return (
		<Grid className="list-item" container spacing={2}>
			<Grid className="avatar-grid" item xs={12} sm={4} lg={3}>
				<Avatar className="avatar" src={img} alt="list-item-img" />
			</Grid>

			<Grid className="body-grid" item xs={12} sm={8} lg={9}>
				<div className="body-header">
					<Typography className="header-title" variant="h5">
						<span className="name">{title}</span>
						<Rating className="rate" value={rate} name="read-only" />
					</Typography>
					<Typography className="header-subtitle" variant="subtitle1">
						500m From Center
					</Typography>
				</div>

				<div className="body-section">
					<Button className="success-btn" variant="contained" color="success" sx={{ p: "5px 10px" }}>
						Free Airport Taxi
					</Button>
					<Typography className="apartment" variant="h6">
						Studio Apartment With Air Conditioning
					</Typography>
					<Typography className="price" variant="overline">
						<span>
							Enter Studio + 1 Bathroom + 21m<sup>2</sup> 1 full bed
						</span>
						<span>$112</span>
					</Typography>
				</div>

				<div className="body-footer">
					<Typography className="cancellation" variant="overline">
						<span>Free Cancellation</span>
						<span>Includes Taxes And Fees</span>
					</Typography>
					<Typography className="available" variant="overline">
						<span>You Can Cancel Later, So Lock To This Great Price Today</span>
						<Button className="primary-btn" variant="contained" color="primary" size="large" onClick={handleNavigate}>
							See Available
						</Button>
					</Typography>
				</div>
			</Grid>
		</Grid>
	);
};

export default ListItem;
