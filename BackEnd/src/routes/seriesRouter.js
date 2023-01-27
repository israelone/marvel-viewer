const express = require("express");
const router = express.Router();
const axios = require("axios");
const seriesController = require("../controllers/seriesController");

router.get("/", seriesController.getRandomSeries);

module.exports = router;
