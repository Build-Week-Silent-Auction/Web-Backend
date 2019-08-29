const db = require("../database/db-config.js");

module.exports = {
  get,
  getSeller,
  getBidder
};

function get() {
  return db("closing").innerJoin(
    "auctions",
    "auctions.id",
    "closing.auction_id"
  );
}

function getBidder(userid) {
  return db("closing")
    .innerJoin("auctions", "auctions.id", "closing.auction_id")
    .innerJoin("bids", "bids.auction_id", "auctions.id")
    .innerJoin("users", "users.id", "bids.user_id")
    .select(
      "users.first_name",
      "users.last_name",
      "users.username",
      "users.email"
    )
    .where("bids.user_id", userid);
}

function getSeller(userid) {
  return db("closing")
    .innerJoin("auctions", "auctions.id", "closing.auction_id")
    .innerJoin("");
}
