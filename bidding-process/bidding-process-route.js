const router = require("express").Router();

const Bids = require("./bidding-process-model.js");

//GET user bids
router.get("/:userid/bids", (req, res) => {
  const { userid } = req.params;

  Bids.find(userid)
    .then(bids => {
      res.status(200).json(bids);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching bids from database." });
    });
});

//Get Top 10 bids for an auctions
router.get("/auctions/:auctionid/bids", (req, res) => {
  const { auctionid } = req.params;

  Bids.getBids(auctionid)
    .then(bids => {
      res.status(200).json(bids);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching bids from database." });
    });
});

router.get("/auctions/:auctionid/bids/all", (req, res) => {
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
router.post("/:userid/bids/:auctionid", (req, res) => {
  const { userid, auctionid } = req.params;
  const bid = req.body;

  Bids.findMax(auctionid)
    .first()
    .then(checkBid => {
      if (checkBid.bid >= bid.bid) {
        res.status(400).json({
          message: `Current bid at $${checkBid.bid} please place a higer bid`
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
