import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export async function getMovies(category: string) {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${category}`
  );

  return response.data.Search || [];
}

export async function getMovieDetails(id: string) {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
  );

  return response.data;
}