exports.up = function(knex) {
  return knex.schema.createTable("closing", close => {
    close.increments();
    close
      .integer("auction_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("auctions")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    close.string("shipment_details");
    close.string("payment_details");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("closing");
};
