import { CircularProgress, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { slideUpProps } from '../../../libs/framer-motion';

import Checkmark from './Checkmark';

const ShuffleModel = () => {
	const [complete, setComplete] = useState(false);
	const handleCheck = async () => {
		await new Promise((r) => setTimeout(r, 1800));
		setComplete(true);
	};
	useEffect(() => {
		handleCheck();
	}, []);

	return (
		<StyledMain {...slideUpProps}>
			<StyledRelative>
				<AnimatePresence>
					{!complete && (
						<StyledContent
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Typography variant='h3' component='h3'>
								Shuffling
							</Typography>
							<CircularProgress />
						</StyledContent>
					)}
				</AnimatePresence>
				{complete && <Checkmark size={'200'} />}
			</StyledRelative>
		</StyledMain>
	);
};

export default ShuffleModel;
const StyledMain = styled(motion.div)`
	position: fixed;
	top: 0;
	z-index: 10;
	height: 100vh;
	width: 100vw;
	/* background-color: #545aa7; */
	backdrop-filter: blur(10px);
	display: flex;
	align-items: center;
	justify-content: center;

	.flex {
		display: flex;
		flex-direction: column;
		align-items: centers;
		justify-content: center;
	}
`;

const StyledRelative = styled.div`
	position: relative;
`;

const StyledContent = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;
