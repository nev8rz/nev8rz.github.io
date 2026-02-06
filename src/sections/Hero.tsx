import { motion } from "framer-motion";
import { ArrowRight, Github, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Focused on LLM systems and AI engineering",
  "Building practical tools from research ideas",
  "Open to collaboration on useful products",
];

const metrics = [
  { label: "Core Stack", value: "Python / PyTorch" },
  { label: "Focus", value: "LLM & Infra" },
  { label: "Location", value: "Shanghai" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="section-wrap relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-7"
          >
            <span className="eyebrow mono">
              <Sparkles className="h-3.5 w-3.5" />
              AI Engineer Portfolio
            </span>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building reliable AI products from research to delivery.
              </h1>
              <p className="max-w-2xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
                I am Yijin Zhou (nev8rz), a software engineer and graduate student focusing
                on language models, tooling, and scalable ML workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="chip mono">
                <GraduationCap className="mr-2 h-4 w-4 text-cyan-200" />
                USTC - Software Engineering
              </span>
              <span className="chip mono">
                <MapPin className="mr-2 h-4 w-4 text-cyan-200" />
                Shanghai, China
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="mono h-11 rounded-lg border border-cyan-200/45 bg-cyan-300/20 px-5 text-xs uppercase tracking-[0.14em] text-cyan-50 hover:bg-cyan-300/30"
              >
                <a href="#projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="mono h-11 rounded-lg border-white/25 bg-white/0 px-5 text-xs uppercase tracking-[0.14em] text-slate-100 hover:bg-white/10"
              >
                <a href="#contact">Contact</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="mono h-11 rounded-lg border border-amber-300/35 bg-amber-300/10 px-5 text-xs uppercase tracking-[0.14em] text-amber-100 hover:bg-amber-300/20"
              >
                <a href="https://github.com/nev8rz" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </a>
              </Button>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface-strong p-6 sm:p-7"
          >
            <p className="mono text-xs uppercase tracking-[0.14em] text-cyan-200">
              Current Snapshot
            </p>
            <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-black/35 p-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="mono text-xs uppercase tracking-[0.12em] text-slate-400">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-slate-100">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Strong interest in turning raw model capability into stable developer
              experience, observability, and maintainable architecture.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
