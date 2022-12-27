import { useCollectCard } from './hooks/useCollectCard';

const CardDetails = () => {
	//CardInfo is all the data about the searched Data
	const cardInfo = useCollectCard();
	// #TO DO
	// take the cardInfo and display data from all the keys
	// console.log(cardInfo);
	return (
		<div>
			{!cardInfo ? (
				<h1>Loading</h1>
			) : (
				<div>
					<h1>{cardInfo.name}</h1>
					<img src={cardInfo.img.url} alt={cardInfo.name} />
				</div>
			)}
		</div>
	);
};

export default CardDetails;
