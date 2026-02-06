import { AppShell } from "@/components/AppShell";
import { ContentCard } from "@/components/ContentCard";
import { useInfiniteFeed } from "@/hooks/useInfiniteFeed";

export const FeedPage = () => {
  const { items, hasMore, loading, observerRef } = useInfiniteFeed();

  return (
    <AppShell
      title="Main feed"
      description="Stay focused on research, thoughtful analysis, and enduring knowledge."
    >
      <div className="mb-6 rounded-2xl border border-mindes-line bg-white p-4 text-sm text-mindes-slate shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate dark:text-mindes-soft/80">
        <p>
          Posts that prioritize evidence, clarity, and depth are highlighted here. Low-value
          content is not tolerated on Mindes.
        </p>
      </div>
      <div className="space-y-6">
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
      <div ref={observerRef} className="py-6 text-center text-sm text-mindes-muted">
        {loading && "Loading additional research..."}
        {!hasMore && "You have reached the end of the available knowledge stream."}
      </div>
    </AppShell>
  );
};
