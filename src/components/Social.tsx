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
        <h2 className="section-title pb-4">Connect With Me</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {socialLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in"
              style={{animationDelay: `${index * 0.1 + 0.1}s`}}
            >
              <div className="card p-6 text-center h-full hover:scale-105 transition-transform">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${link.color}`}>
                  {link.icon}
                </div>
                <h3 className="font-medium">{link.name}</h3>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Latest Blog Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <a 
                key={item}
                href="https://substack.com/@sanjana847942"
                target="_blank"
                rel="noopener noreferrer"
                className="card group overflow-hidden animate-fade-in"
                style={{animationDelay: `${item * 0.1 + 0.5}s`}}
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    Blog Post Title #{item}
                  </h4>
                  <p className="text-[var(--muted)] mb-4">
                    Published on {new Date().toLocaleDateString()}
                  </p>
                  <p className="line-clamp-3">
                    This is a placeholder for blog post content. Click to read more on Substack.
                  </p>
                  <p className="mt-4 text-[var(--primary)] font-medium">Read more →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;