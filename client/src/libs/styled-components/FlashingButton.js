import styled, { keyframes } from 'styled-components';
import Button from '@mui/material/Button';

const flashAnimation = keyframes`
  0% {
    background-color: #545AA7
  }
  50% {
    background-color:#7179e5;
  }
  100% {
    background-color: #545AA7
  }
`;

export const FlashingButton = styled(Button)`
	animation: ${flashAnimation} 2s ease-in-out infinite;
	/* animation-delay: 1s; */
	&:hover {
		animation-play-state: paused;
	}
`;

export const GlowingButton = styled(Button)`
	-webkit-box-shadow: 0px 0px 40px 3px rgba(84, 89, 167, 0.9);
	-moz-box-shadow: 0px 0px 35px 3px rgba(84, 89, 167, 0.9);
	box-shadow: 0px 0px 35px 3px rgba(84, 89, 167, 0.9) !important;
	z-index: -1;
`;
