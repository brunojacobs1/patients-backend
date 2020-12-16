/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  NuevoPaciente,
  Genero,
  Ingreso,
  NuevoIngreso,
  RatingChequeo,
  Descarga,
  BajaPorEnfermedad,
} from './types';

export const toNuevoPaciente = (object: any): NuevoPaciente => {
  return {
    nombre: parseString(object.nombre, 'nombre'),
    ocupacion: parseString(object.ocupacion, 'ocupacion'),
    genero: parseGenero(object.genero),
    fechaDeNacimiento: parseDate(object.fechaDeNacimiento),
    ingresos: parseIngresos(object.ingresos),
  };
};

const parseIngresos = (ingresos: any[]): Ingreso[] => {
  if (!ingresos || !sonIngresos(ingresos)) {
    console.log(ingresos);
    throw new Error(`Incorrectos o faltantes ingresos`);
  }

  return ingresos;
};

const sonIngresos = (param: any[]): param is Ingreso[] => {
  return param.every((element) => {
    return (
      typeof element === 'object' &&
      (element.tipo === 'Hospital' ||
        element.tipo === 'Chequeo' ||
        element.tipo === 'SaludOcupacional')
    );
  });
};

const parseString = (string: any, param: string): string => {
  if (!string || !isString(string)) {
    throw new Error(`Incorrecto o faltante ${param}: ${string}`);
  }

  return string;
};

const parseDate = (fecha: any): string => {
  if (!fecha || !isString(fecha) || !isDate(fecha)) {
    throw new Error(`Incorrecto o faltante fecha: ${fecha}`);
  }

  return fecha;
};

const parseGenero = (genero: any): Genero => {
  if (!genero || !isGenero(genero)) {
    throw new Error(`Incorrecto o faltante genero: ${genero}`);
  }

  return genero;
};

const isGenero = (param: any): param is Genero => {
  return Object.values(Genero).includes(param);
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (fecha: string): boolean => {
  return Boolean(Date.parse(fecha));
};

const isIngreso = (ingreso: any): ingreso is Ingreso => {
  return (
    typeof ingreso === 'object' &&
    (ingreso.type === 'Hospital' ||
      ingreso.type === 'Chequeo' ||
      ingreso.type === 'SaludOcupacional')
  );
};

const isRatingChequeo = (param: any): param is RatingChequeo => {
  return Object.values(RatingChequeo).includes(param);
};

const parseRatingChequeo = (rating: any): RatingChequeo => {
  if (!rating || !isRatingChequeo(rating)) {
    throw new Error(`Incorrecto o faltante rating: ${rating}`);
  }

  return rating;
};

const isDescarga = (param: any): param is Descarga => {
  return (
    typeof param === 'object' &&
    param.fecha !== undefined &&
    param.criterio !== undefined
  );
};

const parseDescarga = (descarga: any): Descarga => {
  if (!descarga || !isDescarga(descarga)) {
    throw new Error('Incorrecta o faltante descarga');
  }

  return {
    fecha: parseDate(descarga.fecha),
    criterio: parseString(descarga.criterio, 'Criterio de descarga'),
  };
};

const isBajaPorEnfermedad = (param: any): param is BajaPorEnfermedad => {
  return (
    typeof param === 'object' &&
    param.fechaInicio !== undefined &&
    param.fechaFin !== undefined
  );
};

const parseBajaPorEnfermedad = (bajaPorEnfermedad: any): BajaPorEnfermedad => {
  if (!bajaPorEnfermedad || !isBajaPorEnfermedad(bajaPorEnfermedad)) {
    throw new Error('Incorrecta baja');
  }

  return {
    fechaInicio: parseDate(bajaPorEnfermedad.fechaInicio),
    fechaFin: parseDate(bajaPorEnfermedad.fechaFin),
  };
};

export const toNuevoIngreso = (ingreso: any): NuevoIngreso => {
  if (isIngreso(ingreso)) {
    const baseIngreso = {
      fecha: parseDate(ingreso.fecha),
      descripcion: parseString(ingreso.descripcion, 'descripcion'),
      especialista: parseString(ingreso.especialista, 'especialista'),
      diagnosisCodes: ingreso.diagnosisCodes || undefined,
    };
    if (ingreso.tipo === 'Chequeo') {
      return {
        ...baseIngreso,
        tipo: ingreso.tipo,
        ratingChequeo: parseRatingChequeo(ingreso.ratingChequeo),
      };
    } else if (ingreso.tipo === 'Hospital') {
      return {
        ...baseIngreso,
        tipo: ingreso.tipo,
        descarga: parseDescarga(ingreso.descarga),
      };
    } else {
      return {
        ...baseIngreso,
        tipo: 'SaludOcupacional',
        nombreEmpleador: parseString(
          ingreso.nombreEmpleador,
          'nombre empleador'
        ),
        bajaPorEnfermedad: ingreso.bajaPorEnfermedad
          ? parseBajaPorEnfermedad(ingreso.bajaPorEnfermedad)
          : undefined,
      };
    }
  } else {
    throw new Error('Ingreso no valido');
  }
};
