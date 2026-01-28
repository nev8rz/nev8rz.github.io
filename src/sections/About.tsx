import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Lightbulb, Rocket, MapPin, Terminal } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master's candidate at USTC School of Software Engineering, focusing on AI and software technologies.",
    },
    {
      icon: Code2,
      title: "Development",
      description: "Building high-performance AI systems and language models. Experienced in PyTorch and deep learning.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about exploring emerging AI technologies and turning creative ideas into practical solutions.",
    },
    {
      icon: Rocket,
      title: "Goals",
      description: "Dedicated to creating efficient, scalable AI systems that solve real-world problems.",
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
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
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Who </span>
            <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate AI researcher and software engineer, constantly learning 
            and building innovative solutions.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="code-block rounded-2xl p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi there! I'm <span className="text-blue-400 font-mono">Yijin Zhou</span>, 
                a graduate student at the University of Science and Technology of China (USTC). 
                I'm currently pursuing my Master's degree in Software Engineering.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in AI and software development is driven by a deep curiosity for 
                language models and a passion for creating elegant, efficient solutions. 
                I believe in the power of technology to transform ideas into reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new AI research, 
                contributing to open-source projects, or diving deep into papers 
                to stay at the forefront of innovation.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Shanghai, China", icon: MapPin },
                { label: "Focus", value: "AI & Software", icon: Terminal },
                { label: "University", value: "USTC", icon: GraduationCap },
                { label: "Status", value: "Grad Student", icon: Code2 },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <fact.icon className="w-4 h-4 text-blue-400" />
                    {fact.label}
                  </div>
                  <div className="text-lg font-semibold text-white font-mono">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="code-block rounded-2xl p-6 hover:bg-blue-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-mono">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
