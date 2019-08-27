const db = require("../database/db-config.js");

module.exports = {
  get,
  getBy,
  add,
  remove,
  update
};

function get(userid) {
  return db("products")
    .innerJoin("users", "users.id", "products.user_id")
    .select("products.id", "products.product_name")
    .where({ user_id: userid });
}

function getBy(productid) {
  return db("products")
    .select("products.id", "products.product_name")
    .where("products.id", productid);
}

function add(userid, product) {
  const productUser = {
    ...product,
    user_id: userid
  };
  console.log(productUser);
  return db("products").insert(productUser);
}

function remove(productid) {
  return db("products")
    .where("products.id", productid)
    .del();
}

function update(productid, changes) {
  return db("products")
    .where("products.id", productid)
    .update(changes);
}
