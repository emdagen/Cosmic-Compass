import React from 'react';
import { useParams } from 'react-router';
import zodiacData from '../../data/zodiacData';

// import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getHandler from '../../utils/http-requests/getHandler';
import { useZodiac } from '../../hooks/useZodiac';

//MUI imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ListItem, ListItemText } from '@mui/material';

const Zodiac = () => {
  const { sign } = useParams();
  const zodiacObj = zodiacData[sign];
  // const { zodiacObj } = useZodiac(sign);
  const zodiacName = zodiacObj.zodiac;
  const letters = zodiacName.split('');
  const [date] = useState('today');
  const [horoscope, setHoroscope] = useState(null);
  let zodiac = zodiacName;

  useEffect(() => {
    const getHoroscope = async () => {
      const response = await getHandler(`/api/horoscope/${zodiac}/${date}`);
      setHoroscope(response.data);
    };
    getHoroscope();
  }, [date, zodiac]);

  console.log(zodiacData[sign]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      {horoscope && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
            <StyledItem>
              {letters.map((letter, index) => (
                <span key={index}>{letter.toUpperCase()}</span>
              ))}
            </StyledItem>
          </Grid>

          <Grid
            container
            spacing={{ xs: 3, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
            paddingLeft={{ xs: 8, md: 2 }}
            justifyContent='center'
            alignItems='stretch'
          >
            <Grid item xs={4} sm={6} md={5} lg={5}>
              <StyledDescription>
                <p>{zodiacObj.dates}</p>
                <p>Symbol: {zodiacObj.symbol}</p>
                <p>Element: {zodiacObj.element}</p>
                <p>Ruling Planet: {zodiacObj.ruling_planet}</p>
              </StyledDescription>
              <StyledDescription>
                <p>{zodiacObj.description}</p>
              </StyledDescription>
              <StyledDescription>
                <h2>TODAY'S HOROSCOPE</h2>
                <StyledHoroscope>" {horoscope.description} "</StyledHoroscope>
              </StyledDescription>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <img
                src={zodiacObj.img.dark.url}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Grid>
            <Grid item xs={4} sm={8} md={9} lg={5}>
              <StyledDescription>
                <h2>TRAITS</h2>
                {zodiacObj.traits.map((trait) => {
                  return <p key={trait}>* {trait}</p>;
                })}
              </StyledDescription>

              <StyledDescription>
                <h2>FAMOUS {zodiacObj.zodiac.toUpperCase()}</h2>
                {zodiacObj.famous.map((fame) => {
                  return <p key={fame}>* {fame}</p>;
                })}
              </StyledDescription>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

const StyledItem = styled(ListItem)`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  font-size: 48px;
  line-height: 1.3em;
  width: fit-content;
  position: absolute;
`;

const StyledDescription = styled(ListItemText)`
  padding-bottom: 16px;
  position: relative;
`;

const StyledHoroscope = styled(ListItemText)`
  font-style: italic;
`;
export default Zodiac;
