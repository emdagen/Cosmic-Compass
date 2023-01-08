import { useTarotContext } from '../../hooks/context/useTarotContext';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import SearchContainer from '../searchbar/components/SearchContainer';
import { zodiacSignsArray } from '../../data/zodiacSignsArray';

const Searchbar = () => {
	const [value, setValue] = useState('');
	const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
	const { tarotList } = useTarotContext();
	const cardNames = Object.entries(tarotList);
	const navigate = useNavigate();

	return (
		<SearchContainer
			value={value}
			setValue={setValue}
			selectedSuggestionIndex={selectedSuggestionIndex}
			setSelectedSuggestionIndex={setSelectedSuggestionIndex}
			suggestions={cardNames}
			handleSelect={(item) => {
				if (zodiacSignsArray.includes(item[0].toLowerCase())) {
					const sign = item[0].toLowerCase();
					console.log(sign);
					setValue('');
					setSelectedSuggestionIndex(0);
					navigate(`/zodiac/${sign}`);
					return;
				}
				if (item) {
					setValue('');
					setSelectedSuggestionIndex(0);
					navigate(`/card/${item[0]}/${item[1]}`);
				}
			}}
		/>
	);
};

export default Searchbar;
