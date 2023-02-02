import { useState } from 'react';
import { useEffect } from 'react';
import getHandler from '../utils/http-requests/getHandler';

export const useHoroscope = (zodiac, date) => {
  const [horoscope, setHoroscope] = useState(null);
  useEffect(() => {
    const getHoroscope = async () => {
      const response = await getHandler(`/api/horoscope/${zodiac}/${date}`);
      setHoroscope(response.data);
    };
    getHoroscope();
  }, [zodiac, date]);
  return { horoscope };
};

// Ex. const { horoscope } = useHoroscope(zodiac, date);
