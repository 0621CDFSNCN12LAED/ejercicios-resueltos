import GenresList from "./categoriesInDb/categoriesInDb";
import ContentCard from "./contentCard/contentCard";

export default function GenresInDb() {
  return (
    <ContentCard title="Generos en la DB">
      <GenresList />
    </ContentCard>
  );
}
