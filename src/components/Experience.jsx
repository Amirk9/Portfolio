import { motion } from "framer-motion";

const experience = [
  {
    company: "Globussoft Technology Pvt. Ltd.",
    role: "Software Developer",
    period: "Aug 2025 - Present",
    location: "Bengaluru, India",
    products: [
      {
        name: "EmpMonitor - Enterprise Employee Monitoring Platform",
        stack: ["Qt Widgets", "Qt Network", "TCP/IP", "REST APIs", "JSON", "RDP", "Windows APIs"],
        points: [
          "Developed inbound and outbound email monitoring for 4+ providers (Gmail, Zoho, Thunderbird, Outlook) using email protocols and Qt Network workflows.",
          "Implemented endpoint security and DLP controls covering 5 channels - clipboard, file upload, website, application and USB/storage device - to monitor and block policy violations.",
          "Integrated OCR-based text extraction to capture application titles and on-screen content for monitoring modules.",
          "Implemented screenshot and screen-recording features for activity monitoring and compliance use cases.",
          "Developed 2 webcam-based detection workflows: user-presence and device/phone detection.",
          "Integrated REST APIs with JSON-based communication between the desktop agent and backend services.",
          "Implemented SQLite-based local data storage and configuration management.",
        ],
      },
      {
        name: "Secure RDP Controller - Remote Desktop Solution",
        stack: ["Qt Widgets", "Qt Network", "TCP/IP", "REST APIs", "JSON", "RDP", "Windows APIs"],
        points: [
          "Developed a C++/Qt Host-Agent architecture for secure remote VM access, session management, configuration synchronization and endpoint control.",
          "Implemented TCP/IP socket communication and JSON-based messaging between Host and Agent applications.",
          "Implemented secure tunneled communication for remote VM connectivity and Host-Agent interaction.",
          "Developed VM connection/disconnection and session lifecycle management, including connection state handling and remote-session controls.",
          "Implemented 3 session safeguards - session timeout, inactivity detection and agent timeout - plus connectivity monitoring for controlled remote sessions.",
          "Developed screen-capture and screen-recording protection controls for connected virtual machines.",
          "Implemented 2-way clipboard and file transfer between local machines and remote VM environments.",
          "Worked on port/proxy forwarding and group-based connectivity for controlled VM network access.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      aria-label="Professional experience"
      className="px-4 md:px-10 py-20 scroll-mt-24 relative overflow-hidden"
    >
      <p
        className="neu-watermark absolute top-6 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-extrabold uppercase pointer-events-none"
        aria-hidden="true"
      >
        Experience
      </p>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink">
            Professional Experience
          </h2>
          <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-accent" />
        </div>

        <motion.div
          className="neu rounded-3xl p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-ink">{job.role}</h3>
                  <p className="text-accent-deep font-semibold mt-1">
                    {job.company}
                  </p>
                  <p className="text-sm text-ink-faint mt-1">{job.location}</p>
                </div>
                <span className="neu-chip px-4 py-2 rounded-xl text-sm font-semibold text-ink-soft whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <div className="mt-10 space-y-8">
                {job.products.map((product) => (
                  <div key={product.name} className="neu-inset-sm rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-ink">{product.name}</h4>

                    <div className="flex flex-wrap gap-2 my-4">
                      {product.stack.map((tech) => (
                        <span
                          key={tech}
                          className="neu-chip px-3 py-1 rounded-lg text-xs font-semibold text-ink-soft"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2.5">
                      {product.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm text-ink-soft leading-relaxed"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
