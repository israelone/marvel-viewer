const express = require("express");
const router = express.Router();
const axios = require("axios");
const comicsController = require("../controllers/comicsController");

router.get("/", comicsController.getRandomComics);

module.exports = router;
