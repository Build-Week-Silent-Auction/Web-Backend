exports.up = function(knex) {
  return knex.schema.createTable("bids", bid => {
    bid.increments();
    bid.integer("user_id");
    bid
      .integer("auction_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("auctions")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    bid.integer("bid").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("bids");
};
