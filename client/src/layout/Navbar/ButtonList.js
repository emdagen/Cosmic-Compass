import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../../hooks/context/useUserContext';
import SignInOut from '../../libs/auth0/SignInOut';
import patchHandler from '../../utils/http-requests/patchHandler';

const ButtonList = () => {
	const { userData, setUserData } = useUserContext();
	const { _id, theme } = userData;

	const toggleDarkMode = async () => {
		const mongoResponse = await patchHandler('/api/user/theme', {
			_id,
			theme: !theme,
		});
		setUserData({ ...userData, theme: mongoResponse.theme });
	};

	return (
		<StyledList>
			<Link to='/'>
				<p>Home</p>
			</Link>
			<Link to='/tarot'>
				<p>Tarot</p>
			</Link>
			<Link to='/profile'>
				<p>Profile</p>
			</Link>
			<button onClick={toggleDarkMode}>
				{userData.theme ? 'Dark' : 'Light'}
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
