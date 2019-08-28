exports.seed = function(knex, Promise) {
  return knex("auctions").insert([
    {
      auction_name: "Macbook for Auction",
      auction_description: "I'm seeling my old macbook from college.",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 500,
      product_id: 1
    },
    {
      auction_name: "Airpods for Auctions",
      auction_description: "I upgrade to new onees.",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 80,
      product_id: 3
    },
    {
      auction_name: "Sol Headphones",
      auction_description: "I'm a badass DJ now so I better headphones.",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 10,
      product_id: 5
    },
    {
      auction_name: "WhiteClaws for auctinos",
      auction_description: "I'm broke and need gas money, help a brother out.",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 20,
      product_id: 6
    },
    {
      auction_name: "Brand new Microphone for sale",
      auction_description: "I upgraded and no longer need this.",
      start_time: "2019-8-12",
      end_time: "2019-8-13",
      starting_bid: 100,
      product_id: 11
    }
  ]);
};
