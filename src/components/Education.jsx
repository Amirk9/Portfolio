import { motion } from "framer-motion";

const education = [
  {
    year: "2021 - 2025",
    degree: "B.E. - Computer Science & Engineering",
    institution: "Visvesvaraya Technological University",
    grade: "CGPA: 8.0",
  },
  {
    year: "2018 - 2020",
    degree: "Higher Secondary School - Science (PUC)",
    institution: "Nautanwa Inter College, Uttar Pradesh",
    grade: "Percentage: 63%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      aria-label="Education"
      className="px-4 md:px-10 py-20 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink">Education</h2>
          <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="neu rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="neu-chip inline-block px-4 py-1.5 rounded-xl text-sm font-bold text-accent-deep">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-ink mt-5 mb-2">{item.degree}</h3>
              <p className="text-ink-soft uppercase tracking-wider text-sm mb-4">
                {item.institution}
              </p>
              <p className="text-sm text-ink-faint">Grade: {item.grade}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/Mohammad_Amir_Khan_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download my resume"
            className="neu-accent text-ink px-7 py-3 rounded-2xl font-semibold transition-transform duration-200 hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
