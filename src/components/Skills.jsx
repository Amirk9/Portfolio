import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    skills: ["C++ (11/14/17/20)", "C", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Qt & Desktop",
    skills: [
      "Qt 5.15",
      "Qt Widgets",
      "QML",
      "Qt Network",
      "Qt SQL",
      "Signals & Slots",
      "QThread",
      "Qmake",
      "WinAPI",
    ],
  },
  {
    category: "Networking & APIs",
    skills: [
      "TCP/IP Sockets",
      "REST APIs",
      "JSON",
      "WebSocket",
      "Client-Server",
      "SPI",
      "UART",
    ],
  },
  {
    category: "Core CS & Design",
    skills: [
      "Data Structures",
      "Operating Systems",
      "Computer Networks",
      "OOP",
      "Design Patterns",
      "UML",
    ],
  },
  {
    category: "Databases & Testing",
    skills: [
      "SQLite",
      "MongoDB",
      "Unit Testing (CppUTest)",
      "Integration Testing",
      "Automation Testing",
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      "Qt Creator",
      "Visual Studio",
      "CMake",
      "Git",
      "GitHub",
      "Code Review",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-label="Skills and expertise"
      className="px-4 md:px-10 py-20 scroll-mt-24 relative overflow-hidden"
    >
      <p
        className="neu-watermark absolute top-6 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-extrabold uppercase pointer-events-none"
        aria-hidden="true"
      >
        Skills
      </p>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink">Technical Skills</h2>
          <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-accent" />
          <p className="text-ink-soft mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A toolkit shaped by shipping production desktop software — from
            low-level sockets and multithreading to modern REST integration.
          </p>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skillsData.map(({ category, skills }) => (
            <div
              key={category}
              className="neu rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <h3 className="text-base font-bold text-ink mb-5 tracking-wide uppercase">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    tabIndex={0}
                    className="neu-chip inline-block px-3.5 py-1.5 rounded-xl text-sm text-ink-soft font-medium hover:text-accent-deep focus:text-accent-deep focus:outline-none transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
