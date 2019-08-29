exports.seed = function(knex, Promise) {
  return knex("bids").insert([
    {
      user_id: 1,
      auction_id: 1,
      bid: 500
    },
    {
      user_id: 2,
      auction_id: 1,
      bid: 510
    },
    {
      user_id: 3,
      auction_id: 1,
      bid: 515
    },
    {
      user_id: 5,
      auction_id: 1,
      bid: 520
    },
    {
      user_id: 3,
      auction_id: 2,
      bid: 81
    },
    {
      user_id: 4,
      auction_id: 2,
      bid: 90
    },
    {
      user_id: 4,
      auction_id: 2,
      bid: 95
    },
    {
      user_id: 1,
      auction_id: 2,
      bid: 100
    },
    {
      user_id: 2,
      auction_id: 2,
      bid: 115
    }
  ]);
};
