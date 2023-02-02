const { zodiacHandlers } = require('../../db/handlers');

const allZodiacs = async (req, res) => {
  try {
    const data = await zodiacHandlers.findZodiacs();

    res.status(200).json({ status: 200, message: 'Got all Zodiac!!', data });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: 'Unable to collect zodiacs!!',
    });
  }
};

const singleZodiac = async (req, res) => {
  const { zodiac } = req.params;
  console.log(zodiac);
  try {
    const data = await zodiacHandlers.findZodiac(zodiac);

    res.status(200).json({ status: 200, message: 'Got zodiac data!!', data });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: 'Unable to collect zodiacs!!',
    });
  }
};

module.exports = {
  allZodiacs,
  singleZodiac,
};
