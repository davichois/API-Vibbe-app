const config = {
  api: {
    port: process.env.PORT || 5000,
    uri: process.env.DB_MONGO || "mongodb://localhost/api-covid",
    host: process.env.HOST || "http://localhost:4000",
  },
};

module.exports = { config };
