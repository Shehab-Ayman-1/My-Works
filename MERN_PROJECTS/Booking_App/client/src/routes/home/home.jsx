// React
import React from "react";
import "./home.scss";

// Material Ui
import { Container, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

// Components
import Navbar from "../../layout/navbar/navbar";
import Searchbar from "../../components/searchbar/searchbar";
import Banner from "../../components/banner/banner";
import Feature from "../../components/feature/feature";
import Property from "../../components/property/property";
import Guest from "../../components/guest/guest";
import Footer from "../../layout/footer/footer.jsx";

// images
import feature1 from "../../images/feature 1.webp";
import feature2 from "../../images/feature 2.webp";
import feature3 from "../../images/feature 3.webp";
import property1 from "../../images/hotel 1.webp";
import property2 from "../../images/hotel 2.webp";
import property3 from "../../images/hotel 3.webp";
import property4 from "../../images/hotel 4.webp";
import property5 from "../../images/hotel 5.webp";
import property6 from "../../images/hotel 6.webp";
import Subscribe from "../../components/subscribe/subscribe";

const Home = () => {
	return (
		<div className="home-page">
			<div className="Navbar">
				<Navbar />
			</div>

			<Container className="front-container" maxWidth="xl" sx={{ bgcolor: blue[900], pb: 4 }}>
				<div className="home-banner">
					<Banner />
					<div className="home-searchbar">
						<Searchbar />
					</div>
				</div>
			</Container>

			<Container className="page-container" maxWidth="lg">
				<div className="home-features">
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={4}>
							<Feature img={feature1} title="Dublin" description="123 Properties" />
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<Feature img={feature2} title="Dublin" description="456 Properties" />
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<Feature img={feature3} title="Dublin" description="789 Properties" />
						</Grid>
					</Grid>
				</div>

				<div className="home-properties">
					<Typography className="properties-header" variant="h5">
						Browser By Property Type
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Property img={property1} title="Hotels" description="1234 Hotels" />
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Property img={property2} title="Apartments" description="1234 Hotels" />
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Property img={property3} title="Resorts" description="1234 Hotels" />
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Property img={property4} title="Villas" description="1234 Hotels" />
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Property img={property5} title="Cabins" description="1234 Hotels" />
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Property img={property6} title="Hotels" description="1234 Hotels" />
						</Grid>
					</Grid>
				</div>

				<div className="home-guests">
					<Typography className="properties-header" variant="h5">
						Homes Guests Love
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Guest img={property1} title="Aparthotel Stare Miasto" city="Madrid" price="120" rate={1} />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Guest img={property2} title="Aparthotel Stare Miasto" city="Madrid" price="220" rate={2} />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Guest img={property3} title="Aparthotel Stare Miasto" city="Madrid" price="320" rate={3} />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Guest img={property4} title="Aparthotel Stare Miasto" city="Madrid" price="420" rate={4} />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Guest img={property5} title="Aparthotel Stare Miasto" city="Madrid" price="520" rate={5} />
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Guest img={property6} title="Aparthotel Stare Miasto" city="Madrid" price="620" rate={1} />
						</Grid>
					</Grid>
				</div>
			</Container>

			<div className="subscribes">
				<Subscribe />
			</div>

			<Container className="home-footer" maxWidth="lg">
				<Footer />
			</Container>
		</div>
	);
};

export default Home;
