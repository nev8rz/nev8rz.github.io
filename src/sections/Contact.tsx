import { motion, useInView } from "framer-motion";
import { Github, Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    label: "GitHub",
    value: "@nev8rz",
    desc: "Open-source projects and ongoing experiments.",
    href: "https://github.com/nev8rz",
    icon: Github,
  },
  {
    label: "Email",
    value: "Contact",
    desc: "For collaboration, internship, or engineering discussions.",
    href: "mailto:nev8rz@example.com",
    icon: Mail,
  },
];

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="contact" className="section-shell" ref={ref}>
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 space-y-4"
        >
          <span className="eyebrow mono">Contact</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something useful.
          </h2>
          <p className="max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            I am open to conversations around AI engineering, research collaboration,
            and product-focused implementation work.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="surface block p-5 transition-colors hover:bg-white/[0.06]"
            >
              <div className="mb-3 inline-flex rounded-lg border border-amber-300/40 bg-amber-300/12 p-2">
                <item.icon className="h-5 w-5 text-amber-100" />
              </div>
              <h3 className="text-lg font-medium text-white">{item.label}</h3>
              <p className="mono mt-1 text-xs uppercase tracking-[0.14em] text-amber-100">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="surface-strong mt-6 p-6 sm:p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="mono text-xs uppercase tracking-[0.14em] text-cyan-100">Availability</p>
              <p className="mt-2 text-lg font-medium text-white">Open for collaboration and internships</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-200" />
                Shanghai, China
              </p>
            </div>
            <Button
              asChild
              className="mono h-11 rounded-lg border border-cyan-200/45 bg-cyan-300/20 px-5 text-xs uppercase tracking-[0.14em] text-cyan-50 hover:bg-cyan-300/30"
            >
              <a href="https://github.com/nev8rz" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Visit Github
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
