import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useTarotContext } from '../../../hooks/context/useTarotContext';
import { determineIndex } from '../../../utils/determineIndex';
import NextButton from './NextButton';
import Card from '../../../components/Card';
import { motion } from 'framer-motion';
import VerticalTitle from '../Spread/VerticalTitle';
import { device } from '../../../libs/styled-components/GlobalStyles';
const SpreadDetails = () => {
	const nextRef = useRef(null);
	const containerRef = useRef(null);
	const { _id } = useParams();
	const { spreadData, setActiveTarot, activeTarot } = useTarotContext();
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
			{activeTarot && spreadData && (
				<StyledBox>
					<VerticalTitle spreadData={spreadData} />
					<NextButton
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
					/>
					<StyledContainer spreadData={spreadData}>
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
											// exit={{ opacity: 0 }}
											transition={{ duration: 0.5 }}
										>
											<h1>{meaning.toUpperCase()}</h1>
											<motion.div
												ref={nextRef}
												initial={{ opacity: 0, y: 100 }}
												animate={{ opacity: 1, y: 0 }}
												// exit={{ opacity: 0, y: 100 }}
												transition={{ duration: 1, delay: 0.6 }}
											>
												<Card
													data={card}
													cardIndex={index}
													currentIndex={currentIndex}
													direction={direction}
													containerRef={containerRef}
												/>
											</motion.div>
										</StyledCardContainer>
									);
								} else return null;
							})}
						</StyledSpreadDetails>
					</StyledContainer>
				</StyledBox>
			)}
		</>
	);
};

export default SpreadDetails;

const StyledBox = styled.div`
	display: flex;
`;
const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	overflow-y: scroll;
	${(props) => {
		if (props.spreadData[0].spreadType === 'single') {
			return 'width: 100%';
		}
	}}
`;

const StyledSpreadDetails = styled(motion.div)`
	display: flex;
	gap: 16px;
	overflow-y: hidden;
`;

const StyledCardContainer = styled(motion.div)`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	h1 {
		width: 300px;
		margin: 0 var(--sm-padding);
		text-align: center;
	}
	img {
		${(props) =>
			props.direction === 'shadow'
				? '	transform: rotate(180deg);'
				: 'transform: rotate(0deg);'}
	}
	.back-card {
		${(props) =>
			props.direction === 'shadow'
				? '	transform: scaleX(-1) rotate(180deg);'
				: 'transform: scaleX(-1) rotate(0deg);'}
	}
	@media ${device.mobile} {
		h1 {
			width: 300px;
			margin: 0 32px;

			text-align: center;
		}
	}
`;
