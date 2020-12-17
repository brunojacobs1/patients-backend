export interface Diagnostico {
  codigo: string;
  nombre: string;
}

export enum Genero {
  Masculino = 'Masculino',
  Femenino = 'Femenino',
  Otro = 'Otro',
}

interface BaseIngreso {
  id: string;
  descripcion: string;
  fecha: string;
  especialista: string;
  diagnosisCodes?: Array<Diagnostico['codigo']>;
}

export enum RatingChequeo {
  Saludable = 0,
  BajoRiesgo = 1,
  AltoRiesgo = 2,
  RiesgoCritico = 3,
}

export interface IngresoChequeo extends BaseIngreso {
  tipo: 'Chequeo';
  ratingChequeo: RatingChequeo;
}

export interface BajaPorEnfermedad {
  fechaInicio: string;
  fechaFin: string;
}

export interface IngresoSaludOcupacional extends BaseIngreso {
  tipo: 'SaludOcupacional';
  nombreEmpleador: string;
  bajaPorEnfermedad?: BajaPorEnfermedad;
}

export interface Descarga {
  fecha: string;
  criterio: string;
}

export interface IngresoHospital extends BaseIngreso {
  tipo: 'Hospital';
  descarga: Descarga;
}
export type Ingreso =
  | IngresoHospital
  | IngresoSaludOcupacional
  | IngresoChequeo;

export interface Paciente {
  id: string;
  nombre: string;
  ocupacion: string;
  genero: Genero;
  fechaDeNacimiento: string;
  ingresos: Ingreso[];
}

export type NuevoPaciente = Omit<Paciente, 'id'>;

export type NuevoIngreso =
  | Omit<IngresoChequeo, 'id'>
  | Omit<IngresoHospital, 'id'>
  | Omit<IngresoSaludOcupacional, 'id'>;
