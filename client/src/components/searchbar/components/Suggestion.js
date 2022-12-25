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
	color: #000;
	background-color: white;
	&.selected {
		background: hsla(50deg, 100%, 80%, 0.25);
	}
`;
