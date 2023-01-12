import React from 'react';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const FormInput = ({
	formData,
	setFormData,
	name,
	type,
	errorData,
	label = 'Required',
}) => {
	return (
		<>
			<Typography
				color={!errorData[0] ? undefined : '#d32f2f'}
				sx={{ ml: 1 }}
				variant='h6'
				component='h6'
				htmlFor={name.toLowerCase()}
			>
				{!errorData[0] ? 'Required*' : errorData[1]}
			</Typography>
			<StyledTextField
				label={label}
				error={errorData[0]}
				variant='filled'
				onChange={(e) => {
					setFormData({ ...formData, [e.target.name]: e.target.value });
				}}
				type={type}
				name={name.toLowerCase()}
			/>
		</>
	);
};

export default FormInput;

const StyledTextField = styled(TextField)`
	width: 100%;
`;
