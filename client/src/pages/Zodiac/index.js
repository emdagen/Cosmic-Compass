import React from 'react';
import { useParams } from 'react-router';
import zodiacData from '../../data/zodiacData';

const Zodiac = () => {
	const { sign } = useParams();
	const zodiacObj = zodiacData[sign];
	// console.log(zodiacObj);
	// #TO DO render component
	// take the zodiacObj and display data from all the keys
	// console.log(zodiacObj);
	return (
		<div>
			<h2>{zodiacObj.zodiac}</h2>
			<p>{zodiacObj.dates}</p>
			<p>Symbol: {zodiacObj.dates}</p>
			<p>Element: {zodiacObj.element}</p>
			<p>Ruling Planet: {zodiacObj.ruling_planet}</p>
			<p>Traits: {zodiacObj.traits}</p>
			<p>Description: {zodiacObj.description}</p>
		</div>
	);
};

export default Zodiac;
