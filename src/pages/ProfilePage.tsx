import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ContentCard } from "@/components/ContentCard";
import { mockContent } from "@/mock/posts";
import { ContentType } from "@/utils/types";

const tabs: { label: string; type: ContentType }[] = [
  { label: "Posts", type: "post" },
  { label: "Videos", type: "video" },
  { label: "Research", type: "research" }
];

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<ContentType>("post");
  const filtered = mockContent.filter((item) => item.type === activeTab);

  return (
    <AppShell
      title="Profile"
      description="Professional identity and research contributions"
    >
      <div className="rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-mindes-ink dark:text-mindes-soft">
              Dr. Evelyn Hart
            </h2>
            <p className="text-sm text-mindes-muted dark:text-mindes-soft/70">
              Senior Researcher · Knowledge Systems
            </p>
          </div>
          <button
            type="button"
            className="rounded-full border border-mindes-line px-4 py-2 text-xs font-semibold uppercase tracking-wide text-mindes-slate dark:border-mindes-slate dark:text-mindes-soft"
          >
            Edit profile
          </button>
        </div>
        <p className="mt-4 text-sm text-mindes-slate dark:text-mindes-soft/80">
          Evelyn studies how communities document and preserve evidence for public decision
          making. Her work focuses on transparent knowledge practices for civic research.
        </p>
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wide text-mindes-muted">
            Areas of interest
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "Knowledge governance",
              "Civic research",
              "Evidence synthesis",
              "Long-form learning"
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-mindes-line px-3 py-1 text-xs text-mindes-slate dark:border-mindes-slate dark:text-mindes-soft/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(tab.type)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                activeTab === tab.type
                  ? "border-mindes-accent bg-mindes-accent text-white"
                  : "border-mindes-line text-mindes-slate hover:bg-mindes-soft dark:border-mindes-slate dark:text-mindes-soft"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-6">
          {filtered.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </AppShell>
  );
};
