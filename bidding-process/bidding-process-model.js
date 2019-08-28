const db = require("../database/db-config.js");

module.exports = {
  find,
  findMax,
  add
};

function find(userid) {
  return db("bids")
    .innerJoin("users", "users.id", "bids.user_id")
    .innerJoin("auctions", "auctions.id", "bids.auction_id")
    .select(
      "bids.id",
      "users.username",
      "auctions.auction_name",
      "auctions.start_time",
      "auctions.end_time",
      "bids.bid"
    )
    .where("bids.user_id", userid);
}

function findMax(auctionid) {
  return db("bids")
    .innerJoin("auctions", "auctions.id", "bids.auction_id")
    .where("bids.auction_id", auctionid)
    .orderBy("bid", "desc")
    .select("bids.bid")
    .limit(1);
}

function add(userid, auctionsid, bid) {
  const addedBid = {
    ...bid,
    user_id: userid,
    auction_id: auctionsid
  };

  return db("bids").insert(addedBid);
}
