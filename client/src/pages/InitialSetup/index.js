import React from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../hooks/context/useUserContext';

import Orientation1 from './orientation/Orientation1';
import Orientation2 from './orientation/Orientation2';
import OrientationFinal from './orientation/OrientationFinal';

const InitialSetup = () => {
	const {
		userData: { setup },
	} = useUserContext();
	console.log(setup);

	//array of pages to loop through
	const arrayOfSteps = [
		<Orientation1 />,
		<Orientation2 />,
		<OrientationFinal />,
	];

	return (
		<StyledInit>
			{arrayOfSteps.map((step, index) => {
				if (index === setup) {
					//conditionally render the page
					return <React.Fragment key={index}> {step} </React.Fragment>;
				} else {
					return null;
				}
			})}
		</StyledInit>
	);
};

export default InitialSetup;
const StyledInit = styled.div`
	/* background-color: black; */
	border: 1px solid yellow;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
`;
