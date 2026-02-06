export type ContentType = "post" | "video" | "research";

export interface Author {
  name: string;
  title: string;
  field: string;
}

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  topic: string;
  description: string;
  readingTime: string;
  author: Author;
  badge: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface FeedResponse {
  items: ContentItem[];
  nextPage: number | null;
}
