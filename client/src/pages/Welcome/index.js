import { Typography } from '@mui/material';
import styled from 'styled-components';
import SignUp from '../../libs/auth0/SignUp';
import Background from './Background';
import { motion } from 'framer-motion';

const Welcome = () => {
	return (
		<>
			<StyledWelcome>
				<StyledInfo
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Typography variant='h1' component='h1' sx={{ fontWeight: 'bold' }}>
						Cosmic
						<br /> <span>Compass</span>
					</Typography>
					<Typography variant='h5' component='p' sx={{ mt: 2 }}>
						Sign up now to access our services
					</Typography>
					<Typography variant='h5' component='p' sx={{ mb: 3, mt: 1 }}>
						Gain a deeper understanding of your place in the universe.
					</Typography>
					<SignUp />
				</StyledInfo>
			</StyledWelcome>
			{/* <Background /> */}
		</>
	);
};

export default Welcome;

const StyledWelcome = styled.div`
	position: relative;
	z-index: 1;

	min-height: 100vh;
	width: 100%;
	max-width: 1024px;
	margin: auto;

	display: flex;
	align-items: center;

	padding: var(--layout-padding);
	visibility: hidden;
`;

const StyledInfo = styled(motion.div)`
	visibility: visible;
	position: relative;
	z-index: 1;
	max-width: 420px;

	color: #ccc;

	pointer-events: none;

	span {
		color: var(--primary);
	}
	button {
		pointer-events: all;
		color: #ccc;
		border-color: #ccc;
		&:hover {
			color: white;
			border-color: white;
		}
	}
`;
