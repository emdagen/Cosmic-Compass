const { usersHandlers } = require('../../db/handlers');

const verifyUser = async (req, res) => {
	const data = await usersHandlers.verifyUser(req.body);
	res.status(data.status).json(data);
};

const determineZodiac = async (req, res) => {
	const data = await usersHandlers.horoscopeUser(req.body);
	res.status(data.status).json(data);
};

module.exports = { verifyUser, determineZodiac };
