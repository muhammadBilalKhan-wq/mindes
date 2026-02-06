import { mockContent } from "@/mock/posts";
import { ContentItem, FeedResponse } from "@/utils/types";

const PAGE_SIZE = 3;

const repeatContent = (times: number): ContentItem[] => {
  // Repeat mock data to simulate a larger dataset.
  return Array.from({ length: times }).flatMap((_, index) =>
    mockContent.map((item) => ({
      ...item,
      id: `${item.id}-${index}`
    }))
  );
};

const extendedContent = repeatContent(6);

export const fetchFeedPage = async (page: number): Promise<FeedResponse> => {
  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const items = extendedContent.slice(start, end);

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        items,
        nextPage: end < extendedContent.length ? page + 1 : null
      });
    }, 500);
  });
};

export const searchContent = async (
  query: string,
  filters: {
    topic: string;
    contentType: string;
    readingTime: string;
  }
): Promise<ContentItem[]> => {
  const normalized = query.trim().toLowerCase();
  const filtered = extendedContent.filter((item) => {
    const matchesQuery =
      normalized.length === 0 ||
      item.title.toLowerCase().includes(normalized) ||
      item.author.name.toLowerCase().includes(normalized) ||
      item.topic.toLowerCase().includes(normalized);
    const matchesType = filters.contentType
      ? item.type === filters.contentType
      : true;
    const matchesTopic = filters.topic ? item.topic === filters.topic : true;
    const matchesTime = filters.readingTime
      ? item.readingTime.startsWith(filters.readingTime)
      : true;

    return matchesQuery && matchesType && matchesTopic && matchesTime;
  });

  return new Promise((resolve) => {
    window.setTimeout(() => resolve(filtered), 400);
  });
};
