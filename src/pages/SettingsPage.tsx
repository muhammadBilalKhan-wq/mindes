import { AppShell } from "@/components/AppShell";
import { ContentCard } from "@/components/ContentCard";
import { mockContent } from "@/mock/posts";
import { usePreferencesStore } from "@/store/usePreferencesStore";

export const SettingsPage = () => {
  const theme = usePreferencesStore((state) => state.theme);
  const setTheme = usePreferencesStore((state) => state.setTheme);
  const savedContentIds = usePreferencesStore((state) => state.savedContentIds);
  const savedItems = mockContent.filter((item) => savedContentIds.includes(item.id));

  return (
    <AppShell
      title="Settings"
      description="Manage content preferences and saved research."
    >
      <div className="grid gap-6">
        <section className="rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate">
          <h2 className="font-serif text-2xl text-mindes-ink dark:text-mindes-soft">
            Content preferences
          </h2>
          <p className="mt-2 text-sm text-mindes-muted dark:text-mindes-soft/70">
            Mindes prioritizes focused reading environments. Adjust the interface tone here.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                theme === "light"
                  ? "border-mindes-accent bg-mindes-accent text-white"
                  : "border-mindes-line text-mindes-slate hover:bg-mindes-soft"
              }`}
            >
              Light mode
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                theme === "dark"
                  ? "border-mindes-accent bg-mindes-accent text-white"
                  : "border-mindes-line text-mindes-slate hover:bg-mindes-soft"
              }`}
            >
              Dark mode
            </button>
          </div>
        </section>
        <section className="rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate">
          <h2 className="font-serif text-2xl text-mindes-ink dark:text-mindes-soft">
            Saved posts
          </h2>
          <p className="mt-2 text-sm text-mindes-muted dark:text-mindes-soft/70">
            Keep essential material close for continued study.
          </p>
          <div className="mt-4 space-y-6">
            {savedItems.length === 0 ? (
              <p className="text-sm text-mindes-muted">
                You have not saved any content yet.
              </p>
            ) : (
              savedItems.map((item) => <ContentCard key={item.id} item={item} />)
            )}
          </div>
        </section>
        <section className="rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate">
          <h2 className="font-serif text-2xl text-mindes-ink dark:text-mindes-soft">
            About Mindes
          </h2>
          <p className="mt-2 text-sm text-mindes-muted dark:text-mindes-soft/70">
            Mindes is built to protect intellectual rigor. Posts must be educational,
            research-driven, and free of entertainment content.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-mindes-slate dark:text-mindes-soft/80">
            <li>No memes, jokes, or trend commentary.</li>
            <li>Claims require evidence or clear reasoning.</li>
            <li>Respectful, professional discourse is mandatory.</li>
          </ul>
        </section>
      </div>
    </AppShell>
  );
};
