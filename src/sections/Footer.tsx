import { motion } from "framer-motion";
import { Github, Heart, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-white font-semibold font-mono">nev8rz</span>
              <span className="text-muted-foreground text-sm ml-2">// AI Engineer</span>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-green-400 transition-colors font-mono"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-green-400 transition-colors font-mono"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-green-400 transition-colors font-mono"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-green-400 transition-colors font-mono"
            >
              Contact
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/nev8rz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-green-500/10 transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-green-400 transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 font-mono">
            <span className="text-green-400">$</span> echo "© {currentYear} nev8rz. Made with
            <Heart className="w-4 h-4 text-green-400 fill-green-400" />
            and lots of coffee."
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
