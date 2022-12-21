## Instructions for models folder 🥕

This folder is for storing all the classes with static functions

Functions are async and and connect to the database class. It is important that the functions remain static.

The function must be asynchronous since the Mongo CRUD commands must be awaited.

ex.

```

class User {
	constructor(data) {
		this._id = `JEFF-${uuid()}`;
		this.createdAt = new Date();

		this.email = data.email;
		this.name = data.name;
	}

	static async findAll() {
		const users = await db.users.find().toArray();
		return users;
	}

	static async findOne(id) {
		const user = await db.users.findOne({ id });

		if (!user) {
			throw new Error('User not found');
		}

		return user;
	}


}
```
