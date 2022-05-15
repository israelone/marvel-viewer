const axios = require("axios");
const { hash, ts } = require("../url");
const config = require("dotenv").config();

const url = "https://gateway.marvel.com:443/v1/public/series?";

const getRandomSeries = async () => {
  const randomSeries = [];
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
        randomSeries.push(results[Math.floor(Math.random() * results.length)]);
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
  //     randomSeries.push(data.data.data.results);
  //   })
  //   .catch((err) => {
  //     return err;
  //   });
  //   console.log(randomSeries, "line 35");
  return randomSeries;
};

module.exports = {
  getRandomSeries,
};
