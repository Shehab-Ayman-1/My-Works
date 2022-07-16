// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/_index.scss";

// Components
import Home from "./routes/home/home";
import Hotels from "./routes/hotel/hotel";
import List from "./routes/list/list";
import Register from "./routes/auth/register/register";
import Login from "./routes/auth/login/login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotels" element={<Hotels />} />
				<Route path="/hotels/:id" element={<List />} />
				<Route path="/auth">
					<Route path="register" element={<Register />} />
					<Route path="Login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
