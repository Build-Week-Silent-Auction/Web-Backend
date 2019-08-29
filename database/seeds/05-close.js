exports.seed = function(knex, Promise) {
  return knex("closing").insert([
    {
      auction_id: 1,
      shipment_details: "Shipping the home",
      payment_details: "Credit via Stripe"
    }
  ]);
};
