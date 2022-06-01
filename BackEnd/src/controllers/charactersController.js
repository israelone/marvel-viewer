const charactersService = require("../services/charactersService");

const getRandomCharacters = async (req, res) => {
  const allRandomCharacters = await charactersService.getRandomCharacters();
  res.send({ status: "OK", data: allRandomCharacters });
  //   res.send("Get all workouts");
};

module.exports = {
  getRandomCharacters,
};
