import styled from 'styled-components';
import Searchbar from '../../components/searchbar/index';
import ButtonList from './ButtonList';
import { useTarotContext } from '../../hooks/context/useTarotContext';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Navbar = () => {
	const [value, setValue] = useState('');
	const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
	const { tarotList } = useTarotContext();
	const cardNames = Object.entries(tarotList);
	const navigate = useNavigate();

	return (
		<StyledNavbar>
			<StyledTitle>Brand Name</StyledTitle>
			<Searchbar
				value={value}
				setValue={setValue}
				selectedSuggestionIndex={selectedSuggestionIndex}
				setSelectedSuggestionIndex={setSelectedSuggestionIndex}
				suggestions={cardNames}
				handleSelect={(item) => {
					if (item) {
						setValue('');
						setSelectedSuggestionIndex(0);
						navigate(`/card/${item[0]}/${item[1]}`);
					}
				}}
			/>
			<ButtonList />
		</StyledNavbar>
	);
};

export default Navbar;

const StyledNavbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid green;
	height: var(--nav-height);
	padding: 8px 16px;
`;

const StyledTitle = styled.h2``;
