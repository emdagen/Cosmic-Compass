import { Typography } from '@mui/material';
import styled from 'styled-components';
import SignUp from '../../libs/auth0/SignUp';
import Background from './Background';
import SpaceStars from './SpaceStars';

const Welcome = () => {
	// #TO DO style sign up page
	// Keep it simple: The signup process should be as straightforward and easy to follow as possible. Avoid using unnecessary fields or information that may distract or confuse the user.

	// Make it visually appealing: Use a clean, attractive layout and choose colors and fonts that are easy to read and visually appealing.

	return (
		<>
			<StyledWelcome>
				<StyledInfo>
					<Typography variant='h1' component='h1' sx={{ fontWeight: 'bold' }}>
						Cosmic
						<br /> <span>Compass</span>
					</Typography>
					<Typography variant='h5' component='p' sx={{ mt: 2 }}>
						Sign up now to access our services
					</Typography>
					<Typography variant='h5' component='p' sx={{ mb: 3, mt: 1 }}>
						Gain a deeper understanding of your place in the universe.
					</Typography>
					<SignUp />
				</StyledInfo>
			</StyledWelcome>
			<SpaceStars />
		</>
	);
};

export default Welcome;

const StyledWelcome = styled.div`
	position: relative;
	z-index: 1;

	min-height: 100vh;
	width: 100%;
	max-width: 1024px;
	margin: auto;

	display: flex;
	align-items: center;

	padding: var(--layout-padding);
`;

const StyledInfo = styled.div`
	position: relative;
	z-index: 1;
	max-width: 420px;

	color: #ccc;

	span {
		color: var(--primary);
	}
	button {
		color: #ccc;
		border-color: #ccc;
		&:hover {
			color: white;
			border-color: white;
		}
	}
`;
