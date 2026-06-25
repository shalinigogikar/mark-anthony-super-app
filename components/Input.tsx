"use client";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  registration?: any;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  error,
  registration,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className="rounded-lg border border-gray-600 bg-gray-700 p-3 text-white outline-none focus:border-green-500"
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}