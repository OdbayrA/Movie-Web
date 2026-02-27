import { Input } from "@/components/ui/input";
import { Film, Moon } from "lucide-react";
import Link from "next/link";
import { GenreMenu } from "./GenreMenu";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="flex max-w-7xl justify-between p-3 mx-auto">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Film className="text-[#4338CA]" />
          <h1 className="text-[#4338CA] font-bold italic">Movie Z</h1>
        </div>
      </Link>

      <div className="flex gap-6">
        <GenreMenu />
        <Input />
      </div>
      <Button size="icon" variant="outline">
        <Moon />
      </Button>
    </div>
  );
};
