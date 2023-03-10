'use strict';
const { MongoClient } = require('mongodb');
require('dotenv').config();

//SETUP DATABASE

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//FUNCTION TO IMPORT DATA
console.log(MONGO_URI);
const getZodiacData = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  console.log('connected...');

  await client.connect();
  const db = client.db('Zodiac');

  try {
    const insertCard = await db.collection('zodiac').find().toArray();

    const zodiacObj = {};
    insertCard.forEach((obj) => {
      console.log(obj.zodiac);
      zodiacObj[obj.zodiac.toLowerCase()] = obj;
    });
    res.status(200).json(zodiacObj);
  } catch (err) {
    console.log(err);
    console.log('❌ something went wrong in the batch import ❌');
  }
  await client.close();
};

module.exports = getZodiacData;
