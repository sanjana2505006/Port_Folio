import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-blue-100/30 dark:from-purple-900/30 dark:to-blue-900/30"></div>
        {/* Abstract shapes for background */}
        <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-purple-200/30 dark:bg-purple-800/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-blue-200/30 dark:bg-blue-800/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Hi, I'm <span className="text-[var(--primary)]">Sanjana</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-[var(--muted)] mb-6">
            B.Tech Student in CSE (AI & ML)
          </h2>
          <p className="text-lg mb-8">
            Passionate about building innovative solutions using AI and machine learning. 
            Currently exploring the intersection of technology and creative problem-solving.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="text-[var(--primary)]" />
      </button>
    </section>
  );
};

export default Hero;