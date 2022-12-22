import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import { StyledPage } from '../styled-components/StyledPage';

const RoutesContainer = () => {
	return (
		<StyledPage>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</StyledPage>
	);
};

export default RoutesContainer;
