import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavigate = (href: string) => {
    setMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
          scrolled
            ? "border-white/15 bg-slate-950/75 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="section-wrap">
          <div className="flex h-16 items-center justify-between sm:h-[4.5rem]">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2"
            >
              <span className="mono rounded-md border border-cyan-300/30 bg-cyan-300/15 px-2 py-1 text-xs uppercase tracking-[0.14em] text-cyan-100 transition-colors group-hover:border-cyan-200/55 group-hover:bg-cyan-300/20">
                yz
              </span>
              <span className="text-base font-semibold tracking-tight text-slate-100">
                nev8rz
              </span>
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => onNavigate(item.href)}
                  className="mono rounded-lg px-4 py-2 text-xs uppercase tracking-[0.14em] text-slate-300 transition-all hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="https://github.com/nev8rz"
                target="_blank"
                rel="noreferrer"
                className="mono inline-flex items-center gap-2 rounded-lg border border-amber-300/40 bg-amber-300/15 px-4 py-2 text-xs uppercase tracking-[0.14em] text-amber-50 transition-colors hover:bg-amber-300/25"
              >
                <Github className="h-4 w-4" />
                Github
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex rounded-lg border border-white/15 bg-white/5 p-2 text-slate-100 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[4.6rem] z-40 rounded-2xl border border-white/15 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav className="grid gap-1">
              {links.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => onNavigate(item.href)}
                  className="mono rounded-lg px-3 py-3 text-left text-xs uppercase tracking-[0.14em] text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://github.com/nev8rz"
                target="_blank"
                rel="noreferrer"
                className="mono mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-amber-300/40 bg-amber-300/15 px-4 py-3 text-xs uppercase tracking-[0.14em] text-amber-50"
              >
                <Github className="h-4 w-4" />
                Github Profile
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
