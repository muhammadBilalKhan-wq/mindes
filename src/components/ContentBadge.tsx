interface ContentBadgeProps {
  label: string;
}

export const ContentBadge = ({ label }: ContentBadgeProps) => {
  return (
    <span className="rounded-full border border-mindes-line px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mindes-muted dark:border-mindes-slate dark:text-mindes-soft/70">
      {label}
    </span>
  );
};
