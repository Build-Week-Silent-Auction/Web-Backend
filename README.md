# Silent Auction

## Endpoints

### Auth Routes

| Method | Endpoint          | Access Control | Description                                                                               |
| ------ | ----------------- | -------------- | ----------------------------------------------------------------------------------------- |
| POST   | `/auth/register/` | All users      | Takes in JSON with "first_name", "last_name", "email", "username", and "password".        |
| POST   | `/auth/login/`    | All users      | Takes in JSON with "username" and "password". Returns a JSON web token as res.data.token. |  |

## Must be logged in and pass JWT in headers to access rest of routes.

### Auction Routes

| Method | Endpoint                              | Access Control                    | Description                                                                                                                       |
| ------ | ------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/bidder/auctions`                    | All users.                           | Returns all open auctions.                                                                                                        |
| GET    | `/bidder/auctions/:auctionid`         | All users                         | Returns single auctions.                                                                                                          |
| GET    | `/seller/:userid/auctions`            | All users                         | Returns all auctions associated with a user.                                                                                      |
| PUT    | `seller/:userid/auctions/:auctionid`  | Return a single seller's auction. |
| POST   | `/seller/:userid/auctions`            | All users                         | Takes in JSON with "auction_name", "auction_description", "start_time", "end_time", and "starting_bid" and creates a new auction. |
| DEL    | `/seller/:userid/auctions/:auctionid` | All users                         | Deletes an auctions.                                                                                                              |
| PUT    | `/seller/:userid/auctions/:auctionid` | All users                         | Takes JSON with "auction_name", "auction_description", "start_time", "end_time", "starting_bid" and edits an auction.             |

### Products Routes

| Method | Endpoint                              | Access Control                          | Description                                                    |
| ------ | ------------------------------------- | --------------------------------------- | -------------------------------------------------------------- |
| GET    | `/seller/:userid/products`            | All users. | Returns all products for a single user.
| GET    | `/seller/:userid/products/:productid` | All users                               | Returns a single product for a user.                           |
| DEL    | `/seller/:userid/products/:productid` | All users                               | Deletes product from a user.                                   |
| UPDATE | `/seller/:userid/products/:productid` | All users                               | Takes JSON with "product_name" and edits a product for a user. |

### Bidding Process Routes

| Method | Endpoint                               | Access Control | Description                                                                   |
| ------ | -------------------------------------- | -------------- | ----------------------------------------------------------------------------- |
| GET    | `/bidder/:userid/bids`                 | All users      | Returns a list a single bids.                                                 |
| GET    | `/bidder/auctions/:auctionid/bids/all` | All users      | Returns a list a all bids for an auction.                                     |
| GET    | `/bidder/auctions/:auctionid/bids`     | All users      | Returns a list of the top 3 bids for an auction.                              |
| POST   | `/bidder/:userid/bids/:auctionid`      | All users      | Takes JSON with "bid" and creates a new bid. Must be higher than current bid. |

### Closing Process Routes

| Method | Endpoint                          | Access Control | Description                            |
| ------ | --------------------------------- | -------------- | -------------------------------------- |
| GET    | `/closing/bidder/:userid/contact` | All users      | Returns a seller's contact information |

## Data Model

---

## Users

```
{
    id: UUID
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
}
```

### Bids

---

```
{
    id: UUID
    bid: integer
    user_id: integer
    auction_id: integer
}
```

### Auctions

---

```
{
    id: UUID
    auction_name: string
    description: string
    start_time: string
    end_time: string
    starting_price: string
    product_id: string
}
```

### Products

---

```
{
    id: UUID
    product_name: string
    product_description: boolean
    user_id: integer
}
```
