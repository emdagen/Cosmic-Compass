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
app.use(
	cors({
		origin: SECRET_ACCESS.split(','),
	})
);
//might not need below middleware
app.use(express.static('public'));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type'
	);
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
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
