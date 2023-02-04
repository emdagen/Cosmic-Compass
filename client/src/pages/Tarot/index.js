import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTarotContext } from '../../hooks/context/useTarotContext';
import Form from './form';
import styled from 'styled-components';

const Tarot = () => {
	const { spreadData } = useTarotContext();
	const navigate = useNavigate();

	useEffect(() => {
		spreadData && navigate('/tarot/spread');
	}, [spreadData, navigate]);
	return (
		<StyledTarot>
			<h2>Cosmic Tarot</h2>
			<p>
				Want to tap into the power of the unknown and get a fresh perspective on
				your current situation? Let's do a tarot reading and discover what the
				universe has in store for you. It's like having your own personal
				crystal ball.
			</p>
			<Form />
		</StyledTarot>
	);
};

const StyledTarot = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin: auto;
	max-width: var(--container-width-limit);
	text-align: center;
	h2 {
		font-size: 32px;
		text-align: center;
		letter-spacing: 0.5em;
	}
	p {
		font-size: 24px;
		font-style: italic;
		line-height: 1.5em;
	}
`;
export default Tarot;
