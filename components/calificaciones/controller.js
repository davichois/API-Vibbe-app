const Calificaciones = require("./model");

class CalificacionesController {
  async getCalificaciones() {
    const getCalificaciones = await Calificaciones.find();
    return getCalificaciones;
  }

  async createCalificaciones({ likes, comments }) {
    const newCalificaciones = new Calificaciones({
      likes: likes,
      comments: comments,
    });
    const createCalificaciones = await newCalificaciones.save();
    return createCalificaciones;
  }

  async deleteCalificaciones({ id }) {
    const deleteCalificaciones = await Calificaciones.findOneAndDelete({
      _id: id,
    });
    return deleteCalificaciones;
  }
}

module.exports = CalificacionesController;
