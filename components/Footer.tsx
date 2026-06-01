export default function Footer() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Writing', href: '#writing' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-8 px-6 border-t border-dark-400">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs tracking-wide text-dark-200">
            &copy; {new Date().getFullYear()} Michael Schoengold Beatty. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-dark-200">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-accent-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
