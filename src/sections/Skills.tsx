import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Terminal, Database, Cpu } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 95 },
        { name: "Shell/Bash", level: 80 },
      ],
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "Deep Learning", level: 85 },
        { name: "NLP", level: 80 },
      ],
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 88 },
      ],
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "Vector Databases", level: 75 },
        { name: "SQL", level: 70 },
      ],
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const technologies = [
    { name: "Python", category: "Language" },
    { name: "PyTorch", category: "ML" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Version Control" },
    { name: "Linux", category: "OS" },
    { name: "Shell", category: "Scripting" },
    { name: "CUDA", category: "GPU" },
    { name: "vLLM", category: "Inference" },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-32" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-blue text-sm text-blue-400 font-mono mb-4">
            $ cat expertise.txt
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Technical </span>
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My toolkit for building AI-powered applications and scalable software solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="code-block rounded-2xl p-6 hover:bg-blue-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white font-mono">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground font-mono">{skill.name}</span>
                      <span className="text-sm text-blue-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="code-block rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center font-mono">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-default"
              >
                <span className="text-blue-400 font-mono">{tech.name}</span>
                <span className="text-xs text-muted-foreground">// {tech.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
