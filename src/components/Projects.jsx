import { motion } from "framer-motion";

const credentials = [
  {
    title: "Registration as a Pharmacist",
    subtitle: "Certification",
    description:
      "Registered Pharmacist with the Nepal Pharmacy Council (Registration No. G7547), licensed to practise pharmacy in Nepal.",
    tags: ["Nepal Pharmacy Council", "Reg. No. G7547", "Licensed Pharmacist"],
  },
  {
    title: "Review of Lung Cancer",
    subtitle: "Academic Project",
    description:
      "Academic study of lung cancer pathology and the treatment approaches used in clinical practice.",
    tags: ["Pathology", "Treatment Approaches", "Clinical Study"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      aria-label="Project and certification"
      className="px-4 md:px-10 py-20 scroll-mt-24 relative overflow-hidden"
    >
      <p
        className="neu-watermark absolute top-6 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-extrabold uppercase pointer-events-none"
        aria-hidden="true"
      >
        Credentials
      </p>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink">
            Project &amp; Certification
          </h2>
          <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {credentials.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="neu rounded-3xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="self-start neu-chip px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 text-accent-deep">
                {item.subtitle}
              </span>

              <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
              <p className="text-ink-soft text-sm mb-6 flex-grow">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="neu-chip px-3 py-1 rounded-lg text-xs font-medium text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
