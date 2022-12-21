const { User } = require('../models');

const findUsers = async () => {
	const users = await User.findAll();
	return {
		users,
	};
};

const getUser = async (id) => {
	const user = await User.findOne(id);
	return {
		user,
	};
};

const verifyUser = async (data) => {
	const existingUser = await User.findBy({ email: data.email });
	if (existingUser) {
		const legitCheck = existingUser.zodiac ? 'verify' : 'checked';
		return {
			status: 200,
			message: 'User already has an account',
			data: existingUser,
			zodiac: legitCheck,
		};
	}
	//Create user based off class object if user doesn't exist in database
	const user = await User.create(data);
	const legitCheck = user.zodiac ? 'verify' : 'checked';
	return {
		status: 201,
		message: 'User has been created',
		data: user,
		zodiac: legitCheck,
	};
};

const horoscopeUser = async (data) => {
	const { _id } = data;
	const updateUser = await User.updateOne({ _id }, { zodiac: 'aries' });
	if (updateUser.modifiedCount > 0) {
		return {
			status: 200,
			message: 'Zodiac has been added to User',
			data: 'aries',
		};
	} else {
		return {
			status: 400,
			message: 'There was nothing that changed',
		};
	}
};

module.exports = {
	findUsers,
	getUser,
	verifyUser,
	horoscopeUser,
};
