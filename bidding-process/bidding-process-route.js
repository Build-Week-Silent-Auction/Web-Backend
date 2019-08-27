const router = require("express").Router();

const Bids = require("./bidding-process-model.js");

//GET user bids
router.get("/bidder/:bidderid/bids", (req, res) => {});

//GET single bid
router.get("/bidder/:bidderid/bids/:bidid", (req, res) => {});

//Place new bid
router.post("/bidder/:bidderid/bids/:auctionid", (req, res) => {});
module.exports = router;
