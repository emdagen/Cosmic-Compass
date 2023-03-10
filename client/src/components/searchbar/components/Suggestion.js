import React from 'react';
import styled from 'styled-components';

const Suggestion = ({
	searchValue,
	suggestion,
	isSelected,
	index,
	...delegated
}) => {
	return (
		<StyledSuggestion
			className={isSelected ? 'selected' : undefined}
			{...delegated}
		>
			{suggestion}
		</StyledSuggestion>
	);
};

export default Suggestion;

const StyledSuggestion = styled.div`
	padding: 8px;
	color: #ccc;
	/* background-color: rgba(84, 90, 167, 0.7); */
	&.selected {
		color: white;
		background: rgba(0, 0, 0, 0.3);
	}
`;
