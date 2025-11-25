import { Router } from 'express';
var router = Router();

// Ya tienes esto:
import authRoutes from '../src/features/auth/routes.js';
import matriculasRoutes from '../src/features/matriculas/matriculas.routes.js';
import estudiantesRoutes from '../src/features/estudiantes/estudiantes.routes.js';

// Montamos ambas rutas
router.use('/auth', authRoutes);
router.use('/matriculas', matriculasRoutes);
router.use('/estudiantes', estudiantesRoutes);

export default router;