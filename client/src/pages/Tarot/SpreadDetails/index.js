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
	const containerRef = useRef(null);
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

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollLeft = containerRef.current?.scrollWidth;
		}
	}, [currentIndex]);

	return (
		<>
			{spreadData && (
				<>
					<NextButton
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
					/>
					<StyledContainer>
						<StyledSpreadDetails ref={containerRef}>
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
					</StyledContainer>
				</>
			)}
		</>
	);
};

export default SpreadDetails;

const StyledContainer = styled.div`
	border: 1px solid green;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	/* display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center; */
	/* overflow: hidden; */

	/* overflow-y: scroll; */
`;

const StyledSpreadDetails = styled(motion.div)`
	display: flex;
	/* align-items: flex-start; */
	/* align-items: flex-start; */
	/* justify-content: center; */
	/* justify-content: flex-end; */
	gap: 16px;
	border: 4px solid blue;
	/* width: 100%; */

	overflow-y: scroll;
`;

const StyledCardContainer = styled(motion.div)`
	min-width: 350px;
	/* flex: 1; */
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
	img {
		${(props) => props.direction === 'shadow' && '	transform: rotate(180deg);'}
	}
`;
