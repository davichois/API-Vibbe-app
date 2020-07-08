const express = require("express");

const departamentos = require("../components/network");

const router = function (app) {
  app.use("/api/covid19", departamentos);
};

module.exports = router;
