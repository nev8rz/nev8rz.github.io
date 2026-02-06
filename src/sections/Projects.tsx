import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "vermind",
    description:
      "A compact language model implementation in PyTorch with GQA and SwiGLU focused on clean architecture and reproducibility.",
    tech: ["Python", "PyTorch", "LLM"],
    stars: 1,
    href: "https://github.com/nev8rz/vermind",
    featured: true,
  },
  {
    name: "VerVectorDB",
    description:
      "Vector database experiments for embedding storage and efficient retrieval pipelines in AI applications.",
    tech: ["Python", "Vector DB", "Retrieval"],
    stars: 0,
    href: "https://github.com/nev8rz/VerVectorDB",
    featured: false,
  },
  {
    name: "VerRag",
    description:
      "RAG-oriented prototypes for integrating retrieval with generation under practical latency constraints.",
    tech: ["Python", "RAG", "NLP"],
    stars: 0,
    href: "https://github.com/nev8rz/VerRag",
    featured: false,
  },
  {
    name: "VerAgents",
    description:
      "Agent workflow experiments for orchestrating multi-step reasoning and tool execution in controlled loops.",
    tech: ["Python", "Agents", "Automation"],
    stars: 0,
    href: "https://github.com/nev8rz/VerAgents",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="projects" className="section-shell" ref={ref}>
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 space-y-4"
        >
          <span className="eyebrow mono">Projects</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Open-source work with engineering intent.
          </h2>
          <p className="max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            These projects are focused on model systems and tooling. Each one is a testbed for
            making AI workflows simpler, faster, and easier to operate.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.06 + index * 0.05 }}
              className={`surface p-6 ${project.featured ? "md:col-span-2" : ""}`}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    {project.featured && (
                      <span className="mono rounded-full border border-amber-300/45 bg-amber-300/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-amber-100">
                        featured
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/15 bg-white/5 p-2 text-slate-300 transition-colors hover:text-white"
                  aria-label={`Open ${project.name}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((stack) => (
                  <span key={stack} className="chip mono">
                    {stack}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Star className="h-3.5 w-3.5" />
                <span className="mono">{project.stars}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.25 }}
          className="mt-10"
        >
          <Button
            asChild
            variant="outline"
            className="mono h-11 rounded-lg border-white/25 bg-white/0 px-5 text-xs uppercase tracking-[0.14em] text-slate-100 hover:bg-white/10"
          >
            <a href="https://github.com/nev8rz?tab=repositories" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Repositories
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
