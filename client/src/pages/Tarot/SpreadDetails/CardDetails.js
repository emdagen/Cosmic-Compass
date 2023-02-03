import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const CardDetails = ({ expandDetails, data, direction }) => {
	const { meanings, Astrology, name } = data;

	return (
		<>
			<AnimatePresence>
				{expandDetails ? (
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, delay: 0 }}
						// expandDetails={expandDetails}
					>
						<StyledDetails>
							<h2>{name}</h2>
							<h3>{Astrology}</h3>
							{meanings[direction].map((meaning, index) => {
								if (index < 5) {
									return <p key={index}>{meaning}</p>;
								} else {
									return null;
								}
							})}
						</StyledDetails>
					</motion.div>
				) : null}
			</AnimatePresence>
		</>
	);
};

export default CardDetails;

const StyledDetails = styled(motion.div)`
	width: 250px;
	padding: 32px 0;
	${(props) => {
		console.log(props.expandDetails);
	}}
`;
