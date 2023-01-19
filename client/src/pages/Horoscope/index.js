import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../hooks/context/useUserContext';
import getHandler from '../../utils/http-requests/getHandler';
import Spinner from '../../libs/materialUI/Spinner';
import DateDropdown from './components/DateDropdown';
import styled from 'styled-components';

const Horoscope = () => {
	const [date, setDate] = useState('today');
	const [horoscope, setHoroscope] = useState(null);
	const {
		userData: {
			data: { zodiac },
		},
	} = useUserContext();

	useEffect(() => {
		const getHoroscope = async () => {
			const response = await getHandler(`/api/horoscope/${zodiac}/${date}`);
			setHoroscope(response.data);
		};
		getHoroscope();
	}, [date]);

	console.log(horoscope);

	return (
		<>
			{horoscope ? (
				<StyledContainer>
					<h2>
						{date.toUpperCase()}'s Horoscope for {zodiac.toUpperCase()}
					</h2>
					<h3>{horoscope.current_date}</h3>
					<DateDropdown setDate={setDate} />
					<StyledHoroscope>{horoscope.description}</StyledHoroscope>
					<StyledHoroscopeInfo>
						<p>Compatibilty: {horoscope.compatibility}</p>
						<p>Lucky Number: {horoscope.lucky_number}</p>
						<p>Lucky Time: {horoscope.lucky_time}</p>
						<p>Mood: {horoscope.mood}</p>
					</StyledHoroscopeInfo>
				</StyledContainer>
			) : (
				<Spinner />
			)}
		</>
	);
};
const StyledContainer = styled.div`
	h2 {
		margin-bottom: 16px;
	}
	h3 {
		margin-bottom: 16px;
	}
`;
const StyledHoroscope = styled.p`
	margin-top: 16px;
	margin-bottom: 16px;
`;
const StyledHoroscopeInfo = styled.div`
	display: grid;
	grid-template-columns: 2fr 2fr;
	gap: 16px;
`;
export default Horoscope;
