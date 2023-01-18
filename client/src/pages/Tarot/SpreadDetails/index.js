import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import { determineIndex } from '../../../utils/determineIndex';
import NextButton from './NextButton';
import Card from '../../../components/Card';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
const SpreadDetails = () => {
	const nextRef = useRef(null);
	const animation = useAnimation();
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
									<StyledCardContainer
										key={card._id}
										direction={direction}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 1 }}
									>
										<h1>{meaning.toUpperCase()}</h1>
										<motion.div
											ref={nextRef}
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 100 }}
											transition={{ duration: 1, delay: 0.6 }}
										>
											<Card data={card} direction={direction} />
										</motion.div>
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

const StyledSpreadDetails = styled(motion.div)`
	display: flex;
	gap: 16px;
`;

const StyledCardContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
	img {
		${(props) => props.direction === 'shadow' && '	transform: rotate(180deg);'}
	}
`;
