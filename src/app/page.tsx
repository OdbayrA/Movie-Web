import { MovieListTen } from "./_components/MovieListTen";
import {
  getPopularMovies,
  getTopRated,
  getUpComingMovies,
} from "../../utils/getData";
import { Hero } from "./_components/Hero";

export default async function Home() {
  const { results: upcoming } = await getUpComingMovies();
  const { results: popular } = await getPopularMovies();
  const { results: topRated } = await getTopRated();

  return (
    <div className=" flex flex-col justify-center items-center w-360 m-auto">
      <Hero />
      {/* <MyFooter /> */}
      <MovieListTen movies={upcoming} label="Upcoming" />
      <MovieListTen movies={popular} label="Popular" />
      <MovieListTen movies={topRated} label="Top Rated" />
    </div>
  );
}
