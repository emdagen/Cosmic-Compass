const express = require('express');
const { allZodiacs, singleZodiac } = require('./zodiacHandlers');

const router = express.Router();
//GET DATA
router.get('/', allZodiacs);
router.get('/:zodiac', singleZodiac);

module.exports = router;
