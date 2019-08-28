exports.seed = function(knex, Promise) {
  return knex("products").insert([
    {
      product_name: "2017 Macbook",
      user_id: 1
    },
    {
      product_name: "Apple Watch",
      user_id: 1
    },
    {
      product_name: "Airpods",
      user_id: 2
    },
    {
      product_name: "27in Monitor",
      user_id: 2
    },
    {
      product_name: "Sol Headphones",
      user_id: 3
    },
    {
      product_name: "18 Pack of WhiteClaws",
      user_id: 4
    },
    {
      product_name: "Mac Dre Poster",
      user_id: 4
    },
    {
      product_name: "Leather Couch",
      user_id: 5
    },
    {
      product_name: "HydroFlask",
      user_id: 6
    },
    {
      product_name: "Camping Backpack",
      user_id: 7
    },
    {
      product_name: "Microphone",
      user_id: 7
    }
  ]);
};
