const express = require("express");
const router = express.Router();
const axios = require("axios");
const eventsController = require("../controllers/eventsController");

router.get("/", eventsController.getRandomEvents);

module.exports = router;
