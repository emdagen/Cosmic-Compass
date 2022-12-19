'use strict';
const express = require('express');
const morgan = require('morgan');
const verifyUser = require('./handlers/verifyUser');

const app = express();
//MIDDLEWARE
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('public'));

//ENDPOINTS
app.post('/api/user', verifyUser); //EXECUTED IN /
//404 ERROR
app.get('*', (req, res) => {
	res.status(404).json({
		status: 404,
		message: 'This is obviously not what you are looking for.',
	});
});

app.listen(8000, () => console.log(`Listening on port 8000`));
