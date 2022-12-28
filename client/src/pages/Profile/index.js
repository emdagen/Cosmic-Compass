import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import zodiacData from '../../data/zodiacData';
import getHandler from '../../utils/http-requests/getHandler';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const { userData } = useContext(UserContext);
  const { profileImg, username, zodiac } = userData.data;
  const [horoscope, setHoroscope] = useState(null);
  const date = userData.createdAt;
  const dateFormatted = format(parseISO(date), 'MMM d, yyyy');
  let zodiacInfo = zodiacData[zodiac];

  // useEffect(() => {
  //   const getHoroscope = async () => {
  //     const response = await getHandler(
  //       `https://ohmanda.com/api/horoscope/${zodiac}`
  //     );
  //     setHoroscope(response.data);
  //     console.log(horoscope);
  //   };
  //   getHoroscope();
  // }, []);

  // console.log(userData);

  // console.log(zodiacInfo);

  return (
    <>
      {userData && (
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
