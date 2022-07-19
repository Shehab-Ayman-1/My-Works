// React
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Material Ui
import { Avatar, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { ArrowBack, LockOutlined } from "@mui/icons-material";

// Components
import axios from "axios";
import { Context } from "../../../context/auth/context";
import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS } from "../../../context/auth/actions";
import InputField from "../assets/text-field";

const Register = () => {
	const context = useContext(Context);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({ fName: "", lName: "", username: "", email: "", password: "", confirmedPassword: "" });
	const [isPass, setIsPass] = useState(true);

	const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			context.dispatch(LOGIN_PENDING());
			const response = await axios.post("http://localhost:5000/auths/register", formData);
			context.dispatch(LOGIN_SUCCESS(response.data));
			navigate("/");
		} catch (error) {
			context.dispatch(LOGIN_FAILURE(error?.response?.data?.REGISTER_AUTH));
		}
	};

	return (
		<Container className="auths-page" maxWidth="sm">
			<Paper className="paper" component="form" elevation={10} onSubmit={handleSubmit}>
				<div className="login-header">
					<Avatar className="back" component={Link} to="/">
						<ArrowBack className="back-icon" />
					</Avatar>
					<Avatar className="auth-icon">
						<LockOutlined className="icon" />
					</Avatar>
					<Typography className="auth-title" variant="h4">
						Sign Up
					</Typography>
				</div>

				<Grid className="login-body" container spacing={2}>
					<Grid item xs={12} md={6}>
						<InputField type="text" name="fName" label="First Name" change={handleChange} focus />
					</Grid>
					<Grid item xs={12} md={6}>
						<InputField type="text" name="lName" label="Last Name" change={handleChange} />
					</Grid>
					<Grid item xs={12}>
						<InputField type="text" name="username" label="username" change={handleChange} />
					</Grid>
					<Grid item xs={12}>
						<InputField type="email" name="email" label="Email" change={handleChange} />
					</Grid>
					<Grid item xs={12}>
						<InputField type={isPass ? "password" : "text"} change={handleChange} isPass={isPass} setIsPass={setIsPass} />
					</Grid>
					<Grid item xs={12}>
						<InputField
							type={isPass ? "password" : "text"}
							name="confirmedPassword"
							label="confirmed Password"
							change={handleChange}
						/>
					</Grid>
				</Grid>

				<div className="login-footer">
					<Typography className="error-message" variant="h6" color="error">
						{context.state.error && context.state.error}
					</Typography>
					<br />
					<Button type="submit" variant="contained" color="primary" size="large" fullWidth>
						Sign Up
					</Button>
					<Button className="is-signup" component={Link} to="/auth/login" variant="text" color="primary">
						Already Have An Account
					</Button>
				</div>
			</Paper>
		</Container>
	);
};

export default Register;
