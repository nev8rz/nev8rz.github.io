import { Github } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-wrap flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-400">
          © {year} nev8rz. Crafted with focus on clean engineering.
        </p>
        <a
          href="https://github.com/nev8rz"
          target="_blank"
          rel="noreferrer"
          className="mono inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.14em] text-slate-200 hover:bg-white/10"
        >
          <Github className="h-4 w-4" />
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
