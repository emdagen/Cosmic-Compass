import React from 'react';
import { useParams } from 'react-router';
import zodiacData from '../../data/zodiacData';

// import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getHandler from '../../utils/http-requests/getHandler';

import { GiDiamonds } from 'react-icons/gi';

//MUI imports
import styled from 'styled-components';

import Grid from '@mui/material/Grid';

const { REACT_APP_BACKEND_URL } = process.env;
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
			const response = await getHandler(
				REACT_APP_BACKEND_URL + `/api/horoscope/${zodiac}/${date}`
			);
			setHoroscope(response.data);
		};
		getHoroscope();
	}, [date, zodiac]);

	console.log(zodiacData[sign]);

	return (
		<div>
			{horoscope && (
				<StyledBox>
					<StyledZodiac>
						<StyledItem>
							{letters.map((letter, index) => (
								<span key={index}>{letter.toUpperCase()}</span>
							))}
						</StyledItem>
					</StyledZodiac>

					<Grid
						container
						spacing={{ xs: 3, md: 2 }}
						columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
						paddingLeft={{ xs: 4, sm: 4 }}
						// justifyContent='center'
						// alignItems='stretch'
						justify='center'
						// align='center'
					>
						<Grid
							item
							xs={6}
							sm={4}
							md={4}
							lg={8}
							// sx={{
							//   display: 'flex',
							//   alignItems: 'center',
							//   justifyContent: 'center',
							// }}
						>
							<div>
								<img
									src={zodiacObj.img.dark.url}
									style={{ maxWidth: '300px' }}
								/>
							</div>
						</Grid>

						<Grid
							item
							xs={6}
							sm={6}
							md={8}
							lg={8}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Grid justify='center'>
								<h2>TODAY'S HOROSCOPE</h2>
								<StyledHoroscope>" {horoscope.description} "</StyledHoroscope>

								<StyledDescription>
									<h2>OVERVIEW</h2>
									<p>{zodiacObj.description}</p>
								</StyledDescription>
							</Grid>
						</Grid>

						<Grid
							item
							xs={12}
							sm={6}
							md={6}
							lg={8}
							sx={{
								mt: 2,
							}}
						>
							<div>
								<h2>CHARACTERISTICS</h2>
								<p>{zodiacObj.dates}</p>
								<p>Symbol: {zodiacObj.symbol}</p>
								<p>Element: {zodiacObj.element}</p>
								<p>Ruling Planet: {zodiacObj.ruling_planet}</p>
							</div>
						</Grid>

						<Grid
							item
							xs={4}
							sm={6}
							md={6}
							lg={8}
							sx={{
								mt: 2,
							}}
						>
							<div>
								<h2>TRAITS</h2>
								{zodiacObj.traits.map((trait) => {
									return (
										<p key={trait}>
											<GiDiamonds /> {trait}
										</p>
									);
								})}
							</div>
						</Grid>
						<Grid
							item
							xs={4}
							sm={6}
							md={6}
							lg={8}
							sx={{
								mt: 2,
							}}
						>
							<div>
								<h2>CAREERS</h2>
								{zodiacObj.careers.map((career) => {
									return (
										<p key={career}>
											<GiDiamonds /> {career}
										</p>
									);
								})}
							</div>
						</Grid>

						<Grid
							item
							xs={4}
							sm={6}
							md={6}
							lg={8}
							sx={{
								mt: 2,
							}}
						>
							<div>
								<h2>FAMOUS {zodiacObj.zodiac.toUpperCase()}</h2>
								{zodiacObj.famous.map((fame) => {
									return (
										<p key={fame}>
											<GiDiamonds /> {fame}
										</p>
									);
								})}
							</div>
						</Grid>
					</Grid>
				</StyledBox>
			)}
		</div>
	);
};

const StyledBox = styled.div`
	display: flex;
	h2 {
		padding-bottom: 8px;
		letter-spacing: 0.1em;
	}
`;

const StyledZodiac = styled.div`
	position: relative;
`;

const StyledItem = styled.p`
	font-size: 48px;
	line-height: 1.3em;

	display: flex;
	flex-direction: column;
	align-items: center;

	position: sticky;
	top: 50%;
	transform: translate(0, -50%);

	padding: 16px;
	margin-top: 60px;
	@media (max-width: 600px) {
		padding: 0;
	}
`;

const StyledDescription = styled.div`
	margin-top: 32px;
`;
// const Item = styled(ListItemText)`
//   padding-bottom: 8px;
// `;

const StyledHoroscope = styled.p`
	font-style: italic;
`;
export default Zodiac;
