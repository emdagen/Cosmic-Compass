import React from 'react';
import styled from 'styled-components';

const Suggestion = ({
  searchValue,
  suggestion,
  isSelected,
  index,
  ...delegated
}) => {
  return (
    <StyledSuggestion
      className={isSelected ? 'selected' : undefined}
      {...delegated}
    >
      {suggestion}
    </StyledSuggestion>
  );
};

export default Suggestion;

const StyledSuggestion = styled.div`
  padding: 8px;
  color: #000;
  backdrop-filter: blur(10px);
  background-color: rgba(84, 90, 167, 0.7);
  &.selected {
    background: #545aa7;
  }
`;
