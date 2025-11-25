import estudiantesService from "./estudiantesService.js";

const estudiantesController = {
  listar: async (req, res) => {
    try {
      const datos = await estudiantesService.obtenerTodos();
      res.json(datos);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo estudiantes" });
    }
  },

  obtener: async (req, res) => {
    try {
      const estudiante = await estudiantesService.obtenerPorId(req.params.id);
      if (!estudiante) return res.status(404).json({ error: "No encontrado" });
      res.json(estudiante);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo estudiante" });
    }
  },

  crear: async (req, res) => {
    try {
      const nuevo = await estudiantesService.crear(req.body);
      res.json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error creando estudiante" });
    }
  },

  actualizar: async (req, res) => {
    try {
      await estudiantesService.actualizar(req.params.id, req.body);
      res.json({ mensaje: "Estudiante actualizado" });
    } catch (error) {
      res.status(500).json({ error: "Error actualizando estudiante" });
    }
  },

  eliminar: async (req, res) => {
    try {
      await estudiantesService.eliminar(req.params.id);
      res.json({ mensaje: "Estudiante eliminado" });
    } catch (error) {
      res.status(500).json({ error: "Error eliminando estudiante" });
    }
  },
};

export default estudiantesController;

