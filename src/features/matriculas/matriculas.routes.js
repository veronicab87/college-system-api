import { Router } from "express";
import {
  listarMatriculas,
  crearMatricula,
  actualizarMatricula,
  eliminarMatricula
} from "./matriculas.controller.js";

const router = Router();

router.get("/", listarMatriculas);
router.post("/", crearMatricula);
router.put("/:id", actualizarMatricula);
router.delete("/:id", eliminarMatricula);

export default router;