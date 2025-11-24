import   db from '../../../config/db.js';
   

export const getUserByEmail = async (email) => {
  const [rows] = await db.query(
    "SELECT * FROM usuarios WHERE correo = ? LIMIT 1",
    [email]
  );
  return rows[0];
};  
