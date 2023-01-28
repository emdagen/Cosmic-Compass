import React from 'react';
import styled from 'styled-components';

const SpreadTitle = ({ spreadData }) => {
  return (
    <StyledTitle>
      {spreadData &&
        spreadData[0].spreadType
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase())}{' '}
      Spread
    </StyledTitle>
  );
};

const StyledTitle = styled.h2`
  font-size: 32px;
  letter-spacing: 0.2em;
  margin-bottom: 8px;
`;
export default SpreadTitle;
