import React from 'react';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import Button from '@mui/material/Button';
import { tarotButtonProps } from '../style';

const ResetButton = () => {
	const { setSpreadData } = useTarotContext();
	const handleReset = () => {
		setSpreadData(null);
	};

	return (
		<Button onClick={handleReset} {...tarotButtonProps}>
			Reset Selection
		</Button>
	);
};

export default ResetButton;
