import db from "../../../config/db.js";

export const getmatriculas = async () => {
  const [rows] = await db.query(
    `
      SELECT 
        m.id AS matricula_id,
        m.fecha,
        e.id AS estudiante_id,
        e.nombre AS estudiante_nombre,
        e.documento AS estudiante_documento,
        e.email AS estudiante_email,
        c.id AS curso_id,
        c.curso AS curso_nombre,
        c.estado AS curso_estado,
        c.creado AS curso_creado
      FROM matriculas m
      INNER JOIN estudiantes e ON m.estudiante_id = e.id
      INNER JOIN cursos c ON m.curso_id = c.id
    `)
  return rows;
};

export const getMatriculaPorId = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM matriculas WHERE id = ?",
    [id]
  );
  return rows[0];
};

export const crearMatricula = async (data) => {
  const { estudiante, curso, jornada, fecha } = data;
  const [result] = await db.query(
    "INSERT INTO matriculas (estudiante_id, curso_id, jornada_id, fecha) VALUES (?, ?, ?, ?)",
    [estudiante, curso, jornada, fecha]
  );
  return { id: result.insertId, ...data };
}

export const actualizarMatricula = async (id, data) => {
  const { estudiante_id, curso_id, fecha_matricula } = data;
  const [result] = await db.query(
    "UPDATE matriculas SET estudiante_id = ?, curso_id = ?, fecha = ? WHERE id = ?",
    [estudiante_id, curso_id, fecha_matricula, id]
  );
  if (result.affectedRows === 0) {
    return null;
  }
  return { id, ...data };
}

export const eliminarMatricula = async (id) => {
  const [result] = await db.query(
    "DELETE FROM matriculas WHERE id = ?",
    [id]
  );
  return result.affectedRows > 0;
};