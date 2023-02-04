import React from 'react';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import Button from '@mui/material/Button';
import { tarotButtonProps } from '../style';
import { useReset } from '../hook/useReset';

const ResetButton = () => {
	// const { setSpreadData } = useTarotContext();
	//  const handleReset = () => {
	// 	setSpreadData(null);
	// };
	const handleReset = useReset();

	return (
		<Button onClick={handleReset} {...tarotButtonProps}>
			Reset Selection
		</Button>
	);
};

export default ResetButton;
