import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardDetails from '../pages/Tarot/SpreadDetails/CardDetails';
import { tarotButtonProps } from '../pages/Tarot/style';
const container = {
	visible: { rotateY: 0 },
	hidden: { rotateY: 180 },
};
const Card = ({ data, direction, containerRef, cardIndex, currentIndex }) => {
	const { img } = data;
	const [expandDetails, setExpandDetails] = useState(false);

	useEffect(() => {
		const scrollLast = async () => {
			await new Promise((res) => setTimeout(res, 500));
			containerRef.current.scrollLeft = containerRef.current?.scrollWidth;
		};
		if (cardIndex === currentIndex && expandDetails === true) {
			scrollLast();
		}
	}, [expandDetails, cardIndex, currentIndex, containerRef]);

	return (
		<StyledMain>
			<StyledCard
				variants={container}
				initial={'hidden'}
				animate={'visible'}
				transition={{ delay: 2, duration: 0.5 }}
			>
				<StyledCardContainer>
					<motion.img
						src={img.url}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						// exit={{ opacity: 0 }}
						transition={{ delay: 2.25, duration: 0 }}
					/>
					<motion.img
						className='back-card'
						src={
							'https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg'
						}
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						// exit={{ opacity: 1 }}
						transition={{ delay: 2.25, duration: 0 }}
					/>
				</StyledCardContainer>
				<StyledButton
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					// exit={{ opacity: 0, y: 0 }}
					transition={{ duration: 1, delay: 2.3 }}
				>
					<Button
						{...tarotButtonProps}
						onClick={async () => {
							//scroll to right if last index match
							setExpandDetails(!expandDetails);
						}}
					>
						More Details
					</Button>
				</StyledButton>
			</StyledCard>

			<motion.div
				initial={{ width: 0 }}
				animate={{ width: expandDetails ? 'auto' : 0 }}
				exit={{ width: 0 }}
				transition={{ duration: 0.5, delay: 0 }}
			>
				<CardDetails
					data={data}
					expandDetails={expandDetails}
					direction={direction}
				/>
			</motion.div>
		</StyledMain>
	);
};

export default Card;

const StyledButton = styled(motion.div)`
	width: 300px;
`;

const StyledCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 32px 32px;
	max-width: var(--container-width-limit);
	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	img {
		width: 300px;
	}
`;

const StyledCardContainer = styled(motion.div)`
	/* border: 1px solid green; */
	position: relative;

	.back-card {
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

const StyledMain = styled(motion.div)`
	display: flex;
	align-items: center;
	border: 1px solid blue;
`;
