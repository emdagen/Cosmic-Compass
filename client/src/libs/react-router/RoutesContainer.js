import React from 'react';
import { Route, Routes } from 'react-router';
import MainContainer from '../../layout/MainContainer';

import { StyledPage } from '../styled-components/StyledPage';

const RoutesContainer = () => {
	return (
		<StyledPage>
			<Routes>
				<Route path='/' element={<MainContainer />} />
			</Routes>
		</StyledPage>
	);
};

export default RoutesContainer;
