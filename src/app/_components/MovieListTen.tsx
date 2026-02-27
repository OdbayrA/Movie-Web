import { Label } from "radix-ui";
import { Result } from "../../../utils/types";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { ArrowRight, ChevronRight, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MovieListTen = ({
  movies,
  label,
}: {
  movies: Result[];
  label: string;
}) => {
  return (
    <div className="w-full pt-13 px-20 ">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-1  justify-between">
          <h1>{label}</h1>
          <Button variant={"ghost"}>
            See more <ArrowRight size={18} />
          </Button>
        </div>
        <div className="flex flex-wrap justify-between gap-8">
          {movies.slice(0, 10).map((movie) => (
            <div key={movie.id}>
              <Link href={`/details/${movie.id}`}>
                <MovieCard
                  name={movie.title}
                  rating={movie.vote_average}
                  img={movie.poster_path}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
