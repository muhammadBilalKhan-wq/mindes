import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "@/pages/LandingPage";
import { FeedPage } from "@/pages/FeedPage";
import { CreateContentPage } from "@/pages/CreateContentPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { SearchPage } from "@/pages/SearchPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/feed", element: <FeedPage /> },
  { path: "/create", element: <CreateContentPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/settings", element: <SettingsPage /> },
  { path: "*", element: <NotFoundPage /> }
]);
