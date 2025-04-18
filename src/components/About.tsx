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
              I'm Sanjana, currently pursuing B.Tech in Computer Science and Engineering with a specialization in 
              Artificial Intelligence & Machine Learning from Newton School of Technology.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My journey in technology started with a curiosity about how things work, which eventually led me 
              to explore programming and machine learning. I enjoy solving complex problems and building 
              applications that can make a positive impact.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of academics, I'm passionate about participating in hackathons, contributing to open-source 
              projects, and continuously expanding my knowledge in emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6 animate-fade-in delay-200">
              <div className="mb-4 p-3 inline-block bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <Book className="text-[var(--primary)]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>B.Tech in CSE (AI & ML) at Newton School of Technology</p>
            </div>
            
            <div className="card p-6 animate-fade-in delay-300">
              <div className="mb-4 p-3 inline-block bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Code className="text-[var(--primary)]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p>Focused on web development and machine learning applications</p>
            </div>
            
            <div className="card p-6 animate-fade-in delay-400">
              <div className="mb-4 p-3 inline-block bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                <Star className="text-[var(--primary)]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievement</h3>
              <p>Active participant in hackathons and coding competitions</p>
            </div>
            
            <div className="card p-6 animate-fade-in delay-500">
              <div className="mb-4 p-3 inline-block bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Coffee className="text-[var(--primary)]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hobbies</h3>
              <p>Exploring new technologies, problem-solving, and continuous learning</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="btn btn-primary inline-flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              // This would trigger a resume download
              alert('Resume download would be implemented here');
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;