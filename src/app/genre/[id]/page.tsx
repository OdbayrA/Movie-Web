import { getMovieGenre } from "../../../../utils/getData";

type GenrePageProps = {
  params: Promise<{ id: string }>;
};

export default async function Genre({ params }: GenrePageProps) {
  const { id } = await params;
  const page = 1;

  const movies = await getMovieGenre(id, page);
  console.log(movies, "moviesbygenre");
  return (
    <div>
      <div>{id}</div>
    </div>
  );
}
