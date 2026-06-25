"use client";

import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

interface Props {
  movies: Movie[];
}

export default function MoviesGrid({
  movies,
}: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}