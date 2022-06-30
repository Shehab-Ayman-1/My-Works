// React
import React, { useState } from "react";
import "./login.scss";

// Material Ui
import { Avatar, Container, Grid, IconButton, Paper, Typography, InputAdornment, Button } from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material/";
import InputField from "./input-field";

const Login = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = () => {};

	const handleSignIn = () => {
		setIsSignUp(!isSignUp);
	};

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
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
						{isSignUp && (
							<>
								<InputField type="text" name="firstname" label="First Name" focus half handleChange={handleChange} />
								<InputField type="text" name="lastname" label="Last Name" half handleChange={handleChange} />
							</>
						)}
						<InputField type="email" name="email" label="Your Email" handleChange={handleChange} focus />
						<InputField
							type={showPassword ? "password" : "text"}
							name="password"
							label="Your Password"
							handleChange={handleChange}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleShowPassword}>
											{!showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						{isSignUp && (
							<InputField
								type={showPassword ? "password" : "text"}
								name="password"
								label="Your Password"
								handleChange={handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleShowPassword}>
												{!showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						)}
						<Grid item xs={12}>
							{isSignUp ? (
								<Button type="submit" variant="contained" color="primary" fullWidth>
									Sign Up
								</Button>
							) : (
								<Button type="submit" variant="contained" color="primary" fullWidth>
									Sign In
								</Button>
							)}
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

export default Login;
