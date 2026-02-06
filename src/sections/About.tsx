import { motion, useInView } from "framer-motion";
import { Code2, Compass, GraduationCap, Rocket } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    title: "Research Foundation",
    icon: GraduationCap,
    description:
      "Master's candidate in Software Engineering at USTC, with sustained work in deep learning and language models.",
  },
  {
    title: "Engineering Execution",
    icon: Code2,
    description:
      "Hands-on building of model training, inference, and workflow tooling with a strong bias toward practical reliability.",
  },
  {
    title: "Direction",
    icon: Compass,
    description:
      "I prioritize building systems that are measurable, maintainable, and useful in real deployment settings.",
  },
  {
    title: "Growth",
    icon: Rocket,
    description:
      "Continuous iteration through open-source delivery, paper reading, and implementation feedback loops.",
  },
];

const About = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="about" className="section-shell" ref={ref}>
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 space-y-4"
        >
          <span className="eyebrow mono">About</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Research mindset, product discipline.
          </h2>
          <p className="max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            I like building at the boundary of research and software engineering: understanding
            model behavior deeply, then shaping it into robust tools that other developers can
            trust and extend.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="surface-strong p-6 sm:p-8"
          >
            <p className="text-base leading-relaxed text-slate-200">
              My work usually starts from a concrete bottleneck: latency, quality,
              reproducibility, or developer complexity. I then iterate from data and
              architecture decisions to build a simpler and stronger workflow.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              I prefer clear baselines, measurable improvements, and transparent tradeoffs
              over complicated designs that are hard to maintain.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip mono">Model Systems</span>
              <span className="chip mono">Pipeline Design</span>
              <span className="chip mono">Production Thinking</span>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.06 }}
                className="surface p-5"
              >
                <div className="mb-3 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-2">
                  <item.icon className="h-5 w-5 text-cyan-100" />
                </div>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
