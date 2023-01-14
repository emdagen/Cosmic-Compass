import React from 'react';
import { Route, Routes } from 'react-router';
import { useUserContext } from '../../hooks/context/useUserContext';
import CardDetails from '../../pages/CardDetails';
import Home from '../../pages/Home';
import Oopsie from '../../pages/Oopsie';
import Profile from '../../pages/Profile';
import Tarot from '../../pages/Tarot';
import Zodiac from '../../pages/Zodiac';
import Compatibility from '../../pages/Compatibility';
import { StyledPage } from '../styled-components/StyledPage';
import Spread from '../../pages/Tarot/Spread';

const RoutesContainer = () => {
	const { loadingObj, userData } = useUserContext();
	return (
		<StyledPage>
			<Routes>
				<Route path='/' element={<Home />} />
				{loadingObj.zodiac !== 'loading' && userData.setup === 'Completed' && (
					<>
						<Route path='/tarot/' element={<Tarot />} />
						<Route path='/tarot/spread' element={<Spread />} />
						<Route path='/card/:name/:_id' element={<CardDetails />} />
						<Route path='/zodiac/:sign' element={<Zodiac />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/compatibility' element={<Compatibility />} />
					</>
				)}
				<Route path='*' element={<Home />} />
				<Route path='/error' element={<Oopsie />} />
			</Routes>
		</StyledPage>
	);
};

export default RoutesContainer;
