const axios = require("axios");
const { hash, ts } = require("../url");
const config = require("dotenv").config();

const url = "https://gateway.marvel.com:443/v1/public/comics?";

const getRandomComics = async () => {
  const randomComics = [];
  const getRandomLettersFromAlphabet = () => {
    console.log(String.fromCharCode(Math.random() * (122 - 97) + 97));
    return String.fromCharCode(Math.random() * (122 - 97) + 97);
  };

  for (let index = 0; index < 10; index++) {
    await axios
      .get(
        url +
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
        randomComics.push(results[Math.floor(Math.random() * results.length)]);
      })
      .catch((err) => {
        return err;
      });
  }
  // await axios
  //   .get(
  //     url +
  //       "&nameStartsWith=" +
  //       getRandomLettersFromAlphabet() +
  //       "&apikey=" +
  //       process.env.API_KEY +
  //       "&ts=" +
  //       ts +
  //       "&hash=" +
  //       hash
  //   )
  //   .then((data) => {
  //     randomComics.push(data.data.data.results);
  //   })
  //   .catch((err) => {
  //     return err;
  //   });
  //   console.log(randomComics, "line 35");
  return randomComics;
};

module.exports = {
  getRandomComics,
};
