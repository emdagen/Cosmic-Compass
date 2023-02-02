import React from 'react';
import { useParams } from 'react-router';
import zodiacData from '../../data/zodiacData';
import styled from 'styled-components';
import image from '../../data/images/gemini_dark.jpeg';
import { useEffect, useState } from 'react';
import getHandler from '../../utils/http-requests/getHandler';
import { useZodiac } from '../../hooks/useZodiac';

const Zodiac = () => {
  const { sign } = useParams();
  const zodiacObj = zodiacData[sign];
  // const { zodiacObj } = useZodiac(sign);
  const zodiacName = zodiacObj.zodiac;
  const letters = zodiacName.split('');
  const [date] = useState('today');
  const [horoscope, setHoroscope] = useState(null);
  let zodiac = zodiacName;

  useEffect(() => {
    const getHoroscope = async () => {
      const response = await getHandler(`/api/horoscope/${zodiac}/${date}`);
      setHoroscope(response.data);
    };
    getHoroscope();
  }, [date, zodiac]);

  // console.log(zodiacData);
  return (
    <div>
      {horoscope && (
        <StyledContainer>
          <StyledSign>
            {letters.map((letter, index) => (
              <span key={index}>{letter.toUpperCase()}</span>
            ))}
          </StyledSign>
          <StyledDescription>
            <div>
              <p>{zodiacObj.description}</p>
            </div>
            <div>
              <StyledHead>TODAY'S HOROSCOPE</StyledHead>
              <StyledHoroscope>"{horoscope.description}"</StyledHoroscope>
            </div>
          </StyledDescription>
          <StyledGenInfo>
            {/* TODO Img will be dynamic once entered in db */}
            <StyledCard src={image} />
            <div>
              <p>{zodiacObj.dates}</p>
              <p>Symbol: {zodiacObj.symbol}</p>
              <p>Element: {zodiacObj.element}</p>
              <p>Ruling Planet: {zodiacObj.ruling_planet}</p>
            </div>
          </StyledGenInfo>
          <StyledTrait>
            <div>
              <StyledHead>TRAITS</StyledHead>
              {zodiacObj.traits.map((trait) => {
                return <p key={trait}>* {trait}</p>;
              })}
            </div>
            <div>
              <StyledHead>FAMOUS {zodiacObj.zodiac.toUpperCase()}</StyledHead>
              <p>
                {zodiacObj.famous.map((fame) => {
                  return <p key={fame}>*{fame}</p>;
                })}
              </p>
            </div>
          </StyledTrait>
        </StyledContainer>
      )}
    </div>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 16px;
  justify-content: space-between;
  line-height: 1.3em;
  font-size: 20px;
`;

const StyledSign = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: fit-content;
  text-align: center;
  font-size: 48px;
  line-height: 1.3em;
  /* border: 2px solid yellow; */
  justify-content: center;
  /* flex-basis: 25%; */
`;
const StyledDescription = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const StyledGenInfo = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  align-items: center;
`;
const StyledTrait = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const StyledCard = styled.img`
  /* width: 30%; */
`;
const StyledHead = styled.p`
  margin-bottom: 8px;
`;
const StyledHoroscope = styled.p`
  font-style: italic;
  letter-spacing: 2px;
`;

export default Zodiac;
