import { motion } from "framer-motion";

const education = [
  {
    year: "August 2022",
    degree: "Bachelor of Pharmacy (B.Pharm)",
    institution:
      "Rungta College of Pharmaceutical Sciences and Research (RCPSR), Bhilai, Chhattisgarh, India",
    grade: "",
  },
  {
    year: "10+2",
    degree: "Higher Secondary Education - Science",
    institution: "Bhairahawa Model School, Rupandehi, Nepal",
    grade: "",
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
              <p className="text-ink-soft uppercase tracking-wider text-sm">
                {item.institution}
              </p>
              {item.grade && (
                <p className="text-sm text-ink-faint mt-4">Grade: {item.grade}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/Mohammad_Shafique_Khan_Resume.docx"
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
