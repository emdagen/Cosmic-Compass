import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StepNumber = ({ step }) => {
	return (
		<StyledTitle>
			<Typography variant='h6' component='h6' sx={{ mr: 1 }}>
				Step {step}
			</Typography>
		</StyledTitle>
	);
};

export default StepNumber;

const StyledTitle = styled.div`
	display: flex;
	justify-content: flex-end;

	width: 100%;
`;
