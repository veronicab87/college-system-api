import express from "express";
import estudiantesController from "./estudiantes.controller.js";

const router = express.Router();

// Rutas CRUD
router.get("/", estudiantesController.listar);
router.get("/:id", estudiantesController.obtener);
router.post("/", estudiantesController.crear);
router.put("/:id", estudiantesController.actualizar);
router.delete("/:id", estudiantesController.eliminar);

export default router;