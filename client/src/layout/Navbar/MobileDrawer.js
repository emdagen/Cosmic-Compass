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
			<StyledContent>
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
					sx={{
						// backdropFilter: 'none',
						backgroundColor: 'transparent',
						backgroundImage: 'unset',
						boxShadow: 'unset',
					}}
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
			</StyledContent>
		</StyledBox>
	);
};

export default MobileDrawer;

const StyledBox = styled(Box)`
	backdrop-filter: blur(10px);
	background-color: rgb(84, 90, 167, 0.7);
	color: #ccc;

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
	div#panel1d-header {
		height: 48px;
	}
	h1:hover,
	a:hover {
		color: rgba(0, 0, 0, 0.3);
	}
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	min-height: 100vh;
	padding: var(--layout-padding);
`;

const StyledTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	h1 {
		color: #ccc;
	}
	svg {
		color: #ccc;
		transform: ${(props) => (props.isActive ? 'rotate(90deg)' : '')};
	}
	&:hover {
		h1,
		svg {
			color: rgba(0, 0, 0, 0.3);
		}
	}
`;

const StyledZodiacLink = styled(Link)`
	text-decoration: none;
	color: #ccc;
	/* background-color: #545aa7; */
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
	&:hover {
		p,
		svg {
			color: rgba(0, 0, 0, 0.3);
		}
	}
`;
const StyledLink = styled(Link)`
	text-decoration: none;
	color: #ccc;
	font-size: 2em;
	font-weight: bold;
`;
