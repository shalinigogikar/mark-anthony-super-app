import { create } from "zustand";
import { Movie } from "@/types/movie";

interface MovieState {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
}));