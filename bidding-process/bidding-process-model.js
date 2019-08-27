const db = require("../database/db-config.js");

module.exports = {
  add
};

function add(auctionsid, bid) {
  return db("auctions")
    .where("auctions.id", auctionsid)
    .insert({ bid: bid });
}
