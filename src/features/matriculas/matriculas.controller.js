// src/features/matriculas/matriculas.controller.js

import * as matriculasService from "./matriculas.service.js";

export const listarMatriculas = async (req, res) => {
  try {
    const data = await matriculasService.listarMatriculas();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "❌ Error listando matrículas", detalle: err.message });
  }
};

export const crearMatricula = async (req, res) => {
  try {
    const nueva = await matriculasService.crearMatricula(req.body);
    res.status(201).json({ mensaje: "✅ Matrícula creada", ...nueva });
  } catch (err) {
    res.status(500).json({ error: "❌ Error creando matrícula", detalle: err.message });
  }
};

export const actualizarMatricula = async (req, res) => {
  try {
    const actualizada = await matriculasService.actualizarMatricula(req.params.id, req.body);
    if (!actualizada) {
      return res.status(404).json({ error: "⚠️ Matrícula no encontrada" });
    }
    res.json({ mensaje: "✅ Matrícula actualizada", ...actualizada });
  } catch (err) {
    res.status(500).json({ error: "❌ Error actualizando matrícula", detalle: err.message });
  }
};

export const eliminarMatricula = async (req, res) => {
  try {
    const eliminada = await matriculasService.eliminarMatricula(req.params.id);
    if (!eliminada) {
      return res.status(404).json({ error: "⚠️ Matrícula no encontrada" });
    }
    res.json({ mensaje: "✅ Matrícula eliminada" });
  } catch (err) {
    res.status(500).json({ error: "❌ Error eliminando matrícula", detalle: err.message });
  }
};