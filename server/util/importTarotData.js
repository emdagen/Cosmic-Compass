'use strict';
const { MongoClient } = require('mongodb');
const { v4: uuid } = require('uuid');
const { cloudinary } = require('../libs/cloudinary/cloudinary');
require('dotenv').config();
const tarotData = require('../data/tarot/tarot-images.json').cards;
const uploadCloudinary = require('../libs/cloudinary/uploadCloudinary');

//SETUP DATABASE
const { MONGO_URI, DATABASE_NAME } = process.env;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
//FUNCTION TO IMPORT DATA
const batchImportCards = async (cards) => {
	const client = new MongoClient(MONGO_URI, options);
	console.log('connected...');
	await client.connect();
	const db = client.db(DATABASE_NAME);
	let currentRound = 1;
	try {
		console.log(`👨🏼‍🚀 Launch #${currentRound} ... begin 🚀`);
		for (const card of cards) {
			//ADD DATA TO CLOUDINARY
			const imagePath = './data/tarot/cards/' + card.img;
			const cloudinaryResponse = await uploadCloudinary(
				imagePath,
				'classic_tarot_deck'
			);

			//MONGODB
			const cardDoc = {
				...card,
				_id: uuid(),
				img: cloudinaryResponse,
				deck_name: 'classic',
			};
			const insertCard = await db.collection('tarot').insertOne(cardDoc);
			console.log('Card added to Mongo === ' + insertCard.acknowledged);
			console.log(`🌎 Mission #${currentRound} successful!! 🪐`);
			currentRound++;
		}
		console.log('✅ Gucci Baby ✅');
	} catch (err) {
		console.log('❌ something went wrong in the batch import ❌');
	}
	await client.close();
};

batchImportCards(tarotData);
