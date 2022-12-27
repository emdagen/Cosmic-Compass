import styled from 'styled-components';
import SignUp from '../../libs/auth0/SignUp';

const Welcome = () => {
	// #TO DO style sign up page
	// Keep it simple: The signup process should be as straightforward and easy to follow as possible. Avoid using unnecessary fields or information that may distract or confuse the user.

	// Make it visually appealing: Use a clean, attractive layout and choose colors and fonts that are easy to read and visually appealing.

	return (
		<StyledWelcome>
			<h1>SignUp page</h1>
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
	border: 1px solid purple;
`;
