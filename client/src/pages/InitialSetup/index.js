import React from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../hooks/context/useUserContext';
import Beautiful from './orientation/Beautiful';
import Greeting from './orientation/Greeting';
import Initial from './orientation/Initial';

import Orientation1 from './orientation/Orientation1';
import Orientation2 from './orientation/Orientation2';
import OrientationFinal from './orientation/OrientationFinal';

const InitialSetup = () => {
	const {
		userData: { setup },
	} = useUserContext();
	// console.log(setup);

	//array of pages to loop through
	const arrayOfSteps = [
		<Initial />,
		<Orientation1 />,
		<Greeting />,
		<Orientation2 />,
		<Beautiful />,
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
	border: 1px solid #ccc;
	border-radius: 8px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;

	max-width: 500px;
	margin: auto;
	padding: 32px;

	color: #ccc;
	h2 {
		text-align: center;
	}
	button {
		border-color: white;
		color: white;
	}
`;
