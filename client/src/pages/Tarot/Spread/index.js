import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTarotContext } from '../../../hooks/context/useTarotContext';

const Spread = () => {
	const { spreadData, setSpreadData } = useTarotContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (spreadData === null) {
			console.log('hello');
			navigate('/tarot');
		}
	}, [spreadData, navigate]);

	const handleReset = () => {
		setSpreadData(null);
	};
	return (
		<div>
			<h2>Spread</h2>
			<button onClick={handleReset}>Clear</button>
			<div>
				{spreadData &&
					spreadData.map((data) => {
						const { card, meaning } = data;
						return (
							<div key={card._id}>
								<h3>{card.name}</h3>
								<p>{meaning}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Spread;
