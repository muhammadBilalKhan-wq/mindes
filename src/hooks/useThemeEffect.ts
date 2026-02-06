import { useEffect } from "react";
import { usePreferencesStore } from "@/store/usePreferencesStore";

export const useThemeEffect = () => {
  const theme = usePreferencesStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
};
