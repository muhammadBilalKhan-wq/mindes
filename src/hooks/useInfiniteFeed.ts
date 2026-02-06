import { useCallback, useEffect, useRef, useState } from "react";
import { fetchFeedPage } from "@/services/contentService";
import { ContentItem } from "@/utils/types";

export const useInfiniteFeed = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadPage = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }
    setLoading(true);
    const response = await fetchFeedPage(page);
    setItems((prev) => [...prev, ...response.items]);
    setHasMore(response.nextPage !== null);
    if (response.nextPage !== null) {
      setPage(response.nextPage);
    }
    setLoading(false);
  }, [hasMore, loading, page]);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  useEffect(() => {
    if (!observerRef.current || !hasMore) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      // Trigger feed pagination only when the sentinel is visible.
      if (entries[0]?.isIntersecting) {
        loadPage();
      }
    });

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadPage]);

  return {
    items,
    hasMore,
    loading,
    observerRef
  };
};
