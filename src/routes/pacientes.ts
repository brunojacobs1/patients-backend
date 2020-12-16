import express from 'express';
import pacienteService from '../services/pacienteService';
import { toNuevoIngreso, toNuevoPaciente } from '../utils';

const pacienteRouter = express.Router();

pacienteRouter.get('/', (_req, res) => {
  console.log('recibi un request');
  res.send(pacienteService.getPacientes());
});

pacienteRouter.get('/:id', (req, res) => {
  const paciente = pacienteService.getPaciente(req.params.id);
  paciente ? res.send(paciente) : res.send({ error: 'paciente no encontrado' });
});

pacienteRouter.post('/', (req, res) => {
  try {
    const nuevoPaciente = toNuevoPaciente(req.body);
    const pacienteAgregado = pacienteService.addPaciente(nuevoPaciente);
    res.json(pacienteAgregado);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

pacienteRouter.post('/:id/ingresos', (req, res) => {
  try {
    const nuevoIngreso = toNuevoIngreso(req.body);
    const pacienteModificado = pacienteService.addIngreso(
      nuevoIngreso,
      req.params.id
    );
    res.json(pacienteModificado);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default pacienteRouter;
