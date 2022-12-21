const { MongoClient } = require('mongodb');

require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// Verifies if user exists, else it creates a new user //

const verifyUser = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	try {
		await client.connect();
		const db = client.db('horoscope');
		const collection = db.collection('users');
		const { email, nickname, picture, name } = req.body;
		let user = await collection.findOne({ email });

		if (user === null) {
			user = await collection.insertOne({
				_id: uuidv4(),
				email,
				nickname,
				picture,
				name,
				zodiac: undefined,
			});
			user = await collection.findOne({ _id: user.insertedId });
			console.log(user.zodiac);
			const legitCheck = user.zodiac ? 'verify' : 'checked';
			res.status(201).json({
				status: 201,
				message: 'User has been created',
				data: user,
				zodiac: legitCheck,
			});
		} else {
			const legitCheck = user.zodiac ? 'verify' : 'checked';
			res.status(200).json({
				status: 200,
				message: 'User already has an account',
				data: user,
				zodiac: legitCheck,
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

module.exports = verifyUser;
