const title = document.querySelector("#title");
const rating = document.querySelector("#rating");
const awards = document.querySelector("#awards");
const release_date = document.querySelector("#release_date");
const movieLength = document.querySelector("#length");
const genre_id = document.querySelector("#genre_id");

const errorList = document.querySelector("#errors");

const requiredInputs = [
  title,
  rating,
  awards,
  release_date,
  movieLength,
  genre_id,
];

title.focus();

const form = document.querySelector("#formulario form");

form.addEventListener("submit", (event) => {
  const errors = formIsInvalid();
  if (errors.length > 0) {
    console.log("Formulario es invalido!");
    event.preventDefault();

    errorList.classList.remove("hidden");

    errorList.innerHTML = "";
    for (const error of errors) {
      errorList.innerHTML += `<li>${error}</li>`;
    }
  } else {
    errorList.classList.add("hidden");
    errorList.innerHTML = "";
  }
});

function formIsInvalid() {
  let errors = [];

  errors.push(validateInput(title, isEmpty, "El titulo no puede estar vacio"));
  errors.push(
    validateInput(rating, isEmpty, "La calificacion no puede estar vacia")
  );
  errors.push(
    validateInput(awards, isEmpty, "Los awards no puede estar vacio")
  );
  errors.push(
    validateInput(release_date, isEmpty, "El release_date no puede estar vacio")
  );
  errors.push(
    validateInput(movieLength, isEmpty, "El movieLength no puede estar vacio")
  );
  errors.push(
    validateInput(genre_id, isEmpty, "El genre_id no puede estar vacio")
  );

  if (!isBetween(rating, 1, 10)) {
    rating.classList.add("is-invalid");
    errors.push("La calificacion debe ser un numero entre 1 y 10");
  } else {
    rating.classList.remove("is-invalid");
    rating.classList.add("is-valid");
  }
  if (!isBetween(awards, 1, 10)) {
    awards.classList.add("is-invalid");
    errors.push("Los premios debe ser un numero entre 1 y 10");
  } else {
    awards.classList.remove("is-invalid");
    awards.classList.add("is-valid");
  }

  if (!isBetween(movieLength, 60, 360)) {
    movieLength.classList.add("is-invalid");
    errors.push("La duración debe ser un numero entre 60 y 360");
  } else {
    movieLength.classList.remove("is-invalid");
    movieLength.classList.add("is-valid");
  }

  console.log(errors);

  return errors.filter((msg) => msg != null);
}

function isEmpty(input) {
  return input.value.trim() == "";
}

function isBetween(input, min, max) {
  if (isEmpty(input)) return false;
  return Number(input.value) >= min && Number(input.value) <= max;
}

function validateInput(input, validationFunction, message) {
  if (validationFunction(input)) {
    input.classList.add("is-invalid");
    return message;
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return null;
  }
}
