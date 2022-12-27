import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../hooks/context/useUserContext';
import getHandler from '../../utils/http-requests/getHandler';
import Spinner from '../../libs/materialUI/Spinner';
import DateDropdown from './components/DateDropdown';

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

	// #TO DO render the horoscope data
	// console.log(horoscope);

	return (
		<>
			{horoscope ? (
				<div>
					<h1>
						{date}'s' Horoscope for {zodiac.toUpperCase()}
					</h1>
					<h3>Date</h3>
					<h3>{horoscope.current_date}</h3>
					<DateDropdown setDate={setDate} />
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Horoscope;
