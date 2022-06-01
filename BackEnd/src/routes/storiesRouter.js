const express = require("express");
const router = express.Router();
const axios = require("axios");
const storiesController = require("../controllers/storiesController");

router.get("/", storiesController.getRandomStories);

module.exports = router;
