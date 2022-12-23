const { v4: uuid } = require('uuid');
const db = require('../');

class User {
	constructor(data) {
		this._id = `JEFF-${uuid()}`;
		this.createdAt = new Date();
		this.setup = 0;
		this.email = data.email;
		this.data = {
			name: data.name,
		};
	}

	static async findAll() {
		const users = await db.users.find().toArray();
		console.log(this);
		return users;
	}

	static async findOne(id) {
		const user = await db.users.findOne({ id });

		if (!user) {
			throw new Error('User not found');
		}

		return user;
	}

	static async findBy(data) {
		const user = await db.users.findOne(data);

		return user;
	}

	static async create(data) {
		const user = new this(data);

		await db.users.insertOne(user);

		return user;
	}

	static async updateOne(query, data) {
		const result = await db.users.updateOne(query, { $set: data });
		return result;
	}
}

module.exports = User;
