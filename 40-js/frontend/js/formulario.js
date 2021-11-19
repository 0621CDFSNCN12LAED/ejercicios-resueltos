window.onload = () => {
  //Obtenemos una pelicula id: 5
  fetch("http://localhost:3031/api/movies/5");

  //Poblamos el formulario con esos datos

  //Registramos eventos a los distintos botones
  //que hagan diferentes fetchs en base a esta pelicula
};
