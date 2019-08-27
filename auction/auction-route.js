const router = require("express").Router();

const Auctions = require("./auction-model.js");

//Biddder View
//GET all auctions
router.get("/bidder/auctions", (req, res) => {
  Auctions.get()
    .then(auction => {
      res.status(200).json(auction);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching auctions from database." });
    });
});

//GET single auction
router.get("/bidder/auctions/:auctionid", (req, res) => {
  const { auctionid } = req.params;
  console.log(auctionid);
  Auctions.getBy(auctionid)
    .then(auction => {
      res.status(200).json(auction);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching auctions from database." });
    });
});

//Sellers View
//GET seller's auctions

router.get("/seller/:userid/auctions", (req, res) => {
  const { userid } = req.params;
  console.log(userid);
  Auctions.find(userid)
    .then(auctions => {
      res.status(200).json(auctions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching auctions from database." });
    });
});

//GET  single seller's auctions
router.get("/seller/:userid/auctions/:auctionid", (req, res) => {
  const { auctionid } = req.params;

  Auctions.getBy(auctionid)
    .then(auction => {
      res.status(200).json(auction);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching auctions from database." });
    });
});

//POST create an auction

router.post("/seller/:userid/auctions", (req, res) => {
  const auction = req.body;
  console.log(auction);
  Auctions.add(auction)
    .then(auction => {
      res.status(201).json({ message: "New auction created" });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

//POST Delete an auction

router.delete("/seller/:userid/auctions/:auctionid", (req, res) => {
  const { auctionid } = req.params;

  Auctions.remove(auctionid)
    .then(auction => {
      res.status(200).json({ message: "Auction has been deleted." });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching auctions from database." });
    });
});

//PUT update an auction

router.put("/seller/:userid/auctions/:auctionid", (req, res) => {
  const { auctionid } = req.params;
  const changes = req.body;
  console.log(changes);
  Auctions.update(auctionid, changes)
    .then(auction => {
      res.status(200).json({ message: "Auction has been updated." });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching auctions from database." });
    });
});
module.exports = router;
