const axios = require("axios");
const { hash, ts } = require("../url");

const url = "https://gateway.marvel.com:443/v1/public/comics";

const getRandomComics = async () => {
  const randomComics = [];
  const getRandomLettersFromAlphabet = () => {
    return String.fromCharCode(Math.random() * (122 - 97) + 97);
  };

  for (let index = 0; index < 10; index++) {
    await axios
      .get(
        url +
          "?" +
          "&titleStartsWith=" +
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
        randomComics.push(results[Math.floor(Math.random() * results.length)]);
      })
      .catch((err) => {
        return err;
      });
  }
  return randomComics;
};

const getOneComic = async (comicId) => {
  let comic;
  await axios
    .get(
      url +
        "/" +
        comicId +
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
      comic = results;
    })
    .catch((err) => {
      return err;
    });
  return comic;
};

module.exports = {
  getRandomComics,
  getOneComic,
};
