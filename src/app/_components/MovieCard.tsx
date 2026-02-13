import React from "react";
import { Result } from "../../../utils/types";
import { Star } from "lucide-react";

export const MovieCard = ({
  name,
  rating,
  img,
}: {
  name: string;
  rating: number;
  img: string;
}) => {
  const movieImg = `https://image.tmdb.org/t/p/w500${img}`;
  return (
    <div className="h-[439] bg-gray-100 rounded-md ">
      <div className="w-[229.73] h-[340]">
        <img className="rounded-t-lg" src={movieImg} alt="Dear" />
        <div className="flex gap-1.5 p-3">
          <Star className="text-[#FDE047]" fill="#FDE047" />
          <div className="flex justify-center">
            <p>{rating.toFixed(1)}</p>
            <p className="text-gray-500">/10</p>
          </div>
        </div>
        <div>{name}</div>
      </div>
    </div>
  );
};
