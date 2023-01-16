import React from 'react';
import styled from 'styled-components';

const Card = ({ data, direction }) => {
	const { img, meanings, Numerology, Astrology } = data;
	console.log(meanings[direction]);
	return (
		<StyledCard>
			<img src={img.url} />
			<div>
				<h2>Details</h2>
				<h3>{Astrology}</h3>
				{/* <h3>{Numerology}</h3> */}
				<ul>
					{meanings[direction].map((meaning, index) => {
						if (index < 5) {
							return <li>{meaning}</li>;
						} else {
							return null;
						}
					})}
				</ul>
			</div>
		</StyledCard>
	);
};

export default Card;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid purple;
	max-width: 350px;
	padding: 32px 32px;
	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	img {
		max-width: 300px;
	}
`;
