import { useCollectCard } from './hooks/useCollectCard';
import styled from 'styled-components';
import { GiDiamonds } from 'react-icons/gi';

const CardDetails = () => {
	//CardInfo is all the data about the searched Data
	const cardInfo = useCollectCard();
	// console.log(cardInfo);

	return (
		<div>
			{!cardInfo ? (
				<h1>Loading</h1>
			) : (
				<StyledPage>
					<h1 className='desktop-title'>{cardInfo.name}</h1>
					<StyledCard>
						<StyledImg>
							<img src={cardInfo.img.url} alt={cardInfo.name} />
						</StyledImg>
					</StyledCard>
					<StyledInfo>
						<StyledCardName>{cardInfo.name}</StyledCardName>
						<h3>
							Arcana: <StyledSpan> {cardInfo.arcana}</StyledSpan>
						</h3>
						<h3>
							Suit: <StyledSpan>{cardInfo.suit}</StyledSpan>
						</h3>
						<h3>
							Element: <StyledSpan>{cardInfo.Elemental}</StyledSpan>
						</h3>
						<h3>Mythical Meaning:</h3>
						<p>{cardInfo['Mythical/Spiritual']}</p>

						<h3>Overview:</h3>
						{cardInfo.fortune_telling.map((general) => {
							return (
								<p key={general}>
									<GiDiamonds color='pink' /> {general}
								</p>
							);
						})}
						<h3>Meaning:</h3>
						{cardInfo.meanings.light.map((light) => {
							return (
								<p key={light}>
									{' '}
									<GiDiamonds color='pink' /> {light}{' '}
								</p>
							);
						})}
						<h3>Reversed Meaning:</h3>
						{cardInfo.meanings.shadow.map((reverse) => {
							return (
								<p key={reverse}>
									{' '}
									<GiDiamonds color='pink' /> {reverse}{' '}
								</p>
							);
						})}
					</StyledInfo>
				</StyledPage>
			)}
		</div>
	);
};

const StyledPage = styled.div`
	position: relative;

	display: flex;
	justify-content: center;
	gap: 60px;
	padding-top: 50px;

	height: 100%;
	.desktop-title {
		display: none;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		gap: 32px;
		align-items: center;
		padding-top: 0px;
		.desktop-title {
			display: block;
		}
	}
`;

const StyledCardName = styled.h1`
	text-align: center;
	letter-spacing: 0.3em;
`;

const StyledCard = styled.div`
	flex: 1;
	position: relative;
	min-width: 200px;
	width: 100%;
	max-width: 300px;
`;

const StyledImg = styled.div`
	min-width: 200px;
	width: 100%;
	max-width: 300px;

	position: relative;
	height: 100%;
	img {
		position: sticky;
		top: 80px;
		/* transform: translate(0, -50%); */
		@media (max-width: 600px) {
			position: relative;
			top: 0;
			transform: unset;
		}
	}
`;

const StyledInfo = styled.div`
	flex: 1;
	gap: 16px;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
	@media (max-width: 600px) {
		h1 {
			display: none;
		}
	}
`;

const StyledSpan = styled.span`
	font-size: 16px;
	letter-spacing: 0.2em;
	color: pink;
`;
export default CardDetails;
