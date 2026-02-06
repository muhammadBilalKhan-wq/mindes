import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { FormField } from "@/components/FormField";

const contentTypes = ["Post", "Video", "Research Paper"] as const;

export const CreateContentPage = () => {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [contentType, setContentType] = useState<(typeof contentTypes)[number]>(
    "Post"
  );
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <AppShell
      title="Create content"
      description="Publish a knowledge-only contribution with academic rigor."
    >
      <div className="rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate">
        <p className="rounded-xl border border-mindes-line bg-mindes-soft/60 p-4 text-sm text-mindes-slate dark:border-mindes-slate dark:bg-mindes-ink/50 dark:text-mindes-soft/80">
          Entertainment or low-value content will be removed.
        </p>
        <div className="mt-6 grid gap-6">
          <FormField label="Content type" htmlFor="contentType">
            <div className="grid gap-3 md:grid-cols-3">
              {contentTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setContentType(type)}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    contentType === type
                      ? "border-mindes-accent bg-mindes-accent text-white"
                      : "border-mindes-line bg-white text-mindes-slate hover:bg-mindes-soft"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </FormField>
          <FormField
            label="Title"
            htmlFor="title"
            helper="Use precise language that reflects the academic focus of your work."
          >
            <input
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-xl border border-mindes-line bg-white px-4 py-3 text-sm text-mindes-ink dark:border-mindes-slate dark:bg-mindes-ink dark:text-mindes-soft"
              placeholder="Title of your contribution"
            />
          </FormField>
          <FormField label="Topic" htmlFor="topic">
            <input
              id="topic"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="w-full rounded-xl border border-mindes-line bg-white px-4 py-3 text-sm text-mindes-ink dark:border-mindes-slate dark:bg-mindes-ink dark:text-mindes-soft"
              placeholder="Primary research topic"
            />
          </FormField>
          <FormField
            label="Description"
            htmlFor="description"
            helper="Summarize the core thesis or learning objective."
          >
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="min-h-[140px] w-full rounded-xl border border-mindes-line bg-white px-4 py-3 text-sm text-mindes-ink dark:border-mindes-slate dark:bg-mindes-ink dark:text-mindes-soft"
              placeholder="Explain the contribution in an academic tone."
            />
          </FormField>
          <FormField
            label="Attach supporting files"
            htmlFor="fileUpload"
            helper="Accepted formats: PDF, MP4, PNG, or data tables."
          >
            <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-mindes-line bg-mindes-soft/60 p-6 text-sm text-mindes-muted dark:border-mindes-slate dark:bg-mindes-ink/40">
              <p className="font-medium text-mindes-ink dark:text-mindes-soft">
                Custom file explorer
              </p>
              <p>Drag files here or select a file to attach.</p>
              <label
                htmlFor="fileUpload"
                className="inline-flex w-fit cursor-pointer rounded-full border border-mindes-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-mindes-slate"
              >
                Browse files
              </label>
              <input
                id="fileUpload"
                type="file"
                className="hidden"
                onChange={(event) =>
                  setFileName(event.target.files?.[0]?.name ?? null)
                }
              />
              {fileName ? (
                <p className="text-xs text-mindes-slate">
                  Attached file: {fileName}
                </p>
              ) : null}
            </div>
          </FormField>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate">
        <h2 className="font-serif text-2xl text-mindes-ink dark:text-mindes-soft">
          Content preview
        </h2>
        <div className="mt-4 space-y-2 text-sm text-mindes-slate dark:text-mindes-soft/80">
          <p>
            <span className="font-semibold">Type:</span> {contentType}
          </p>
          <p>
            <span className="font-semibold">Title:</span> {title || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Topic:</span> {topic || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Description:</span> {description || "Not provided"}
          </p>
        </div>
        <button
          type="button"
          className="mt-6 rounded-full bg-mindes-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-mindes-slate"
        >
          Publish to Mindes
        </button>
      </div>
    </AppShell>
  );
};
