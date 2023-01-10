import React from 'react';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const FormInput = ({ formData, setFormData, name, type, errorData }) => {
	return (
		<>
			<Typography variant='h6' component='h6' htmlFor={name.toLowerCase()}>
				{!errorData[0] ? name : errorData[1]}
			</Typography>
			<StyledTextField
				// required
				id='standard-required'
				label='Required'
				variant='standard'
				onChange={(e) => {
					setFormData({ ...formData, [e.target.name]: e.target.value });
				}}
				type={type}
				// id={name.toLowerCase()}
				name={name.toLowerCase()}
			/>
		</>
	);
};

export default FormInput;

const StyledTextField = styled(TextField)`
	width: 100%;
`;
