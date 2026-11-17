import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Monitor } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Multi-Item Rental System",
    subtitle:
      "A web platform that automates item browsing, availability checking, booking, pricing and admin operations — preventing double bookings and improving rental and financial data management.",
    tech: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "TCPDF", "Chart.js"],
    highlights: ["Dynamic rental fee & late-return penalty calculation", "Rental agreement PDFs", "Admin dashboard with reports"],
    icon: Globe,
    gradient: "from-violet-700 via-purple-800 to-indigo-950",
    gridClass: "md:col-span-7 min-h-[420px]",
  },
  {
    id: 2,
    title: "Student Results Management System",
    subtitle:
      "A desktop application to digitally manage, store, calculate and display student academic results, reducing manual errors and improving access to academic information.",
    tech: ["Java", "MySQL", "NetBeans"],
    highlights: ["Admin & student role-based login", "Automated result calculation", "Result sheet printing"],
    icon: Monitor,
    gradient: "from-sky-700 via-cyan-800 to-slate-950",
    gridClass: "md:col-span-5 min-h-[420px]",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Selected <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Complete systems I designed, built, tested and debugged during my HNDIT studies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.a
              key={project.id}
              href="https://github.com/ruskannm-gif"
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${project.gridClass}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
                <Icon className="absolute -right-6 -top-6 w-56 h-56 text-white/[0.07] group-hover:text-white/[0.12] group-hover:scale-110 transition-all duration-700" strokeWidth={1} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-end gap-5">
                <span className="self-start px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
                  Academic Project
                </span>

                <div className="flex items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-white/85 mb-4 leading-relaxed">
                      {project.subtitle}
                    </p>
                    <ul className="text-xs md:text-sm text-white/80 space-y-1 mb-5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/70" /> {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-black/30 border border-white/20 text-white text-[11px] font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white transition-all duration-300 rotate-45 group-hover:rotate-0 shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
