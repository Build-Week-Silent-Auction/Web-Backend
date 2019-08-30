const router = require("express").Router();

const Auctions = require("./auction-model.js");
const Users = require("../auth/auth-model.js");
const restricted = require("../auth/restricted-middleware.js");

//Biddder View
//GET all auctions
router.get("/bidder/auctions", restricted, (req, res) => {
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
router.get("/bidder/auctions/:auctionid", restricted, (req, res) => {
  const { auctionid } = req.params;
  console.log(auctionid);
  Auctions.getBy(auctionid)
    .first()
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
router.get("/seller/:userid/auctions/:auctionid", restricted, (req, res) => {
  const { auctionid } = req.params;

  Auctions.getBy(auctionid)
    .first()
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

router.post("/seller/:userid/auctions", restricted, (req, res) => {
  const auction = req.body;
  if (
    !auction.auction_name ||
    !auction.auction_description ||
    !auction.start_time ||
    !auction.end_time ||
    !auction.starting_bid
  ) {
    return res.status(400).json({ message: "Missing auction data." });
  }
  Auctions.add(auction)
    .then(auction => {
      res.status(201).json({ message: "New auction created" });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database." });
    });
});

//DELETE Delete an auction

router.delete("/seller/:userid/auctions/:auctionid", restricted, (req, res) => {
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

router.put("/seller/:userid/auctions/:auctionid", restricted, (req, res) => {
  const { auctionid } = req.params;
  const changes = req.body;
  if (
    !changes.auction_name ||
    !changes.auction_description ||
    !changes.start_time ||
    !changes.end_time ||
    !changes.starting_bid
  ) {
    return res.status(400).json({ message: "Missing auction data." });
  }
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

function checkId(req, res, next) {
  const { userid } = req.params;

  Users.getBy(userid).then(user => {
    console.log(user);
    next();
  });
}

module.exports = router;
