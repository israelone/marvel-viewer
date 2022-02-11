const express = require("express");
const request = require("request");
const crypto = require("crypto");
const { response } = require("express");
const config = require("dotenv").config();
const cors = require("cors");
const app = express();
const axios = require("axios");
const { characters } = require("./characters");
app.use(cors());
//
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const API_KEY = process.env.API_KEY;
const PRIV_KEY = process.env.PRIV_KEY;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var year = getRandomInt(1960, 2013);
var month = getRandomInt(1, 12);
var eom = month == 2 ? 28 : 30;
var monthStr = month < 10 ? "0" + month : month;
var beginDateStr = year + "-" + monthStr + "-01";
var endDateStr = year + "-" + monthStr + "-" + eom;
var ts = new Date().getTime();
var hash = crypto
  .createHash("md5")
  .update(ts + PRIV_KEY + API_KEY)
  .digest("hex");
const url =
  "http://gateway.marvel.com/v1/public/comics?limit=10&format=comic&formatType=comic&dateRange=" +
  beginDateStr +
  "%2C" +
  endDateStr +
  "&apikey=" +
  API_KEY +
  "&ts=" +
  ts +
  "&hash=" +
  hash;

const urlDecoderForComics = () => {
  var year = getRandomInt(1960, 2013);
  var month = getRandomInt(1, 12);
  var eom = month == 2 ? 28 : 30;
  var monthStr = month < 10 ? "0" + month : month;
  var beginDateStr = year + "-" + monthStr + "-01";
  var endDateStr = year + "-" + monthStr + "-" + eom;

  const url =
    "http://gateway.marvel.com/v1/public/comics?limit=10&format=comic&formatType=comic&dateRange=" +
    beginDateStr +
    "%2C" +
    endDateStr +
    "&apikey=" +
    API_KEY +
    "&ts=" +
    ts +
    "&hash=" +
    hash;

  return url;
};

const urlDecoderForCharacters = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/characters?limit=10" +
    "&apikey=" +
    API_KEY +
    "&ts=" +
    ts +
    "&hash=" +
    hash;

  return url;
};

const urlDecoderForCreators = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/creators?limit=10" +
    "&apikey=" +
    API_KEY +
    "&ts=" +
    ts +
    "&hash=" +
    hash;

  return url;
};

const urlDecoderForEvents = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/events?limit=10" +
    "&apikey=" +
    API_KEY +
    "&ts=" +
    ts +
    "&hash=" +
    hash;

  return url;
};

const urlDecoderForSeries = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/series?limit=10" +
    "&apikey=" +
    API_KEY +
    "&ts=" +
    ts +
    "&hash=" +
    hash;

  return url;
};

const urlDecoderForStories = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/stories?limit=10" +
    "&apikey=" +
    API_KEY +
    "&ts=" +
    ts +
    "&hash=" +
    hash;

  return url;
};
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.get("/comics", (req, res) => {
  axios
    .get(urlDecoderForComics())
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/creators", (req, res) => {
  axios
    .get(urlDecoderForCreators())
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/characters", (req, res) => {
  axios
  .get(urlDecoderForCharacters())
  .then((data) => {
    res.send(data.data);
  })
  .catch((err) => {
    res.send(err);
  });
});

app.get("/events", (req, res) => {
  axios
    .get(urlDecoderForEvents())
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/series", (req, res) => {
  axios
    .get(urlDecoderForSeries())
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/stories", (req, res) => {
  axios
    .get(urlDecoderForStories())
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
