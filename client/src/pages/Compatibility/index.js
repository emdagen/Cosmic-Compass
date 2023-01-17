import React, { useEffect, useState } from 'react';
import getHandler from '../../utils/http-requests/getHandler';
import ZodiacDropdown from './components/ZodiacDropdown';
import styles from 'styled-components';
import { zodiacSignsArray } from '../../data/zodiacSignsArray';

//MUI Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

//ReactIcon Imports
import {
  GiLovers,
  GiModernCity,
  GiSmallFire,
  GiStarsStack,
  GiTakeMyMoney,
  GiThreeFriends,
} from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';

//TODO display signs astro card, once in data //
const Compatibility = () => {
  const [signX, setSignX] = useState('');
  const [signY, setSignY] = useState('');
  const [matchResults, setMatchResults] = useState(null);
  useEffect(() => {
    const getCompatibility = async () => {
      const response = await getHandler(`/api/compatibility/${signX}/${signY}`);
      console.log(response.data);
      setMatchResults(response.data);
    };
    if (zodiacSignsArray.includes(signX) && zodiacSignsArray.includes(signY)) {
      getCompatibility();
    } else {
      // console.log('no match found');
    }
  }, [signX, signY]);
  // console.log(matchResults);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const section = {
    height: '100%',
    padding: 16,
    backgroundColor: '#fff',
  };

  return (
    <div>
      <StyledDrop>
        <h2>Compatibility</h2>
        <StyledRow>
          <ZodiacDropdown signState={signX} setSignState={setSignX} />
          <ZodiacDropdown signState={signY} setSignState={setSignY} />
        </StyledRow>
      </StyledDrop>
      <div>
        {!matchResults ? (
          <StyledInstruction>
            Please Select your sign and your partners sign
          </StyledInstruction>
        ) : (
          <StyledContainer>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Item style={section}>
                    <h3>
                      General Compatibility <GiStarsStack />
                    </h3>
                    <p>{matchResults.default.answer}</p>
                  </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Item style={section}>
                    <h3>
                      As a Couple <GiLovers />
                    </h3>
                    <p>{matchResults.romantic.answer}</p>
                  </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Item style={section}>
                    <h3>
                      As Friends <GiThreeFriends />
                    </h3>
                    <p>{matchResults.friend.answer}</p>
                  </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Item style={section}>
                    <h3>
                      As Coworkers <GiModernCity />
                    </h3>
                    <p>{matchResults.career.answer}</p>
                  </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Item style={section}>
                    <h3>
                      Let's Talk Money <GiTakeMyMoney color='green' />
                    </h3>
                    <p>{matchResults.financial.answer}</p>
                  </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Item style={section}>
                    <h3>
                      Sexual Chemistry <GiSmallFire color='red' />
                    </h3>
                    <p>{matchResults.sexually.answer}</p>
                  </Item>
                </Grid>
              </Grid>
            </Box>
            <StyledAccordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<BiChevronDown />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>
                    <h4>Most Likely to Cheat</h4>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>{matchResults.unfaithful.answer}</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<BiChevronDown />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>
                    <h4>Story Time: The Love Affair</h4>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>{matchResults.story.answer}</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<BiChevronDown />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>
                    <h4>Story Time: Who's the Murderer?</h4>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>{matchResults.murder.answer}</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </StyledAccordion>
          </StyledContainer>
        )}
      </div>
    </div>
  );
};

export default Compatibility;

const StyledRow = styles.div`
  display: flex;
`;
const StyledContainer = styles.div`
  padding: 64px;
  h3{
    padding-bottom:5px;
  }
`;

const StyledAccordion = styles.div`
margin-top:32px
`;

const StyledDrop = styles.div`
margin-top:64px;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`;

const StyledInstruction = styles.h2`
text-align:center;
margin-top:8px;
`;
