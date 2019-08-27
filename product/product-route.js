const router = require("express").Router();

const Products = require("./product-model.js");
const restricted = require("../auth/restricted-middleware.js");

//Get Products for a user
router.get("/seller/:userid/products", restricted, (req, res) => {
  const { userid } = req.params;
  console.log(userid);
  Products.get(userid)
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({ message: "Error accessing database" });
    });
});

//GET single product

router.get("/seller/:userid/products/:productid", restricted, (req, res) => {
  const { productid } = req.params;

  Products.getBy(productid)
    .first()
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching product from database." });
    });
});

//POST add products

router.post("/seller/:userid/products", restricted, (req, res) => {
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

//DELETE delete proudct

router.delete("/seller/:userid/products/:productid", restricted, (req, res) => {
  const { productid } = req.params;

  Products.remove(productid)
    .then(deleted => {
      res.status(200).json({ message: "Product deleted" });
    })
    .catch(err => {
      res.status(500).json({ message: "Error delting product from database." });
    });
});

//PUT update product

router.put("/seller/:userid/products/:productid", restricted, (req, res) => {
  const { productid } = req.params;
  const changes = req.body;

  Products.update(productid, changes)
    .then(udpated => {
      res.status(200).json({ message: "Product has been updated. " });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error deleting product from database." });
    });
});

module.exports = router;
