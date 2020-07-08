const config = {
  api: {
    uri: process.env.DB_MONGO || "mongodb://localhost/api-covid",
    host: process.env.HOST || "http://localhost:4000",
  },
};

module.exports = { config };
