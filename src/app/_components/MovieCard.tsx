import React from "react";
import { Result } from "../../../utils/types";
import { Star } from "lucide-react";

export const MovieCard = ({ movie }: { movie: Result }) => {
  console.log(movie);
  const img = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="h-[439] ">
      <div className="w-[229.73] h-[340]">
        <img src={img} alt="Dear" />
        <div className="flex justify-center">
          <Star />
          <p>6.9</p>
          <p>10</p>
        </div>
        <div>{movie.title}</div>
      </div>
    </div>
  );
};
