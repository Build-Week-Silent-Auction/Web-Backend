const router = require("express").Router();

const Bids = require("./bidding-process-model.js");

//GET user bids
router.get("/:userid/bids", (req, res) => {
  const { userid } = req.params;
  console.log(userid);
  Bids.find(userid)
    .then(bids => {
      res.status(200).json(bids);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching bids from database." });
    });
});

// //GET single bid
// router.get("/:userid/bids/:bidid", (req, res) => {
//   const { biddid } = req.params;
//   Bids.findBy(biddid)
//     .then(bids => {
//       res.status(200).json(bids);
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Error fetching bids from database." });
//     });
// });

//Place new bid
router.post("/:userid/bids/:auctionid", (req, res) => {
  const { userid, auctionid } = req.params;
  console.log(req.params);
  const bid = req.body;

  Bids.add(userid, auctionid, bid)
    .then(added => {
      res.status(201).json({ message: "Your bid has been placed." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing the database. " });
    });
});
module.exports = router;
