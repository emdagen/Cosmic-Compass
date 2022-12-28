import React, { useEffect, useState } from 'react';
import getHandler from '../../utils/http-requests/getHandler';
import ZodiacDropdown from './components/ZodiacDropdown';
import styled from 'styled-components';
import { zodiacSignsArray } from '../../data/zodiacSignsArray';

const Compatibility = () => {
	const [signX, setSignX] = useState('');
	const [signY, setSignY] = useState('');
	const [matchResults, setMatchResults] = useState(null);
	useEffect(() => {
		const getCompatibility = async () => {
			const response = await getHandler(`/api/compatibility/${signX}/${signY}`);
			console.log(response.data);
			setMatchResults(Object.entries(response.data));
		};
		if (zodiacSignsArray.includes(signX) && zodiacSignsArray.includes(signY)) {
			getCompatibility();
		} else {
			// console.log('no match found');
		}
	}, [signX, signY]);
	return (
		<div>
			<h2>Compatibility</h2>
			<StyledRow>
				<ZodiacDropdown signState={signX} setSignState={setSignX} />
				<ZodiacDropdown signState={signY} setSignState={setSignY} />
			</StyledRow>
			<div>
				{!matchResults ? (
					<h2>Nothing to see here</h2>
				) : (
					<div>
						<h3>Party time</h3>
						{matchResults.map((entry, index) => {
							return (
								<div key={entry[1].question}>
									<h2>{entry[0]}</h2>
									<p>{entry[1].answer}</p>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Compatibility;

const StyledRow = styled.div`
	display: flex;
`;
