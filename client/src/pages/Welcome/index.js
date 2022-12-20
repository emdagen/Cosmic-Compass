import styled from 'styled-components';
import SignUp from '../../libs/auth0/SignUp';

const Welcome = () => {
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
	max-width: var(--layout-width);
	margin: auto;
	padding: var(--layout-padding);
	border: 1px solid purple;
`;
