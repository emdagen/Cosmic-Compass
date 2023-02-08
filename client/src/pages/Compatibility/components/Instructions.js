import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Instructions = ({ signX, signY }) => {
	console.log(signX.length);
	return (
		<StyledInstruction>
			{signX.length > 0 || signY.length > 0 ? (
				<p>Select one more sign</p>
			) : (
				<p>Please select your sign and your partners sign.</p>
			)}
		</StyledInstruction>
	);
};

export default Instructions;

const StyledInstruction = styled.h2`
	text-align: center;
	margin-top: 8px;
`;
