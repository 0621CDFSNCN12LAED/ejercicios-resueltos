import ContentCard from "./contentCard/contentCard";
import MovieDetail from "./movieDetail/movieDetail";

export default function MoviesInDb() {
  return (
    <ContentCard title="Last movie in Data Base">
      <MovieDetail />
    </ContentCard>
  );
}
