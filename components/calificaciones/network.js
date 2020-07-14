const express = require("express");
const router = express.Router();

const response = require("../../network/response");

const CalificacionesCottroller = require("./controller");
const Controller = new CalificacionesCottroller();

router.get("/", async (req, res) => {
  try {
    const calificaciones = await Controller.getCalificaciones();
    response.success(req, res, calificaciones, 200);
  } catch (err) {
    response.error(
      req,
      res,
      "Invalidate Server",
      500,
      `Error del Controlador de calificaciones =>[GET],${err}`
    );
  }
});

router.post("/", async (req, res) => {
  const { likes, comments } = req.body;
  try {
    const calificaciones = await Controller.createCalificaciones({
      likes,
      comments,
    });
    response.success(req, res, calificaciones, 200);
  } catch (err) {
    response.error(
      req,
      res,
      "Invalidate Server",
      500,
      `Error del Controlador de calificaciones =>[POST],${err}`
    );
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const calificaciones = await Controller.deleteCalificaciones({ id });
    response.success(req, res, calificaciones, 200);
  } catch (err) {
    response.error(
      req,
      res,
      "Invalidate Server",
      500,
      `Error del Controlador de calificaciones =>[GET],${err}`
    );
  }
});

module.exports = router;
