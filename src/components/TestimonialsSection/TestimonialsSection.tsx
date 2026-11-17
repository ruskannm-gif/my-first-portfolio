import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const references = [
  {
    name: "Mr. F.A. Inshaff",
    role: "Demonstrator",
    org: "Hardy ATI, Ampara",
    initials: "FI",
  },
  {
    name: "Mr. A.M. Mohammed Tharik",
    role: "Software Engineer, Demonstrator",
    org: "SLIATE, Sammanthurai",
    initials: "MT",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Academic <span className="text-gradient-primary">References</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          People who can speak about my work and character. Contact details are available in my CV or on request.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {references.map((ref, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-foreground/10 flex items-center gap-5 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 text-white flex items-center justify-center font-extrabold text-lg shrink-0 shadow-lg">
              {ref.initials}
            </div>
            <div className="relative z-10">
              <h4 className="text-foreground font-bold text-lg flex items-center gap-2">
                {ref.name} <BadgeCheck className="w-4 h-4 text-primary" />
              </h4>
              <p className="text-primary text-sm font-medium">{ref.role}</p>
              <p className="text-muted-foreground text-sm">{ref.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
