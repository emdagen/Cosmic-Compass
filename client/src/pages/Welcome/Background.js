import React from 'react';
import styled from 'styled-components';
import SpaceStars from './SpaceStars';

const Background = () => {
	return (
		<StyledAbsolute>
			<iframe
				src='https://my.spline.design/untitled-cca5b0d86ea58ad6a71f785e9fb41519/'
				frameborder='0'
				width='100%'
				height='100%'
			></iframe>
		</StyledAbsolute>
	);
};

export default Background;

const StyledAbsolute = styled.div`
	position: absolute;
	/* top: 0; */
	/* z-index: -1; */
	/* display: none; */
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	/* background-color: #e8c7dd; */
	&:before {
		content: '';
		width: 145px;
		height: 40px;
		right: 15px;
		bottom: 18px;
		/* background-color: #e8c7dd; */
		position: fixed;
		z-index: 2;
	}
	iframe {
		/* height: 120vh; */
		position: relative;
		z-index: 2;
	}
`;
