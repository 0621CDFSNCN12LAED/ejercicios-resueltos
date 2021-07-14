//requerir (o importar) la funcion sumar
const operaciones = require("./operaciones");

//ejecutar la funcion sumar con dos numeros: 10 y 5
const paramA = 15;
const paramB = 5;
const resta = operaciones.restar(paramA, paramB);
const multi = operaciones.multiplicar(paramA, paramB);

//mostrar en terminal el resultado
console.log(paramA + "-" + paramB + " = " + resta);
console.log(paramA + "*" + paramB + " = " + multi);
