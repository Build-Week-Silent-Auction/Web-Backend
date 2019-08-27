const db = require("../database/db-config.js");

module.exports = {
  get,
  add
};

function get(userid) {
  return db("products")
    .innerJoin("users", "users.id", "products.user_id")
    .select("products.product_name")
    .where({ user_id: userid });
}

function add(userid, product) {
  const productUser = {
    ...product,
    user_id: userid
  };

  return db("products").insert(productUser);
}
