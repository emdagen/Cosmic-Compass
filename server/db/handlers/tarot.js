const { Tarot } = require('../models');

const findCards = async () => {
	const cards = await Tarot.findAll();
	return {
		cards,
	};
};

const getCard = async (id) => {
	const card = await Tarot.findOne(id);
	return {
		card,
	};
};

module.exports = {
	findCards,
	getCard,
};
