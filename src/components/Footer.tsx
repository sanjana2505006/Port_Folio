import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-gray-100/80 dark:bg-gray-900/80 relative z-10 backdrop-blur-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-[var(--primary)]">Sanjana</h2>
            <p className="text-[var(--muted)]">3rd Year · Apache Committer · CSE (AI &amp; ML)</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={scrollToTop} className="hover:text-[var(--primary)] transition-colors">
              Back to top
            </button>
            <button onClick={toggleTheme} className="hover:text-[var(--primary)] transition-colors">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
        
        <hr className="my-6 border-[var(--border)]" />
        
        <div className="text-center">
          <p className="text-[var(--muted)] flex items-center justify-center gap-1">
            Created with <Heart size={16} className="text-red-500" /> in {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;