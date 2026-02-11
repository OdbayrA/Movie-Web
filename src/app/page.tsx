"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { MovieCard } from "./_components/MovieCard";
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../../utils/getData";
import { Result } from "../../utils/types";

export default function Home() {
  const [movies, setMovies] = useState<Result[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await getUpcomingMovies();
      setMovies(results);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div>
        <h2>Upcoming </h2>
        <button>See mpore</button>
      </div>

      <div className="flex flex-wrap gap-8">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
