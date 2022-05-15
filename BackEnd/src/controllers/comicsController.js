const comicsService = require("../services/comicsService");

const getRandomComics = async (req, res) => {
  const allRandomComics = await comicsService.getRandomComics();
  console.log(allRandomComics, "controller, line 5");
  res.send({ status: "OK", data: allRandomComics });
  //   res.send("Get all workouts");
};

module.exports = {
  getRandomComics,
};
