// React
import React, { useState } from "react";
import "./list.scss";

// Material Ui
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { PinDrop } from "@mui/icons-material";

// Components
import Navbar from "../../layout/navbar/navbar";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../layout/footer/footer";

// Images
import feature1 from "../../images/feature 1.webp";
import feature2 from "../../images/feature 2.webp";
import feature3 from "../../images/feature 3.webp";
import furnitur1 from "../../images/furnitur 1.webp";
import furnitur2 from "../../images/furnitur 2.webp";
import furnitur3 from "../../images/furnitur 3.webp";
import Slider from "../../components/slider/slider";

const List = () => {
	const images = [{ img: feature1 }, { img: feature2 }, { img: feature3 }, { img: furnitur1 }, { img: furnitur2 }, { img: furnitur3 }];
	const [slideIndex, setSlideIndex] = useState(3);
	const [openSlider, setOpenSlider] = useState(false);

	const handleSlider = (i) => {
		setSlideIndex(i);
		setOpenSlider(true);
		document.body.style.overflow = "hidden";
	};

	return (
		<div className="list-page">
			<div className="Navbar">
				<Navbar />
			</div>

			{openSlider && <Slider images={images} slideIndex={slideIndex} setSlideIndex={setSlideIndex} setOpenSlider={setOpenSlider} />}

			<Container className="list-container" maxWidth="lg">
				<div className="header">
					<div className="title">
						<Typography className="name" variant="h4">
							Tower Street Apartment
						</Typography>
						<Button variant="contained" color="primary" size="large">
							Reserve OR Book Now !
						</Button>
					</div>

					<Typography className="subtitle" variant="body2">
						<PinDrop className="icon" /> 5 Bas2towa Old Town, 33-3352 Krokow, Poland
					</Typography>

					<Typography className="rating" variant="h6">
						Excellent Location - 500m From Center
					</Typography>

					<Typography className="offer" variant="h6">
						Book A Stay Over $114 At This Property And Get A Free Airport Taxi
					</Typography>
				</div>

				<div className="body">
					<Grid className="images-container" container spacing={2}>
						{images.map((obj, i) => (
							<Grid item xs={12} md={6} lg={4} key={i}>
								<Avatar className="avatar" src={obj.img} alt="list-img" onClick={() => handleSlider(i)} />
							</Grid>
						))}
					</Grid>
					<Grid className="stay-grid" container spacing={2}>
						<Grid className="left-section" item xs={12} md={9}>
							<Typography className="title" variant="h6">
								Stay in the heart of Madrid
							</Typography>
							<Typography className="content" variant="body2">
								Offering free WiFi and free private parking, Piso moderno y acogedor en el centro de la ciudad is located in
								Madrid, within just a 2-minute walk of Puerta del Sol. The property is an 8-minute walk from Mercado San
								Miguel and half a kilometer from Prado Museum. The air-conditioned apartment is composed of 1 separate
								bedroom, a living room, a fully equipped kitchen, and 1 bathroom. A flat-screen TV is provided.
							</Typography>
						</Grid>

						<Grid className="right-section" item xs={12} md={3}>
							<Typography className="title" variant="body2">
								Perfect For A 9 Night Stay!
							</Typography>
							<Typography className="content" variant="subtitle2">
								Located In The Real Heart Of Madried The Property Has An Excellent Location Score Of 4.8
							</Typography>
							<Typography className="price" variant="h6">
								<span>$935</span> <span>( 9 Nights )</span>
							</Typography>
							<Button variant="contained" color="primary" fullWidth>
								Reserve Your Apartment Stay
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>

			<div className="footer">
				<div className="subscribes">
					<Subscribe />
				</div>
				<Container maxWidth="lg">
					<Footer />
				</Container>
			</div>
		</div>
	);
};

export default List;
