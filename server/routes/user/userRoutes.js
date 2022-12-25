const express = require('express');
const {
	verifyUser,
	determineZodiac,
	addUsername,
	addProfileImage,
	updateTheme,
} = require('./userHandlers');

const router = express.Router();
//GET DATA
router.post('/verify', verifyUser);
router.patch('/zodiac', determineZodiac);
router.patch('/username', addUsername);
router.patch('/profile-image', addProfileImage);
router.patch('/theme', updateTheme);

module.exports = router;
