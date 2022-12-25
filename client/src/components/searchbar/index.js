import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './components/SearchInput';
import { filteredArray } from './handlers';
import Suggestion from './components/Suggestion';

const Searchbar = ({
	suggestions,
	handleSelect,
	value,
	setValue,
	selectedSuggestionIndex,
	setSelectedSuggestionIndex,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	let matchedSuggestions = filteredArray(suggestions, value);

	const shouldShowSuggestions = matchedSuggestions.length > 0 && isVisible;

	return (
		<StyledSearchbar>
			<SearchInput
				value={value}
				setValue={setValue}
				matchedSuggestions={matchedSuggestions}
				selectedSuggestionIndex={selectedSuggestionIndex}
				setSelectedSuggestionIndex={setSelectedSuggestionIndex}
				handleSelect={handleSelect}
				setIsVisible={setIsVisible}
			/>

			{shouldShowSuggestions && (
				<StyledListContainer
					onMouseLeave={() => {
						setValue('');
						setSelectedSuggestionIndex(0);
					}}
				>
					{matchedSuggestions.map((suggestion, index) => {
						const isSelected = index === selectedSuggestionIndex;
						return (
							<Suggestion
								key={suggestion[1]}
								index={index}
								suggestion={suggestion[0]}
								isSelected={isSelected}
								onMouseEnter={() => {
									setSelectedSuggestionIndex(index);
								}}
								onMouseDown={() => {
									handleSelect(suggestion);
								}}
							/>
						);
					})}
				</StyledListContainer>
			)}
		</StyledSearchbar>
	);
};

export default Searchbar;

const StyledSearchbar = styled.div`
	position: relative;
`;

const StyledListContainer = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	right: 0;
	bottom: 0px;
	border-radius: 4px;
	box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
	transform: translateY(100%);
`;
