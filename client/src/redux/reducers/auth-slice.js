import { createSlice } from "@reduxjs/toolkit";
import { signInUser, RegisterUser } from "../../util/server";

const storage = JSON.parse(localStorage.getItem("profile"));

const authSlice = createSlice({
	name: "auth",
	initialState: { data: storage ? storage : [] },
	reducers: {
		LOGIN_AUTH: (state, action) => {
			window.localStorage.setItem("profile", JSON.stringify(action.payload));
			state.data = action.payload;
			RegisterUser(action.payload);
			window.location.href = "/";
		},

		LOGOUT_AUTH: (state, action) => {
			window.localStorage.removeItem("profile");
			window.location.href = "/auth";
		},

		SIGNIN_AUTH: (state, action) => {
			window.localStorage.setItem("profile", JSON.stringify(action.payload));
			state.data = action.payload;
			signInUser(action.payload);
			// window.location.href = "/";
		},

		REGISTER_AUTH: (state, action) => {
			window.localStorage.setItem("profile", JSON.stringify(action.payload));
			state.data = action.payload;
			RegisterUser(action.payload);
			window.location.href = "/";
		},
	},
});

export const { LOGIN_AUTH, LOGOUT_AUTH, SIGNIN_AUTH, REGISTER_AUTH } = authSlice.actions;
export default authSlice.reducer;
