import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Background = () => {
	return (
		<StyledAbsolute>
			<iframe
				src='https://my.spline.design/untitled-e657ddac477786bddd43b97ceccfe45a/'
				frameborder='0'
				width='100%'
				height='100%'
			></iframe>
		</StyledAbsolute>
	);
};

export default Background;

const StyledAbsolute = styled.div`
	position: fixed;
	/* top: 0; */
	/* z-index: -1; */
	/* display: none; */
	height: 120vh;
	width: 100vw;

	display: flex;
	align-items: center;
	/* background-color: #e8c7dd; */
`;
