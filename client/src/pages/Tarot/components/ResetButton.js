import React from 'react';

import useDebounce from '../../../hooks/useDebounce';
import Button from '@mui/material/Button';
import { tarotButtonProps } from '../style';
import { useReset } from '../hook/useReset';

const ResetButton = () => {
  const handleReset = useReset();
  const debounceReset = useDebounce(handleReset);

  return (
    <Button onClick={debounceReset} {...tarotButtonProps}>
      Reset Selection
    </Button>
  );
};

export default ResetButton;
