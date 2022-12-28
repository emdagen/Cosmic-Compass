const { compatibilityHandlers } = require('../../db/handlers');

const getAllCompatibility = async (req, res) => {
	try {
		const data = await compatibilityHandlers.verifyCompatibility();

		res
			.status(200)
			.json({ status: 200, message: 'Got all matches!!', data: data });
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: 'Unable to collect matches!!',
		});
	}
};

const getMatchData = async (req, res) => {
	try {
		const data = await compatibilityHandlers.findMatches(req.params);
		res.status(200).json({
			status: 200,
			message: 'Got compatibility data!!',
			data: { ...data.results },
		});
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: 'Unable to collect compatibility data!!',
		});
	}
};

module.exports = {
	getAllCompatibility,
	getMatchData,
};
