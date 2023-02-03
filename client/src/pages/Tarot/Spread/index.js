import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import ResetButton from '../components/ResetButton';
import SpreadTitle from './SpreadTitle';
import Button from '@mui/material/Button';
import { tarotButtonProps } from '../style';
import VerticalTitle from './VerticalTitle';
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
			{!activeTarot && (
				<>
					<SpreadTitle spreadData={spreadData} />
					<p>
						Unlock the secrets of your future! Let's see what the stars have in
						store for you, shall we?
					</p>
					<ResetButton />

					<Button
						{...tarotButtonProps}
						onClick={() => handleClick(spreadData[0].card._id, location)}
					>
						Begin Reading
					</Button>
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

	max-width: var(--container-width-limit);
	margin: auto;
	p {
		font-size: 24px;
		font-style: italic;
		text-align: center;
	}
`;
