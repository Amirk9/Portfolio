import { motion } from "framer-motion";

const experience = [
  {
    role: "Store In-Charge",
    company: "Nilam Agency",
    location: "Nepal",
    period: "",
    points: [
      "Managed store operations and pharmacy inventory, ensuring accurate stock control and timely replenishment.",
      "Coordinated procurement and distribution activities to maintain uninterrupted product availability.",
    ],
  },
  {
    role: "Quality Control (QC) Officer",
    company: "Grace Pharmaceuticals Pvt. Ltd.",
    location: "Beldada, Tillottama, Rupandehi",
    period: "6 Months",
    points: [
      "Performed quality control checks on pharmaceutical products to ensure compliance with quality standards.",
      "Supported documentation and quality assurance processes within the production unit.",
    ],
  },
  {
    role: "Production Officer",
    company: "Mark Formulation Pvt. Ltd.",
    location: "Thankkot, Kathmandu",
    period: "2 Years",
    points: [
      "Managed pharmaceutical production operations, ensuring adherence to manufacturing standards and schedules.",
      "Monitored production processes to maintain product quality and consistency.",
    ],
  },
  {
    role: "Production Officer",
    company: "Kasturi Pharmaceuticals",
    location: "Bharatpur, Chitwan",
    period: "1 Year",
    points: [
      "Executed production activities in line with standard operating procedures (SOPs).",
      "Assisted in maintaining production records and supporting quality compliance.",
    ],
  },
  {
    role: "Operational Pharmacist",
    company: "Prabal Medical",
    location: "Nepal",
    period: "5 Months",
    points: [
      "Gained hands-on experience with various drug doses, prescriptions and dispensing practices.",
      "Supported day-to-day pharmacy operations and customer/patient interaction.",
    ],
  },
  {
    role: "Operational Pharmacist & Billing In-Charge",
    company: "Nilam Medical Pharmacy (Hospital Pharmacy)",
    location: "Chhattisgarh, India",
    period: "",
    points: [
      "Learned emergency preparedness practices essential for hospital pharmacy operations.",
      "Handled medication dispensing, prescription verification and billing in-charge duties.",
      "Collaborated with clinical staff to gather information across departments and support better patient adherence.",
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

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={`${job.role}-${job.company}`}
              className="neu rounded-3xl p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-ink">{job.role}</h3>
                  <p className="text-accent-deep font-semibold mt-1">
                    {job.company}
                  </p>
                  <p className="text-sm text-ink-faint mt-1">{job.location}</p>
                </div>
                {job.period && (
                  <span className="neu-chip px-4 py-2 rounded-xl text-sm font-semibold text-ink-soft whitespace-nowrap">
                    {job.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-2.5">
                {job.points.map((point) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
