const { Zodiac } = require('../models');

const findZodiacs = async () => {
  const zodiacs = await Zodiac.findAll();
  return {
    zodiacs,
  };
};

const findZodiac = async (id) => {
  const zodiac = await Zodiac.findOne({ zodiac: id });
  return {
    zodiac,
  };
};

module.exports = {
  findZodiacs,
  findZodiac,
};
