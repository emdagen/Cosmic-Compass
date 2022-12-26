const express = require('express');
const { getAllCards, getCardList, getSingleCard } = require('./tarotHandlers');

const router = express.Router();
//GET DATA
router.get('/', getAllCards);
router.get('/list', getCardList);
router.get('/card/:_id', getSingleCard);

module.exports = router;
