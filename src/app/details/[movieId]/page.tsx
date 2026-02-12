import React, { use } from "react"; // 'use' hook нэмэв
import { getActors } from "../../../../utils/getData";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

const Details = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const actorInfo = await getActors(movieId);
  console.log("actors response", actorInfo);

  return <div>{movieId}</div>;
};

export default Details;
