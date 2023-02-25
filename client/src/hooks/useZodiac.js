import { useState } from 'react';
import { useEffect } from 'react';
import getHandler from '../utils/http-requests/getHandler';
const { REACT_APP_BACKEND_URL } = process.env;
export const useZodiac = (sign) => {
	const [zodiac, setZodiac] = useState(null);
	console.log('hello');
	useEffect(() => {
		const getZodiac = async () => {
			console.log(sign);
			const response = await getHandler(
				REACT_APP_BACKEND_URL + `/api/zodiac/${sign}`
			);
			setZodiac(response.data);
		};
		getZodiac();
	}, [sign]);
	return { zodiacObj: zodiac };
};

// Ex. const { horoscope } = useHoroscope(zodiac, date);
