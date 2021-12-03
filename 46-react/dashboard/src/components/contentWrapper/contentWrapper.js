import ContentRowTop from "./contentRowTop/contentRowTop";
import GenresInDb from "./genresInDb";
import MoviesInDb from "./moviesInDb";

export default function ContentWrapper() {
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <ContentRowTop />

      <div class="row">
        <MoviesInDb />
        <GenresInDb />
      </div>
    </div>
  );
}
