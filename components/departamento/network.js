const express = require("express");
const router = express.Router();
const path = require("path");
const response = require("../../network/response");
const multer = require("multer");

const DepartamentosController = require("./controller");
const Controller = new DepartamentosController();

router.get("/", async (req, res) => {
  const { departamento } = req.query;
  try {
    const departamentos = await Controller.getDepartamentos({ departamento });
    response.success(req, res, departamentos, 200);
  } catch (err) {
    response.error(
      req,
      res,
      err,
      500,
      "Error del controlador de departamentos => [GET]"
    );
  }
});

router.get("/:DepartamentoId", async (req, res) => {
  const { DepartamentoId } = req.params;
  try {
    const departamento = await Controller.getDepartamento({ DepartamentoId });
    response.success(req, res, departamento, 200);
  } catch (err) {
    response.error(
      req,
      res,
      err,
      500,
      "Error del controlador de departamentos => [GET/:ID]"
    );
  }
});

const storage = multer.diskStorage({
  destination: path.resolve("public/files"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  dest: path.resolve("/public/files"),
}).single("bandera");

router.post("/", upload, async (req, res) => {
  const { departamento, confirmados, recuperados, muertes } = req.body;
  const bandera = req.file;
  try {
    const create = await Controller.createDepartamento({
      bandera,
      departamento,
      confirmados,
      recuperados,
      muertes,
    });
    response.success(req, res, create, 201);
  } catch (err) {
    response.error(req, res, err, 500, "Error del Post");
  }
});

router.put("/:DepartamentoId", upload, async (req, res) => {
  const { DepartamentoId } = req.params;
  const { departamento, confirmados, recuperados, muertes } = req.body;
  const bandera = req.file;
  try {
    const updateDepartamento = await Controller.updateDepartamento({
      bandera,
      DepartamentoId,
      departamento,
      confirmados,
      recuperados,
      muertes,
    });
    response.success(req, res, "Departamento actualizado Correctamente", 200);
  } catch (err) {
    response.error(
      req,
      res,
      err,
      500,
      "Error del controlador de departamentos => [PUT/:ID]"
    );
  }
});

router.delete("/:DepartamentoId", async (req, res) => {
  const { DepartamentoId } = req.params;
  try {
    const deleteDepartamento = await Controller.deleteDepartamento({
      DepartamentoId,
    });
    response.success(req, res, "Departamento eliminado", 204);
  } catch (err) {
    response.error(
      req,
      res,
      err,
      500,
      "Error del controlador de departamentos => [DELETE/:ID]"
    );
  }
});

module.exports = router;
