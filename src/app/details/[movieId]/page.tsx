import { Star } from "lucide-react";
import {
  getActors,
  getDetails,
  getSimilarMovie,
} from "../../../../utils/getData";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DetailsPageCard } from "@/app/_components/DetailsPageCard";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

const Details = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const similarMovie = await getSimilarMovie(movieId);
  console.log(similarMovie, "similarMovie");

  const details = await getDetails(movieId);

  const actorInfo = await getActors(movieId);
  console.log("actors response", actorInfo);

  const director = actorInfo.crew.filter((man) => {
    return man.job === "Director";
  });

  const writers = actorInfo.crew.filter((man) => {
    return man.job === "Screenplay";
  });

  console.log(writers);

  return (
    <div className="w-270 m-auto p-13 flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">{details.title}</h1>
          <p>
            {details.release_date}· {details.adult ? "R" : "PG"} ·{" "}
            {details.runtime} min
          </p>
        </div>
        <div>
          <p>Rating</p>
          <div className="flex">
            <Star className="text-yellow-300" fill="#FDE047" />
            <p className="text-lg">{details.vote_average}</p>
            <p className="text-gray-500">/10</p>
          </div>
          <p className="text-gray-500">{details.vote_count}</p>
        </div>
      </div>
      <div className="flex gap-8">
        <img
          className="w-[290] h-[428] border rounded-sm"
          src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
          alt="poster"
        />
        <img
          className="w-190 h-107 border rounded-sm "
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt="poster"
        />
      </div>
      <div className="flex gap-3">
        {details.genres.map((genre) => {
          return <Badge key={genre.id}>{genre.name}</Badge>;
        })}
      </div>
      <p>{details.overview}</p>
      <div className="flex flex-col gap-5 font-bold">
        <div className="border-b-2 py-2 flex gap-10">
          <p className="flex-1/4">Directors</p>
          <p className="flex-3/4 text-[#09090B] font-normal">
            {director[0].name}
          </p>
        </div>
        <div className="border-b-2 py-2 flex gap-10">
          <p className="flex-1/4">Writers</p>
          <div className="flex-3/4 gap-2 flex text-[#09090B] font-normal">
            {writers.map((writer) => {
              return <p key={writer.id || writer.name}>{writer.name} •</p>;
            })}
          </div>
        </div>
        <div className="border-b-2 py-2 flex gap-10">
          <p className="flex-1/4">Stars</p>
          <div className="flex-3/4 gap-2 flex ttext-[#09090B] font-normal">
            {actorInfo.cast.slice(0, 3).map((star) => {
              return <p key={star.id}>{star.original_name} •</p>;
            })}
          </div>
        </div>
      </div>
      <div className="w-270 h-[440.38]">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">More like this</h1>
          <p>See more</p>
        </div>
        <div className=" w-full h-full flex justify-between  ">
          {similarMovie.results.slice(0, 5).map((movie) => (
            <div key={movie.id}>
              <DetailsPageCard
                movieId={movie.id}
                rating={movie.vote_average}
                title={movie.title}
                img={movie.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
