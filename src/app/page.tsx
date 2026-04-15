"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";

/* ─── Icons (Replacing Emojis) ─── */
const ChartIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
);
const BrainIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 1.2 2.8C10 9.6 11 11 11 12v1h2v-1c0-1 1-2.4 1.8-3.2A4 4 0 0 0 12 2Z" /><path d="M9 16h6" /><path d="M9 19h6" /></svg>
);
const CpuIcon = () => (
  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
);
const CodeIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
const BarChartIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 3v18h18" /><rect width="4" height="7" x="7" y="10" rx="1" /><rect width="4" height="12" x="15" y="5" rx="1" /></svg>
);
const BotIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="7" rx="2" /><path d="M12 7V3" /><path d="M9 3h6" /><circle cx="9" cy="13" r="1.5" /><circle cx="15" cy="13" r="1.5" /></svg>
);
const ToolIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
);

/* ─── Data ─── */

const stats = [
  { value: "4+", label: "Projects Completed" },
  { value: "3+", label: "Years Work Experience" },
  { value: "Python", label: "SQL & Excel" },
  { value: "Data", label: "Driven Insights" },
];

const aboutHighlights = [
  {
    icon: <ChartIcon />,
    title: "Data Visualization",
    desc: "Crafting compelling dashboards and visual stories that make complex data accessible using Matplotlib and Seaborn.",
  },
  {
    icon: <BrainIcon />,
    title: "Business Intelligence",
    desc: "Transforming dataset into meaningful solutions that support strategic decision-making and business efficiency.",
  },
  {
    icon: <CpuIcon />,
    title: "Machine Learning",
    desc: "Building machine learning models to detect patterns, such as fraudulent transactions, and optimizing processes.",
  },
];

const skillCategories = [
  {
    title: "Languages & Core",
    icon: <CodeIcon />,
    skills: ["Python", "SQL", "Pandas", "NumPy"],
  },
  {
    title: "Data Visualization",
    icon: <BarChartIcon />,
    skills: ["Matplotlib", "Seaborn", "Excel"],
  },
  {
    title: "Machine Learning",
    icon: <BotIcon />,
    skills: ["Classification", "Data Preprocessing", "Predictive Modeling"],
  },
  {
    title: "Business Tools",
    icon: <ToolIcon />,
    skills: ["Excel Data Entry", "Business Intelligence", "KPI Dashboards"],
  },
];

const experiences = [
  {
    role: "HR Intern - Freelance",
    company: "Cyber Pulse",
    period: "2025 – 2026",
    achievements: [
      "Supported HR functions and organized information accurately",
      "Assisted in maintaining employee data efficiency",
    ],
  },
  {
    role: "Data Entry Internship",
    company: "Digital Service Company (Kenya)",
    period: "2025",
    achievements: [
      "Organized information accurately and analyzed patterns",
      "Aided in providing clear insights to support decision-making",
    ],
  },
  {
    role: "Sales Agent",
    company: "Infinity Studio & Flamingo (AI Interviewer)",
    period: "2025",
    achievements: [
      "Drove sales engagement and analyzed customer interaction patterns",
      "Represented the company professionally to diverse client bases",
    ],
  },
  {
    role: "Sales Agent & Language Tutor",
    company: "251 Communication Center & Bright English Academy",
    period: "2024",
    achievements: [
      "Communicated effectively in high-pressure sales environments",
      "Tutored students in English, breaking down complex concepts",
    ],
  },
];

const projects = [
  {
    title: "Fraud Detection System (ML)",
    desc: "Built a machine learning model to detect fraudulent transactions using advanced data preprocessing and classification algorithms.",
    tags: ["Python", "Machine Learning", "Classification"],
    metric: "Fraud pattern recognition",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Sales Performance Analytics",
    desc: "Analyzed sales data to identify trends, top products, and revenue insights for better, data-driven decision-making.",
    tags: ["Data Analysis", "Python", "Excel"],
    metric: "Revenue insights",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Customer Retention & Churn",
    desc: "Studied customer data to find churn patterns, providing actionable insights focused on improving overall retention rates.",
    tags: ["Pandas", "SQL", "Matplotlib"],
    metric: "Retention optimization",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Marketing Funnel Analysis",
    desc: "Analyzed marketing funnel performance to measure conversions and strategically identify drop-off points for optimization.",
    tags: ["Data Visualization", "Conversion Rates"],
    metric: "Funnel optimization",
    color: "from-orange-400/20 to-red-400/20",
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Engineering",
    school: "Addis Ababa Science and Technology University",
    year: "Expected Completion: May 2026",
    details: "Addis Ababa, Ethiopia",
  },
];

const certifications = [
  { name: "Machine Learning", url: "https://drive.google.com/file/d/1dM6vrQS2SCyJntm32QmXozvwI0Zgi_xJ/view" },
  { name: "Data Science & Analytics Internship" },
  { name: "Data Analysis and Visualization", url: "https://drive.google.com/file/d/1IKqcq1PhmTosuhjjJtzj-g8M_4MYdLI3/view?usp=drive_link" },
  { name: "Arduino Certificate", url: "https://drive.google.com/file/d/1J-tEUjpMM3DDga4_mEljb68ePYGkJrwl/view?usp=sharing" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/betel-shibeshi-1144li",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/liyu-be",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:shibeshibetel@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

/* ─── Scroll Observer Hook ─── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".animate-on-scroll");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Page ─── */

export default function Home() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Bg effects */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-2/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-8 animate-fade-in hover:border-primary/30 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Analyst & Entry Roles
          </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Betel</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-medium">
              Data Analyst
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            I organize information accurately, analyze complex patterns, and provide clear insights that support better, strategic business decisions and efficiency.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl font-medium gradient-bg text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl font-medium glass text-foreground hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5 card-glow flex flex-col items-center justify-center text-center group cursor-default">
                <div className="text-3xl font-bold gradient-text mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#about" 
          aria-label="Scroll down"
          className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-float hover:scale-110 hover:-translate-y-1 transition-all group"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 group-hover:border-primary/50 transition-colors">
            <div className="w-1 h-2.5 bg-muted-foreground/50 rounded-full animate-pulse group-hover:bg-primary transition-colors" />
          </div>
        </a>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="animate-on-scroll text-center md:text-left mb-12">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Professional Summary
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Transforming Data Into <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              I am an aspiring Data Analyst with hands-on experience in data cleaning, virtualization, and business intelligence using Excel and Python. I am deeply passionate about analyzing complex datasets, building KPI dashboards, and delivering actionable insights that transform raw information into meaningful strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutHighlights.map((item, i) => (
              <div
                key={item.title}
                className="animate-on-scroll group glass rounded-2xl p-7 card-glow border-t border-t-primary/5 hover:border-t-primary/20 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="mb-5 text-primary/80 group-hover:text-primary transition-colors transform group-hover:scale-110 origin-left duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SKILLS ═══════════ */}
      <section id="skills" className="relative py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Technical Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="animate-on-scroll group glass rounded-2xl p-6 card-glow"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 text-primary/70 group-hover:text-primary transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-base font-semibold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EXPERIENCE ═══════════ */}
      <section id="experience" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="animate-on-scroll text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Career Path
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="animate-on-scroll relative md:pl-14 group"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] top-2 w-[18px] h-[18px] rounded-full border-[3px] border-primary bg-background hidden md:block group-hover:scale-125 group-hover:bg-primary/20 transition-all duration-300" />

                  <div className="glass rounded-2xl p-7 card-glow border-t border-b border-transparent group-hover:border-primary/10 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground flex gap-2 leading-relaxed group/item"
                        >
                          <span className="text-primary mt-1 shrink-0 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECTS ═══════════ */}
      <section id="projects" className="relative py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Data <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div
                key={proj.title}
                className="animate-on-scroll group glass rounded-2xl overflow-hidden card-glow"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Gradient header */}
                <div
                  className={`h-2 bg-gradient-to-r ${proj.color} group-hover:h-3 transition-all duration-300`}
                />
                <div className="p-7">
                  {/* Metric badge */}
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 tracking-wide">
                    {proj.metric}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EDUCATION ═══════════ */}
      <section id="education" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="animate-on-scroll text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Academic Background
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Degree */}
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                <h3 className="text-sm font-medium text-primary tracking-wider uppercase">
                  Education
                </h3>
              </div>
              {education.map((ed) => (
                <div key={ed.degree} className="glass rounded-2xl p-7 card-glow h-full hover:border-primary/20 transition-colors">
                  <h4 className="text-lg font-semibold mb-1">{ed.degree}</h4>
                  <p className="text-primary text-sm font-medium mb-1">
                    {ed.school}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {ed.year}
                  </p>
                  <p className="text-sm text-muted-foreground">{ed.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="animate-on-scroll mt-10 md:mt-0" style={{ transitionDelay: "0.15s" }}>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
                <h3 className="text-sm font-medium text-primary tracking-wider uppercase">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => {
                  const isLink = Boolean(cert.url);
                  const Wrapper = isLink ? "a" : "div";
                  const props = isLink ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" } : {};
                  return (
                    <Wrapper
                      key={cert.name}
                      {...props}
                      className={`glass rounded-xl px-5 py-4 card-glow flex items-center gap-4 group transition-colors ${isLink ? "cursor-pointer hover:bg-white/[0.05]" : "hover:bg-white/[0.02]"}`}
                    >
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                        {i + 1}
                      </span>
                      <span className={`text-sm font-medium flex-1 ${isLink ? "group-hover:text-primary transition-colors" : ""}`}>
                        {cert.name}
                      </span>
                      {isLink && (
                        <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      )}
                    </Wrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="relative py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Based in Addis Ababa, Ethiopia. I&apos;m currently open to new opportunities in data analytics, entry roles, and business intelligence. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <a
              href="mailto:shibeshibetel@gmail.com"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-medium gradient-bg text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1 text-lg mb-10 group"
            >
              Contact Me
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>

            {/* Socials */}
            <div className="flex items-center justify-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-1 transition-all card-glow"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-border/50 py-8 mt-12 bg-background/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center">
          <p className="text-sm text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Betel Shibeshi. Handcrafted with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
