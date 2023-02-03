import React from 'react';
import styled from 'styled-components';

const VerticalTitle = ({ spreadData }) => {
	const string = spreadData[0].spreadType.replace('-', ' ');
	const array = string.toUpperCase().split('');

	return (
		<StyledVertical>
			<StyledContainer>
				{array.map((letter, index) => (
					<h2 className='letter' key={index + letter}>
						{letter}
					</h2>
				))}
			</StyledContainer>
		</StyledVertical>
	);
};

export default VerticalTitle;
const StyledVertical = styled.div`
	position: relative;
`;
const StyledContainer = styled.div`
	padding: 0 32px 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: var(--container-height);
	position: sticky;
	top: 0; /* top: var(--nav-height); */

	.letter {
		min-height: 24px;
	}
`;
