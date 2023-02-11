import { useTheme } from '@mui/material';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../../../libs/styled-components/GlobalStyles';

const VerticalTitle = ({ spreadData }) => {
  const string = spreadData[0].spreadType.replace('-', ' ');
  const array = string.toUpperCase().split('');
  const primary = useTheme().palette.primary.main;
  return (
    <StyledVertical primary={primary}>
      <StyledContainer>
        {array.map((letter, index) => {
          return (
            <StyledLetter index={index} key={index}>
              {letter}
            </StyledLetter>
          );
        })}
      </StyledContainer>
    </StyledVertical>
  );
};

export default VerticalTitle;

const StyledVertical = styled.div`
  position: relative;
`;

const breatheAnimation = keyframes`
 0% { opacity: 0; }
 16% { opacity: 0; }
 100% { opacity: 1; }
`;

const StyledLetter = styled.h2`
  min-height: 24px;
  animation-name: ${breatheAnimation};
  animation-duration: ${(props) => {
    const delay = props.index / 4;
    return delay;
  }}s;
`;

const StyledContainer = styled.div`
  padding: 0 var(--sm-padding) var(--lg-padding);

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: var(--container-height);
  position: sticky;
  top: 0;

  @media ${device.mobile} {
    padding: 0 var(--lg-padding) var(--lg-padding);
  }
`;
