import Link from "next/link";
import { Star } from "lucide-react";

export const DetailsPageCard = ({
  movieId,
  rating,
  title,
  img,
}: {
  movieId: number;
  rating: number;
  title: string;
  img: string;
}) => {
  return (
    <Link href={`/details/${movieId}`}>
      <div className="w-47.5 h-[372.38px]">
        <img
          className="w-full h-[281.38] "
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt="poster"
        />
        <div className=" bg-gray-100 h-[87]">
          <div className="flex">
            <Star className="text-yellow-300" fill="#FDE047" />
            <p>{rating.toFixed(1)}</p>
            <p className="text-gray-500">/10</p>
          </div>
          <div>{title}</div>
        </div>
      </div>
    </Link>
  );
};
