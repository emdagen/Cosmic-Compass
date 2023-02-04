import { useCollectCard } from './hooks/useCollectCard';
import styled from 'styled-components';
import { GiDiamonds } from 'react-icons/gi';

const CardDetails = () => {
  //CardInfo is all the data about the searched Data
  const cardInfo = useCollectCard();
  // console.log(cardInfo);

  return (
    <div>
      {!cardInfo ? (
        <h1>Loading</h1>
      ) : (
        <StyledContainer>
          <StyledCardName>{cardInfo.name}</StyledCardName>
          <StyledPage>
            <StyledCard>
              <StyledImg src={cardInfo.img.url} alt={cardInfo.name} />
            </StyledCard>
            <StyledInfo>
              <h3>
                Arcana: <StyledSpan> {cardInfo.arcana}</StyledSpan>
              </h3>
              <h3>
                Suit: <StyledSpan>{cardInfo.suit}</StyledSpan>
              </h3>
              <h3>
                Element: <StyledSpan>{cardInfo.Elemental}</StyledSpan>
              </h3>
              <h3>Mythical Meaning:</h3>
              <p>{cardInfo['Mythical/Spiritual']}</p>

              <h3>Overview:</h3>
              {cardInfo.fortune_telling.map((general) => {
                return (
                  <p key={general}>
                    <GiDiamonds color='pink' /> {general}
                  </p>
                );
              })}
              <h3>Meaning:</h3>
              {cardInfo.meanings.light.map((light) => {
                return (
                  <p key={light}>
                    {' '}
                    <GiDiamonds color='pink' /> {light}{' '}
                  </p>
                );
              })}
              <h3>Reversed Meaning:</h3>
              {cardInfo.meanings.shadow.map((reverse) => {
                return (
                  <p key={reverse}>
                    {' '}
                    <GiDiamonds color='pink' /> {reverse}{' '}
                  </p>
                );
              })}
            </StyledInfo>
          </StyledPage>
        </StyledContainer>
      )}
    </div>
  );
};

const StyledContainer = styled.div``;

const StyledCardName = styled.h1`
  text-align: center;
  letter-spacing: 0.3em;
`;

const StyledImg = styled.img`
  max-width: 300px;
  min-width: 200px;
  width: 100%;
  max-height: 400px;
  min-height: 300px;
`;

const StyledCard = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 25%;
  position: sticky;
  top: 50%;
  transform: translate(0, -50%);
  overflow: hidden;
`;

const StyledInfo = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  width: 60%;
  /* text-align: center; */
  /* border: 2px solid pink; */
`;

const StyledPage = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 50px;
  /* border: 2px solid orange; */
  justify-content: space-evenly;
`;

const StyledSpan = styled.span`
  font-size: 16px;
  letter-spacing: 0.2em;
  color: pink;
`;
export default CardDetails;
