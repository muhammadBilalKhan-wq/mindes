import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-mindes-soft px-6 text-center text-mindes-ink">
      <h1 className="font-serif text-3xl">Page not found</h1>
      <p className="mt-3 text-sm text-mindes-muted">
        The knowledge resource you requested does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-full border border-mindes-line px-5 py-2 text-sm font-semibold text-mindes-slate"
      >
        Return to Mindes
      </Link>
    </div>
  );
};
