import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import ResetButton from '../components/ResetButton';
import SpreadTitle from './SpreadTitle';

const Spread = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { spreadData, activeTarot } = useTarotContext();

	// console.log(location.pathname);

	useEffect(() => {
		if (spreadData === null) {
			navigate('/tarot');
		}
	}, [spreadData, navigate]);

	const handleClick = (path, location) => {
		navigate(path, { state: { background: location } });
	};

	return (
		<StyledSpread>
			<SpreadTitle spreadData={spreadData} />
			{!activeTarot && (
				<>
					<p>Will You Seek the Truth?</p>
					<ResetButton />
					<button onClick={() => handleClick(spreadData[0].card._id, location)}>
						Begin Reading
					</button>
				</>
			)}
		</StyledSpread>
	);
};

export default Spread;

const StyledSpread = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
