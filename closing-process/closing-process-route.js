const router = require("express").Router();

const restricted = require("../auth/restricted-middleware.js");
const Close = require("./closing-process-model.js");

//Get all closing auctions for a user
router.get("/:userid", (req, res) => {});

//GET specific closing auction for an auction
router.get("/:userid/:auctionid", (req, res) => {});

//GET Close an auction - contact bidder
router.get("/seller/:userid/contact", (req, res) => {
    const { userid } = req.params; 

    Close.getBidder(userid).then(contactInfo => {
        res.status(200).json(contactInfo)
    }).catch(err => {
        res.status(500).json({ message: "Error accesing database. "})
    })
});

//GET Close an auction - contact seller

router.get("/bidder/:userid/contact", (req, res) => {
    const { userid } = req.params; 

    Close.getBidder(userid).then(contactInfo => {
        res.status(200).json(contactInfo)
    }).catch(err => {
        res.status(500).json({ message: "Error accesing database. "})
    })
});

module.exports = router;
