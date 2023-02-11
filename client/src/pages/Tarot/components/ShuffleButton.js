import React from 'react';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import Button from '@mui/material/Button';
import { tarotButtonProps } from '../style';
import { useSelectReading } from '../hook/useSelectReading';
import { useState } from 'react';
import ShuffleModel from './ShuffleModel';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import useDebounce from '../../../hooks/useDebounce';

const ShuffleButton = () => {
  const { spreadData } = useTarotContext();
  const [error, setError] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const spread = spreadData[0].spreadType;
  const handleSelectReading = useSelectReading({ spread }, setError);
  const handleShuffle = async () => {
    await handleSelectReading();
    setShuffle(true);
    await new Promise((r) => setTimeout(r, 3000));
    setShuffle(false);
  };
  const debounceShuffle = useDebounce(handleShuffle);
  return (
    <>
      <AnimatePresence>{shuffle && <ShuffleModel />}</AnimatePresence>
      {error && <p>There was an error shuffling the cards</p>}
      <Button onClick={debounceShuffle} {...tarotButtonProps}>
        Shuffle Cards
      </Button>
    </>
  );
};

export default ShuffleButton;

const StyledForm = styled.form`
  width: 100%;
`;
