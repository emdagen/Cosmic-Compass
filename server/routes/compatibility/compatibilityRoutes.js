const express = require('express');
const {
	getAllCompatibility,
	getMatchData,
} = require('./compatibilityHandlers');

const router = express.Router();
//GET DATA
router.get('/', getAllCompatibility);
router.get('/:signX/:signY', getMatchData);

module.exports = router;
