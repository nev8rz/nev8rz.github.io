import { motion, useInView } from "framer-motion";
import { Cpu, Database, Gauge, Terminal } from "lucide-react";
import { useRef } from "react";

const categories = [
  {
    title: "ML Engineering",
    icon: Cpu,
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "Deep Learning", level: 86 },
      { name: "LLM Training", level: 81 },
    ],
  },
  {
    title: "Systems & Tooling",
    icon: Terminal,
    skills: [
      { name: "Python", level: 95 },
      { name: "Linux / Shell", level: 84 },
      { name: "Docker", level: 80 },
    ],
  },
  {
    title: "Data & Retrieval",
    icon: Database,
    skills: [
      { name: "Vector Databases", level: 76 },
      { name: "RAG Pipelines", level: 78 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Delivery",
    icon: Gauge,
    skills: [
      { name: "Git Workflow", level: 88 },
      { name: "Experiment Tracking", level: 79 },
      { name: "Project Structuring", level: 82 },
    ],
  },
];

const toolbelt = [
  "Python",
  "PyTorch",
  "CUDA",
  "vLLM",
  "Docker",
  "GitHub Actions",
  "Linux",
  "RAG",
  "Evaluation",
];

const Skills = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="skills" className="section-shell" ref={ref}>
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 space-y-4"
        >
          <span className="eyebrow mono">Skills</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical capabilities across model and product layers.
          </h2>
          <p className="max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            I value shipping quality: model performance matters, but reliability,
            observability, and maintainability matter just as much.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="surface p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-cyan-300/30 bg-cyan-300/12 p-2">
                  <category.icon className="h-5 w-5 text-cyan-100" />
                </div>
                <h3 className="text-lg font-medium text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm text-slate-200">{skill.name}</span>
                      <span className="mono text-xs text-cyan-100">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300/90 to-amber-300/80"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="surface mt-6 p-5"
        >
          <h3 className="mb-4 text-lg font-medium text-white">Toolbelt</h3>
          <div className="flex flex-wrap gap-2">
            {toolbelt.map((tool) => (
              <span key={tool} className="chip mono">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
