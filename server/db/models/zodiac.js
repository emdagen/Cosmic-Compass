const { v4: uuid } = require('uuid');
const db = require('..');

class Zodiac {
  constructor(data) {
    this._id = `JEFF-${uuid()}`;
    this.createdAt = new Date();
    this.setup = 0;
  }

  static async findAll() {
    const zodiacs = await db.zodiac.find().toArray();

    return zodiacs;
  }

  static async findOne(obj) {
    const { zodiac } = obj;
    const str = zodiac[0].toUpperCase() + zodiac.slice(1);

    const data = await db.zodiac.findOne({ zodiac: str });

    if (!data) {
      throw new Error('User not found');
    }
    return data;
  }
}

module.exports = Zodiac;
