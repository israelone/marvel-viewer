const storiesService = require("../services/storiesService");

const getRandomStories = async (req, res) => {
  const allRandomStories = await storiesService.getRandomStories();
  res.send({ status: "OK", data: allRandomStories });
  //   res.send("Get all workouts");
};

module.exports = {
  getRandomStories,
};
