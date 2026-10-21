const Footer = () => {
  return (
    <footer className="px-4 md:px-10 pb-10">
      <div className="neu max-w-6xl mx-auto rounded-3xl px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-sm text-ink-soft">
          Copyright &copy; {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-semibold text-ink">Amir Khan</span>
        </p>
        <p className="text-xs text-ink-faint tracking-wider uppercase">
          Built with React · Vite · Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
