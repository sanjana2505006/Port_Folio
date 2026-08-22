import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-blue-100/20 dark:from-purple-900/20 dark:to-blue-900/20" />
        <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-purple-200/20 dark:bg-purple-800/15 blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-blue-200/20 dark:bg-blue-800/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-sm md:text-base font-medium text-[var(--primary)] mb-4 tracking-wide">
            3rd Year · B.Tech CSE (AI &amp; ML) · Apache Committer
          </p>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Hi, I'm <span className="text-[var(--primary)]">Sanjana</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-[var(--muted)] mb-6">
            Software Engineering Student &amp; Open Source Contributor
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Building real products — from React Native apps to Apache Grails —
            and shipping code that others actually use. Former SDE in mobile,
            now contributing at the Apache Software Foundation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="text-[var(--primary)]" />
      </button>
    </section>
  );
};

export default Hero;
