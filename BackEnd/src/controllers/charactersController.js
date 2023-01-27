const charactersService = require("../services/charactersService");

const getRandomCharacters = async (req, res) => {
  const allRandomCharacters = await charactersService.getRandomCharacters();
  res.send({ status: "OK", data: allRandomCharacters });
};

const getOneCharacter = async (req, res) => {
  const {
    params: { characterId },
  } = req;
  if (!characterId) {
    return;
  }
  const character = await charactersService.getOneCharacter(characterId);

  res.send({ status: "OK", data: character });
};

module.exports = {
  getRandomCharacters,
  getOneCharacter,
};
