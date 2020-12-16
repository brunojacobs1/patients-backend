import pacientes from '../../data/pacientes';

import { Paciente, NuevoPaciente, NuevoIngreso } from '../types';

const getPacientes = (): Array<Paciente> => {
  return pacientes;
};

const getPaciente = (id: string): Paciente | undefined => {
  return pacientes.find((p) => p.id === id);
};

const addPaciente = (paciente: NuevoPaciente): Paciente => {
  const nuevoPaciente = {
    id: Math.random().toString(36).slice(2),
    ...paciente,
  };

  pacientes.push(nuevoPaciente);
  return nuevoPaciente;
};

const addIngreso = (
  ingreso: NuevoIngreso,
  pacienteId: string
): Paciente | null => {
  const nuevoIngreso = {
    id: Math.random().toString(36).slice(2),
    ...ingreso,
  };

  const paciente = pacientes.find((p) => p.id === pacienteId);
  if (paciente) {
    paciente.ingresos.push(nuevoIngreso);
    return paciente;
  } else {
    return null;
  }
};

export default {
  getPacientes,
  addPaciente,
  getPaciente,
  addIngreso,
};
