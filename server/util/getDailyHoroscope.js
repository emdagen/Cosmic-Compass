const axios = require('axios');

const getDailyHoroscope = async (req, res) => {
	const { zodiac } = req.params;
	try {
		const response = await axios.get(
			`https://ohmanda.com/api/horoscope/${zodiac}/`
		);
		const { data } = response;

		res.status(200).json({
			status: 200,
			message: 'Third eye has been unlocked',
			data,
		});
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: 'No good. Something went wrong with the super Horoscope',
		});
	}
};

module.exports = getDailyHoroscope;
