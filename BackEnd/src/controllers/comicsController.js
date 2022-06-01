const comicsService = require("../services/comicsService");

const getRandomComics = async (req, res) => {
  const allRandomComics = await comicsService.getRandomComics();
  res.send({ status: "OK", data: allRandomComics });
};

const getOneComic = async (req, res) => {
  const {
    params: { comicId },
  } = req;
  if (!comicId) {
    return;
  }
  const comic = await comicsService.getOneComic(comicId);

  res.send({ status: "OK", data: comic });
};
module.exports = {
  getRandomComics,
  getOneComic,
};
