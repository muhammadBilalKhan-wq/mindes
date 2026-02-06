import { Bookmark, MessageCircle, Share2 } from "lucide-react";
import { usePreferencesStore } from "@/store/usePreferencesStore";
import { ContentItem } from "@/utils/types";
import { ContentBadge } from "@/components/ContentBadge";

interface ContentCardProps {
  item: ContentItem;
}

export const ContentCard = ({ item }: ContentCardProps) => {
  const savedContentIds = usePreferencesStore((state) => state.savedContentIds);
  const toggleSave = usePreferencesStore((state) => state.toggleSave);
  const isSaved = savedContentIds.includes(item.id);

  return (
    <article className="rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ContentBadge label={item.badge} />
        <span className="text-xs uppercase tracking-wide text-mindes-muted dark:text-mindes-soft/60">
          {item.topic} · {item.readingTime}
        </span>
      </div>
      <h2 className="mt-4 font-serif text-2xl text-mindes-ink dark:text-mindes-soft">
        {item.title}
      </h2>
      <p className="mt-3 text-sm text-mindes-slate dark:text-mindes-soft/80">
        {item.description}
      </p>
      {item.type === "video" && item.videoUrl ? (
        <div className="mt-4 rounded-xl border border-dashed border-mindes-line bg-mindes-soft/60 p-4 text-sm text-mindes-muted dark:border-mindes-slate dark:bg-mindes-ink/40 dark:text-mindes-soft/70">
          <p className="font-medium">Educational video (no autoplay)</p>
          <a
            className="mt-2 inline-flex text-mindes-accent underline"
            href={item.videoUrl}
          >
            Open video resource
          </a>
        </div>
      ) : null}
      {item.imageUrl ? (
        <div className="mt-4 overflow-hidden rounded-xl border border-mindes-line">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-48 w-full object-cover"
          />
        </div>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-mindes-muted dark:text-mindes-soft/70">
        <div>
          <p className="font-medium text-mindes-ink dark:text-mindes-soft">
            {item.author.name}
          </p>
          <p className="text-xs">
            {item.author.title} · {item.author.field}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => toggleSave(item.id)}
            className="inline-flex items-center gap-2 rounded-full border border-mindes-line px-3 py-2 text-xs font-semibold uppercase tracking-wide text-mindes-slate transition hover:bg-mindes-soft dark:border-mindes-slate dark:text-mindes-soft dark:hover:bg-mindes-ink"
          >
            <Bookmark size={14} />
            {isSaved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-mindes-line px-3 py-2 text-xs font-semibold uppercase tracking-wide text-mindes-slate transition hover:bg-mindes-soft dark:border-mindes-slate dark:text-mindes-soft dark:hover:bg-mindes-ink"
          >
            <MessageCircle size={14} />
            Comment
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-mindes-line px-3 py-2 text-xs font-semibold uppercase tracking-wide text-mindes-slate transition hover:bg-mindes-soft dark:border-mindes-slate dark:text-mindes-soft dark:hover:bg-mindes-ink"
          >
            <Share2 size={14} />
            Share link
          </button>
        </div>
      </div>
    </article>
  );
};
