import axios from "axios";

export async function getNews() {
  const response = await axios.get("/api/news");

  return response.data.articles;
}