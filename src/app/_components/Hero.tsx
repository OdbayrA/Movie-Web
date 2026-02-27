import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getNowPlaying } from "../../../utils/getData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const Hero = async () => {
  const { results } = await getNowPlaying();
  console.log(results, "nowPlaying");
  const baseUrl = "https://image.tmdb.org/t/p/w1920/";
  return (
    <div className="">
      <Carousel className="sm:w-360 w-full sm:h-150 aspect-125/82">
        <CarouselContent className="w-full">
          {results.slice(0, 5).map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="p-1 bg-cover">
                <Card className="p-0">
                  <CardContent className="flex h-150 items-center justify-center p-0 relative">
                    <div>
                      <img
                        className="w-full h-full object-covers"
                        src={`${baseUrl}${movie.backdrop_path}`}
                      />
                    </div>
                    <div className=" w-101 text-xs text-white font-semibold absolute left-[135]">
                      <div>
                        <h1 className="text-xl">Now Playing:</h1>
                        <h2 className="text-4xl">Wicked</h2>
                        <div className="flex">
                          <Star
                            className="text-[#FDE047] text-xl "
                            fill="#FDE047"
                          />
                          <p className="text-lg">6.9</p>
                          <p className="text-gray-400 text-lg">/10</p>
                        </div>
                      </div>
                      <div>{movie.overview}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-10 h-10  top-1/2 left-12 -translate-y-1/2" />
        <CarouselNext className=" w-10 h-10 top-1/2 right-12 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};
