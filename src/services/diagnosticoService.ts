import diagnosticos from '../../data/diagnosticos';

import { Diagnostico } from '../types';

const getDiagnosticos = (): Array<Diagnostico> => {
  return diagnosticos;
};

const getDiagnostico = (codigo: string): Diagnostico | undefined => {
  return diagnosticos.find((d) => d.codigo === codigo);
};

export default {
  getDiagnosticos,
  getDiagnostico,
};
