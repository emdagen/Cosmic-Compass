import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import { determineIndex } from '../../../utils/determineIndex';
import NextButton from './NextButton';
import Card from '../../../components/Card';

const SpreadDetails = () => {
	const { _id } = useParams();
	const { spreadData, setActiveTarot } = useTarotContext();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		setActiveTarot(true);
		spreadData && setCurrentIndex(determineIndex(spreadData, _id));
		return () => {
			setActiveTarot(false);
		};
	}, [spreadData, _id, setActiveTarot]);

	return (
		<>
			{spreadData && (
				<>
					<StyledSpreadDetails>
						{spreadData.map((data, index) => {
							const { card, meaning, direction } = data;

							if (currentIndex >= index) {
								return (
									<StyledCardContainer key={card._id} direction={direction}>
										<h1>{meaning.toUpperCase()}</h1>
										<Card data={card} direction={direction} />
									</StyledCardContainer>
								);
							} else return null;
						})}
					</StyledSpreadDetails>
					<NextButton
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
					/>
				</>
			)}
		</>
	);
};

export default SpreadDetails;

const StyledSpreadDetails = styled.div`
	display: flex;
	gap: 16px;
`;

const StyledCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
	img {
		${(props) => props.direction === 'shadow' && '	transform: rotate(180deg);'}
	}
`;
