import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import { filteredArray } from '../handlers';
import Suggestion from './Suggestion';
import { useTheme } from '@mui/material';
import { useUserContext } from '../../../hooks/context/useUserContext';

const SearchContainer = ({
	suggestions,
	handleSelect,
	value,
	setValue,
	selectedSuggestionIndex,
	setSelectedSuggestionIndex,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const { userData } = useUserContext();
	const theme = useTheme();
	// console.log(theme.palette.primary.light);
	console.log(userData.theme);

	let matchedSuggestions = filteredArray(suggestions, value);

	const shouldShowSuggestions = matchedSuggestions.length > 0 && isVisible;

	return (
		<StyledSearchContainer>
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
					lightMode={userData.theme}
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
			{value.length > 1 && matchedSuggestions.length === 0 && (
				<StyledNothing
					onMouseLeave={() => {
						setValue('');
						setSelectedSuggestionIndex(0);
					}}
				>
					<p>No results...</p>
				</StyledNothing>
			)}
		</StyledSearchContainer>
	);
};

export default SearchContainer;

const StyledSearchContainer = styled.div`
	position: relative;
	border-radius: 4px;
	padding: 4px 9px;
	background-color: rgba(0, 0, 0, 0.2);

	label {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;

		position: absolute;
		top: 50%;
		left: 12px;
		transform: translate(0%, -50%);
	}

	input {
		all: unset;
		position: relative;
		font-size: 16px;
		padding: 7.5px 4px 7.5px 6px;
		z-index: 1;
	}
`;

const StyledListContainer = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	right: 0;
	bottom: 0px;
	border-radius: 4px;
	overflow: hidden;

	transform: translateY(100%);
	padding-top: 8px;
	${(props) =>
		props.lightMode
			? 'background-color: #686eb1'
			: 'background-color: #545aa7'};

	cursor: pointer;
`;

const StyledNothing = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	right: 0;
	bottom: 0px;
	border-radius: 4px;
	box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
	transform: translateY(100%);

	padding-top: 8px;
	background-color: #545aa7;
	p {
		padding: 9px;
		color: #ccc;
	}
`;
