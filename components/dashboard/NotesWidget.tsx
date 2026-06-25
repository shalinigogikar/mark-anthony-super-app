"use client";

import { useEffect, useState } from "react";

export default function NotesWidget() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    setNotes(value);

    localStorage.setItem("notes", value);
  };

  return (
    <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-white">
        Notes
      </h2>

      <textarea
        value={notes}
        onChange={handleChange}
        placeholder="Write your notes..."
        className="h-48 w-full rounded-lg bg-gray-700 p-4 text-white outline-none resize-none"
      />
    </div>
  );
}