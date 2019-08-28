exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      first_name: "Mariam",
      last_name: "Farrukh",
      email: "silent@gmail.com",
      username: "mariam",
      password: "password",
      user_classification: "Seller"
    },
    {
      first_name: "Ben",
      last_name: "Allen",
      email: "ben@gmail.com",
      username: "ben",
      password: "password",
      user_classification: "Bidder"
    },
    {
      first_name: "Kenneth",
      last_name: "Hill",
      email: "ken@gmail.com",
      username: "ken",
      password: "password",
      user_classification: "Seller"
    },
    {
      first_name: "Zen",
      last_name: "Harris",
      email: "zen@gmail.com",
      username: "zen",
      password: "password",
      user_classification: "Seller"
    },
    {
      first_name: "Nerissa",
      last_name: "Taylor",
      email: "nerissa@gmail.com",
      username: "nerissa",
      password: "password",
      user_classification: "Bidder"
    },
    {
      first_name: "Hector",
      last_name: "Martinez",
      email: "hector@gmail.com",
      username: "hector",
      password: "password",
      user_classification: "Bidder"
    },
    {
      first_name: "Bao",
      last_name: "Pham",
      email: "bao@gmail.com",
      username: "bao",
      password: "password",
      user_classification: "Seller"
    }
  ]);
};
