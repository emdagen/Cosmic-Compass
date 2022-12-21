const { MongoClient } = require('mongodb');

require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
// Verifies add zodiac to account
const client = new MongoClient(MONGO_URI, options);
const addZodiac = async (req, res) => {
	const { _id } = req.body;
	try {
		await client.connect();
		const db = client.db('horoscope');
		const collection = db.collection('users');
		console.log(_id);
		const updateUser = await collection.updateOne(
			{ _id },
			{ $set: { zodiac: 'aries' } }
		);

		if (updateUser.modifiedCount > 0) {
			res.status(200).json({
				status: 200,
				message: 'Zodiac has been added to User',
				data: 'aries',
			});
		} else {
			res.status(400).json({
				status: 400,
				message: 'There was nothing that changed',
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: 500,
			message: 'Something went wrong.. ',
			zodiac: 'loading',
		});
	}
	client.close();
};

module.exports = addZodiac;
