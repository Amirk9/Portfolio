import { motion } from "framer-motion";
import profileImage from "../assets/shafique.jpg";

const About = () => {
  const skills = [
    { name: "Medication Dispensing", level: 92 },
    { name: "Prescription Review", level: 90 },
    { name: "Pharmacy Inventory Management", level: 90 },
    { name: "Pharmaceutical Production", level: 90 },
    { name: "Quality Control (QC)", level: 88 },
    { name: "GMP Compliance", level: 86 },
    { name: "Emergency Preparedness", level: 84 },
    { name: "Leadership & Management", level: 85 },
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
                  alt="Mohammad Shafique Khan"
                  className="w-24 h-24 object-cover rounded-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-1 text-sm text-ink-soft">
                <p>
                  <span className="font-semibold text-ink">Name:</span> Mohammad
                  Shafique Khan
                </p>
                <p>
                  <span className="font-semibold text-ink">Role:</span> Registered
                  Pharmacist · B.Pharm
                </p>
                <p>
                  <span className="font-semibold text-ink">Experience:</span> 3.5+
                  years
                </p>
                <p>
                  <span className="font-semibold text-ink">Location:</span>{" "}
                  Bhairahawa, Rupandehi, Nepal
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
              I am a Registered Pharmacist (Nepal Pharmacy Council, Reg. No.
              G7547) with 3.5+ years of experience across hospital pharmacy,
              pharmaceutical production, quality control and retail/store
              operations.
            </p>
            <p className="text-ink-soft leading-relaxed">
              I am skilled in medication dispensing, prescription review,
              pharmacy inventory management, production and quality control
              processes, emergency preparedness and GMP compliance. My
              experience spans both healthcare and manufacturing settings,
              giving me a practical understanding of clinical operations, batch
              documentation and regulatory standards.
            </p>
            <p className="text-ink-soft leading-relaxed">
              I am a fast learner who works well under pressure, collaborates
              closely with clinical and production teams, and takes ownership of
              accuracy, documentation and patient safety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm neu-inset-sm rounded-2xl p-5">
              <p>
                <span className="font-semibold text-ink">Profile:</span>{" "}
                <span className="text-ink-soft">Registered Pharmacist</span>
              </p>
              <p>
                <span className="font-semibold text-ink">Domain:</span>{" "}
                <span className="text-ink-soft">
                  Hospital Pharmacy, Production, QC
                </span>
              </p>
              <p>
                <span className="font-semibold text-ink">Education:</span>{" "}
                <span className="text-ink-soft">B.Pharm (Aug 2022)</span>
              </p>
              <p>
                <span className="font-semibold text-ink">Languages:</span>{" "}
                <span className="text-ink-soft">
                  English, Hindi, Nepali, Bhojpuri, Urdu
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/Mohammad_Shafique_Khan_Resume.docx"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="neu-accent text-ink px-6 py-2.5 rounded-2xl font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href="mailto:khannishant84@gmail.com"
                className="neu-btn px-6 py-2.5 rounded-2xl font-semibold text-ink"
              >
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
