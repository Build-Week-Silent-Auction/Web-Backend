exports.up = function(knex) {
  return knex.schema.createTable("products", products => {
    products.increments();
    products.string("product_name").notNullable();
    products
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    products
      .integer("auction_id")
      .unsigned()
      .references("id")
      .inTable("auctions")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("products");
};
