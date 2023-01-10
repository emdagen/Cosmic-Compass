import { BiRightArrow } from 'react-icons/bi';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { zodiacIcons } from '../../data/zodiacIcons';
import { useToggleTheme } from '../../hooks/useToggleTheme';
import SignInOut from '../../libs/auth0/SignInOut';

const list = ['Home', 'About', 'Compatibility', 'Horoscope', 'Tarot'];
const MobileDrawer = ({ anchor, debounceCloseDrawer }) => {
	const [toggleDarkMode, theme] = useToggleTheme();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<StyledBox
			sx={{
				width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%',
			}}
			role='presentation'
			onClick={debounceCloseDrawer}
		>
			{list.map((title) => {
				return (
					<StyledLink key={title} to={`/${title}`}>
						{title}
					</StyledLink>
				);
			})}
			<Accordion
				onClick={(e) => e.stopPropagation()}
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<StyledTitle isActive={expanded}>
						<BiRightArrow />
						<h1>Zodiac</h1>
					</StyledTitle>
				</AccordionSummary>
				<AccordionDetails>
					{zodiacIcons.map((zodiac, i) => {
						return (
							<StyledZodiacLink
								key={zodiac.sign}
								to={`/zodiac/${zodiac.sign.toLowerCase()}`}
								onClick={debounceCloseDrawer}
							>
								{zodiac.icon()}
								<p>{zodiac.sign}</p>
							</StyledZodiacLink>
						);
					})}
				</AccordionDetails>
			</Accordion>
			<h1 onClick={toggleDarkMode}>{theme ? 'Light' : 'Dark'} mode</h1>
			<StyledLink to={`/profile`}>Profile</StyledLink>
			<SignInOut />
		</StyledBox>
	);
};

export default MobileDrawer;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #ccc;
	font-size: 2em;
	font-weight: bold;
`;

const StyledZodiacLink = styled(Link)`
	text-decoration: none;
	color: #ccc;

	display: flex;
	align-items: center;
	gap: 16px;
	padding: 4px 4px;
	p {
		font-size: 18px;
	}
	svg {
		height: 25px;
		width: 25px;
	}
`;

const StyledBox = styled(Box)`
	height: 100%;
	background-color: none;
	color: #ccc;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;

	h1,
	p {
		cursor: pointer;
	}

	/* .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded, */
	.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root {
		min-height: 0;
	}

	.css-1elwnq4-MuiPaper-root-MuiAccordion-root {
		all: unset;

		.css-o4b71y-MuiAccordionSummary-content.Mui-expanded,
		.css-o4b71y-MuiAccordionSummary-content {
			margin: 0;
		}
	}
`;

const StyledTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	svg {
		transform: ${(props) => (props.isActive ? 'rotate(90deg)' : '')};
	}
`;
