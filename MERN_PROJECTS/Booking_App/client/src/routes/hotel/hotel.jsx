// React
import React from "react";
import { useLocation } from "react-router";
import "./hotel.scss";

// Material Ui
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

// Components
import Navbar from "../../layout/navbar/navbar";
import ListSearch from "../../components/list-search/list-search";
import ListItem from "../../components/list-item/list-item.jsx";

// Images
import feature1 from "../../images/feature 1.webp";
import feature2 from "../../images/feature 2.webp";
import feature3 from "../../images/feature 3.webp";
import feature4 from "../../images/feature 4.webp";
import feature5 from "../../images/feature 5.webp";
import feature6 from "../../images/feature 6.webp";
import feature7 from "../../images/feature 7.webp";
import furnitur1 from "../../images/furnitur 1.webp";
import furnitur2 from "../../images/furnitur 2.webp";
import furnitur3 from "../../images/furnitur 3.webp";
import furnitur4 from "../../images/furnitur 4.webp";
import hotel1 from "../../images/hotel 1.webp";
import hotel2 from "../../images/hotel 2.webp";
import hotel3 from "../../images/hotel 3.webp";
import hotel4 from "../../images/hotel 4.webp";
import hotel5 from "../../images/hotel 5.webp";
import hotel6 from "../../images/hotel 6.webp";

const Hotel = () => {
	// Get The States From The Home Page
	const { destination, date, options } = useLocation().state;

	return (
		<div className="hotel-page">
			<div className="Navbar">
				<Navbar />
			</div>

			<Container className="hotel-container" maxWidth="xl">
				<Grid container spacing={2}>
					<Grid className="left-section" item xs={12} md={4} lg={3}>
						<ListSearch destination={destination} date={date} options={options} />
					</Grid>

					<Grid className="right-section" item xs={12} md={8} lg={9}>
						<ListItem id="1" img={feature1} title="Tower Street Apartment" rate={1} />
						<ListItem id="2" img={feature2} title="Tower Street Apartment" rate={2} />
						<ListItem id="3" img={feature3} title="Tower Street Apartment" rate={3} />
						<ListItem id="4" img={feature4} title="Tower Street Apartment" rate={4} />
						<ListItem id="5" img={feature5} title="Tower Street Apartment" rate={5} />
						<ListItem id="6" img={feature6} title="Tower Street Apartment" rate={1} />
						<ListItem id="7" img={feature7} title="Tower Street Apartment" rate={2} />
						<ListItem id="8" img={furnitur1} title="Tower Street Apartment" rate={3} />
						<ListItem id="9" img={furnitur2} title="Tower Street Apartment" rate={4} />
						<ListItem id="10" img={furnitur3} title="Tower Street Apartment" rate={5} />
						<ListItem id="11" img={furnitur4} title="Tower Street Apartment" rate={1} />
						<ListItem id="12" img={hotel1} title="Tower Street Apartment" rate={2} />
						<ListItem id="13" img={hotel2} title="Tower Street Apartment" rate={3} />
						<ListItem id="14" img={hotel3} title="Tower Street Apartment" rate={4} />
						<ListItem id="15" img={hotel4} title="Tower Street Apartment" rate={5} />
						<ListItem id="16" img={hotel5} title="Tower Street Apartment" rate={1} />
						<ListItem id="17" img={hotel6} title="Tower Street Apartment" rate={2} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Hotel;
