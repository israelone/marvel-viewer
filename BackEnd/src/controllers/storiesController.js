const storiesService = require("../services/storiesService");

const getRandomStories = async (req, res) => {
  const allRandomStories = await storiesService.getRandomStories();
  res.send({ status: "OK", data: allRandomStories });
};

const getOneStory = async (req, res) => {
  const {
    params: { storyId },
  } = req;
  if (!storyId) {
    return;
  }
  const story = await storiesService.getOneStory(storyId);
  res.send({ status: "OK", data: story });
};

module.exports = {
  getRandomStories,
  getOneStory,
};
