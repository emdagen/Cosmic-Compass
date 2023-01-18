import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const shake = {
	x: [-20, 20, -15, 15, -10, 10, 0],
	transition: { duration: 0.6, ease: 'easeInOut' },
};

const FramerShake = ({ children, error }) => {
	console.log(error);
	return <StyledMain animate={error ? shake : {}}>{children}</StyledMain>;
};

export default FramerShake;

const StyledMain = styled(motion.div)`
	width: 100%;
`;
