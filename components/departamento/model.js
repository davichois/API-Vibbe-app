const { Schema, model } = require("mongoose");

const modelDepartamentos = new Schema(
  {
    banderaUrl: {
      type: String,
    },
    departamento: {
      type: String,
      required: true,
      default: "NO HAY DEPARTAMENTO",
    },
    confirmados: {
      type: Number,
      required: true,
      default: 0,
    },
    recuperados: {
      type: Number,
      required: true,
      default: 0,
    },
    muertes: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Departamento", modelDepartamentos);
