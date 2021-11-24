const categories = [
  "Acción",
  "Animación",
  "Aventura",
  "Ciencia Ficción",
  "Comedia",
  "Documental",
  "Drama",
  "Fantasia",
  "Infantiles",
  "Musical",
];

export default function CategoriesInDb(props) {
  return (
    <div class="row">
      {categories.map((category) => {
        return (
          <div class="col-lg-6 mb-4">
            <div class="card bg-dark text-white shadow">
              <div class="card-body">{category}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
