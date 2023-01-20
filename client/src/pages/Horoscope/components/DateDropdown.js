import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const DateDropdown = ({ setDate }) => {
  const [value, setValue] = React.useState('today');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDate(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
      >
        <Tab value='today' label='Today' />
        <Tab value='tomorrow' label='Tomorrow' />
        <Tab value='yesterday' label='Yesterday' />
      </Tabs>
    </Box>
  );
};

export default DateDropdown;
