const { usersHandlers } = require('../db/handlers');

const verifyUser = async (req, res) => {
	const data = await usersHandlers.verifyUser(req.body);
	res.status(data.status).json(data);
};

module.exports = { verifyUser };
