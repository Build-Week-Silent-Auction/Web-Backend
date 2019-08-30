const express = require("express"),
  cors = require("cors"),
  helment = require("helmet");

const server = express();

const authRoute = require("../auth/auth-route.js");
const auctionRoute = require("../auction/auction-route.js");
const productRoute = require("../product/product-route.js");
const bidRoute = require("../bidding-process/bidding-process-route.js");
const closeRoute = require("../closing-process/closing-process-route.js");

//gobal middleware
server.use(helment());
server.use(cors());
server.use(express.json());

//Routes
server.use("/auth", authRoute);
server.use("/", auctionRoute);
server.use("/", productRoute);
server.use("/bidder", bidRoute);
server.use("/closing", closeRoute);

module.exports = server;
