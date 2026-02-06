const carouselItems = [
  {
    title: "Knowledge posts",
    description:
      "Publish concise insights with citations, clear reasoning, and a focus on academic rigor."
  },
  {
    title: "Research and analysis",
    description:
      "Share long-form analysis, ongoing studies, and peer-reviewed summaries for serious readers."
  },
  {
    title: "Strict knowledge-only policy",
    description:
      "Mindes rejects entertainment content to protect attention and elevate scholarship."
  }
];

export const InfoCarousel = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {carouselItems.map((item) => (
        <div
          key={item.title}
          className="min-w-[260px] rounded-2xl border border-mindes-line bg-white p-5 shadow-subtle dark:border-mindes-slate dark:bg-mindes-slate"
        >
          <h3 className="font-serif text-xl text-mindes-ink dark:text-mindes-soft">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-mindes-muted dark:text-mindes-soft/70">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
