export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-400">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-200 text-sm">
            © {new Date().getFullYear()} Michael Schoengold Beatty. All rights
            reserved.
          </p>

          <div className="flex gap-6 text-sm text-dark-200">
            <a href="#about" className="hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-primary-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
