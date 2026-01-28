import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, GitFork, ExternalLink, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      name: "vermind",
      description: "A high-performance, lightweight language model built from scratch in PyTorch. Features GQA and SwiGLU architecture.",
      tech: ["Python", "PyTorch", "AI/ML"],
      stars: 1,
      forks: 0,
      license: "MIT",
      featured: true,
    },
    {
      name: "VerVectorDB",
      description: "Vector database for efficient similarity search and embedding storage. Designed for AI applications.",
      tech: ["Python", "Vector DB", "AI"],
      stars: 0,
      forks: 0,
      license: null,
      featured: false,
    },
    {
      name: "VerRag",
      description: "Retrieval-Augmented Generation implementation for enhanced AI responses.",
      tech: ["Python", "RAG", "NLP"],
      stars: 0,
      forks: 0,
      license: null,
      featured: false,
    },
    {
      name: "VerAgents",
      description: "AI agents framework for building autonomous systems and intelligent agents.",
      tech: ["Python", "Agents", "AI"],
      stars: 0,
      forks: 0,
      license: null,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-32" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
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
            <Terminal className="w-4 h-4 inline mr-2" />
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my open-source work, focusing on AI, language models, 
            and developer tools.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`group relative code-block rounded-2xl p-6 hover:bg-blue-500/5 transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full font-mono">
                    Featured
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors font-mono">
                      {project.name}
                    </h3>
                    {project.license && (
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.license} License
                      </span>
                    )}
                  </div>
                </div>
                <a
                  href={`https://github.com/nev8rz/${project.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-blue-500/10 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                </a>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-sm text-blue-400 border border-blue-500/20 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Star className="w-4 h-4" />
                  <span className="font-mono">{project.stars}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <GitFork className="w-4 h-4" />
                  <span className="font-mono">{project.forks}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500/30 hover:bg-blue-500/10 text-blue-400 px-8 py-6 text-lg rounded-lg transition-all duration-300 font-mono"
            asChild
          >
            <a
              href="https://github.com/nev8rz?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
