import React from "react";
import { motion } from "framer-motion";
import Orb from "./Orb";
import { Mail, Github, Linkedin, Download, ExternalLink, Code2, Moon, Sun } from "lucide-react";

const INFO = {
  name: "Vilma Mäkinen",
  title: "Full-Stack Developer",
  tagline:
    "Full-Stack Developer specialized in Web Development but somehow ended up working with apps. Loves making games too.",
  email: "hello@example.com",
  location: "Tampere, Finland",
  socials: {
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username/",
    x: "https://x.com/username",
  },
  cvUrl: "/cv.pdf",
};

const PROJECTS = [
  {
    title: "Chat Web App",
    description:
      "Test text.",
    tags: ["HTML", "CSS", "Node.js", "Express", "Socket.io", "JavaScript", "MongoDB"],
    href: "https://example.com",
    github: "https://github.com/username/project",
  },
  {
    title: "Blog Web App",
    description:
      "Test text.",
    tags: ["HTML", "CSS", "Python", "Django", "Tailwind"],
    href: "https://example.com",
    github: "https://github.com/username/design-system",
  },
  {
    title: "Neighbour Help Web App",
    description:
      "Test text.",
    tags: ["TypeScript"],
    href: "https://example.com",
    github: "https://github.com/username/ai-helper",
  },
];

// ---------- HERO (Orb) ----------
function Hero() {
  return (
    <section className="relative isolate flex min-h-[86vh] items-center justify-center overflow-hidden px-6 pt-28">
      {/* Orb */}
      <div className="absolute inset-0 -z-10">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={200} // color
          forceHoverState={false}
        />
      </div>

      {/* Hero */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          {INFO.name}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
          {INFO.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${INFO.email}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-5 py-3 text-sm font-medium text-zinc-900 shadow hover:bg-white"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href={INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-zinc-900/70 px-5 py-3 text-sm text-zinc-200 backdrop-blur hover:bg-zinc-900/90"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-zinc-900/70 px-5 py-3 text-sm text-zinc-200 backdrop-blur hover:bg-zinc-900/90"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Header({ onToggleTheme, theme }: { onToggleTheme: () => void; theme: "light" | "dark" }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-zinc-800/60 bg-zinc-900/70 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-fuchsia-400 text-zinc-900 shadow">
              <Code2 className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-zinc-200 font-medium">{INFO.name}</p>
              <p className="text-xs text-zinc-400">{INFO.title}</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-zinc-300 hover:text-white" href="#projects">Projects</a>
            <a className="text-zinc-300 hover:text-white" href="#about">About Me</a>
            <a className="text-zinc-300 hover:text-white" href="#skills">Skills</a>
            <a className="text-zinc-300 hover:text-white" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={INFO.cvUrl} className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-200 hover:border-zinc-600">
              <Download className="h-4 w-4" /> Download CV
            </a>
            <button onClick={onToggleTheme} aria-label="Vaihda teema" className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 p-2 text-zinc-200 hover:border-zinc-600">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
        <a href={INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-200">More on GitHub</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur transition-transform hover:-translate-y-1"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(244,114,182,0.18), transparent 60%)",
              }}
              onMouseMove={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                const rect = el.getBoundingClientRect();
                el.style.setProperty("--x", `${e.clientX - rect.left}px`);
                el.style.setProperty("--y", `${e.clientY - rect.top}px`);
              }}
            />
            <div className="mb-3 flex items-start justify-between">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <h3 className="text-lg font-semibold text-white group-hover:underline">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-zinc-400" />
              </a>
            </div>
            <p className="text-sm text-zinc-400">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300">{t}</span>
              ))}
            </div>
            <div className="mt-4">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-400 hover:text-zinc-200">Code →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">About Me</h2>
      <p className="mt-4 text-zinc-300">
        Test text.
      </p>
    </section>
  );
}

function Skills() {
  const skills = [
    "React", "Next.js", "TypeScript", "Tailwind", "Node.js", "GraphQL", "Testing Library", "Playwright",
  ];
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 pb-12">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">Skills</h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s} className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-200">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact Me</h2>
        <p className="mt-3 text-zinc-300">Test text.</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a href={`mailto:${INFO.email}`} className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white">
            <Mail className="h-4 w-4" /> {INFO.email}
          </a>
          <a href={INFO.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-6 py-10 text-zinc-500">
      <p>© {new Date().getFullYear()} {INFO.name}. Made with React & Tailwind.</p>
    </footer>
  );
}

export default function PortfolioSite() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.setProperty("color-scheme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.setProperty("color-scheme", "light");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} theme={theme} />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
