// React
import React from "react";

// Material Ui
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputField = ({ half, type, name, label, focus, visPass, change, password, showPass }) => {
	const inputProps = {
		endAdornment: (
			<InputAdornment position="end">
				<IconButton onClick={showPass}>{!password ? <Visibility /> : <VisibilityOff />}</IconButton>
			</InputAdornment>
		),
	};

	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				type={type}
				name={name}
				label={label}
				variant="outlined"
				autoFocus={focus ? true : false}
				fullWidth
				required
				onChange={change}
				InputProps={visPass && inputProps}
			/>
		</Grid>
	);
};

export default InputField;
