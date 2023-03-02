import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import zodiacData from '../../data/zodiacData';
import React, { useEffect, useState } from 'react';

//MUI Imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Icons
import {
	GiBrokenHeart,
	GiLovers,
	GiThreeFriends,
	GiDiamonds,
} from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';
const { REACT_APP_BACKEND_URL } = process.env;
const Profile = () => {
	const { userData } = useContext(UserContext);
	const { profileImg, username, zodiac } = userData.data;
	const [horoscope, setHoroscope] = useState(null);
	const date = userData.createdAt;
	const dateFormatted = format(parseISO(date), 'MMM d, yyyy');
	let zodiacInfo = zodiacData[zodiac];

	useEffect(() => {
		const getDailyHoroscope = async () => {
			const res = await fetch(
				REACT_APP_BACKEND_URL + `/api/horoscope/${zodiac}`
			);
			const json = await res.json();
			setHoroscope(json.data);
			// console.log(horoscope);
		};
		getDailyHoroscope();
	}, []);

	return (
		<StyledContainer>
			<StyledTop>
				<div>
					<h2>{zodiac.toUpperCase()}</h2>
				</div>

				<StyledImage>
					<img alt='{userData.username}' src={profileImg.url} />
				</StyledImage>
				<div>
					<h3>{username}</h3>
					<h4>Joined {dateFormatted}</h4>
				</div>
			</StyledTop>
			<StyledBottom>
				<StyledOverview>
					<h4>Overview:</h4>
					<p>{zodiacInfo.description}</p>
				</StyledOverview>

				<StyledTraits>
					<div>
						<h4>Characteristics: </h4>
						<p>Dates: {zodiacInfo.dates}</p>
						<p>Symbol: {zodiacInfo.symbol}</p>
						<p>Element: {zodiacInfo.element}</p>
						<p>Modality: {zodiacInfo.modality}</p>
						<p>Ruled by: {zodiacInfo.ruling_planet}</p>
					</div>

					<div>
						<h4>Traits:</h4>
						{zodiacInfo.traits.map((trait) => {
							return (
								<p key={trait}>
									<GiDiamonds /> {trait}
								</p>
							);
						})}
					</div>

					<div>
						<h4>Potential Careers:</h4>
						{zodiacInfo.careers.map((job) => {
							return (
								<p key={job}>
									<GiDiamonds /> {job}
								</p>
							);
						})}
					</div>
				</StyledTraits>

				<div>
					<Accordion style={{ backgroundColor: 'rgb(123,104,238,0.1)' }}>
						<AccordionSummary
							expandIcon={<BiChevronDown />}
							aria-controls='panel1a-content'
							id='panel1a-header'
						>
							<Typography>
								Friendship <GiThreeFriends />
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component='div'>
								{zodiacInfo.besties.map((friend) => {
									return <p key={friend}>{friend}</p>;
								})}
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
								Most Compatible <GiLovers />
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component='div'>
								{zodiacInfo.best_match.map((best) => {
									return <p key={best}>{best}</p>;
								})}
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
								Least Compatible <GiBrokenHeart />
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component='div'>
								{zodiacInfo.worst_match.map((worst) => {
									return <p key={worst}>{worst}</p>;
								})}
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</StyledBottom>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	padding: var(--layout-padding);
`;

const StyledTop = styled.div`
	display: flex;
	text-align: center;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 50%;
	width: 100%;
	gap: 16px;
	h2 {
		letter-spacing: 0.2em;
		font-size: 40px;
	}
	h3 {
		color: rgb(123, 104, 238);
	}
`;
const StyledImage = styled.div`
	width: 190px;
	height: 190px;
	border-radius: 50%;
	background: linear-gradient(145deg, #5a60b3, #4c5196);
	box-shadow: 8px 8px 16px #444987, -8px -8px 16px #646bc7;
	overflow: hidden;
	img {
		transform: scale(1.1);
	}
`;

const StyledBottom = styled.div``;
const StyledTraits = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	gap: 16px;
	h4 {
		padding-bottom: 8px;
		color: #545aa7;
		font-size: 24px;
	}
	padding-bottom: 24px;
`;
const StyledOverview = styled.div`
	padding-top: 24px;
	padding-bottom: 24px;
	text-align: center;
	h4 {
		padding-bottom: 8px;
		color: #545aa7;
		font-size: 24px;
	}
`;
export default Profile;
