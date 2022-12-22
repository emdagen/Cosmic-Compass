const zodiacSigns = require('../data/zodiacSigns');

//the structure of the birthday string
// const birthday = '2022-04-20';

const findZodiacSign = (birthday) => {
	//need to remove 1 from dd and month
	const [yyyy, mm, dd] = birthday.split('-');
	const month = Number(mm - 1);
	if ((month == 0 && dd <= 19) || (month == 11 && dd >= 22)) {
		return zodiacSigns.capricorn;
	} else if ((month == 0 && dd >= 20) || (month == 1 && dd <= 18)) {
		return zodiacSigns.aquarius;
	} else if ((month == 1 && dd >= 19) || (month == 2 && dd <= 20)) {
		return zodiacSigns.pisces;
	} else if ((month == 2 && dd >= 21) || (month == 3 && dd <= 19)) {
		return zodiacSigns.aries;
	} else if ((month == 3 && dd >= 20) || (month == 4 && dd <= 20)) {
		return zodiacSigns.taurus;
	} else if ((month == 4 && dd >= 21) || (month == 5 && dd <= 20)) {
		return zodiacSigns.gemini;
	} else if ((month == 5 && dd >= 21) || (month == 6 && dd <= 22)) {
		return zodiacSigns.cancer;
	} else if ((month == 6 && dd >= 23) || (month == 7 && dd <= 22)) {
		return zodiacSigns.leo;
	} else if ((month == 7 && dd >= 23) || (month == 8 && dd <= 22)) {
		return zodiacSigns.virgo;
	} else if ((month == 8 && dd >= 23) || (month == 9 && dd <= 22)) {
		return zodiacSigns.libra;
	} else if ((month == 9 && dd >= 23) || (month == 10 && dd <= 21)) {
		return zodiacSigns.scorpio;
	} else if ((month == 10 && dd >= 22) || (month == 11 && dd <= 21)) {
		return zodiacSigns.sagittarius;
	}
};
module.exports = findZodiacSign;
