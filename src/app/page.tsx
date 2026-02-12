import { MovieListTen } from "./_components/MovieListTen";
import {
  getPopularMovies,
  getTopRated,
  getUpComingMovies,
} from "../../utils/getData";

export default async function Home() {
  const { results: upcoming } = await getUpComingMovies();
  const { results: popular } = await getPopularMovies();
  const { results: topRated } = await getTopRated();
  // const { results: popular } = await getPopularMovies();

  return (
    <div className="w-full">
      {/* <MyFooter /> */}
      <MovieListTen movies={upcoming} label="Upcoming" />
      <MovieListTen movies={popular} label="Popular" />
      <MovieListTen movies={topRated} label="Top Rated" />
    </div>
  );
}
