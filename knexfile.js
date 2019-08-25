const localPG = {
  host: "localhost",
  database: "local",
  user: "localDB",
  password: "password"
};
const productionDBConnection = process.env.DATABASE_URL || localPG;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/auction.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: "pg",
    connection: productionDBConnection,

    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
