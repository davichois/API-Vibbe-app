//Inicializacion
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { config } = require("./config");
const routes = require("./network/routes");
const db = require("./db");

//Declaracion
const app = express();
db(config.api.uri);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routas&&TodoRutas
app.get("/api", (req, res) => {
  res.json({
    departamento: `${config.api.host}/api/covid19`,
  });
});
routes(app);

//Staticos
app.use(express.static("public"));

//Escuchando
app.listen(config.api.port, () => {
  console.log(`Estoy en: http://localhost:${config.api.port}`);
});
