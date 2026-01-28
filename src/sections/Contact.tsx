import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Mail, MapPin, ExternalLink, MessageCircle, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      name: "GitHub",
      handle: "@nev8rz",
      description: "Check out my open-source projects and contributions",
      icon: Github,
      href: "https://github.com/nev8rz",
      color: "from-green-600 to-emerald-700",
    },
    {
      name: "Email",
      handle: "Contact Me",
      description: "Reach out for collaborations or opportunities",
      icon: Mail,
      href: "mailto:nev8rz@example.com",
      color: "from-emerald-600 to-teal-700",
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-green text-sm text-green-400 font-mono mb-4">
            <Terminal className="w-4 h-4 inline mr-2" />
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Let's </span>
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group code-block rounded-2xl p-6 hover:bg-green-500/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg`}>
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-green-400 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1 font-mono">{link.name}</h3>
              <p className="text-green-400 font-medium mb-2 font-mono">{link.handle}</p>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="code-block rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-mono">
            Interested in collaborating?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I'm currently looking for new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I'll try my best 
            to get back to you!
          </p>
          <Button
            size="lg"
            className="bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-glow-green font-mono"
            asChild
          >
            <a href="https://github.com/nev8rz" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Visit My GitHub
            </a>
          </Button>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
        >
          <MapPin className="w-4 h-4 text-green-400" />
          <span className="font-mono">Based in Shanghai, China</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
