import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Project Alpha',
      description:
        'Enterprise operations framework for scaling business processes across global teams.',
      tags: ['Operations', 'Strategy', 'Process Design'],
      featured: false,
    },
    {
      title: 'Project Beta',
      description:
        'Data-driven analysis tool for national security policy evaluation and decision support.',
      tags: ['Analysis', 'Policy', 'Data Visualization'],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-dark-700/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-400">
          Public Projects
        </h2>
        <p className="text-dark-200 mb-12 text-lg">
          A selection of projects I've worked on or am currently developing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-dark-600/50 backdrop-blur-sm rounded-lg p-6 border border-dark-400 hover:border-primary-600 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-200 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-dark-500 text-primary-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-dark-200 hover:text-primary-400 transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-dark-200 hover:text-primary-400 transition-colors flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-200 mb-4">
            Looking for more detailed project information?
          </p>
          <a
            href="/private"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dark-300 hover:border-primary-600 text-dark-100 hover:text-primary-400 rounded-lg transition-colors font-medium"
          >
            View Private Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
