import React, { useEffect, useState } from 'react';
import getHandler from '../../utils/http-requests/getHandler';
import ZodiacDropdown from './components/ZodiacDropdown';
import styled from 'styled-components';
import { zodiacSignsArray } from '../../data/zodiacSignsArray';

const Compatibility = () => {
  const [signX, setSignX] = useState('');
  const [signY, setSignY] = useState('');
  const [matchResults, setMatchResults] = useState(null);
  useEffect(() => {
    const getCompatibility = async () => {
      const response = await getHandler(`/api/compatibility/${signX}/${signY}`);
      console.log(response.data);
      setMatchResults(response.data);
    };
    if (zodiacSignsArray.includes(signX) && zodiacSignsArray.includes(signY)) {
      getCompatibility();
    } else {
      // console.log('no match found');
    }
  }, [signX, signY]);
  // console.log(matchResults);
  return (
    <div>
      <h2>Compatibility</h2>
      <StyledRow>
        <ZodiacDropdown signState={signX} setSignState={setSignX} />
        <ZodiacDropdown signState={signY} setSignState={setSignY} />
      </StyledRow>
      <div>
        {!matchResults ? (
          <h2>Nothing to see here</h2>
        ) : (
          <div>
            <h2>Compatibility Results</h2>
            <h3>General Compatibility:</h3>
            <p>{matchResults.default.answer}</p>
            <h3>Romance:</h3>
            <p>{matchResults.romantic.answer}</p>
            <h3>Friendship:</h3>
            <p>{matchResults.friend.answer}</p>
            <h3>Coworkers:</h3>
            <p>{matchResults.career.answer}</p>
            <h3>Financial Compatibility:</h3>
            <p>{matchResults.financial.answer}</p>
            <h3>Sexual Compatibility:</h3>
            <p>{matchResults.sexually.answer}</p>
            <h3>Pros:</h3>
            {matchResults.positive.answer.map((pro) => {
              return <p>- {pro.toUpperCase()}</p>;
            })}
            <h3>Cons:</h3>
            {matchResults.negative.answer.map((neg) => {
              return <p>- {neg.toUpperCase()}</p>;
            })}
            <h3>Date Ideas:</h3>
            {matchResults.activity_ideas.answer.map((date) => {
              return <p>- {date.toUpperCase()}</p>;
            })}
            <h3>Who's more likely to Cheat..</h3>
            <p>{matchResults.unfaithful.answer}</p>
            <h3>
              The love affair of {signX} & {signY}
            </h3>
            <p>{matchResults.story.answer}</p>
            <h3>Who's the Murderer?</h3>
            <p>{matchResults.murder.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compatibility;

const StyledRow = styled.div`
  display: flex;
`;
