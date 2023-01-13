import { Typography } from '@mui/material';
import { useUserContext } from '../../../hooks/context/useUserContext';
import NextStep from './components/NextStep';
import { StyledOrientationContainer } from './styles';

const Greeting = () => {
	const {
		userData: { data },
	} = useUserContext();
	const { username } = data;

	return (
		<StyledOrientationContainer>
			<Typography variant='h3' component='h2'>
				Nice to meet you {username}
			</Typography>
			<Typography variant='h5' component='h2'>
				Let's navigate the stars together
			</Typography>
			<NextStep />
		</StyledOrientationContainer>
	);
};

export default Greeting;
