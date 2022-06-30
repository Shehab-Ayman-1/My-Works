// React
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/style.scss";

// Redux
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/reducers/posts-slice";

// Components
import Container from "./layout/container/container";
import Login from "./components/auth/auth";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth" element={<Login />} />
				<Route path="/">
					<Route index element={<Container />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
