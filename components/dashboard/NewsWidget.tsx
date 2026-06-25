"use client";

import { useEffect, useState } from "react";
import { getNews } from "@/services/news";
import Image from "next/image";

interface Article {
  title: string;
  description: string;
  image: string;
}

export default function NewsWidget() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNews();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    }

    fetchNews();
  }, []);

  useEffect(() => {
    if (articles.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  if (articles.length === 0) {
    return (
      <div className="rounded-xl bg-gray-800 p-6 text-white">
        Loading News...
      </div>
    );
  }

  const article = articles[currentIndex];

  return (
    <div className="rounded-xl bg-gray-800 p-6 shadow-lg text-white">
      <h2 className="mb-4 text-2xl font-bold">
        Latest News
      </h2>

      {article.image && (
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={300}
          className="mb-4 h-64 w-full rounded-lg object-cover"
        />
      )}

      <h3 className="mb-2 text-xl font-semibold">
        {article.title}
      </h3>

      <p className="text-gray-300">
        {article.description}
      </p>
    </div>
  );
}