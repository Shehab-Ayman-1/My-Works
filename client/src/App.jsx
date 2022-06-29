// React
import React, { useEffect } from "react";
import "./scss/style.scss";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Components
import Navbar from "./layout/navbar";
import Posts from "./components/posts/posts";
import Form from "./components/form/form";

// Material Ui
import { Container, Grow, Grid, CircularProgress } from "@mui/material";
import { getPosts } from "./redux/reducers/posts-slice";

function App() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		// div Container
		<Container className="app-container" maxWidth="xl">
			<Navbar />
			{/* To Give Me Some Animation */}
			<Grow in>
				<Grid className="grid-container" container spacing={3}>
					<Grid item xs={12} sm={7} md={8}>
						{!state.loading ? (
							<Posts />
						) : (
							<div className="loading">
								<h1 style={{ color: "white" }}>
									<CircularProgress color="primary" />
								</h1>
							</div>
						)}
					</Grid>
					<Grid item xs={12} sm={5} md={4}>
						<Form title="Create New Memory" />
					</Grid>
				</Grid>
			</Grow>
		</Container>
	);
}

export default App;
