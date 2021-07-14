//La cual debe ser exportada al final del archivo
module.exports = {
  restar: (numeroA, numeroB) => {
    //sumar los dos parametros y guardarlo una variable
    const resultado = numeroA - numeroB;

    //retornar el resultado de esa suma
    return resultado;
  },
  sumar: (numeroA, numeroB) => {
    //sumar los dos parametros y guardarlo una variable
    const resultado = numeroA - numeroB;

    //retornar el resultado de esa suma
    return resultado;
  },
  multiplicar: (numeroA, numeroB) => {
    //si numeroA es 0 o numeroB es igual a 0
    //el resultado es 0
    if (numeroA == 0 || numeroB == 0) {
      return 0;
    }

    return numeroA * numeroB;
  },
};
