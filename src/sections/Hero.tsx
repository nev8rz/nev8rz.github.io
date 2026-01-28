import { motion } from "framer-motion";
import { Github, MapPin, GraduationCap, Terminal, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue text-sm text-blue-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Available for Research Collaboration
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">nev</span>
                <span className="text-gradient text-glow">8rz</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-2xl sm:text-3xl text-blue-400 font-mono">
                AI & Software Engineer
              </p>
              <p className="text-xl text-muted-foreground">
                Graduate Student
              </p>
            </motion.div>

            {/* Institution & Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>University of Science and Technology of China (USTC)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Shanghai, China</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Exploring the depths of language models, deep learning, and software engineering. 
              Building AI-powered systems for the next generation of intelligent applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 px-6 py-6 text-lg rounded-lg font-mono transition-all duration-300 hover:shadow-glow-blue group"
                asChild
              >
                <a href="#projects">
                  <Terminal className="w-5 h-5 mr-2" />
                  <ChevronRight className="w-4 h-4 mr-1" />
                  View Projects
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white px-6 py-6 text-lg rounded-lg transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  <Send className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-3"
            >
              <a
                href="https://github.com/nev8rz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="code-block rounded-2xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-blue-500/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-sm text-muted-foreground font-mono">
                  researcher_profile.py — nev8rz
                </span>
              </div>

              {/* Editor Content */}
              <div className="bg-[#0d1117] p-6 font-mono text-sm overflow-hidden">
                <div className="space-y-1">
                  {[
                    { line: 'class AIResearcher:', indent: 0 },
                    { line: '    def __init__(self):', indent: 1 },
                    { line: '        self.name = "Yijin Zhou"', indent: 2 },
                    { line: '        self.role = "Graduate Student"', indent: 2 },
                    { line: '        self.focus = [', indent: 2 },
                    { line: '            "language_models",', indent: 3 },
                    { line: '            "deep_learning",', indent: 3 },
                    { line: '            "software_engineering"', indent: 3 },
                    { line: '        ]', indent: 2 },
                    { line: '        self.mission = "Build intelligent systems"', indent: 2 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex"
                    >
                      <span className="text-muted-foreground w-8 text-right mr-4 select-none">
                        {index + 1}
                      </span>
                      <HighlightedLine line={item.line} />
                    </motion.div>
                  ))}
                  {/* Cursor */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="flex"
                  >
                    <span className="text-muted-foreground w-8 text-right mr-4 select-none">
                      11
                    </span>
                    <span className="w-2 h-5 bg-blue-400 terminal-cursor" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -right-4 glass-purple rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Research Focus</div>
                  <div className="text-white font-semibold">Language Models</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-blue-500/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Token type for code parsing
type Token = {
  type: 'keyword' | 'string' | 'punctuation' | 'class' | 'property' | 'text';
  value: string;
};

// Helper function to tokenize and highlight Python code
function tokenizeCode(line: string): Token[] {
  // First escape HTML
  let escaped = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  const tokens: Token[] = [];
  let remaining = escaped;
  
  // Match strings (both single and double quotes)
  const stringRegex = /(".*?"|'.*?')/;
  // Match keywords
  const keywordRegex = /\b(class|def|self|return|import|from|if|else|for|while|in|and|or|not|is|None|True|False)\b/;
  // Match special names
  const classRegex = /(AIResearcher|__init__)/;
  // Match properties
  const propertyRegex = /(name|role|focus|mission)/;
  // Match punctuation
  const punctRegex = /(\(|\)|:|,|\[|\]|=|\.|\{|\})/;
  
  while (remaining.length > 0) {
    let match: RegExpMatchArray | null = null;
    let tokenType: Token['type'] = 'text';
    
    // Try to match in order of priority
    if ((match = remaining.match(stringRegex))) {
      tokenType = 'string';
    } else if ((match = remaining.match(keywordRegex))) {
      tokenType = 'keyword';
    } else if ((match = remaining.match(classRegex))) {
      tokenType = 'class';
    } else if ((match = remaining.match(propertyRegex))) {
      tokenType = 'property';
    } else if ((match = remaining.match(punctRegex))) {
      tokenType = 'punctuation';
    } else {
      // Match single character
      match = [remaining[0]];
    }
    
    if (match && match.index === 0) {
      tokens.push({ type: tokenType, value: match[0] });
      remaining = remaining.slice(match[0].length);
    } else {
      // No match at start, take one character
      tokens.push({ type: 'text', value: remaining[0] });
      remaining = remaining.slice(1);
    }
  }
  
  return tokens;
}

// Component to render a single token
function CodeToken({ token }: { token: Token }) {
  const colors: Record<Token['type'], string> = {
    keyword: 'text-pink-400',
    string: 'text-green-400',
    punctuation: 'text-gray-500',
    class: 'text-yellow-300',
    property: 'text-blue-300',
    text: 'text-gray-300',
  };
  
  return <span className={colors[token.type]}>{token.value}</span>;
}

// Component to render a highlighted line
function HighlightedLine({ line }: { line: string }) {
  const tokens = tokenizeCode(line);
  return (
    <span className="whitespace-pre">
      {tokens.map((token, i) => (
        <CodeToken key={i} token={token} />
      ))}
    </span>
  );
}

export default Hero;
