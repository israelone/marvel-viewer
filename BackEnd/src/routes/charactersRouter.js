const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charactersController");

router.get("/", charactersController.getRandomCharacters);

router.get("/:characterId", charactersController.getOneCharacter);

module.exports = router;
