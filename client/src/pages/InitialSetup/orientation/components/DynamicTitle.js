import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const DynamicTitle = ({ strArray }) => {
	const [randomIndex, setRandomIndex] = useState(
		Math.floor(Math.random() * strArray.length)
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			let random = Math.floor(Math.random() * strArray.length);
			setRandomIndex(random);
		}, 8000);

		// Clear the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, []);
	return (
		<Typography variant='h3' component='h2'>
			{strArray[randomIndex]}
		</Typography>
	);
};

export default DynamicTitle;
