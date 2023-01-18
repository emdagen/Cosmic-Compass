import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
const container = {
	visible: { rotateY: 0 },
	hidden: { rotateY: 180 },
};
const Card = ({ data, direction }) => {
	const { img, meanings, Numerology, Astrology } = data;
	console.log(meanings[direction]);
	return (
		<StyledCard
			variants={container}
			initial={'hidden'}
			animate={'visible'}
			transition={{ delay: 2, duration: 0.5 }}
		>
			<img src={img.url} />
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
							return <li>{meaning}</li>;
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
	max-width: 350px;
	padding: 32px 32px;
	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	img {
		max-width: 300px;
	}
`;
