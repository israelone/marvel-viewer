require("dotenv").config();
const express = require("express");
const request = require("request");
const comicsRouter = require("./src/routes/comicsRouter");
const charactersRouter = require("./src/routes/charactersRouter");
const eventsRouter = require("./src/routes/eventsRouter");
const seriesRouter = require("./src/routes/seriesRouter");
const storiesRouter = require("./src/routes/storiesRouter");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/comics", comicsRouter);
app.use("/characters", charactersRouter);
app.use("/events", eventsRouter);
app.use("/series", seriesRouter);
app.use("/stories", storiesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
