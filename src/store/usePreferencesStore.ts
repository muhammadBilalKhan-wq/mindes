import { create } from "zustand";

interface PreferencesState {
  theme: "light" | "dark";
  savedContentIds: string[];
  setTheme: (theme: "light" | "dark") => void;
  toggleSave: (id: string) => void;
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  theme: "light",
  savedContentIds: [],
  setTheme: (theme) => set({ theme }),
  toggleSave: (id) =>
    set((state) => {
      const exists = state.savedContentIds.includes(id);
      // Ensure saved items are added or removed in a predictable way.
      const savedContentIds = exists
        ? state.savedContentIds.filter((contentId) => contentId !== id)
        : [...state.savedContentIds, id];
      return { savedContentIds };
    })
}));
