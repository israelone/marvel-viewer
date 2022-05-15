const seriesService = require("../services/seriesService");

const getRandomSeries = async (req, res) => {
  const allRandomSeries = await seriesService.getRandomSeries();
  res.send({ status: "OK", data: allRandomSeries });
  //   res.send("Get all workouts");
};

module.exports = {
  getRandomSeries,
};
