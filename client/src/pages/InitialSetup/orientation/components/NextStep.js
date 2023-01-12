import { Button } from '@mui/material';
import React from 'react';
import { useUserContext } from '../../../../hooks/context/useUserContext';
import { buttonProps } from '../styles';

const NextStep = ({ placeholder = 'Next Step' }) => {
	const { setUserData, userData } = useUserContext();

	return (
		<Button
			{...buttonProps}
			sx={{ mt: 2 }}
			onClick={() => {
				setUserData({ ...userData, setup: userData.setup + 1 });
			}}
		>
			{placeholder}
		</Button>
	);
};

export default NextStep;
