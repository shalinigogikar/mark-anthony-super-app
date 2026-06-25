"use client";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/store/categoryStore";
import { categories } from "@/constants/categories";
import CategoryCard from "@/components/category/CategoryCard";

export default function CategoriesPage() {
  const { selectedCategories, toggleCategory } = useCategoryStore();
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-10">

      <h1 className="text-4xl font-bold text-white mb-3">
        Choose your Entertainment Category
      </h1>
      
      <p className="text-gray-400 mb-10">
        Choose at least 3 categories
      </p>

      <div className="grid grid-cols-3 gap-6">

        {categories.map((category) => (
          <CategoryCard
            key={category}
            title={category}
            selected={selectedCategories.includes(category)}
            onClick={() => toggleCategory(category)}
          />
        ))}

      </div>

      <h2 className="mt-10 text-white text-xl">
        Selected : {selectedCategories.length}
      </h2>
      <button
  onClick={() => {
    if (selectedCategories.length < 3) {
      alert("Please select at least 3 categories.");
      return;
    }

    localStorage.setItem(
      "categories",
      JSON.stringify(selectedCategories)
    );

    router.push("/dashboard");
  }}
  className="mt-8 rounded-lg bg-green-600 px-10 py-3 text-white font-semibold hover:bg-green-700 transition"
>
  Continue
</button>
    </main>
  );
}