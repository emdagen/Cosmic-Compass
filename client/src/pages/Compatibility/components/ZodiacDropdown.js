import React, { useState } from 'react';
import { zodiacSignsArray } from '../../../data/zodiacSignsArray';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const names = zodiacSignsArray;

const getStyles = (name, sign, theme) => {
  return {
    fontWeight:
      sign.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const ZodiacDropdown = ({ signState, setSignState }) => {
  const theme = useTheme();
  const [sign] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setSignState(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, mt: 3 }}>
        <Select
          displayEmpty
          value={signState}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value=''>
            <em>Select a Sign</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, sign, theme)}
            >
              {name.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ZodiacDropdown;
