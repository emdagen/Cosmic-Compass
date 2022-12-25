import React from 'react';
import { Route, Routes } from 'react-router';
import CardDetails from '../../pages/CardDetails.js';
import Home from '../../pages/Home';
import Oopsie from '../../pages/Oopsie/index.js';
import Profile from '../../pages/Profile';
import Tarot from '../../pages/Tarot';
import { StyledPage } from '../styled-components/StyledPage';

const RoutesContainer = () => {
	return (
		<StyledPage>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tarot/' element={<Tarot />} />
				<Route path='/card/:name/:_id' element={<CardDetails />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/error' element={<Oopsie />} />
			</Routes>
		</StyledPage>
	);
};

export default RoutesContainer;
