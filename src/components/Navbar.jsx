import { Link } from "react-scroll";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 md:px-10 pt-4">
      <div className="neu mx-auto max-w-6xl rounded-2xl px-5 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="text-lg font-extrabold tracking-tight text-ink cursor-pointer"
        >
          Shafique<span className="text-accent-deep">.Khan</span>
        </a>

        <ul className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-90}
                activeClass="neu-inset-sm text-accent-deep"
                className="cursor-pointer px-4 py-2 rounded-xl text-ink-soft transition-all duration-300 hover:text-accent-deep"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/Mohammad_Shafique_Khan_Resume.docx"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="neu-accent text-ink font-semibold text-sm px-5 py-2 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
