import db from "../../../config/db.js";

const estudiantesService = {
  obtenerTodos: async () => {
    const [rows] = await db.query("SELECT * FROM estudiantes");
    return rows;
  },

  obtenerPorId: async (id) => {
    const [rows] = await db.query("SELECT * FROM estudiantes WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  crear: async ({ nombre, documento, email }) => {
    const [result] = await db.query(
      "INSERT INTO estudiantes (nombre, documento, email) VALUES (?, ?, ?)",
      [nombre, documento || null, email]
    );
    return { id: result.insertId };
  },

  actualizar: async (id, { nombre, documento, email }) => {
    await db.query(
      "UPDATE estudiantes SET nombre=?, documento=?, email=? WHERE id=?",
      [nombre, documento || null, email, id]
    );
    return { id };
  },

  eliminar: async (id) => {
    await db.query("DELETE FROM estudiantes WHERE id = ?", [id]);
    return { mensaje: "Eliminado" };
  },
};

export default estudiantesService;
