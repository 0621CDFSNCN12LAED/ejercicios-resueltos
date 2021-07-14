// Leer el archivo tareas.json
// importar el archivo json <--- string
// >>importar modulo para interactuar con el sistema de archivos ("fs")
const fs = require("fs");
// >>leer el archivo usando fs, en base al nombre del archivo
const textoJSON = fs.readFileSync("./tareas.json", "utf-8");

// descomprimir/traducir el archivo json <--- array con objetos
// guardar mis array de objetos en una variable "tareas"
const tareas = JSON.parse(textoJSON);

// Imprimir todas las tareas en la terminal
// Recorrer ese array en "tareas"
// for (let i = 0; i < tareas.length; i++) {
//   // >Por cada una de las tareas en ese array
//   // >> asignar a una variable llamada "tarea"
//   const tarea = tareas[i];
//   // >> Si el estado de la tarea es "pendiente"
//   if (tarea.estado == "pendiente") {
//     // >>>> Imprimir el titulo de la tarea
//     console.log(tarea.titulo);
//   }
// }

const accion = process.argv[2];
