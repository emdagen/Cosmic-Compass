const { cloudinary } = require('./cloudinary');

//Example of imageData String === './data/cards/c01.jpg';
const uploadCloudinary = async (imageData, folderName) => {
	console.log(imageData);
	const uploadResponse = await cloudinary.uploader.upload(imageData, {
		// upload_preset: 'vr6hp6xz',
		folder: folderName,
	});

	const { url, public_id } = uploadResponse;
	console.log('added to cloudinary');
	return { url, public_id };
};

module.exports = uploadCloudinary;
