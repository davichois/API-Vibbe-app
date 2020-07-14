const express = require("express");

const departamentos = require("../components/departamento/network");
const comentarios = require("../components/calificaciones/network");

const router = function (app) {
  app.use("/api/covid19", departamentos);
  app.use("/api/comentarios", comentarios);
};

module.exports = router;
