import React from 'react';
import { zodiacSignsArray } from '../../../data/zodiacSignsArray';

const ZodiacDropdown = ({ signState, setSignState }) => {
	return (
		<select
			value={signState}
			onChange={(e) => {
				setSignState(e.target.value);
			}}
		>
			<option>default</option>
			{zodiacSignsArray.map((zodiacSign) => {
				return (
					<option key={zodiacSign} value={zodiacSign}>
						{zodiacSign.toUpperCase()}
					</option>
				);
			})}
		</select>
	);
};

export default ZodiacDropdown;
