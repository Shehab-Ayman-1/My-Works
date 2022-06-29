// React
import React from "react";
import "./posts.scss";

// Components
import Post from "./post/post";

// Material Ui
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Posts = () => {
	const posts = useSelector((state) => state.posts.data);

	return (
		<Grid container alignItems="stretch" spacing={3}>
			{posts ? (
				posts.map((post, index) => (
					<Grid item xs={12} sm={6} lg={4} key={index}>
						<Post post={post} />
					</Grid>
				))
			) : (
				<div className="netwok-error">
					<h1 style={{ color: "white" }}>Network Error</h1>
				</div>
			)}
		</Grid>
	);
};

export default Posts;
