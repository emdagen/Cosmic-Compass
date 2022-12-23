import React from 'react';
import { useUserContext } from '../../hooks/context/useUserContext';
import InitialSetup from '../../pages/InitialSetup';
import Horoscope from '../../pages/Horoscope';

const Home = () => {
	const { loadingObj, userData } = useUserContext();
	return (
		<>
			{loadingObj.zodiac !== 'loading' && userData.setup === 'Completed' ? (
				<Horoscope />
			) : (
				loadingObj.zodiac === 'checked' && <InitialSetup />
			)}
		</>
	);
};

export default Home;
