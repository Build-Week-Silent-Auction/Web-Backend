const db = require("../database/db-config.js");

module.exports = {
  get,
  add,
  find
};

function get() {
  return db("users");
}

function add(user) {
  return db("users").insert(user);
}

function find(filterBy) {
  return db("users").where(filterBy);
}
