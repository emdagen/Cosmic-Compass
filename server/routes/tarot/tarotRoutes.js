const express = require('express');
const { getAllCards } = require('./tarotHandlers');

const router = express.Router();
//GET DATA
router.get('/', getAllCards);

module.exports = router;
