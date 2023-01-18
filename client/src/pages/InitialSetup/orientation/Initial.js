import { Typography } from '@mui/material';
import { slideProps } from '../../../libs/framer-motion';
import NextStep from './components/NextStep';
import { StyledOrientationContainer } from './styles';

const Initial = () => {
	return (
		<StyledOrientationContainer {...slideProps}>
			<Typography variant='h3' component='h2'>
				Welcome to the
				<br />
				Cosmic Compass!
			</Typography>
			<Typography variant='h5' component='h2'>
				We are excited to have you join us.
			</Typography>
			<NextStep />
		</StyledOrientationContainer>
	);
};

export default Initial;
