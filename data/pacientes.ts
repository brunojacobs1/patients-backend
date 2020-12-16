import { Genero, Paciente } from '../src/types';
import { toNuevoPaciente } from '../src/utils';

const data = [
  {
    id: 'h80nj2uy2jm',
    nombre: 'Fernando Alcocer',
    fechaDeNacimiento: '1986-07-09',
    genero: Genero.Masculino,
    ocupacion: 'Policía',
    ingresos: [
      {
        id: 'b7kxchfz08q',
        fecha: '2015-01-02',
        tipo: 'Hospital',
        especialista: 'MD House',
        diagnosisCodes: ['S62.5'],
        descripcion:
          'Tiempo de curación aproximado: 2 semanas. Paciente no recuerda cómo se lesionó',
        descarga: {
          fecha: '2015-01-16',
          criterio: 'Curación finalizada',
        },
      },
    ],
  },
  {
    id: '1c6crwfyvr1',
    nombre: 'Mariano Curbelo',
    fechaDeNacimiento: '1979-01-30',
    genero: Genero.Masculino,
    ocupacion: 'Programador',
    ingresos: [
      {
        id: 'l0vg4igzwt8',
        fecha: '2019-08-05',
        tipo: 'SaludOcupacional',
        especialista: 'MD House',
        nombreEmpleador: 'everis',
        diagnosisCodes: ['Z57.1', 'Z74.3', 'M51.2'],
        descripcion:
          'Paciente se acercó mucho a la planta de Chernobyl. Presenta leve envenenamiento por radiación ',
        bajaPorEnfermedad: {
          fechaInicio: '2019-08-05',
          fechaFin: '2019-08-28',
        },
      },
    ],
  },
  {
    id: 'ufkb2fbc79',
    nombre: 'Julio Rubio',
    fechaDeNacimiento: '1970-04-25',
    genero: Genero.Masculino,
    ocupacion: 'Electricista',
    ingresos: [],
  },
  {
    id: 'x4j8rbrw5y',
    nombre: 'Isabel Fraga',
    fechaDeNacimiento: '1974-01-05',
    genero: Genero.Femenino,
    ocupacion: 'Patólogo Forense',
    ingresos: [
      {
        id: 'tm56gmdxlb',
        fecha: '2019-10-20',
        especialista: 'MD House',
        tipo: 'Chequeo',
        descripcion:
          'Visita de control anual. Niveles de colesterol mejoraron.',
        chequeoRating: 0,
      },
      {
        id: 'x85bf91ihel',
        fecha: '2019-09-10',
        especialista: 'MD House',
        tipo: 'SaludOcupacional',
        nombreEmpleador: 'FBI',
        descripcion: 'Se renovaron las prescripciones',
      },
      {
        id: 'ultiwfxqdia',
        fecha: '2018-10-05',
        especialista: 'MD House',
        tipo: 'Chequeo',
        descripcion:
          'Visita de control anual. Niveles ligeramente altos de colesterol. Se dieron recomendaciones',
        chequeoRating: 1,
      },
    ],
  },
  {
    id: 'pv6m9wm2asr',
    nombre: 'Emilio Venegas',
    fechaDeNacimiento: '1971-04-09',
    genero: Genero.Masculino,
    ocupacion: 'Ingeniero',
    ingresos: [
      {
        id: '54a8746e-34c4-4cf4-bf72-bfecd039be9a',
        fecha: '2019-05-01',
        especialista: 'MD House',
        tipo: 'Chequeo',
        descripcion: 'Saludable, no presenta nada fuera de lo normal.',
        chequeoRating: 0,
      },
    ],
  },
];

const pacientes: Paciente[] = data.map((obj) => {
  const object = toNuevoPaciente(obj) as Paciente;
  object.id = obj.id;
  return object;
});

export default pacientes;
