import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTarotContext } from '../../hooks/context/useTarotContext';
import Form from './form';

const Tarot = () => {
	const { spreadData } = useTarotContext();
	const navigate = useNavigate();
	console.log(spreadData);
	useEffect(() => {
		spreadData && navigate('/tarot/spread');
	}, [spreadData, navigate]);
	return (
		<div>
			<h2>Tarot Page</h2>
			<Form />
		</div>
	);
};

export default Tarot;
