const mongoose = require("mongoose");
const db = mongoose.connection;

async function DataBases(URI) {
  await mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

db.once("open", () => {
  console.log("[DB] => DB CONECTADA");
});

db.on("error", () => {
  console.error("[DB] => ERROR EN LA DB");
});

module.exports = DataBases;
