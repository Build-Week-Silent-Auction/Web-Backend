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

//Place new bid
router.post("/:userid/bids/:auctionid", (req, res) => {
  const { userid, auctionid } = req.params;
  const bid = req.body;

  Bids.findMax(auctionid)
    .then(checkBid => {
      console.log(checkBid);
      if (checkBid > bid) {
        res.status(400).json({ message: "Please enter a higher bid" });
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
