import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BookOpen, FileEdit, Search, Settings, UserCircle } from "lucide-react";
import { Logo } from "@/components/Logo";

interface AppShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

const navItems = [
  { label: "Main Feed", to: "/feed", icon: BookOpen },
  { label: "Create", to: "/create", icon: FileEdit },
  { label: "Search", to: "/search", icon: Search },
  { label: "Profile", to: "/profile", icon: UserCircle },
  { label: "Settings", to: "/settings", icon: Settings }
];

export const AppShell = ({ title, description, children }: AppShellProps) => {
  return (
    <div className="min-h-screen">
      <header className="border-b border-mindes-line bg-white/80 backdrop-blur dark:bg-mindes-slate/80 dark:border-mindes-slate">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="flex items-center gap-4 text-sm text-mindes-muted dark:text-mindes-soft/70">
            <span className="hidden md:inline">Knowledge-only network</span>
            <Link
              to="/"
              className="rounded-full border border-mindes-line px-4 py-2 text-sm text-mindes-ink transition hover:bg-mindes-soft dark:border-mindes-slate dark:text-mindes-soft dark:hover:bg-mindes-slate"
            >
              Sign out
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[220px_1fr]">
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.to}
                className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-mindes-slate transition hover:border-mindes-line hover:bg-white dark:text-mindes-soft dark:hover:border-mindes-slate dark:hover:bg-mindes-slate"
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <main>
          <div className="mb-6">
            <p className="text-sm uppercase tracking-wide text-mindes-muted dark:text-mindes-soft/60">
              {title}
            </p>
            <h1 className="mt-2 font-serif text-3xl text-mindes-ink dark:text-mindes-soft">
              {description}
            </h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};
