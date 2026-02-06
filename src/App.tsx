import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";
import { useThemeEffect } from "@/hooks/useThemeEffect";

export const App = () => {
  useThemeEffect();

  return <RouterProvider router={router} />;
};
