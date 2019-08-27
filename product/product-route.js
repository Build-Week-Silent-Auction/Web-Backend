const router = require("express").Router();

const Products = require("./product-model.js");

//Get Products for a user
router.get("/:userid/products", (req, res) => {
  const { userid } = req.params;

  Products.get(userid)
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database" });
    });
});

//Add products

router.post("/:userid/products", (req, res) => {
  const product = req.body;
  const { userid } = req.params;

  if (!product.product_name || !userid) {
    return res.status(400).json({ message: "Missing field data." });
  }
  Products.add(userid, product)
    .then(products => {
      res.status(201).json({ message: "New product added." });
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database" });
    });
});

module.exports = router;
