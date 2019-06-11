// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: require("./config")["development"].database.filename
    },
    seeds: {
      directory: "./seeds/dev"
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: require("./config")["test"].database.filename
    },
    seeds: {
      directory: "./seeds/test"
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: require("./config")["production"].database.filename
    },
    seeds: {
      directory: "./seeds/prod"
    }
  },

};
