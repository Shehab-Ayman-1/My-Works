// React
import React from "react";
import "./slider.scss";

// Material Ui
import { Avatar } from "@mui/material";
import { ArrowCircleLeftRounded, ArrowCircleRightRounded, CancelRounded } from "@mui/icons-material";

const Slider = ({ images, slideIndex, setSlideIndex, setOpenSlider }) => {
	const length = images.length - 1;

	// Close Slider
	const handleClose = () => setOpenSlider(false);

	// Right Arrow
	const handleRight = () => setSlideIndex(slideIndex === length ? slideIndex : slideIndex + 1);

	// Left Arrow
	const handleLeft = () => setSlideIndex(slideIndex === 0 ? slideIndex : slideIndex - 1);

	return (
		<div className="slider">
			<div className="avatar-container">
				<span className="overlay" onClick={handleClose}></span>
				<Avatar className="avatar" src={images[slideIndex].img} alt="slider-img" />
			</div>
			<div className="icons-container">
				<CancelRounded className="close-icon" onClick={handleClose} />
				<ArrowCircleRightRounded className={`right-arrow ${slideIndex === length && "disabled"}`} onClick={handleRight} />
				<ArrowCircleLeftRounded className={`left-arrow ${slideIndex === 0 ? "disabled" : ""}`} onClick={handleLeft} />
			</div>
		</div>
	);
};

export default Slider;
