import { useCollectCard } from './hooks/useCollectCard';
import styled from 'styled-components';

const CardDetails = () => {
  //CardInfo is all the data about the searched Data
  const cardInfo = useCollectCard();
  // #TO DO
  // take the cardInfo and display data from all the keys
  console.log(cardInfo);
  return (
    <div>
      {!cardInfo ? (
        <h1>Loading</h1>
      ) : (
        <StyledContainer>
          <StyledCardName>{cardInfo.name}</StyledCardName>
          <StyledImg src={cardInfo.img.url} alt={cardInfo.name} />
          <h3>Arcana: {cardInfo.arcana}</h3>
          <h3>Suit: {cardInfo.suit}</h3>
          <h3>Mythical Meaning:</h3>
          <p>{cardInfo['Mythical/Spiritual']}</p>
          <h3>Element: {cardInfo.Elemental}</h3>
          <h3>General Meaning:</h3>
          {cardInfo.fortune_telling.map((general) => {
            return <p>{general} </p>;
          })}
          <h3>Meaning:</h3>
          {cardInfo.meanings.light.map((light) => {
            return <p>{light} </p>;
          })}
          <h3>Reversed Meaning:</h3>
          {cardInfo.meanings.shadow.map((reverse) => {
            return <p>{reverse} </p>;
          })}
        </StyledContainer>
      )}
    </div>
  );
};

const StyledContainer = styled.div``;
const StyledCardName = styled.h1`
  text-align: center;
`;
const StyledImg = styled.img``;
export default CardDetails;
