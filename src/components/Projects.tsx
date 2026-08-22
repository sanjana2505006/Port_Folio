import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Open Source Contributor Dashboard',
      description:
        'Full-stack dashboard that syncs GitHub PRs and issues across repos via REST/GraphQL + OAuth. Includes an AI Issue Assistant that summarizes and triages with LLMs.',
      image:
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'LLMs'],
      demoLink: 'https://github.com/sanjana2505006/Open-Source-Contribution-Tracker',
      codeLink: 'https://github.com/sanjana2505006/Open-Source-Contribution-Tracker',
    },
    {
      id: 2,
      title: 'QuickKart — Grocery Delivery',
      description:
        'Blinkit-style local grocery delivery app built with React Native + Expo. Cart, checkout, and local persistence with AsyncStorage and React Navigation.',
      image:
        'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React Native', 'Expo', 'AsyncStorage'],
      demoLink: 'https://github.com/sanjana2505006/QuickKart-Local-Grocery-Delivery-App',
      codeLink: 'https://github.com/sanjana2505006/QuickKart-Local-Grocery-Delivery-App',
    },
    {
      id: 3,
      title: 'ScreenTime Recorder',
      description:
        'Web app that tracks and visualizes screen time with React and D3.js. Real-time charts and a responsive Tailwind UI for productivity insights.',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'D3.js', 'Tailwind CSS'],
      demoLink: 'https://screentime-recoder.vercel.app/',
      codeLink: 'https://github.com/sanjana2505006/Screentime-recoder',
    },
  ]);

  return (
    <section id="projects" className="section bg-gray-50/70 dark:bg-gray-900/40 relative">
      <div className="container">
        <h2 className="section-title pb-4">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-[var(--primary)] text-gray-900 hover:text-white transition-colors"
                      aria-label={`View ${project.title} code`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/sanjana2505006"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            <Github size={20} />
            See All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
