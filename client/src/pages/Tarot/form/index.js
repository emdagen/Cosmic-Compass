import React, { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../../hooks/context/useUserContext';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import postHandler from '../../../utils/http-requests/postHandler';
import { useNavigate } from 'react-router';
// import FormInput from '../../../components/form/FormInput';
//MUI Imports
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const { setSpreadData } = useTarotContext();
  const {
    userData: { _id },
  } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.spread) {
        const response = await postHandler('/api/tarot/spread', {
          ...formData,
          _id,
        });
        console.log(response);
        if (response.status === 200) {
          setSpreadData(response.data);
          navigate('/tarot/spread');
          setError(false);
        } else {
          console.log('nooooo', response.message);
        }

        return;
      }
      setError(true);
      console.log(formData);
    } catch (err) {
      setError(true);
      console.log('unable to add spread data');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Please select a spread</h3>
      <label>{!error ? 'required*' : 'try again'}</label>
      {/* <select
				name='spread'
				onChange={(e) => {
					setFormData({ ...formData, spread: e.target.value });
					setError(false);
				}}
				defaultValue={'Select'}
			>
				<option>Select</option>
				<option value='single'>Single</option>
				<option value='three-card'>3 Card</option>
				<option value='five-card'>5 Card</option>
				<option value='seven-card'>7 Card</option>
			</select> */}

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Choose a Spread</InputLabel>
          <Select
            name='spread'
            onChange={(e) => {
              setFormData({ ...formData, spread: e.target.value });
              setError(false);
            }}
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Choose a Spread'
          >
            <MenuItem value='single'>
              1 Card: For instant clarity (yes or no) OR get a vibe check for
              the day
            </MenuItem>
            <MenuItem value='three-card'>
              3 Card: Insight to Past, Present and Future
            </MenuItem>
            <MenuItem value='five-card'>
              5 Card: Determine a course of action OR get a deeper insight to a
              situation
            </MenuItem>
            <MenuItem value='seven-card'>
              7 Card: A detailed overview and potential outcome
            </MenuItem>
          </Select>
          <Button variant='contained' type='submit' sx={{ mt: 2 }}>
            Let's Begin !
          </Button>
        </FormControl>
      </Box>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
