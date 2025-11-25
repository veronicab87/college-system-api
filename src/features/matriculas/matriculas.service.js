import db from "../../../config/db.js";

export const getmatriculas = async () => {
  const [rows] = await db.query(
    "SELECT * FROM matriculas"
  );
  return rows;
};