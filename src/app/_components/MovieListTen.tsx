import { Label } from "radix-ui";
import { Result } from "../../../utils/types";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

export const MovieListTen = ({
  movies,
  label,
}: {
  movies: Result[];
  label: string;
}) => {
  return (
    <div className="w-full pt-13 px-20">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-1 items-center justify-between">
          <h1>{label}</h1>
          <button>See more</button>
        </div>
        <div className="flex flex-wrap gap-8">
          {movies.slice(0, 10).map((movie) => (
            <div key={movie.id}>
              <Link href={`/details/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
