const axios = require("axios");
const { hash, ts } = require("../url");
const url = "https://gateway.marvel.com:443/v1/public/characters";

const getRandomCharacters = async () => {
  const randomCharacters = [];
  const getRandomLettersFromAlphabet = () => {
    return String.fromCharCode(Math.random() * (122 - 97) + 97);
  };

  for (let index = 0; index < 10; index++) {
    await axios
      .get(
        url +
          "?" +
          "&nameStartsWith=" +
          getRandomLettersFromAlphabet() +
          "&apikey=" +
          process.env.API_KEY +
          "&ts=" +
          ts +
          "&hash=" +
          hash
      )
      .then((data) => {
        let results = data.data.data.results;
        randomCharacters.push(
          results[Math.floor(Math.random() * results.length)]
        );
      })
      .catch((err) => {
        return err;
      });
  }

  return randomCharacters;
};

const getOneCharacter = async (characterId) => {
  let character;
  await axios
    .get(
      url +
        "/" +
        characterId +
        "?" +
        "&apikey=" +
        process.env.API_KEY +
        "&ts=" +
        ts +
        "&hash=" +
        hash
    )
    .then((data) => {
      let results = data.data.data.results;
      character = results;
    })
    .catch((err) => {
      return err;
    });
  return character;
};

module.exports = {
  getRandomCharacters,
  getOneCharacter,
};
