import React from 'react';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import Button from '@mui/material/Button';

const ResetButton = () => {
  const { setSpreadData } = useTarotContext();
  const handleReset = () => {
    setSpreadData(null);
  };

  return (
    <Button variant='contained' onClick={handleReset} sx={{ m: 2 }}>
      Reset Selection
    </Button>
  );
};

export default ResetButton;
