import React from 'react';
import { Book, Code, Star, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <h2 className="section-title pb-4">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="animate-fade-in delay-100">
            <p className="text-lg leading-relaxed mb-6">
              I’m Sanjana, a Computer Science student specializing in Artificial Intelligence and Machine Learning at Newton School of Technology.
              I enjoy building practical software solutions and contributing to projects that create real impact.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My interest in technology began with a curiosity about how systems work, which gradually led me to programming and contributing to open-source projects.
              I enjoy collaborating with developers, writing clean and maintainable code, and continuously improving my skills through real-world development experience.
            </p>
            <p className="text-lg leading-relaxed">
              I’m particularly interested in solving meaningful problems through software, learning from the developer community, and growing through hands-on work.
              Beyond academics, I participate in hackathons, explore new technologies, and constantly seek opportunities to build impactful solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6 animate-fade-in delay-200">
              <div className="mb-4 p-3 inline-block bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <Book className="text-[var(--primary)]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>B.Tech in Computer Science (AI & ML) at Newton School of Technology</p>
            </div>

            <div className="card p-6 animate-fade-in delay-300">
              <div className="mb-4 p-3 inline-block bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Code className="text-[var(--primary)]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p>Building web applications, contributing to open-source projects, and developing real-world software solutions.</p>
            </div>

            <div className="card p-6 animate-fade-in delay-400">
              <div className="mb-4 p-3 inline-block bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                <Star className="text-[var(--primary)]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievement</h3>
              <p>Hackathon Winner and Open-Source Contributor</p>
            </div>

            <div className="card p-6 animate-fade-in delay-500">
              <div className="mb-4 p-3 inline-block bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Coffee className="text-[var(--primary)]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hobbies</h3>
              <p>Building side projects, problem-solving, and exploring emerging technologies.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/resume.txt"
            download="Sanjana_Resume.txt"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;