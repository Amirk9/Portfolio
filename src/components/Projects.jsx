import { motion } from "framer-motion";
import img1 from "../assets/Ecommercereact.jpg";
import img2 from "../assets/True-Blog.jpg";
import img3 from "../assets/product-designer-web-template-portfolio-landing-page-design_138828-309.avif";
import imgEmpMonitor from "../assets/image.png";
import imgSecureRdp from "../assets/photo_2026-01-15_12-11-06.png";
import img5 from "../assets/maxresdefault.jpg";

const projects = [
  {
    title: "EmpMonitor - Employee Monitoring Platform",
    description:
      "Enterprise desktop application for employee activity monitoring, endpoint DLP and compliance reporting. Covers email, clipboard, USB, file-upload, website and application channels.",
    techStack: ["C++", "Qt Widgets", "Qt Network", "TCP/IP", "SQLite"],
    type: "professional",
    image: imgEmpMonitor,
  },
  {
    title: "Secure RDP Controller",
    description:
      "Remote desktop solution built on a C++/Qt Host-Agent architecture with secure tunneled sessions, session safeguards, screen-capture protection and two-way clipboard/file transfer.",
    techStack: ["C++", "Qt Widgets", "REST APIs", "JSON", "RDP"],
    type: "professional",
    image: imgSecureRdp,
  },
  {
    title: "AI-Powered Image Generation Tool",
    description:
      "Full-stack platform where users generate AI images using text prompts. Features secure JWT auth and Stripe payment integration.",
    techStack: ["ReactJS", "JavaScript", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/Amirk9/TextTImageGenerator",
    demo: "#",
    image: img5,
  },
  {
    title: "E-Commerce Dashboard with Admin Portal",
    description:
      "Admin dashboard to manage products, orders, and users with real-time cart and payment processing.",
    techStack: ["ReactJS", "JavaScript", "MongoDB", "CSS"],
    github: "https://github.com/Amirk9/E-commerceApp",
    demo: "#",
    image: img1,
  },
  {
    title: "Blog Website with Admin Dashboard",
    description:
      "Full-stack blog platform with admin dashboard for managing posts, comments, and user profiles.",
    techStack: ["ReactJS", "JavaScript", "MongoDB", "CSS"],
    github: "https://github.com/Amirk9/E-commerceApp",
    demo: "#",
    image: img2,
  },
  {
    title: "Task Management System",
    description:
      "A full-stack task management system with user authentication, task creation, drag-and-drop assignment and real-time progress dashboards.",
    techStack: ["ReactJS", "JavaScript", "CSS", "MongoDB"],
    github: "https://github.com/Amirk9",
    demo: "#",
    image: img3,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      aria-label="Project portfolio showcasing desktop and full-stack applications"
      className="px-4 md:px-10 py-20 scroll-mt-24 relative overflow-hidden"
    >
      <p
        className="neu-watermark absolute top-6 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-extrabold uppercase pointer-events-none"
        aria-hidden="true"
      >
        Projects
      </p>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink">Projects</h2>
          <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-accent" />
          <p className="text-ink-soft mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Enterprise desktop products built in C++/Qt, alongside full-stack web
            applications built with React and MongoDB.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
              viewport={{ once: true }}
              className="neu rounded-3xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="neu-inset-sm rounded-2xl overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={`Preview of project: ${project.title}`}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <span
                className={`self-start neu-chip px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-3 ${
                  project.type === "professional"
                    ? "text-accent-deep"
                    : "text-ink-faint"
                }`}
              >
                {project.type === "professional" ? "Professional" : "Personal"}
              </span>

              <h3 className="text-lg font-bold text-ink mb-2">{project.title}</h3>
              <p className="text-ink-soft text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="neu-chip px-3 py-1 rounded-lg text-xs font-medium text-ink-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-auto">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-btn px-4 py-2 rounded-xl text-sm font-semibold text-ink"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="neu-inset-sm px-4 py-2 rounded-xl text-sm font-semibold text-ink-faint">
                    Proprietary
                  </span>
                )}

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-btn px-4 py-2 rounded-xl text-sm font-semibold text-ink"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
