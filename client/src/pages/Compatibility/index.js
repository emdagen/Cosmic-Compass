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
import Instructions from './components/Instructions';
const { REACT_APP_BACKEND_URL } = process.env;
const Compatibility = () => {
	const [signX, setSignX] = useState('');
	const [signY, setSignY] = useState('');
	const [matchResults, setMatchResults] = useState(null);

	useEffect(() => {
		const getCompatibility = async () => {
			const response = await getHandler(
				REACT_APP_BACKEND_URL + `/api/compatibility/${signX}/${signY}`
			);
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
		backgroundColor: 'rgb(123,104,238,0.1)',
	};

	return (
		<StyledDiv>
			<StyledDrop>
				<StyledHead>COMPATIBILITY</StyledHead>
				<StyledRow>
					<ZodiacDropdown signState={signX} setSignState={setSignX} />
					<ZodiacDropdown signState={signY} setSignState={setSignY} />
				</StyledRow>
			</StyledDrop>
			<div>
				{!matchResults ? (
					<Instructions signX={signX} signY={signY} />
				) : (
					<StyledContainer>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={3} mt={2}>
								<Grid item xs={12} md={12}>
									<Item style={section}>
										<h3>
											General Compatibility <GiStarsStack />
										</h3>
										<p>{matchResults.default.answer}</p>
									</Item>
								</Grid>
								<Grid item xs={12} md={6}>
									<Item style={section}>
										<h3>
											As a Couple <GiLovers />
										</h3>
										<p>{matchResults.romantic.answer}</p>
									</Item>
								</Grid>
								<Grid item xs={12} md={6}>
									<Item style={section}>
										<h3>
											As Friends <GiThreeFriends />
										</h3>
										<p>{matchResults.friend.answer}</p>
									</Item>
								</Grid>
								<Grid item xs={12} md={6}>
									<Item style={section}>
										<h3>
											As Coworkers <GiModernCity />
										</h3>
										<p>{matchResults.career.answer}</p>
									</Item>
								</Grid>
								<Grid item xs={12} md={6}>
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
							<Accordion style={{ backgroundColor: 'rgb(123,104,238,0.1)' }}>
								<AccordionSummary
									expandIcon={<BiChevronDown />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography component='div'>
										<h4>Most Likely to Cheat</h4>
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography component='div'>
										<p>{matchResults.unfaithful.answer}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion style={{ backgroundColor: 'rgb(123,104,238,0.1)' }}>
								<AccordionSummary
									expandIcon={<BiChevronDown />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography component='div'>
										<h4>Story Time: The Love Affair</h4>
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography component='div'>
										<p>{matchResults.story.answer}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion style={{ backgroundColor: 'rgb(123,104,238,0.1)' }}>
								<AccordionSummary
									expandIcon={<BiChevronDown />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography component='div'>
										<h4>Story Time: Who's the Murderer?</h4>
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography component='div'>
										<p>{matchResults.murder.answer}</p>
									</Typography>
								</AccordionDetails>
							</Accordion>
						</StyledAccordion>
					</StyledContainer>
				)}
			</div>
		</StyledDiv>
	);
};

export default Compatibility;

const StyledDiv = styles.div`
	padding: var(--layout-padding);
`;

const StyledRow = styles.div`
  display: flex;
`;
const StyledContainer = styles.div`
p{
  font-size:16px;
}
  h3{
    padding-bottom:5px;
    font-size:24px;
  }
`;

const StyledAccordion = styles.div`
margin-top:32px
`;

const StyledDrop = styles.div`


display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
h2{
  font-size:40px;
}
`;

const StyledInstruction = styles.h2`
text-align:center;
margin-top:8px;
`;

const StyledHead = styles.h2`
letter-spacing: .2em;
`;
