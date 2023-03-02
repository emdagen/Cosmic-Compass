import { CircularProgress, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Loading = () => {
	return (
		<StyledMain>
			<StyledRelative>
				<StyledContent>
					<Typography variant='h3' component='h3'>
						Loading
					</Typography>
					<CircularProgress />
				</StyledContent>
			</StyledRelative>
		</StyledMain>
	);
};

export default Loading;
const StyledMain = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	height: 100vh;
	width: 100vw;

	backdrop-filter: blur(10px);
	display: flex;
	align-items: center;
	justify-content: center;
	h3 {
		color: #ccc;
	}
`;

const StyledRelative = styled.div`
	position: relative;
`;

const StyledContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;
