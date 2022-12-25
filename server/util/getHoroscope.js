const getHoroscope = async (req, res) => {
	try {
		let { zodiac, date } = req.params;
		dateParam = date.toLowerCase();
		console.log(date);
		const options = {
			method: 'POST',
			headers: {
				'X-RapidAPI-Key': '84534088bdmsh766898e3e49b0d4p105319jsnf43260851b83',
				'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
			},
		};
		const response = await fetch(
			`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${zodiac}&day=${dateParam}`,
			options
		);
		const json = await response.json();

		res.status(200).json({
			status: 200,
			message: `Here is the ${zodiac} horoscope for ${date}`,
			data: json,
		});
	} catch (err) {
		console.log('🧐');
		res.status(400).json({
			status: 400,
			message: `Something went wrong. Theres no data 😅`,
		});
	}
};
module.exports = getHoroscope;
