const router = require("express").Router();

const Bids = require("./bidding-process-model.js");

//GET user bids
router.get("/:userid/bids", (req, res) => {});

//GET single bid
router.get("/:userid/bids/:bidid", (req, res) => {
  res.status(200);
});

//Place new bid
router.post("/:userid/bids/:auctionid", (req, res) => {
  const { auctionid } = req.params;
  const bid = req.body;
  console.log(bidderid);

  Bids.add(auctionid, bid)
    .then(added => {
      res.status(201).json({ message: "Your bid has been placed." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing the database. " });
    });
});
module.exports = router;
