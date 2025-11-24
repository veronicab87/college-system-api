import { getUserByEmail } from './auth.service.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const authController = async( req, res) => {
    try {   
    const { correo, clave } = req.body;

    // 1️⃣ Buscar usuario por correo
    const user = await getUserByEmail(correo);
    if (!user) {
      return res.status(401).json({ error: "email no resgistrado" });
    }

    // 2️⃣ Validar contraseña
    //const validPassword = await bcrypt.compare(clave, user.clave);
    const validPassword = clave === user.clave; // Comparación directa (no segura)
        if (!validPassword) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    // 3️⃣ Crear token JWT
    const token = jwt.sign(
      { id: user.id, rol: user.rol },
      process.env.JWT_SECRET || "mi_clave_secreta",
      { expiresIn: "2h" }
    );

    // 4️⃣ Respuesta con formato que tu frontend espera
    return res.json({
      usuario: {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
        rol: user.rol,
        token, // opcional: puedes guardarlo para autenticación
      },
    });
    } catch (error) {
        console.error('Error en authController:', error);
        res.status(500).json({ message: 'Internal server error' });
    }    
}
