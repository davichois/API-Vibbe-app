const Departamentos = require("./model");
const { config } = require("../../config");

class DepartamentosController {
  async getDepartamentos({ departamento }) {
    if (!departamento) {
      const departamentos = await Departamentos.find();
      return departamentos || [];
    } else {
      const departamentoT = await Departamentos.findOne({
        departamento: departamento,
      });
      return departamentoT || [];
    }
  }

  async getDepartamento({ DepartamentoId }) {
    const departamento = await Departamentos.findOne({ _id: DepartamentoId });
    return departamento;
  }

  async createDepartamento({
    departamento,
    confirmados,
    recuperados,
    muertes,
    bandera,
  }) {
    let banderaUrl = "";
    if (bandera) {
      banderaUrl = `${config.api.host}/files/` + bandera.filename;
    }
    const create = new Departamentos({
      departamento: departamento,
      confirmados: confirmados,
      recuperados: recuperados,
      muertes: muertes,
      banderaUrl: banderaUrl,
    });
    const newD = await create.save();
    return newD;
  }

  async updateDepartamento({
    DepartamentoId,
    departamento,
    confirmados,
    recuperados,
    muertes,
    bandera,
  }) {
    let banderaUrl = "";
    if (bandera) {
      banderaUrl = `${config.api.host}/files/` + bandera.filename;
    }
    const update = await Departamentos.findOneAndUpdate(
      { _id: DepartamentoId },
      {
        departamento: departamento,
        confirmados: confirmados,
        recuperados: recuperados,
        muertes: muertes,
        banderaUrl: banderaUrl,
      }
    );
    await update.save();
    return update;
  }

  async deleteDepartamento({ DepartamentoId }) {
    const deleteDepartamento = await Departamentos.findOneAndDelete({
      _id: DepartamentoId,
    });
    return deleteDepartamento;
  }
}

module.exports = DepartamentosController;
