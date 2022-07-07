// React
import React, { useState } from "react";
import "./login.scss";

// Redux
import { useDispatch } from "react-redux";
import { LOGIN_AUTH, SIGNIN_AUTH, REGISTER_AUTH } from "../../redux/reducers/auth-slice";

// Google Login
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script"; // It's a global variable To Make The Google Login Work

// Material Ui
import { Avatar, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { LockOutlined, Google } from "@mui/icons-material/";

// Components
import InputField from "./input-field";

const Authentication = () => {
	const dispatch = useDispatch();
	const [isSignUp, setIsSignUp] = useState(false);
	const [user, setUser] = useState({ firstName: "", lastName: "", email: "", imageUrl: "", password: "", confirmedPassword: "" });
	const [password, setPassword] = useState(true);

	// Input Field Settings
	const handleChange = (event) => setUser({ ...user, [event.target.name]: event.target.value });
	const handleSignIn = () => setIsSignUp(!isSignUp);
	const showPassword = () => setPassword(!password);

	// JWT Google Signin
	const handleGoogleSuccess = async (response) => {
		const user = response?.profileObj;
		console.log(user);
		try {
			dispatch(LOGIN_AUTH({ firstName: user.givenName, lastName: user.familyName, email: user.email, imageUrl: user.imageUrl }));
		} catch (error) {
			console.warn(error);
		}
	};
	const handleGoogleFailure = (err) => {
		console.warn(err);
		console.log("Google Login Is Failed");
	};

	// Submit
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// SIGNIN USER
	const handleSignInUser = () => {
		if (user.email && user.password) {
			dispatch(SIGNIN_AUTH({ email: user.email, password: user.password }));
		} else {
			alert("Please Fill All Fields");
		}
	};

	// RESISTER USER
	const handleRegisterUser = () => {
		if (user.firstName && user.lastName && user.email && user.password && user.confirmedPassword) {
			if (user.password === user.confirmedPassword) {
				dispatch(REGISTER_AUTH(user));
			} else {
				alert("Password Doesn't Match");
			}
		}
	};

	return (
		<Container className="auth-container" maxWidth="sm">
			<Paper className="paper" elevation={3}>
				<Avatar className="auth-icon">
					<LockOutlined />
				</Avatar>

				<Typography variant="h3" className="auth-title">
					{isSignUp ? "Sign Up" : "Sign In"}
				</Typography>

				<form className="form-container" onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignUp && <InputField type="text" name="firstName" label="First Name" focus half change={handleChange} />}

						{isSignUp && <InputField type="text" name="lastName" label="Last Name" half change={handleChange} />}

						<InputField type="email" name="email" label="Your Email" change={handleChange} focus />

						<InputField
							type={password ? "password" : "text"}
							name="password"
							label="Your Password"
							change={handleChange}
							showPass={showPassword}
							password={password}
							visPass
						/>

						{isSignUp && (
							<InputField
								type={password ? "password" : "text"}
								name="confirmedPassword"
								label="Repeat Password"
								change={handleChange}
								showPass={showPassword}
								password={password}
								visPass
							/>
						)}

						<Grid item xs={12}>
							{isSignUp ? (
								<Button type="submit" variant="contained" color="primary" fullWidth onClick={handleRegisterUser}>
									Sign Up
								</Button>
							) : (
								<Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSignInUser}>
									Sign In
								</Button>
							)}
						</Grid>

						<Grid item xs={12}>
							<GoogleLogin
								// Hint: We Get The CliendId From console.cloud.google.com
								clientId="903980825507-4jdidfuaad036vkm6h0o22bkt9qgbrlo.apps.googleusercontent.com"
								cookiePolicy="single_host_origin"
								// isSignedIn={true} // Auto Signin
								onSuccess={handleGoogleSuccess}
								onFailure={handleGoogleFailure}
								render={(props) => (
									<Button
										className="google-signin"
										color="primary"
										variant="contained"
										onClick={props.onClick}
										disabled={props.disabled}
										startIcon={<Google />}
										fullWidth>
										Google Sign In
									</Button>
								)}
							/>
						</Grid>

						<Grid item xs={12}>
							<Typography className="is-sign-up" variant="body2" onClick={handleSignIn}>
								{isSignUp ? "I Already Have An Account" : "Don't Have An Account"}
							</Typography>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Authentication;
