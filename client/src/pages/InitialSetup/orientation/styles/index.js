import { motion } from 'framer-motion';
import styled from 'styled-components';

export const buttonProps = {
	fullWidth: true,
	size: 'large',
	variant: 'outlined',
};

export const StyledOrientationContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	/* border: 1px solid black; */
	border-radius: 8px;
	/* padding: 32px; */
`;

export const StyledOrientationTitle = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;
