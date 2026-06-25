"use client";

import { useEffect, useState } from "react";

export default function TimerWidget() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    if (timeLeft <= 0) {
      alert("⏰ Time's Up!");
      setRunning(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, timeLeft]);

  const startTimer = () => {
    const total =
      Number(hours) * 3600 +
      Number(minutes) * 60 +
      Number(seconds);

    if (!running && timeLeft === 0) {
      setTimeLeft(total);
    }

    setRunning(true);
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const displayHours = Math.floor(timeLeft / 3600);
  const displayMinutes = Math.floor((timeLeft % 3600) / 60);
  const displaySeconds = timeLeft % 60;

  return (
    <div className="rounded-xl bg-gray-800 p-6 shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">
        Timer
      </h2>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <input
          type="number"
          min="0"
          placeholder="HH"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="rounded bg-gray-700 p-2 text-center"
        />

        <input
          type="number"
          min="0"
          placeholder="MM"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="rounded bg-gray-700 p-2 text-center"
        />

        <input
          type="number"
          min="0"
          placeholder="SS"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          className="rounded bg-gray-700 p-2 text-center"
        />
      </div>

      <h1 className="text-4xl text-center font-bold mb-6">
        {String(displayHours).padStart(2, "0")}:
        {String(displayMinutes).padStart(2, "0")}:
        {String(displaySeconds).padStart(2, "0")}
      </h1>

      <div className="flex gap-2">
        <button
          onClick={startTimer}
          className="flex-1 rounded bg-green-600 py-2 hover:bg-green-700"
        >
          Start
        </button>

        <button
          onClick={pauseTimer}
          className="flex-1 rounded bg-yellow-500 py-2 hover:bg-yellow-600"
        >
          Pause
        </button>

        <button
          onClick={resetTimer}
          className="flex-1 rounded bg-red-600 py-2 hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}