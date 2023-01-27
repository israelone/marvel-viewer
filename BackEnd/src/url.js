const crypto = require("crypto");
var ts = new Date().getTime();
var hash = crypto
  .createHash("md5")
  .update(ts.toString() + process.env.PRIV_KEY + process.env.API_KEY)
  .digest("hex");

module.exports = {
  hash,
  ts,
};
