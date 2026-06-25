import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CategoryState {
  selectedCategories: string[];

  toggleCategory: (category: string) => void;

  clearCategories: () => void;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set) => ({
      selectedCategories: [],

      toggleCategory: (category) =>
        set((state) => ({
          selectedCategories:
            state.selectedCategories.includes(category)
              ? state.selectedCategories.filter(
                  (item) => item !== category
                )
              : [...state.selectedCategories, category],
        })),

      clearCategories: () => ({
        selectedCategories: [],
      }),
    }),
    {
      name: "category-storage",
    }
  )
);