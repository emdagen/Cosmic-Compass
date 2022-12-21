'use strict';
const express = require('express');
const morgan = require('morgan');
// const userRoutes = require()
const { usersHandlers } = require('./db/handlers');
const { verifyUser } = require('./routes/userRoutes');

const app = express();
//MIDDLEWARE
app.use(morgan('tiny'));
app.use(express.json());
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
app.post('/api/user/verify', verifyUser);
app.patch('/api/user/zodiac', async (req, res) => {
	const data = await usersHandlers.horoscopeUser(req.body);
	res.status(data.status).json(data);
});

//404 ERROR
app.get('*', (req, res) => {
	res.status(404).json({
		status: 404,
		message: 'This is obviously not what you are looking for.',
	});
});

app.listen(8000, () => console.log(`Listening on port 8000`));
