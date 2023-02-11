import React, { useState } from 'react';
import styled from 'styled-components';
//MUI Imports
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { tarotButtonProps } from '../style';
import FramerShake from '../../../libs/framer-motion/FramerShake';
import { useTheme } from '@mui/material';
import { useSelectReading } from '../hook/useSelectReading';
import useDebounce from '../../../hooks/useDebounce';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const errorTheme = useTheme().palette.error;
  const handleSelectReading = useSelectReading(formData, setError);
  const debounceReading = useDebounce(handleSelectReading);
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        debounceReading();
      }}
      error={error}
      errorTheme={errorTheme}
    >
      <h3>Please select a spread</h3>
      <label>{!error ? 'required*' : 'try again'}</label>
      <FramerShake error={error}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth error={error}>
            <Select
              displayEmpty
              placeholder='Which will it be?'
              defaultValue={''}
              onChange={(e) => {
                setFormData({ ...formData, spread: e.target.value });
                setError(false);
              }}
              input={<OutlinedInput />}
            >
              <MenuItem disabled value=''>
                <em>Choose your tarot spread wisely </em>
              </MenuItem>
              <MenuItem value='single'>
                <StyledCard>1 Card</StyledCard>: For instant clarity (yes or no)
              </MenuItem>
              <MenuItem value='three-card'>
                <StyledCard>3 Card</StyledCard>: Insight to Past, Present &
                Future
              </MenuItem>
              <MenuItem value='five-card'>
                <StyledCard>5 Card</StyledCard>: Determine a course of action
              </MenuItem>
              <MenuItem value='seven-card'>
                <StyledCard>7 Card</StyledCard>: A detailed overview
              </MenuItem>
            </Select>
            <Button type='submit' {...tarotButtonProps}>
              Let's Begin !
            </Button>
          </FormControl>
        </Box>
      </FramerShake>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  ${(props) => {
    console.log(props.errorTheme);
    if (props.error) return 'color:' + props.errorTheme.main + ';';
  }}
  em,svg {
    ${(props) => {
      if (props.error) return 'color:' + props.errorTheme.main + ';';
    }}
  }
`;
const StyledCard = styled.span`
  font-weight: bold;
`;
