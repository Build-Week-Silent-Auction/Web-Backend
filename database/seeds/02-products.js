exports.seed = function(knex, Promise) {
  return knex("products").insert([
    {
      product_name: "Shoes",
      user_id: 1
    },
    {
      product_name: "Computer",
      user_id: 1
    },
    {
      product_name: "Watch",
      user_id: 2
    },
    {
      product_name: "Monitor",
      user_id: 2
    },
    {
      product_name: "TV",
      user_id: 2
    },
    {
      product_name: "Goldfish",
      user_id: 3
    }
  ]);
};
