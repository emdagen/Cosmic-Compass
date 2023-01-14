const { tarotHandlers } = require('../../db/handlers');
const { buildSpread } = require('./data/buildSpread');
const { spreadArray, spreadData } = require('./data/spreadArray');

const getAllCards = async (req, res) => {
	try {
		const data = await tarotHandlers.findCards();

		res
			.status(200)
			.json({ status: 200, message: 'Got all cards!!', data: data.cards });
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: 'Unable to collect cards!!',
		});
	}
};

const getCardList = async (req, res) => {
	try {
		const data = await tarotHandlers.findCards();
		const list = {};
		data.cards.forEach((info) => {
			const { _id, name } = info;
			list[name] = _id;
		});

		res
			.status(200)
			.json({ status: 200, message: 'Got all cards!!', data: list });
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: 'Unable to collect cards!!',
		});
	}
};

const getSingleCard = async (req, res) => {
	const { _id } = req.params;
	try {
		const data = await tarotHandlers.getCard(_id);

		res
			.status(200)
			.json({ status: 200, message: 'Got single card!!', data: data.card });
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: 'Unable to collect card!!',
		});
	}
};

const createTarotSpread = async (req, res) => {
	const { spread } = req.body;
	try {
		const spreadData = await buildSpread(spread);

		res.status(200).json({
			status: 200,
			message: 'Created Tarot Spread Data',
			data: spreadData,
		});
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: 'Unable to create tarot spread!!',
		});
	}
};

module.exports = {
	getAllCards,
	getCardList,
	getSingleCard,
	createTarotSpread,
};
