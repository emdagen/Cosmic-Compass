'use strict';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const getHoroscope = require('./util/getHoroscope');
const getDailyHoroscope = require('./util/getDailyHoroscope');
const userRoutes = require('./routes/user/userRoutes');
const tarotRoutes = require('./routes/tarot/tarotRoutes');
const zodiacRoutes = require('./routes/zodiac/zodiacRoutes');
const compatibilityRoutes = require('./routes/compatibility/compatibilityRoutes');
const getSearchResults = require('./util/getSearchResults');
require('dotenv').config();
const { SECRET_ACCESS, PORT } = process.env;

const app = express();
//MIDDLEWARE
app.use(morgan('tiny'));
app.use(express.json({ limit: '50mb' }));
//might not need below middleware
app.use(express.static('public'));
const allowCors = (fn) => async (req, res) => {
	// add CORS headers
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://cosmic-compass.vercel.app'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET,OPTIONS,PATCH,DELETE,POST,PUT'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	);

	if (req.method === 'OPTIONS') {
		// respond to OPTIONS requests with a 200 status code
		res.status(200).end();
		return;
	}

	// call the original request handler
	return await fn(req, res);
};

// define your request handler function
const handler = (req, res) => {
	const d = new Date();
	res.end(d.toString());
};

// wrap the handler function with the allowCors middleware
app.use(allowCors(handler));
// app.use(cors());
//ENDPOINTS
app.use('/api/user', userRoutes);
app.use('/api/tarot', tarotRoutes);
app.use('/api/zodiac', zodiacRoutes);
app.use('/api/compatibility', compatibilityRoutes);
app.get('/api/horoscope/:zodiac/:date', getHoroscope);
app.get('/api/horoscope/:zodiac', getDailyHoroscope);
app.get('/api/search-results', getSearchResults);

//404 ERROR
app.get('*', (req, res) => {
	res.status(404).json({
		status: 404,
		message: 'This is obviously not what you are looking for.',
	});
});

app.listen(PORT, () => console.log(`Listening on port ` + PORT));
