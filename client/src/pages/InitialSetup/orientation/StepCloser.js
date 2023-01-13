import { Button, Typography } from '@mui/material';
import React from 'react';
import { useUserContext } from '../../../hooks/context/useUserContext';
import { StyledOrientationContainer } from './styles';

const StepCloser = () => {
	const { setUserData, userData } = useUserContext();
	console.log(userData);
	return (
		<StyledOrientationContainer>
			<Typography variant='h3' component='h2'>
				Welcome to Cosmic Compass!
			</Typography>
			<Typography variant='h5' component='h2'>
				We are excited to have you join us.
			</Typography>
			<Button
				onClick={() => {
					setUserData({ ...userData, setup: userData.setup + 1 });
				}}
				variant='outlined'
			>
				Next Step
			</Button>
		</StyledOrientationContainer>
	);
};

export default StepCloser;
