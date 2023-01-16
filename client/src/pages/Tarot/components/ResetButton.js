import React from 'react';
import { useTarotContext } from '../../../hooks/context/useTarotContext';

const ResetButton = () => {
	const { setSpreadData } = useTarotContext();
	const handleReset = () => {
		setSpreadData(null);
	};
	return <button onClick={handleReset}>Clear</button>;
};

export default ResetButton;
