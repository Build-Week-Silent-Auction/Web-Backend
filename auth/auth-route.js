const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getJwt = require("./auth-helpers.js");

const Users = require("./auth-model.js");

//For testing to see/delete list of users
router.get("/", (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ messsage: "Error acccessing database" });
    });
});

//Auth Routes
router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password);
  user.password = hash;

  if (!user.first_name || !user.last_name || !user.email || !user.username) {
    return res.status(400).json({ messsage: "Missing registeration fields" });
  }
  Users.add(user)
    .then(user => {
      res.status(200).json({ messsage: "A new user has been created." });
    })
    .catch(err => {
      res.status(500).json({ messsage: "Error adding users to databse." });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.find({ username })
    .first()
    .then(user => {
      console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwt(user);
        res.status(200).json({
          messsage: `${username} is logged in!`,
          token,
          classification: user.user_classification
        });
      } else {
        res.status(400).json({ messsage: "Username or password is invalid" });
      }
    })
    .catch(err => {
      res.status(500).json({ messsage: "Error accessind database" });
    });
});

module.exports = router;
