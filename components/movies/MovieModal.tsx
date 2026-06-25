"use client";

import Image from "next/image";
import { MovieDetails } from "@/types/movie";

interface MovieModalProps {
  movie: MovieDetails | null;
  onClose: () => void;
}

export default function MovieModal({
  movie,
  onClose,
}: MovieModalProps) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-gray-900 p-6 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-3xl text-white hover:text-red-400"
        >
          ✕
        </button>

        <div className="grid gap-8 md:grid-cols-2">

          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={400}
            height={600}
            className="rounded-xl object-cover"
          />

          <div className="text-white">

            <h1 className="mb-4 text-3xl font-bold">
              {movie.Title}
            </h1>

            <div className="space-y-2">

              <p><strong>⭐ IMDb:</strong> {movie.imdbRating}</p>

              <p><strong>📅 Released:</strong> {movie.Released}</p>

              <p><strong>🎬 Genre:</strong> {movie.Genre}</p>

              <p><strong>⏱ Runtime:</strong> {movie.Runtime}</p>

              <p><strong>🌍 Language:</strong> {movie.Language}</p>

              <p><strong>🎭 Actors:</strong> {movie.Actors}</p>

              <p><strong>🎬 Director:</strong> {movie.Director}</p>

            </div>

            <h2 className="mt-6 text-xl font-semibold">
              Plot
            </h2>

            <p className="mt-2 text-gray-300 leading-7">
              {movie.Plot}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}