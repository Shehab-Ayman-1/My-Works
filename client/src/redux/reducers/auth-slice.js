import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInUser, registerUser } from "../../util/auth";

export const Login = createAsyncThunk("profile/login", (user) => signInUser(user));
export const Register = createAsyncThunk("profile/register", (user) => registerUser(user));

const authSlice = createSlice({
	name: "auth",
	initialState: { auths: [], profile: {}, snackbar: false },

	reducers: {
		NOT_EXIST: (state, action) => {
			state.snackbar = action.payload;
		},

		REGISTER_AUTH: (state, action) => {
			registerUser(action.payload)
				.then(({ data }) => console.log(data))
				.catch((err) => {
					state.snackbar = true;
					console.log("I Have An Error From Redux => " + err);
				});
		},

		LOGOUT_AUTH: (state, action) => {
			window.localStorage.removeItem("profile");
			window.location.href = "/auth";
		},

		GET_ALL_AUTH: (state, action) => {},

		GET_AUTH: (state, action) => {},

		DELETE_AUTH: (state, action) => {},

		UPDATE_AUTH: (state, action) => {},
	},

	extraReducers: {
		// Login
		[Login.pending]: (state, action) => {
			window.localStorage.removeItem("profile");
			state.profile = {};
		},
		[Login.fulfilled]: (state, action) => {
			if (action.payload) {
				window.localStorage.setItem("profile", JSON.stringify(action.payload.data));
				state.profile = action.payload.data;
				window.location.href = "/";
			} else {
				state.snackbar = true;
			}
		},
		[Login.rejected]: (state, action) => {
			window.localStorage.removeItem("profile");
			console.log("Failed To Login Redux => " + action.error);
			state.profile = {};
		},

		// Register
		[Register.pending]: (state, action) => {
			window.localStorage.removeItem("profile");
			state.profile = {};
			console.log("Pending Redux => " + action.type);
		},
		[Register.fulfilled]: (state, action) => {
			console.log("Success Redux => " + action.type);
			if (action.payload) {
				window.localStorage.setItem("profile", JSON.stringify(action.payload.data));
				state.profile = action.payload.data;
				state.snackbar = false;
				window.location.href = "/";
			} else {
				state.snackbar = true;
			}
		},
		[Register.rejected]: (state, action) => {
			window.localStorage.removeItem("profile");
			console.log("Failed To Regiser Redux => " + action.error);
			state.profile = {};
		},
	},
});

export const { NOT_EXIST, REGISTER_AUTH, LOGOUT_AUTH, GET_ALL_AUTH, GET_AUTH, DELETE_AUTH, UPDATE_AUTH } = authSlice.actions;
export default authSlice.reducer;
