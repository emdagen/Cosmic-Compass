import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import zodiacData from '../../data/zodiacData';
import React, { useEffect, useState } from 'react';

//MUI Imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Icons
import {
  GiBrokenHeart,
  GiLovers,
  GiThreeFriends,
  GiDiamonds,
} from 'react-icons/gi';

const Profile = () => {
  const { userData } = useContext(UserContext);
  const { profileImg, username, zodiac } = userData.data;
  const [horoscope, setHoroscope] = useState(null);
  const date = userData.createdAt;
  const dateFormatted = format(parseISO(date), 'MMM d, yyyy');
  let zodiacInfo = zodiacData[zodiac];

  useEffect(() => {
    const getDailyHoroscope = async () => {
      const res = await fetch(`/api/horoscope/${zodiac}`);
      const json = await res.json();
      setHoroscope(json.data);
      // console.log(horoscope);
    };
    getDailyHoroscope();
  }, []);

  return (
    <StyledPage>
      <StyledContainer>
        <StyledTop>
          <div>
            <h2>{zodiac.toUpperCase()}</h2>
          </div>
          <StyledImage alt='{userData.username}' src={profileImg.url} />
          <div>
            <h3>{username}</h3>
            <h4>Joined {dateFormatted}</h4>
          </div>
        </StyledTop>
        <StyledBottom>
          <StyledOverview>
            <h4>Overview:</h4>
            <p>{zodiacInfo.description}</p>
          </StyledOverview>

          <StyledTraits>
            <div>
              <h4>Characteristics: </h4>
              <p>Dates: {zodiacInfo.dates}</p>
              <p>Symbol: {zodiacInfo.symbol}</p>
              <p>Element: {zodiacInfo.element}</p>
              <p>Modality: {zodiacInfo.modality}</p>
              <p>Ruled by: {zodiacInfo.ruling_planet}</p>
            </div>

            <div>
              <h4>Traits:</h4>
              {zodiacInfo.traits.map((trait) => {
                return (
                  <p key={trait}>
                    <GiDiamonds /> {trait}
                  </p>
                );
              })}
            </div>

            <div>
              <h4>Potential Careers:</h4>
              {zodiacInfo.careers.map((job) => {
                return (
                  <p key={job}>
                    <GiDiamonds /> {job}
                  </p>
                );
              })}
            </div>
          </StyledTraits>

          <div>
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  Friendship <GiThreeFriends />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component='div'>
                  {zodiacInfo.besties.map((friend) => {
                    return <p key={friend}>{friend}</p>;
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography component='div'>
                  Most Compatible <GiLovers />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component='div'>
                  {zodiacInfo.best_match.map((best) => {
                    return <p key={best}>{best}</p>;
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography component='div'>
                  Least Compatible <GiBrokenHeart />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component='div'>
                  {zodiacInfo.worst_match.map((worst) => {
                    return <p key={worst}>{worst}</p>;
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </StyledBottom>
      </StyledContainer>
    </StyledPage>
  );
};
const StyledPage = styled.div``;
const StyledContainer = styled.div`
  padding: 8px;
`;

const StyledTop = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: 100%;
  gap: 16px;
  /* background-image: url('https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdnA5MzMtYXVkaS00NC1hXzEuanBn.jpg');
  background-position: center 5%; */
  h2 {
    letter-spacing: 0.3em;
    /* padding-top: 24px; */
  }
  h3 {
    color: pink;
  }
`;
const StyledImage = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 50%;
`;

const StyledBottom = styled.div``;
const StyledTraits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 16px;
  h4 {
    padding-bottom: 8px;
    color: pink;
  }
  padding-bottom: 24px;
`;
const StyledOverview = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  h4 {
    padding-bottom: 8px;
    color: pink;
  }
`;
export default Profile;
