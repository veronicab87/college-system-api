import { Router } from 'express';
var router = Router();

// Ya tienes esto:
import authRoutes from '../src/features/auth/routes.js';

// Agregamos esto:
import matriculasRoutes from '../src/features/matriculas/matriculas.routes.js';

// Montamos ambas rutas
router.use('/auth', authRoutes);
router.use('/matriculas', matriculasRoutes);

export default router;