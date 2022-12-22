import React from 'react';
import { useUserContext } from '../../hooks/context/useUserContext';
import InitialSetup from '../../pages/InitialSetup.js';
import Horoscope from '../../pages/Horoscope';

const Home = () => {
	const { loadingObj, userData } = useUserContext();
	return (
		<>
			{loadingObj.zodiac !== 'loading' && userData.zodiac ? (
				<Horoscope />
			) : (
				loadingObj.zodiac === 'checked' && <InitialSetup />
			)}
		</>
	);
};

export default Home;
