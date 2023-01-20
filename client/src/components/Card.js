import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
const container = {
	visible: { rotateY: 0 },
	hidden: { rotateY: 180 },
};
const Card = ({ data, direction }) => {
	const { img, meanings, Astrology } = data;
	return (
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
					exit={{ opacity: 0 }}
					transition={{ delay: 2.25, duration: 0 }}
				/>
				<motion.img
					className='back-card'
					src={
						'https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg'
					}
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 1 }}
					transition={{ delay: 2.25, duration: 0 }}
				/>
			</StyledCardContainer>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 100 }}
				transition={{ duration: 1, delay: 2.3 }}
			>
				<h2>Details</h2>
				<h3>{Astrology}</h3>
				<ul>
					{meanings[direction].map((meaning, index) => {
						if (index < 5) {
							return <li key={index}>{meaning}</li>;
						} else {
							return null;
						}
					})}
				</ul>
			</motion.div>
		</StyledCard>
	);
};

export default Card;

const StyledCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid purple;
	padding: 32px 32px;
	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	img {
		max-width: 450px;
	}
`;

const StyledCardContainer = styled(motion.div)`
	border: 1px solid green;
	position: relative;

	.back-card {
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
`;
