exports.up = function(knex) {
  return knex.schema.table("users", users => {
    users.string("user_classification");
  });
};

exports.down = function(knex) {
  return knex.schema.dropColumn("user_classification");
};
