import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
	return (
		<div className="loading">
			<h1 style={{ color: "white" }}>
				<CircularProgress color="primary" />
			</h1>
		</div>
	);
};

export default Loading;
