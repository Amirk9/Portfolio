import { motion } from "framer-motion";
import profileImage from "../assets/1.jpg";

const About = () => {
  const skills = [
    { name: "C++ (11/14/17/20)", level: 90 },
    { name: "Qt / QML", level: 88 },
    { name: "TCP/IP & Sockets", level: 85 },
    { name: "REST APIs & JSON", level: 85 },
    { name: "JavaScript & React", level: 75 },
    { name: "SQL & SQLite", level: 80 },
    { name: "Java & Python", level: 72 },
    { name: "WinAPI / Multithreading", level: 82 },
  ];

  return (
    <section
      id="about"
      className="px-4 md:px-10 py-20 scroll-mt-24"
      aria-label="About me"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink">About Me</h2>
          <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: profile + skill bars */}
          <motion.div
            className="neu rounded-3xl p-8 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6">
              <div className="neu-avatar p-2 rounded-full shrink-0">
                <img
                  src={profileImage}
                  alt="Mohammad Amir Khan"
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              <div className="space-y-1 text-sm text-ink-soft">
                <p>
                  <span className="font-semibold text-ink">Name:</span> Mohammad
                  Amir Khan
                </p>
                <p>
                  <span className="font-semibold text-ink">Role:</span> Software
                  Engineer · C++ / Qt
                </p>
                <p>
                  <span className="font-semibold text-ink">Experience:</span> 1+
                  year
                </p>
                <p>
                  <span className="font-semibold text-ink">Location:</span>{" "}
                  Bengaluru, India
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-ink mb-5 text-lg">Core Proficiencies</h3>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-ink-soft">{skill.name}</span>
                      <span className="font-semibold text-accent-deep">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="neu-inset-sm h-2.5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: summary */}
          <motion.div
            className="neu rounded-3xl p-8 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-ink">Professional Summary</h3>
            <p className="text-ink-soft leading-relaxed">
              I am a C++/Qt Software Engineer with 1+ year of experience building
              two enterprise desktop products and system components across three
              platforms: Windows, Linux and macOS. I work across Qt Widgets,
              QML, C++11 through C++20, multithreading, WinAPI, TCP/IP socket
              programming, REST APIs, JSON and SQLite.
            </p>
            <p className="text-ink-soft leading-relaxed">
              I have delivered employee monitoring, Data Loss Prevention, remote
              desktop and Host-Agent communication features, with a strong
              grounding in data structures, operating systems, design patterns,
              unit testing and embedded/firmware concepts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm neu-inset-sm rounded-2xl p-5">
              <p>
                <span className="font-semibold text-ink">Profile:</span>{" "}
                <span className="text-ink-soft">Software Engineer</span>
              </p>
              <p>
                <span className="font-semibold text-ink">Domain:</span>{" "}
                <span className="text-ink-soft">C++ / Qt, Desktop, Systems</span>
              </p>
              <p>
                <span className="font-semibold text-ink">Education:</span>{" "}
                <span className="text-ink-soft">B.E. Computer Science (CGPA 8.0)</span>
              </p>
              <p>
                <span className="font-semibold text-ink">Languages:</span>{" "}
                <span className="text-ink-soft">English, Hindi</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/Mohammad_Amir_Khan_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="neu-accent text-ink px-6 py-2.5 rounded-2xl font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-amir-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn px-6 py-2.5 rounded-2xl font-semibold text-ink"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
