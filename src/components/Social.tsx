import React from 'react';
import { Linkedin, Github, Code2, BookOpen } from 'lucide-react';

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const Social: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      id: 1,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanjana250506/',
      icon: <Linkedin size={24} />,
      color: 'bg-blue-600'
    },
    {
      id: 2,
      name: 'GitHub',
      url: 'https://github.com/sanjana2505006',
      icon: <Github size={24} />,
      color: 'bg-gray-800 dark:bg-gray-600'
    },
    {
      id: 3,
      name: 'LeetCode',
      url: 'https://leetcode.com/u/sanju2505/',
      icon: <Code2 size={24} />,
      color: 'bg-yellow-600'
    },
    {
      id: 4,
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/hinata25',
      icon: <Code2 size={24} />,
      color: 'bg-brown-600 bg-amber-700'
    },
    {
      id: 5,
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/Tachibana_Hinata',
      icon: <Code2 size={24} />,
      color: 'bg-red-600'
    },
    {
      id: 6,
      name: 'Substack',
      url: 'https://substack.com/@sanjana847942',
      icon: <BookOpen size={24} />,
      color: 'bg-orange-600'
    }
  ];

  return (
    <section id="social" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <div className="relative mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Me</h2>
          <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in group"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="card p-4 flex items-center gap-4 hover:scale-105 transition-transform">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${link.color} shrink-0`}>
                  {link.icon}
                </div>
                <h3 className="font-medium text-lg Group-hover:text-[var(--primary)] transition-colors">{link.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;