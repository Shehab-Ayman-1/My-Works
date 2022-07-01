import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: { data: [] },
	reducers: {
		LOGIN_AUTH: (state, action) => {
			window.localStorage.setItem("profile", JSON.stringify(action?.payload));
			state.data = action.payload;
			window.location.href = "/";
		},

		LOGOUT_AUTH: (state, action) => {
			window.localStorage.removeItem("profile");
			window.location.href = "/auth";
			window.location.reload();
		},

		SIGNIN_AUTH: (state, action) => {
			window.location.href = "/";
		},

		SIGNUP_AUTH: (state, action) => {
			window.location.href = "/";
		},
	},
});

export const { LOGIN_AUTH, LOGOUT_AUTH, SIGNIN_AUTH, SIGNOUT_AUTH } = authSlice.actions;
export default authSlice.reducer;
