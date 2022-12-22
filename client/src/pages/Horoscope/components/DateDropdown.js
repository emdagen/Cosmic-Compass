import React from 'react';

const DateDropdown = ({ setDate }) => {
	return (
		<select onChange={(e) => setDate(e.target.value)}>
			<option defaultValue='today'>Today</option>
			<option defaultValue='tomorrow'>Tomorrow</option>
			<option defaultValue='yesterday'>Yesterday</option>
		</select>
	);
};

export default DateDropdown;
