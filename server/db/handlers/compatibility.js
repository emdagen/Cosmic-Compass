const { Compatibility } = require('../models');

const findCompatibility = async () => {
	const matches = await Compatibility.findAll();
	return {
		matches,
	};
};
const verifyCompatibility = async () => {
	// checks to see if all the keys in the compatible document have values
	const matches = await Compatibility.findAll();
	const matchKeys = Object.keys(matches[0]);
	const resultsKeys = Object.keys(matches[0].results);

	//legitCheck all main keys
	const mapVerify = matchKeys.map((key) => {
		const legitCheck = matches.every((obj, index) => {
			return [key].length > 0;
		});
		return { id: key, value: legitCheck };
	});

	//legitCheck all keys inside results folder
	const resultsVerify = resultsKeys.map((key) => {
		const legitCheck = matches.every((obj, index) => {
			// console.log(index);
			const { results } = obj;
			return results[key].answer.length > 0;
			// return [key].length > 0;
		});
		return { id: key, value: legitCheck };
	});
	const allResults = [...mapVerify, ...resultsVerify];

	const legitCheckAll = allResults.every((obj) => {
		return obj.value === true;
	});

	if (legitCheckAll) {
		console.log('all clear!!');
	} else {
		const failed = allResults.filter((obj) => {
			return obj.value === false;
		});
		console.log(failed);
	}

	// const asyncVerify = async () => {
	// 	const legitCheck = matches.every((obj, index) => {
	// 		console.log(index);
	// 		const { results } = obj;
	// 		return results.romantic.answer.length > 0;
	// 	});
	// 	return legitCheck;
	// };
	// const verify = await asyncVerify();
	// console.log(verify);
	return {
		matches,
	};
};

const findMatches = async (params) => {
	const { signX, signY } = params;
	// console.log(params);
	console.log('find something');
	const matchResponse = await Compatibility.findMatch(signX, signY);

	return matchResponse;
};

module.exports = {
	findCompatibility,
	verifyCompatibility,
	findMatches,
};
