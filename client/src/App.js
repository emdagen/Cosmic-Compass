//🚔 Only touch the Navbar, RoutesContainer & Welcome components

import { useAuth0 } from '@auth0/auth0-react';
import Welcome from './pages/Welcome';
import Spinner from './libs/materialUI/Spinner';
import GlobalStyle from './libs/styled-components/GlobalStyles';
import styled from 'styled-components';
import Navbar from './layout/Navbar';
import RoutesContainer from './libs/react-router/RoutesContainer';
import { useUserContext } from './hooks/context/useUserContext';
import { useInitializeUser } from './libs/auth0/hooks/useInitializeUser';
import { themeObject } from './data/theme';

const App = () => {
	const { loadingObj, userData } = useUserContext();
	const { isAuthenticated, isLoading } = useAuth0();
	useInitializeUser(); //will create or get user data
	const theme = userData?.theme ? themeObject.dark : themeObject.light;

	return (
		<StyledApp>
			<GlobalStyle theme={theme} />
			{isAuthenticated && loadingObj.user === 'verify' ? (
				<>
					<Navbar />
					<RoutesContainer />
				</>
			) : !isLoading && loadingObj.user === 'loading' ? (
				loadingObj.user === 'verify' || isAuthenticated ? (
					<Spinner />
				) : (
					<Welcome />
				)
			) : (
				<Spinner />
			)}
		</StyledApp>
	);
};

export default App;

const StyledApp = styled.div`
	min-height: 100vh;
`;
