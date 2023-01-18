import { Typography } from '@mui/material';
import NextStep from './components/NextStep';
import { StyledOrientationContainer } from './styles';
import DynamicTitle from './components/DynamicTitle';
import { complimentArray } from './data';
import { slideProps } from '../../../libs/framer-motion';

const Beautiful = () => {
	return (
		<StyledOrientationContainer {...slideProps}>
			<DynamicTitle strArray={complimentArray} />

			<Typography variant='h5' component='h2'>
				Almost there, one more question
			</Typography>
			<NextStep placeholder={'Last Step'} />
		</StyledOrientationContainer>
	);
};

export default Beautiful;
