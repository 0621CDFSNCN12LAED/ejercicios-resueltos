for (let i = 0; i < 5; i++) {}

const listaDeAlumnos = [
  {
    nombre: "Pablo",
    promedio: 6,
    aprobado: null,
  },
  {
    nombre: "Mati",
    promedio: 9,
    aprobado: null,
  },
];

for (const alumno of listaDeAlumnos) {
  console.log(alumno);
  if (alumno.promedio >= 7) {
    alumno.aprobado = true;
  } else {
    alumno.aprobado = false;
  }
  console.log(alumno);
}

// ===========================================

const alumno = {
  nombre: "Pablo",
  promedio: 6,
  aprobado: false,
};

for (const key in alumno) {
  console.log(key + ": " + alumno[key]);
}
