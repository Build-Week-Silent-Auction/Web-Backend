exports.up = function(knex) {
  return knex.schema.createTable("auctions", auctions => {
    auctions.increments();

    auctions.string("auction_name").notNullable();
    auctions.string("auction_description").notNullable();
    auctions.datetime("start_time").notNullable();
    auctions.datetime("end_time").notNullable();
    auctions.integer("starting_bid").notNullable();
    auctions.integer("bid").notNullable();
    auctions
      .integer("bid_id")
      .unsigned()
      .references("id")
      .inTable("bidding_process")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    auctions
      .integer("product_id")
      .unsigned()
      .references("id")
      .inTable("products")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("auctions");
};
