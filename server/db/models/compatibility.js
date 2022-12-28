const { v4: uuid } = require('uuid');
const db = require('..');

class Compatibility {
	constructor(data) {
		this.all = `JEFF-${uuid()}`;
		console.log(data);
	}

	static async findAll() {
		const matches = await db.compatibility.find().toArray();

		return matches;
	}

	static async findMatch(x, y) {
		console.log(x, y);
		const matches = await db.compatibility.findOne({
			compareX: x,
			compareY: y,
		});
		if (!matches) {
			throw new Error('No matches!! Nothing found');
		}
		return matches;
	}

	// static async findOne(id) {
	// 	const card = await db.tarot.findOne({ _id: id });

	// 	if (!card) {
	// 		throw new Error('card not found');
	// 	}

	// 	return card;
	// }

	// static async findBy(data) {
	// 	const card = await db.tarot.findOne(data);

	// 	return card;
	// }
}

module.exports = Compatibility;
