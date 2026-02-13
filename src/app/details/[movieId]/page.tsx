import { Star } from "lucide-react";
import { getActors, getDetails } from "../../../../utils/getData";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

const Details = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const details = await getDetails(movieId);
  console.log(details);
  const actorInfo = await getActors(movieId);
  console.log("actors response", actorInfo);

  return (
    <div className="w-270 m-auto p-13 flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">Wicked</h1>
          <p>2024.11.26 · PG · 2h 40m</p>
        </div>
        <div>
          <p>Rating</p>
          <div className="flex">
            <Star className="text-yellow-300" fill="#FDE047" />
            <p className="text-lg">6.9</p>
            <p className="text-gray-500">/10</p>
          </div>
          <p className="text-gray-500">37k</p>
        </div>
      </div>
      <div className="flex gap-8">
        <img className="w-[290] h-[428]" src="/wicked.jpg" alt="poster" />
        <img className="w-190 h-107 " src="/wickedd.jpg" alt="poster" />
      </div>
      <div className="flex gap-3">
        <p className="border rounded-full px-2">Fairy Tale</p>
        <p className="border rounded-full px-2">Pop Musical</p>
        <p className="border rounded-full px-2">Fantasy</p>
        <p className="border rounded-full px-2">Musical</p>
        <p className="border rounded-full px-2 ">Romance</p>
      </div>
      <p>
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.{" "}
      </p>
      <div className="flex flex-col gap-5 font-bold">
        <h2 className=" border-b-2 py-2 ">Director</h2>
        <h3 className="border-b-2 py-2 ">Writers</h3>
        <h4 className="border-b-2 py-2 ">Stars</h4>
      </div>
    </div>
  );
};

export default Details;
