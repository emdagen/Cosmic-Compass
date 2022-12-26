const { v4: uuid } = require('uuid');
const db = require('..');

class Tarot {
	constructor(data) {
		this.deck = `JEFF-${uuid()}`;
		console.log(data);
	}

	static async findAll() {
		const cards = await db.tarot.find().toArray();

		return cards;
	}

	static async findOne(id) {
		const card = await db.tarot.findOne({ _id: id });

		if (!card) {
			throw new Error('card not found');
		}

		return card;
	}

	static async findBy(data) {
		const card = await db.tarot.findOne(data);

		return card;
	}
}

module.exports = Tarot;
