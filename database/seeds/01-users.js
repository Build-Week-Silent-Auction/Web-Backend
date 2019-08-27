exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      first_name: "first",
      last_name: "last",
      email: "testing4@gmail.com",
      username: "testing4",
      password: "password",
      user_classification: "Seller"
    },
    {
      first_name: "first",
      last_name: "last",
      email: "testing5@gmail.com",
      username: "testing5",
      password: "password",
      user_classification: "Seller"
    },
    {
      first_name: "first",
      last_name: "last",
      email: "testing6@gmail.com",
      username: "testing6",
      password: "password",
      user_classification: "Seller"
    }
  ]);
};
