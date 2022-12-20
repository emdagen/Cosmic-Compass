import React from 'react';
import { useUserContext } from '../../hooks/context/useUserContext';
import InitialSetup from '../../pages/InitialSetup.js';
import Home from '../../pages/Home';

const MainContainer = () => {
	const { loadingObj, userData } = useUserContext();
	return (
		<>
			{loadingObj.zodiac !== 'loading' && userData.zodiac ? (
				<Home />
			) : (
				loadingObj.zodiac === 'checked' && <InitialSetup />
			)}
		</>
	);
};

export default MainContainer;
