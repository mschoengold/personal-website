import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mschoengold/',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:m.schoengold.beatty@gmail.com',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/MSchoengold',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/mschoengold',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-20 border-t border-dark-400 bg-dark-800/40">
      <div className="max-w-4xl mx-auto text-center">
        <span className="eyebrow mb-4 justify-center">Contact</span>
        <h2 className="font-display text-3xl md:text-5xl font-medium text-dark-50 mt-4 mb-4">
          Get in touch
        </h2>
        <p className="text-dark-200 mb-12 text-lg max-w-2xl mx-auto">
          Interested in collaborating or want to discuss national security,
          defense policy, or enterprise operations? Feel free to reach out.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-dark-600/50 backdrop-blur-sm rounded-xl border border-dark-400 text-dark-100 hover:text-dark-50 hover:border-accent-400 hover:-translate-y-0.5 transition-all"
                aria-label={link.name}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <div className="bg-dark-600/30 backdrop-blur-sm rounded-xl p-6 border border-dark-400 max-w-lg mx-auto mb-10">
          <p className="font-mono text-sm tracking-wide text-dark-100">
            Currently based in{' '}
            <span className="text-accent-300">Washington, DC</span>
          </p>
        </div>

        {/* Photo */}
        <figure className="max-w-sm mx-auto rounded-2xl overflow-hidden border border-dark-400 bg-dark-600">
          <img
            src="/images/IMG_2880.jpeg"
            alt="Michael Schoengold Beatty with his son, Theo"
            className="w-full h-auto object-cover"
          />
          <figcaption className="font-mono text-[11px] tracking-wide text-dark-200 py-3">
            With my son, Theo
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
