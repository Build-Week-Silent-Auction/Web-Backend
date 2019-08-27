const db = require("../database/db-config.js");

module.exports = {
  get,
  getBy,
  find,
  add,
  remove,
  update
};

function get() {
  return db("auctions")
    .innerJoin("products", "products.id", "auctions.products_id")
    .select(
      "auctions.id",
      "auctions.auction_name",
      "auctions.auction_description",
      "products.product_name",
      "auctions.start_time",
      "auctions.end_time",
      "auctions.starting_bid",
      "auctions.bid"
    );
}

function getBy(auctionid) {
  return db("auctions")
    .innerJoin("products", "products.id", "auctions.products_id")
    .select(
      "auctions.id",
      "auctions.auction_name",
      "auctions.auction_description",
      "products.product_name",
      "auctions.start_time",
      "auctions.end_time",
      "auctions.starting_bid",
      "auctions.bid"
    )
    .where("auctions.id", auctionid);
}

function find(userid) {
  return db("auctions")
    .innerJoin("products", "products.id", "auctions.product_id")
    .innerJoin("users", "users.id", "products.user_id")
    .select(
      "auctions.id",
      "auctions.auction_name",
      "auctions.auction_description",
      "products.product_name",
      "auctions.start_time",
      "auctions.end_time",
      "auctions.starting_bid",
      "auctions.bid"
    )
    .where({ user_id: userid });
}

function add(auction) {
  return db("auctions").insert(auction);
}

function remove(auctionid) {
  return db("auctions")
    .where("auctions.id", auctionid)
    .del();
}

function update(auctionid, changes) {
  return db("auctions")
    .where("auctions.id", auctionid)
    .update(changes);
}
