import express from 'express';
import diagnosticoService from '../services/diagnosticoService';

const diagnosticoRouter = express.Router();

diagnosticoRouter.get('/', (_req, res) => {
  res.send(diagnosticoService.getDiagnosticos());
});

diagnosticoRouter.get('/:codigo', (req, res) => {
  const diagnostico = diagnosticoService.getDiagnostico(req.params.codigo);
  diagnostico
    ? res.send(diagnostico)
    : res.send({ error: 'diagnostico no encontrado' });
});
// diagnosticoRouter.post('/', (_req, res) => {
//   res.send('Diagnostico añadido!');
// });

export default diagnosticoRouter;
