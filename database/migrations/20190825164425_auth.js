exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users.string("first_name").notNullable();
    users.string("last_name").notNullable();
    users
      .string("email")
      .notNullable()
      .unique();
    users
      .string("username")
      .notNullable()
      .unique();
    users.string("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
