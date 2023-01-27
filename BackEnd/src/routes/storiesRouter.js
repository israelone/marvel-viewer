const express = require("express");
const router = express.Router();
const axios = require("axios");
const storiesController = require("../controllers/storiesController");

router.get("/", storiesController.getRandomStories);

router.get("/:storyId", storiesController.getOneStory);

module.exports = router;
