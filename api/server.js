const express = require("express"),
  cors = require("cors"),
  helment = require("helmet");

const server = express();

const authRoute = require("../auth/auth-route.js");
const auctionRoute = require("../auction/auction-route.js");
const productRoute = require("../product/product-route.js");

//gobal middleware
server.use(helment());
server.use(cors());
server.use(express.json());

//Test Route
server.get("/", (req, res) => {
  res.status(200).json({ message: "api connected" });
});

//Routes
server.use("/auth", authRoute);
server.use("/", auctionRoute);
server.use("/", productRoute);

module.exports = server;
