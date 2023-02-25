import { useState } from 'react';
import { useEffect } from 'react';
import getHandler from '../utils/http-requests/getHandler';
const { REACT_APP_BACKEND_URL } = process.env;

export const useHoroscope = (zodiac, date) => {
	const [horoscope, setHoroscope] = useState(null);
	useEffect(() => {
		const getHoroscope = async () => {
			const response = await getHandler(
				REACT_APP_BACKEND_URL + `/api/horoscope/${zodiac}/${date}`
			);
			setHoroscope(response.data);
		};
		getHoroscope();
	}, [zodiac, date]);
	return { horoscope };
};

// Ex. const { horoscope } = useHoroscope(zodiac, date);
