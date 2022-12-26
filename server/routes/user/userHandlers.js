const { usersHandlers } = require('../../db/handlers');
// const { cloudinary } = require('../../libs/cloudinary/cloudinary');
const uploadCloudinary = require('../../libs/cloudinary/uploadCloudinary');
const findZodiacSign = require('../../util/findZodiacSign');

const verifyUser = async (req, res) => {
	const data = await usersHandlers.verifyUser(req.body);
	res.status(data.status).json(data);
};

const addUsername = async (req, res) => {
	const { username, _id, setup } = req.body;
	if (username) {
		//object for updating user document

		const updateObject = {
			query: { _id },
			body: {
				'data.username': username,
				setup: setup + 1,
			},
		};
		const mongoResponse = await usersHandlers.updateUser(updateObject);
		res
			.status(200)
			.json({ ...mongoResponse, data: { setup: setup + 1, username } });
	} else {
		console.log('bye');
		res.status(400).json({
			status: 400,
			message: 'There was nothing that changed',
		});
	}
};

const addProfileImage = async (req, res) => {
	try {
		const { imageData, _id, setup } = req.body;

		if (imageData) {
			//add image to cloudinary
			const cloudinaryResponse = await uploadCloudinary(
				imageData,
				'zodiac_profile_images'
			);
			console.log('added to cloudinary');
			//add image to MongoDB User document
			const updateObject = {
				query: { _id },
				body: { 'data.profileImg': cloudinaryResponse, setup: setup + 1 },
			};
			const mongoResponse = await usersHandlers.updateUser(updateObject);
			// console.log({ profile: { url, public_id }, setup: setup + 1 });
			if (mongoResponse.status === 200) {
				res.status(200).json({
					...mongoResponse,
					data: { profileImg: cloudinaryResponse, setup: setup + 1 },
				});
			} else {
				res.status(400).json({
					status: 400,
					message: 'There was nothing that changed',
				});
			}
		} else {
			res.status(400).json({
				status: 400,
				message: 'There was no image string to send to cloudinary',
			});
		}
	} catch (err) {
		console.log('There was an issue adding the image...');
	}
};

const determineZodiac = async (req, res) => {
	const { birthday, _id, setup } = req.body;
	if (birthday) {
		const zodiac = findZodiacSign(birthday);
		//object for updating user document
		const updateObject = {
			query: { _id },
			body: {
				'data.birthday': birthday,
				'data.zodiac': zodiac,
				// birthday,
				// zodiac,
				setup: 'Completed',
			},
		};
		console.log(updateObject);
		const mongoResponse = await usersHandlers.updateUser(updateObject);
		res.status(200).json({
			...mongoResponse,
			data: { setup: 'Completed', birthday, zodiac },
		});
	} else {
		console.log('bye');
		res.status(400).json({
			status: 400,
			message: 'There was nothing that changed',
		});
	}
};

const updateTheme = async (req, res) => {
	const { theme, _id } = req.body;
	if (typeof theme === 'boolean') {
		//object for updating user document
		const updateObject = {
			query: { _id },
			body: {
				theme,
			},
		};
		const mongoResponse = await usersHandlers.updateUser(updateObject);
		res.status(200).json({
			...mongoResponse,
			theme,
		});
	} else {
		console.log('bye');
		res.status(400).json({
			status: 400,
			message: 'There was nothing that changed',
		});
	}
};

module.exports = {
	verifyUser,
	addUsername,
	addProfileImage,
	determineZodiac,
	updateTheme,
};
