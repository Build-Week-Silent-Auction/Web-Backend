const db = require("../database/db-config.js");

module.exports = {
  get
};

function get() {
  return db("auctions");
}
