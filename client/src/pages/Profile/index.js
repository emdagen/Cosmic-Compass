import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData.name);
  const date = userData.createdAt;
  const dateFormatted = format(parseISO(date), 'MMM d, yyyy');

  return (
    <StyledContainer>
      <h2>Profile</h2>
      <StyledProfilePic>
        <img src={userData.picture} />
      </StyledProfilePic>
      <StyledDetails>{userData.nickname}</StyledDetails>
      <StyledDetails>{userData.zodiac.toUpperCase()}</StyledDetails>
      <StyledDetails>Joined: {dateFormatted}</StyledDetails>
    </StyledContainer>
  );
};
const StyledContainer = styled.div``;
const StyledProfilePic = styled.div``;
const StyledDetails = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
export default Profile;
