import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ContentCard } from "@/components/ContentCard";
import { FormField } from "@/components/FormField";
import { searchContent } from "@/services/contentService";
import { ContentItem } from "@/utils/types";

const topics = [
  "",
  "Literacy",
  "Urban Studies",
  "Methodology",
  "Education",
  "Data Ethics",
  "Civic History"
];
const readingTimes = ["", "6", "7", "14", "16", "18", "20"];

export const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const [contentType, setContentType] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [results, setResults] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const runSearch = async () => {
      setLoading(true);
      const response = await searchContent(query, {
        topic,
        contentType,
        readingTime
      });
      setResults(response);
      setLoading(false);
    };

    runSearch();
  }, [query, topic, contentType, readingTime]);

  return (
    <AppShell
      title="Search and explore"
      description="Find knowledge by topic, keyword, or author."
    >
      <div className="rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField label="Search" htmlFor="searchInput">
            <input
              id="searchInput"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-xl border border-mindes-line bg-white px-4 py-3 text-sm text-mindes-ink dark:border-mindes-slate dark:bg-mindes-ink dark:text-mindes-soft"
              placeholder="Keyword, topic, or author"
            />
          </FormField>
          <FormField label="Topic" htmlFor="topicFilter">
            <select
              id="topicFilter"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="w-full rounded-xl border border-mindes-line bg-white px-4 py-3 text-sm text-mindes-ink dark:border-mindes-slate dark:bg-mindes-ink dark:text-mindes-soft"
            >
              {topics.map((item) => (
                <option key={item || "all"} value={item}>
                  {item || "All topics"}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Content type" htmlFor="typeFilter">
            <select
              id="typeFilter"
              value={contentType}
              onChange={(event) => setContentType(event.target.value)}
              className="w-full rounded-xl border border-mindes-line bg-white px-4 py-3 text-sm text-mindes-ink dark:border-mindes-slate dark:bg-mindes-ink dark:text-mindes-soft"
            >
              <option value="">All types</option>
              <option value="post">Post</option>
              <option value="video">Video</option>
              <option value="research">Research</option>
            </select>
          </FormField>
          <FormField label="Reading time (minutes)" htmlFor="timeFilter">
            <select
              id="timeFilter"
              value={readingTime}
              onChange={(event) => setReadingTime(event.target.value)}
              className="w-full rounded-xl border border-mindes-line bg-white px-4 py-3 text-sm text-mindes-ink dark:border-mindes-slate dark:bg-mindes-ink dark:text-mindes-soft"
            >
              {readingTimes.map((item) => (
                <option key={item || "any"} value={item}>
                  {item ? `${item} minutes` : "Any duration"}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      </div>
      <div className="mt-6 space-y-6">
        {loading ? (
          <p className="text-sm text-mindes-muted">Searching knowledge archives...</p>
        ) : null}
        {!loading && results.length === 0 ? (
          <p className="text-sm text-mindes-muted">
            No results found. Refine the query with a research topic or author name.
          </p>
        ) : null}
        {results.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </AppShell>
  );
};
