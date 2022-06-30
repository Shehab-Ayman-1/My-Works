// React
import React from "react";

// Material Ui
import { Grid, TextField } from "@mui/material";

const InputField = ({ half, type, name, label, focus, InputProps, handleChange }) => {
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
				onChange={handleChange}
				InputProps={InputProps && InputProps}
			/>
		</Grid>
	);
};

export default InputField;
