import { BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-mindes-ink dark:text-mindes-soft">
      <BrainCircuit size={24} />
      <span className="font-serif text-xl font-semibold">Mindes</span>
    </Link>
  );
};
