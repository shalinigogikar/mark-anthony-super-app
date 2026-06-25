"use client";

import { useEffect, useState } from "react";
import { useCategoryStore } from "@/store/categoryStore";
import {
  getMovies,
  getMovieDetails,
} from "@/services/movie";

import MovieCard from "@/components/movies/MovieCard";
import MovieModal from "@/components/movies/MovieModal";
import { Movie,MovieDetails } from "@/types/movie";
import AuthGuard from "@/components/AuthGuard";
export default function MoviesPage() {
  const { selectedCategories } = useCategoryStore();
  const [movies, setMovies] = useState<Movie[]>([]);

  const [selectedMovie, setSelectedMovie] =
    useState<MovieDetails|null>(null);

  useEffect(() => {
    async function fetchMovies() {
      if (selectedCategories.length === 0) return;

      const data = await getMovies(
        selectedCategories[0]
      );

      setMovies(data);
    }

    fetchMovies();
  }, [selectedCategories]);

  const handleMovieClick = async (id: string) => {
  try {
    const movie = await getMovieDetails(id);
    setSelectedMovie(movie);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <AuthGuard>
    <main className="min-h-screen bg-gray-900 p-8">

      <h1 className="text-5xl text-white font-bold mb-8">
        Movies
      </h1>

      <div className="grid grid-cols-5 gap-6">

        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() =>
              handleMovieClick(movie.imdbID)
            }
          />
        ))}

      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

    </main>
    </AuthGuard>
  );
}