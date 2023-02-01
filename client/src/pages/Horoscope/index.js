import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../hooks/context/useUserContext';
import getHandler from '../../utils/http-requests/getHandler';
import Spinner from '../../libs/materialUI/Spinner';
import DateDropdown from './components/DateDropdown';
import styled from 'styled-components';
import {
  GiAlienStare,
  GiClover,
  GiHearts,
  GiPocketWatch,
} from 'react-icons/gi';

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

  return (
    <>
      {horoscope ? (
        <StyledContainer>
          <StyledHeader>
            <h2>
              {date.toUpperCase()}'S <br />
              HOROSCOPE <br /> FOR {zodiac.toUpperCase()}
            </h2>
          </StyledHeader>

          <DateDropdown setDate={setDate} />

          <StyledResult>
            <h3>{horoscope.current_date}</h3>
            <StyledHoroscope>{horoscope.description}</StyledHoroscope>
            <StyledHoroscopeInfo>
              <p>
                <GiHearts color='white' /> Compatibilty:{' '}
                {horoscope.compatibility}
              </p>
              <p>
                <GiClover color='white' /> Lucky Number:{' '}
                {horoscope.lucky_number}
              </p>
              <p>
                <GiPocketWatch color='white' /> Lucky Time:{' '}
                {horoscope.lucky_time}
              </p>
              <p>
                <GiAlienStare color='white' /> Mood: {horoscope.mood}
              </p>
            </StyledHoroscopeInfo>
          </StyledResult>
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
    font-size: 40px;
  }
  h3 {
    /* margin-bottom: 16px; */
    font-size: 24px;
  }
  /* p {
    font-size: 16px;
  } */
`;
const StyledHoroscope = styled.p`
  line-height: 1.5em;
  font-size: 32px;
`;
const StyledHoroscopeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 20px;
  letter-spacing: 3px;
  width: fit-content;
`;

const StyledHeader = styled.div`
  padding-top: 32px;
  margin-bottom: 24px;
  /* border: 2px solid yellow; */
  width: fit-content;
  letter-spacing: 3px;
`;
const StyledResult = styled.div`
  /* border: 2px solid orange; */
  padding-top: 32px;
  /* width: 65%; */
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Horoscope;
