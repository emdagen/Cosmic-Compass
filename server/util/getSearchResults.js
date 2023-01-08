const { tarotHandlers } = require('../db/handlers');
const zodiacSigns = require('../data/zodiacSigns');

const getSearchResults = async (req, res) => {
	try {
		const list = {};
		//Setup Zodiac Info
		const arrayOfKeys = Object.keys(zodiacSigns);
		function capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
		arrayOfKeys.forEach((zodiac) => {
			const uppercase = capitalizeFirstLetter(zodiac);
			list[uppercase] = zodiac;
		});

		//Setup Tarot Cards Info
		const data = await tarotHandlers.findCards();
		data.cards.forEach((info) => {
			const { _id, name } = info;
			list[name] = _id;
		});

		//alphabetize the objects by key
		const ordered = Object.keys(list)
			.sort()
			.reduce((obj, key) => {
				obj[key] = list[key];
				return obj;
			}, {});

		res
			.status(200)
			.json({ status: 200, message: 'Got all results!!', data: ordered });
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: 'Unable to collect cards!!',
		});
	}
};

module.exports = getSearchResults;
