import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mschoengold/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:m.schoengold.beatty@gmail.com',
      color: 'hover:text-primary-400',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
      color: 'hover:text-sky-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://x.com/MSchoengold',
      color: 'hover:text-purple-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-dark-700/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-400">
          Get In Touch
        </h2>
        <p className="text-dark-200 mb-12 text-lg max-w-2xl mx-auto">
          Interested in collaborating or want to discuss national security,
          defense policy, or enterprise operations? Feel free to reach out.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-dark-600/50 backdrop-blur-sm rounded-lg border border-dark-400 hover:border-primary-600 transition-all ${link.color}`}
                aria-label={link.name}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <div className="bg-dark-600/30 backdrop-blur-sm rounded-lg p-8 border border-dark-400">
          <p className="text-dark-100 mb-4">
            Currently based in{' '}
            <span className="text-primary-400 font-medium">
              Washington, DC
            </span>
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mt-8 grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="rounded-lg overflow-hidden border border-dark-400">
            <img 
              src="/images/IMG_2880.jpeg" 
              alt="Michael Schoengold Beatty with family"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-dark-400">
            <img 
              src="/images/IMG_4528.jpeg" 
              alt="Michael Schoengold Beatty"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
