import React from 'react';
import styled from 'styled-components';
import BirthdayForm from './BirthdayForm';

const InitialSetup = () => {
	return (
		<StyledInit>
			<BirthdayForm />
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
