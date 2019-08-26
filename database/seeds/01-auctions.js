exports.seed = function(knex) {
  return knex("auctions").insert([
    {
      auction_name: "Shoes Test",
      auction_description: "Yeezy v2 for auction",
      start_time: new Date(),
      end_time: new Date(),
      starting_bid: "150",
      bid: "0"
    },
    {
      auction_name: "Watch Test",
      auction_description: "Boat for auction",
      start_time: new Date(),
      end_time: new Date(),
      starting_bid: "15",
      bid: "0"
    },
    {
      auction_name: "Computer Test",
      auction_description: "Computer for auction",
      start_time: new Date(),
      end_time: new Date(),
      starting_bid: "1000",
      bid: "0"
    }
  ]);
};
