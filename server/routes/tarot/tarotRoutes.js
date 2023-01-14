const express = require('express');
const {
	getAllCards,
	getCardList,
	getSingleCard,
	createTarotSpread,
} = require('./tarotHandlers');

const router = express.Router();
//GET DATA
router.get('/', getAllCards);
router.get('/list', getCardList);
router.get('/card/:_id', getSingleCard);
router.post('/spread', createTarotSpread);

module.exports = router;
