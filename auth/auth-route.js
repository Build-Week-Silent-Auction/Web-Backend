const router = require("express").Router();

//For testing to see list of users
router.get("/", (req, res) => {});

//Auth Routes
router.post("/register", (req, res) => {});

router.post("/login", (req, res) => {});

module.exports = router;
