const express = require('express');
const { verifyUser, determineZodiac } = require('./userHandlers');

const router = express.Router();
//GET DATA
router.post('/verify', verifyUser);
router.patch('/zodiac', determineZodiac);

module.exports = router;
