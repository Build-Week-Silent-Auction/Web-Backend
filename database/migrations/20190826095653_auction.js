exports.up = function(knex) {
  return knex.schema.createTable("auctions", auctions => {
    auctions.increments();

    auctions.string("auction_name").notNullable();
    auctions.string("auction_descrption").notNullable();
    auctions.datetime("start_time", { precision: 6 }).notNullable();
    auctions.datetime("end_time", { precision: 6 }).notNullable();
    auctions.integer("bid").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("auctions");
};
