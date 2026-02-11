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
      title: 'AI Image Generator',
      description: 'A web application that uses AI to generate and search for images based on text descriptions.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'AI', 'API Integration'],
      demoLink: 'https://sanjana2505006.github.io/Image-search/',
      codeLink: 'https://github.com/sanjana2505006/Image-search'
    },
    {
      id: 2,
      title: 'Screentime Recorder',
      description: 'A web application that tracks and records screen usage, helping users monitor time spent on different activities and improve productivity.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://screentime-recoder.vercel.app/',
      codeLink: 'https://github.com/nst-sdc/Screentime-recoder'
    },
    {
      id: 3,
      title: 'StopWatch',
      description: 'A machine learning model that predicts weather patterns based on historical data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'Machine Learning', 'Data Analysis'],
      demoLink: 'https://sanjana2505006.github.io/Stop-Watch/',
      codeLink: 'https://github.com/sanjana2505006/Stop-Watch'
    },
    {
      id: 4,
      title: 'Calculator',
      description: 'A productivity application for managing daily tasks, projects, and deadlines.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Redux', 'Firebase'],
      demoLink: 'https://sanjana2505006.github.io/Calculator-/',
      codeLink: 'https://github.com/sanjana2505006/Calculator-'
    }
  ]);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900/50">
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <p className="text-[var(--muted)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
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