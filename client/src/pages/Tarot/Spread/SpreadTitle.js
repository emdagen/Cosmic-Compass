import React from 'react';

const SpreadTitle = ({ spreadData }) => {
	return (
		<h2>
			{spreadData &&
				spreadData[0].spreadType
					.replace(/-/g, ' ')
					.replace(/\b\w/g, (l) => l.toUpperCase())}
		</h2>
	);
};

export default SpreadTitle;
