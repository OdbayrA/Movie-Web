import React from "react";
import { Result } from "../../../utils/types";
import { Star } from "lucide-react";

export const MovieCard = ({ movie }: { movie: Result }) => {
  console.log(movie);
  const img = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="h-[439] bg-gray-100 rounded-md ">
      <div className="w-[229.73] h-[340]">
        <img className="rounded-t-lg" src={img} alt="Dear" />
        <div className="flex gap-1.5 p-3">
          <Star className="text-[#FDE047]" fill="#FDE047" />
          <div className="flex justify-center">
            <p>{movie.vote_average.toFixed(1)}</p>
            <p className="text-gray-500">/10</p>
          </div>
        </div>
        <div>{movie.title}</div>
      </div>
    </div>
  );
};
