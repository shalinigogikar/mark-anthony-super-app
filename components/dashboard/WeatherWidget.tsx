"use client";

import { useEffect, useState } from "react";
import { getWeather } from "@/services/weather";

interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
  };
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      const data = await getWeather();
      setWeather(data);
    }

    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <div className="rounded-xl bg-gray-800 p-6 text-white">
        Loading Weather...
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-gray-800 p-6 text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        Weather
      </h2>

      <p>📍 Hyderabad</p>

      <p>
        🌡 Temperature: {weather.current.temperature_2m} °C
      </p>

      <p>
        💧 Humidity: {weather.current.relative_humidity_2m} %
      </p>

      <p>
        🌬 Wind: {weather.current.wind_speed_10m} km/h
      </p>
    </div>
  );
}