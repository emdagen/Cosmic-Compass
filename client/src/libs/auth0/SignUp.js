import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';
import { buttonProps } from '../../pages/InitialSetup/orientation/styles';

const SignUp = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Button onClick={loginWithRedirect} {...buttonProps} sx={{ mt: 2 }}>
			Sign Up
		</Button>
	);
};

export default SignUp;
