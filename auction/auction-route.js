const router = require("express").Router();

const Auctions = require("./auction-model.js");

//Test
// router.get("/", (req, res) => {
//   res.status(200).json({ mesage: "connected" });
// });

//GET all auctions  - Biddder View
router.get("/:userid/auctions", (req, res) => {
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

module.exports = router;
