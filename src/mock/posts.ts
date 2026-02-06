import { ContentItem } from "@/utils/types";

export const mockContent: ContentItem[] = [
  {
    id: "post-1",
    type: "post",
    title: "The discipline of slow reading in a noisy world",
    topic: "Literacy",
    description:
      "Slow reading is not nostalgia. It is a method for building durable comprehension and retaining complex ideas without distraction.",
    readingTime: "6 min",
    author: {
      name: "Dr. Alina Verma",
      title: "Research Fellow",
      field: "Cognitive Science"
    },
    badge: "Post"
  },
  {
    id: "post-1b",
    type: "post",
    title: "Archival map with annotated policy context",
    topic: "Civic History",
    description:
      "A digitized map with annotations that explain land use shifts alongside archival policy notes.",
    readingTime: "9 min",
    author: {
      name: "Renee Salazar",
      title: "Archivist",
      field: "Public Records"
    },
    badge: "Post",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "research-1",
    type: "research",
    title: "Mapping urban heat inequity through community data",
    topic: "Urban Studies",
    description:
      "A synthesis of neighborhood sensor data and policy archives reveals how investment patterns shaped heat exposure over decades.",
    readingTime: "14 min",
    author: {
      name: "Marcus Chen",
      title: "Policy Analyst",
      field: "Public Health"
    },
    badge: "Research"
  },
  {
    id: "video-1",
    type: "video",
    title: "Explaining causal inference without shortcuts",
    topic: "Methodology",
    description:
      "A structured lecture on causal diagrams and why careful assumptions matter more than fast conclusions.",
    readingTime: "18 min",
    author: {
      name: "Professor Elena Duarte",
      title: "Professor",
      field: "Statistics"
    },
    badge: "Video",
    videoUrl: "https://example.com/videos/causal-inference"
  },
  {
    id: "post-2",
    type: "post",
    title: "Ethics-first product research practices",
    topic: "Design Research",
    description:
      "A concise framework for conducting interviews and surveys that respect participant autonomy and data stewardship.",
    readingTime: "7 min",
    author: {
      name: "Priya Nandakumar",
      title: "UX Research Lead",
      field: "Human-Computer Interaction"
    },
    badge: "Post"
  },
  {
    id: "research-2",
    type: "research",
    title: "Long-form reasoning in AI-supported classrooms",
    topic: "Education",
    description:
      "An analysis of classroom trials shows improved reasoning when students document the logic behind each answer.",
    readingTime: "20 min",
    author: {
      name: "Jules Okoro",
      title: "Education Strategist",
      field: "Learning Sciences"
    },
    badge: "Research"
  },
  {
    id: "video-2",
    type: "video",
    title: "Seeing bias in data collection protocols",
    topic: "Data Ethics",
    description:
      "A lecture that traces how sampling decisions influence conclusions and outlines corrective practices.",
    readingTime: "16 min",
    author: {
      name: "Nadia Farouk",
      title: "Data Governance Advisor",
      field: "Ethics"
    },
    badge: "Video",
    videoUrl: "https://example.com/videos/data-ethics"
  }
];
