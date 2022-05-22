const pathData = [
  {
    icon: 'user-alt',
    type: 'Usario Comun',
    privileges: [
      'Editar sus datos',
      'Ver a los profecionales',
      'Evluar profecionales',
    ],
    nav: false,
  },
  {
    icon: 'user-tie',
    type: 'Profesional Titulado',
    privileges: [
      'Modificar sus datos',
      'Mostrar su informacion',
      'Evaluar profesionales',
    ],
    nav: true,
  },
];
export default pathData;
