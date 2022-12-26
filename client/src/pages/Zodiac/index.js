import React from 'react';
import { useParams } from 'react-router';
import zodiacData from '../../data/zodiacData';

const Zodiac = () => {
	const { sign } = useParams();
	const zodiacObj = zodiacData[sign];

	return (
		<div>
			<h2>{zodiacObj.zodiac}</h2>
		</div>
	);
};

export default Zodiac;
