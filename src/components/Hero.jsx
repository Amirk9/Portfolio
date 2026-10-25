import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen px-4 md:px-10 pt-32 pb-16 flex items-center"
      aria-label="Introduction section with profile and call to action"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <div className="neu-inset-sm inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold tracking-widest uppercase text-ink-soft">
              Open to GCC opportunities
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-ink">
            Hi, I'm{" "}
            <span className="text-accent-deep">Mohammad Shafique</span>{" "}
            <span className="text-accent-deep">Khan</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-ink-soft">
            <Typewriter
              words={[
                "dispense medications.",
                "manage pharmacy inventory.",
                "ensure GMP compliance.",
                "support patient care.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="text-lg text-ink-soft max-w-xl">
            <strong className="text-ink">
              Registered Pharmacist · B.Pharm.
            </strong>{" "}
            Over 3.5 years of experience across hospital pharmacy, pharmaceutical
            production, quality control and pharmacy store operations — with a
            strong focus on medication dispensing and regulatory compliance.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
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

            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="neu-btn cursor-pointer px-7 py-3 rounded-2xl font-semibold text-ink inline-block text-center"
              aria-label="Scroll to my experience section"
            >
              My Experience
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {["B.Pharm", "Registered Pharmacist", "GMP", "Quality Control", "Hospital Pharmacy"].map((tag) => (
              <span key={tag} className="neu-chip px-4 py-1.5 rounded-xl text-sm text-ink-soft font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: monogram in a neumorphic frame */}
        <div className="flex justify-center">
          <div className="neu-avatar p-4 sm:p-6 rounded-full">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-accent/15 flex items-center justify-center">
              <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-accent-deep">
                MSK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
