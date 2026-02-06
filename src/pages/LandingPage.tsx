import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { InfoCarousel } from "@/components/InfoCarousel";
import { Logo } from "@/components/Logo";

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <header className="border-b border-mindes-line bg-white dark:border-mindes-slate dark:bg-mindes-slate">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="flex gap-3">
            <button
              type="button"
              className="rounded-full border border-mindes-line px-5 py-2 text-sm font-semibold text-mindes-slate transition hover:bg-mindes-soft dark:border-mindes-slate dark:text-mindes-soft dark:hover:bg-mindes-ink"
            >
              Sign in
            </button>
            <button
              type="button"
              className="rounded-full bg-mindes-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-mindes-slate"
            >
              Sign up
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-mindes-muted">
            Mindes knowledge network
          </p>
          <h1 className="mt-4 font-serif text-4xl text-mindes-ink md:text-5xl">
            A social network for knowledge, research, and meaningful ideas.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-mindes-slate">
            Mindes is designed for scholars, researchers, and thoughtful practitioners.
            Every post must contribute to education, analysis, or long-form learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/feed"
              className="rounded-full bg-mindes-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-mindes-slate"
            >
              Enter the knowledge feed
            </Link>
            <Link
              to="/create"
              className="rounded-full border border-mindes-line px-6 py-3 text-sm font-semibold text-mindes-slate transition hover:bg-mindes-soft"
            >
              Contribute research
            </Link>
          </div>
        </motion.div>
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-2xl text-mindes-ink">
              What belongs on Mindes
            </h2>
            <span className="text-xs uppercase tracking-wide text-mindes-muted">
              Knowledge-only policy
            </span>
          </div>
          <InfoCarousel />
        </section>
        <section className="mt-16 rounded-2xl border border-mindes-line bg-white p-6 shadow-subtle">
          <h3 className="font-serif text-xl text-mindes-ink">
            Strict content standards
          </h3>
          <p className="mt-3 text-sm text-mindes-slate">
            Entertainment content, low-value commentary, and trend-driven posts are not
            permitted. Mindes is a calm environment for serious thought.
          </p>
        </section>
      </main>
    </div>
  );
};
