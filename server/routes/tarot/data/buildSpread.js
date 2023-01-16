const { tarotHandlers } = require('../../../db/handlers');
const { spreadArray, spreadData } = require('./../data/spreadArray');

const buildSpread = async (spread) => {
	try {
		const spreadArray = Object.keys(spreadData);

		if (spreadArray.includes(spread)) {
			const spreadType = spreadData[spread];
			const { amount, meanings } = spreadType;
			const data = await tarotHandlers.findCards();
			//shuffle cards
			const randomizeCards = data.cards.sort(() => Math.random() - 0.5);
			const spreadCards = randomizeCards.slice(0, amount);
			const determineMeanings = spreadCards.map((card, index) => {
				function randomBoolean(probability) {
					// determines probability out of 100
					//Ex. probability === 70 is 70% true 30% false
					const randomNum = Math.random() * 100;
					return Boolean(Math.round(randomNum) < probability);
				}
				const direction = randomBoolean(70) ? 'light' : 'shadow';
				return {
					spreadType: spread,
					card,
					direction,
					meaning: meanings[index],
				};
			});
			return determineMeanings;
		}
	} catch (err) {
		return console.log("spread key doesn't exist");
	}
};

module.exports = {
	buildSpread,
};
