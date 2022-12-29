import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import zodiacData from '../../data/zodiacData';
import React, { useEffect, useState } from 'react';

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
    <>
      {userData && horoscope && (
        <StyledContainer>
          <h2>Profile</h2>
          <StyledProfilePic>
            <ProfilePic src={profileImg.url} />
          </StyledProfilePic>
          <StyledUser>
            <StyledDetails>{username}</StyledDetails>
            <StyledDetails>Joined: {dateFormatted}</StyledDetails>
          </StyledUser>
          <StyledDetails>{zodiac.toUpperCase()}</StyledDetails>
          <p>Daily Horoscope:</p>
          <p>{horoscope.horoscope}</p>
          <p>{zodiacInfo.dates}</p>
          <p>{zodiacInfo.symbol}</p>
          <p>{zodiacInfo.element}</p>
          <p>{zodiacInfo.modality}</p>
          <p>{zodiacInfo.ruling_planet}</p>
          <p>Traits:</p>
          {zodiacInfo.traits.map((trait) => {
            return <p>{trait}</p>;
          })}
          <p>Potential Careers:</p>
          {zodiacInfo.careers.map((job) => {
            return <p>{job}</p>;
          })}
          <p>Best Friends:</p>
          {zodiacInfo.besties.map((friend) => {
            return <p>{friend}</p>;
          })}
          <p>Top Matches:</p>
          {zodiacInfo.best_match.map((best) => {
            return <p>{best}</p>;
          })}
          <p>Worst Matches:</p>
          {zodiacInfo.worst_match.map((worst) => {
            return <p>{worst}</p>;
          })}
        </StyledContainer>
      )}
    </>
  );
};

const StyledContainer = styled.div``;
const StyledProfilePic = styled.div``;
const StyledDetails = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
const ProfilePic = styled.img`
  width: 200px;
`;
const StyledUser = styled.div``;
export default Profile;
