import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../../hooks/context/useUserContext';
import SignInOut from '../../libs/auth0/SignInOut';

const ButtonList = () => {
	const { darkTheme, setDarkTheme } = useUserContext();
	return (
		<StyledList>
			<Link to='/'>
				<p>Home</p>
			</Link>
			<Link to='/past'>
				<p>Past</p>
			</Link>
			<Link to='/profile'>
				<p>Profile</p>
			</Link>
			<button
				onClick={() => {
					setDarkTheme(!darkTheme);
				}}
			>
				{darkTheme ? 'Dark' : 'Light'}
			</button>
			<SignInOut />
		</StyledList>
	);
};

export default ButtonList;

const StyledList = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;
