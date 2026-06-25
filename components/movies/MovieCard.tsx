"use client";

import Image from "next/image";
import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieCard({
  movie,
  onClick,
}: MovieCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        overflow-hidden
        rounded-xl
        bg-gray-800
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-2xl
        hover:shadow-red-500/30
      "
    >
      <Image
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "/images/no-poster.png"
        }
        alt={movie.Title}
        width={300}
        height={450}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold text-white">
          {movie.Title}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          {movie.Year}
        </p>
      </div>
    </div>
  );
}