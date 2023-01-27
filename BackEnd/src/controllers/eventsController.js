const eventsService = require("../services/eventsService");

const getRandomEvents = async (req, res) => {
  const allRandomEvents = await eventsService.getRandomEvents();
  res.send({ status: "OK", data: allRandomEvents });
};

module.exports = {
  getRandomEvents,
};
