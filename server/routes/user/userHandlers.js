const { usersHandlers } = require('../../db/handlers');
const { cloudinary } = require('../../libs/cloudinary');
const findZodiacSign = require('../../util/findZodiacSign');

const verifyUser = async (req, res) => {
	const data = await usersHandlers.verifyUser(req.body);
	res.status(data.status).json(data);
};

const determineZodiac = async (req, res) => {
	const { birthday, _id, setup } = req.body;
	if (birthday) {
		const zodiac = findZodiacSign(birthday);
		//object for updating user document
		const updateObject = {
			query: { _id },
			body: { birthday, zodiac, setup: setup + 1 },
		};
		console.log(updateObject);
		const mongoResponse = await usersHandlers.updateUser(updateObject);
		res
			.status(200)
			.json({ ...mongoResponse, data: { setup: setup + 1, birthday, zodiac } });
	} else {
		console.log('bye');
		res.status(400).json({
			status: 400,
			message: 'There was nothing that changed',
		});
	}
};

const addUsername = async (req, res) => {
	const { username, _id, setup } = req.body;
	if (username) {
		//object for updating user document
		const updateObject = {
			query: { _id },
			body: { username, setup: setup + 1 },
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
		console.log(setup);
		if (imageData) {
			//add image to cloudinary
			const uploadResponse = await cloudinary.uploader.upload(imageData, {
				upload_preset: 'vr6hp6xz',
				folder: 'zodiac_profile_images',
			});
			const { url, public_id } = uploadResponse;
			console.log('added to cloudinary');

			//add image to MongoDB User document
			const updateObject = {
				query: { _id },
				body: { profile: { url, public_id }, setup: setup + 1 },
			};
			console.log('sup dawg');

			const mongoResponse = await usersHandlers.updateUser(updateObject);
			// console.log({ profile: { url, public_id }, setup: setup + 1 });
			if (mongoResponse.status === 200) {
				res.status(200).json({
					...mongoResponse,
					data: { profile: { url, public_id }, setup: setup + 1 },
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

module.exports = {
	verifyUser,
	determineZodiac,
	addUsername,
	addProfileImage,
};
