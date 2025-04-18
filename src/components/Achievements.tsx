import React from 'react';
import { Trophy, Award, AlignCenterVertical as Certificate } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: 'trophy' | 'award' | 'certificate';
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Nirmaan Hackathon',
      date: 'November 26, 2024',
      description: 'Participated in and completed the Nirmaan Hackathon, developing innovative solutions.',
      icon: 'trophy'
    },
    {
      id: 2,
      title: 'Game Development Competition - First Prize',
      date: 'March 1, 2025',
      description: 'Developed a fun and addictive offline game inspired by the classic T-Rex runner, where players navigate through obstacles in a never-ending desert adventure.',
      icon: 'trophy'
    },
    {
      id: 3,
      title: 'AI for Everyone Certification',
      date: 'January 2024',
      description: 'Completed the "AI for Everyone" course from Coursera, gaining foundational knowledge in artificial intelligence.',
      icon: 'certificate'
    },
    {
      id: 4,
      title: 'Unity Basics Certification',
      date: 'February 2024',
      description: 'Completed the "Unity Basics" course from Udemy, learning game development fundamentals.',
      icon: 'certificate'
    },
    {
      id: 5,
      title: 'Startup Pitch Certification',
      date: 'April 2024',
      description: 'Completed the "Startup Pitch" program from Ajeenkya DY Patil University.',
      icon: 'certificate'
    }
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'trophy':
        return <Trophy className="text-yellow-500" size={24} />;
      case 'award':
        return <Award className="text-blue-500" size={24} />;
      case 'certificate':
        return <Certificate className="text-green-500" size={24} />;
      default:
        return <Trophy className="text-yellow-500" size={24} />;
    }
  };

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title pb-4">Achievements & Certifications</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="timeline-item animate-fade-in"
              style={{animationDelay: `${index * 0.1 + 0.1}s`}}
            >
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[var(--primary)]/10">
                    {renderIcon(achievement.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-[var(--muted)] mb-3">{achievement.date}</p>
                    <p className="text-[var(--text)]">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;