import { Typography } from '@mui/material';
import styled from 'styled-components';
import SignUp from '../../libs/auth0/SignUp';

const Welcome = () => {
	// #TO DO style sign up page
	// Keep it simple: The signup process should be as straightforward and easy to follow as possible. Avoid using unnecessary fields or information that may distract or confuse the user.

	// Make it visually appealing: Use a clean, attractive layout and choose colors and fonts that are easy to read and visually appealing.

	return (
		<StyledWelcome>
			<Typography variant='h3' component='h2'>
				Cosmic Compass
			</Typography>
			<Typography variant='h5' component='p'>
				Sign up now to access our services and connect with other users.
			</Typography>
			<Typography variant='h5' component='p'>
				Gain a deeper understanding of your place in the universe.
			</Typography>
			<SignUp />
		</StyledWelcome>
	);
};

export default Welcome;

const StyledWelcome = styled.div`
	min-height: 100vh;
	width: 100%;
	max-width: var(--layout-width);
	margin: auto;
	padding: var(--layout-padding);
`;
