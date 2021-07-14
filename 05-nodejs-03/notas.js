const estados = ["pendiente", "en proceso", "terminado"];

//Objeto literal de Javascript
const tarea = {
  titulo: "Practicar el switch",
  estado: "pendiente", //¿Por qué no es un boolean?
};

//¿Cómo obtengo la propiedad "titulo"?
// console.log(tarea.titulo);
// tarea.titulo = "Practicar for";
// console.log(tarea.titulo);

//¿Qué significa JSON?
//JavaScript Object Notation
//¿Para qué sirve JSON?
// Para intercambiar datos entre front y el back o entre sistemas o almacenar datos

//¿Cómo seria un array de tareas?

const tareas = [
  {
    titulo: "Practicar el switch",
    estado: "pendiente",
  },
  {
    titulo: "Practicar el for",
    estado: "pendiente",
  },
  {
    titulo: "Ir a comprar lavandina",
    estado: "terminado",
  },
];

//¿Como obtengo la propiedad "titulo" de la tarea N°3?
console.log(tareas[2].titulo);
