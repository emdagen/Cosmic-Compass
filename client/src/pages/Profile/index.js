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
  GiPolarStar,
  GiThreeFriends,
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
      console.log(horoscope);
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
            <h4>{dateFormatted}</h4>
          </div>
        </StyledTop>
        <StyledBottom>
          <StyledTraits>
            <h4>Characteristics: </h4>
            <div>
              <p>Dates: {zodiacInfo.dates}</p>
              <p>Symbol: {zodiacInfo.symbol}</p>
              <p>Element: {zodiacInfo.element}</p>
              <p>Modality: {zodiacInfo.modality}</p>
              <p>Ruled by: {zodiacInfo.ruling_planet}</p>
            </div>
            <h4>Traits:</h4>
            <div>
              {zodiacInfo.traits.map((trait) => {
                return (
                  <p>
                    <GiPolarStar /> {trait}
                  </p>
                );
              })}
            </div>
            <h4>Potential Careers:</h4>
            <div>
              {zodiacInfo.careers.map((job) => {
                return (
                  <p>
                    <GiPolarStar /> {job}
                  </p>
                );
              })}
            </div>
          </StyledTraits>
          <StyledOverview>
            <h4>Overview:</h4>
            <p>{zodiacInfo.description}</p>
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
                  <Typography>
                    {zodiacInfo.besties.map((friend) => {
                      return <p>{friend}</p>;
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
                  <Typography>
                    Most Compatible <GiLovers />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {zodiacInfo.best_match.map((best) => {
                      return <p>{best}</p>;
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
                  <Typography>
                    Least Compatible <GiBrokenHeart />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {zodiacInfo.worst_match.map((worst) => {
                      return <p>{worst}</p>;
                    })}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </StyledOverview>
        </StyledBottom>
      </StyledContainer>
    </StyledPage>
  );
};
const StyledPage = styled.div`
  padding: 32px 64px;
`;
const StyledContainer = styled.div`
  border: 2px solid white;
  /* h4 {
    text-align: center;
  } */
`;
const StyledTop = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: 100%;
  background-image: url('https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdnA5MzMtYXVkaS00NC1hXzEuanBn.jpg');
  background-position: center 5%;
`;
const StyledImage = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 50%;
`;

const StyledBottom = styled.div`
  /* border: 3px solid pink; */
  background-color: #303030;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;
const StyledTraits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 2px solid green; */
  padding: 16px;
  width: 50%;
  gap: 8px;
`;
const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 16px;
`;
export default Profile;
