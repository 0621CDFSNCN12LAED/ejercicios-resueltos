window.onload = async () => {
  const container = document.querySelector(".container");

  const result = await fetch("http://localhost:3031/api/movies");
  const peliculas = await result.json();
  const data = peliculas.data;

  data.forEach((movie) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.position = "relative";

    const h1 = document.createElement("h1");
    h1.textContent = movie.title;

    const p = document.createElement("p");
    p.textContent = `Rating: ${movie.rating}`;

    const duracion = document.createElement("p");
    duracion.textContent = `Duración: ${movie.length}`;

    const starIcon = document.createElement("i");
    starIcon.classList.add("far", "fa-star");
    starIcon.style.position = "absolute";
    starIcon.style.right = "0px";
    starIcon.style.top = "0px";

    starIcon.onclick = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push(movie.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    };
    card.appendChild(starIcon);

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
    if (movie.genre !== null) {
      const genero = document.createElement("p");
      genero.textContent = `Genero: ${movie.genre.name}`;
      card.appendChild(genero);
    }
    card.appendChild(duracion);
  });
};
