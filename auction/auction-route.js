const router = require("express").Router();

const Auctions = require("./auction-model.js");

router.get("/", (req, res) => {
  res.status(200).json({ mesage: "connected" });
});

module.exports = router;
