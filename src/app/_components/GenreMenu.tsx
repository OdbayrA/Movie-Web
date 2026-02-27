// "use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getGenres } from "../../../utils/getData";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const GenreMenu = async () => {
  const { genres } = await getGenres();

  console.log(genres, "genre genre");

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Genre</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[577] h-fit p-[20] " align="start">
          <div>
            <p className="text-2xl font-bold">Genres</p>
            <p>See lists of movies by genre</p>
          </div>
          <Separator className="my-5" />

          <div className="flex flex-wrap gap-4">
            {genres.map((genre) => (
              <div key={genre.id}>
                <Link href={`/genre/${genre.id}`}>
                  <Badge key={genre.id} variant="outline">
                    {genre.name}
                    <ChevronRight />
                  </Badge>
                </Link>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
