const { Schema, model } = require("mongoose");

const modelComentarios = new Schema(
  {
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Calificaciones", modelComentarios);
