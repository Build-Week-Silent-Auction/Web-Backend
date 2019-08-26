exports.up = function(knex) {
  return knex.schema.createTable("auctions", auctions => {
    auctions.increments();

    auctions.string("auction_name").notNullable();
    auctions.string("auction_description").notNullable();
    auctions.datetime("start_time", { precision: 6 }).notNullable();
    auctions.datetime("end_time", { precision: 6 }).notNullable();
    auctions.integer("starting_bid").notNullable();
    auctions.integer("bid").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("auctions");
};
