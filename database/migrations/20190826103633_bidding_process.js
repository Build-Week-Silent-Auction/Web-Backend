exports.up = function(knex) {
  return knex.schema.createTable("bidding_process", bid => {
    bid.increments();
    bid
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("bidding_process");
};
