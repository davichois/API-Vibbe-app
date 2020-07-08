const config = {
  api: {
    port: process.env.PORT || 3000,
    uri: process.env.DB_MONGO || "mongodb://localhost/api-covid",
    host: process.env.HOST || "https://vibbeapp.herokuapp.com",
  },
};

module.exports = { config };
