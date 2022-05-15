const crypto = require("crypto");
const config = require("dotenv").config();
var ts = new Date().getTime();
var hash = crypto
  .createHash("md5")
  .update(ts + process.env.PRIV_KEY + process.env.API_KEY)
  .digest("hex");

module.exports = {
  hash,
  ts,
};
