const router = require("express").Router();

const restricted = require("../auth/restricted-middleware.js");
const Bids = require("./bidding-process-model.js");

//GET user bids
router.get("/:userid/bids", restricted, (req, res) => {
  const { userid } = req.params;

  Bids.find(userid)
    .then(bids => {
      res.status(200).json(bids);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching bids from database." });
    });
});

//Get Top 3 bids for an auctions
router.get("/auctions/:auctionid/bids", restricted, (req, res) => {
  const { auctionid } = req.params;

  Bids.getBids(auctionid)
    .then(bids => {
      res.status(200).json(bids);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching bids from database." });
    });
});

//GEt All bids for an auctions
router.get("/auctions/:auctionid/bids/all", restricted, (req, res) => {
  const { auctionid } = req.params;

  Bids.getAllBids(auctionid)
    .then(bids => {
      res.status(200).json(bids);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching bids from database." });
    });
});

//Place new bid
router.post("/:userid/bids/:auctionid", restricted, (req, res) => {
  const { userid, auctionid } = req.params;
  const bid = req.body;
  if (!bid.bid) {
    return res.status(400).json({ message: "Missing bid data. " });
  }
  Bids.findMax(auctionid)
    .first()
    .then(checkBid => {
      if (checkBid.starting_bid - 1 > bid.bid || checkBid.bid >= bid.bid) {
        res.status(400).json({
          message: "Please place a higer bid than the current bid"
        });
      } else {
        Bids.add(userid, auctionid, bid)
          .then(added => {
            res.status(201).json({ message: "Your bid has been placed." });
          })
          .catch(err => {
            res.status(500).json({ message: "Error accessing the database. " });
          });
      }
    })
    .catch(err => [
      res.status(500).json({ message: "Error accessing database." })
    ]);
});

module.exports = router;
