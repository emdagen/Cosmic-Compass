import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
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
import SpreadDetails from '../../pages/Tarot/SpreadDetails';

const RoutesContainer = () => {
	const location = useLocation();
	const background = location.state && location.state.background;
	const { loadingObj, userData } = useUserContext();
	return (
		<StyledPage>
			<Routes location={background || location}>
				<Route path='/' element={<Home />} />
				{loadingObj.zodiac !== 'loading' && userData.setup === 'Completed' && (
					<>
						<Route path='/tarot/' element={<Tarot />} />
						<Route path='/tarot/spread' element={<Spread />}>
							<Route path='/tarot/spread/:_id' element={<SpreadDetails />} />
						</Route>
						<Route path='/card/:name/:_id' element={<CardDetails />} />
						<Route path='/zodiac/:sign' element={<Zodiac />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/compatibility' element={<Compatibility />} />
					</>
				)}
				<Route path='*' element={<Home />} />
				<Route path='/error' element={<Oopsie />} />
			</Routes>
			{background && (
				<Routes>
					<Route path='/tarot/spread/:_id' element={<SpreadDetails />} />
				</Routes>
			)}
		</StyledPage>
	);
};

export default RoutesContainer;
