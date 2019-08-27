exports.seed = function(knex, Promise) {
  return knex("auctions").insert([
    {
      auction_name: "Shoes Test",
      auction_description: "Yeezy",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 150,
      bid: "0",
      product_id: 1
    },
    {
      auction_name: "Macbook",
      auction_description: "2011",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 650,
      bid: "0",
      product_id: 2
    },
    {
      auction_name: "Rolex",
      auction_description: "2011",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 100,
      bid: "0",
      product_id: 3
    },
    {
      auction_name: "TV",
      auction_description: "2011",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 650,
      bid: "0",
      product_id: 5
    }
  ]);
};
