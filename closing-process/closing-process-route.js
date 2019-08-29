const router = require("express").Router();

const restricted = require("../auth/restricted-middleware.js");
const Close = require("./closing-process-model.js");

//GET Close an auction - contact bidder
router.get("/bidder/:userid/contact", restricted, (req, res) => {
  const { userid } = req.params;

  Close.getBidder(userid)
    .then(contactInfo => {
      res.status(200).json(contactInfo);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accesing database. " });
    });
});

//GET Close an auction - contact seller

router.get("/seller/:userid/contact", restricted, (req, res) => {
  const { userid } = req.params;

  Close.getBidder(userid)
    .then(contactInfo => {
      res.status(200).json(contactInfo);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accesing database. " });
    });
});

module.exports = router;
