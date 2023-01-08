import React, { useState } from 'react';
import { GiCrystalBall } from 'react-icons/gi';

const SearchInput = ({
	value,
	setValue,
	matchedSuggestions,
	selectedSuggestionIndex,
	setSelectedSuggestionIndex,
	handleSelect,
	setIsVisible,
}) => {
	const [isActive, setIsActive] = useState(true);
	const selectedSuggestion = matchedSuggestions[selectedSuggestionIndex];
	return (
		<>
			{value.length !== 0 ||
				(isActive === true && (
					<label>
						<GiCrystalBall size={25} />
						<p>Search...</p>
					</label>
				))}
			<input
				type='text'
				value={value}
				onClick={() => setIsActive(false)}
				onChange={(ev) => {
					setValue(ev.target.value);
				}}
				onMouseOut={(ev) => {
					setIsActive(true);
					ev.target.blur();
				}}
				onFocus={(e) => {
					setIsActive(false);
					setIsVisible(true);
				}}
				onKeyDown={(ev) => {
					switch (ev.key) {
						case 'Enter': {
							handleSelect(selectedSuggestion);
							setIsActive(true);
							// ev.target.blur();
							return;
						}
						case 'Escape': {
							setIsVisible(false);
							setValue('');
							setSelectedSuggestionIndex(0);
							setIsActive(true);
							return;
						}
						case 'ArrowUp':
						case 'ArrowDown': {
							ev.preventDefault();

							// If the user's entry doesn't match any suggestions, there's
							// no use trying to shift between them!
							if (!matchedSuggestions) {
								return;
							}

							const direction = ev.key === 'ArrowDown' ? 'down' : 'up';

							// Inherit the current selected index.
							// We create a copy so that we can modify it without
							// accidentally mutating state, which is a no-no
							let nextSuggestionIndex = selectedSuggestionIndex;

							nextSuggestionIndex =
								direction === 'down'
									? nextSuggestionIndex + 1
									: nextSuggestionIndex - 1;

							// If the user is on the very first item and they try to go
							// up, we don't want to select negative indices
							const clamp = (val, min = 0, max = 1) =>
								Math.max(min, Math.min(max, val));

							nextSuggestionIndex = clamp(
								nextSuggestionIndex,
								0,
								matchedSuggestions.length - 1
							);

							setSelectedSuggestionIndex(nextSuggestionIndex);
							return;
						}
						default: {
							setIsVisible(true);
							return;
						}
					}
				}}
			/>
		</>
	);
};

export default SearchInput;
