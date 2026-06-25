"use client";

interface Props {
  title: string;
  selected: boolean;
  onClick: () => void;
}

export default function CategoryCard({
  title,
  selected,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
      cursor-pointer
      rounded-xl
      p-8
      text-center
      font-semibold
      transition-all
      duration-300
      ${
        selected
          ? "bg-green-600 text-white"
          : "bg-gray-700 text-white hover:bg-gray-600"
      }
      `}
    >
      {title}
    </div>
  );
}