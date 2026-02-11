import React from 'react';
import { Trophy, Award, AlignCenterVertical as Certificate, Briefcase } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: 'trophy' | 'award' | 'certificate' | 'briefcase';
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Nirmaan Hackathon',
      date: 'November 26, 2024',
      description: 'Won 1st place in the 6-hour NIRMAAN Hackathon by designing and developing a restaurant food delivery platform for hostel students and leading the team through development and presentation.',
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
      title: 'Software Engineering Intern — NGO Mobile App',
      date: 'April 2025',
      description: 'Worked as a Software Engineering Intern, developing authentication and user profile features for an NGO mobile application and contributing to real-world software deployment.',
      icon: 'briefcase'
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
      title: 'A1 German Language Certification — Goethe Institute',
      date: '2024',
      description: 'Achieved A1 level German certification from Goethe Institute, Delhi.',
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
      case 'briefcase':
        return <Briefcase className="text-purple-500" size={24} />;
      default:
        return <Trophy className="text-yellow-500" size={24} />;
    }
  };

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title pb-4">Achievements & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="card p-6 h-full hover:border-[var(--primary)] transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    {renderIcon(achievement.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                    </div>
                    <p className="text-sm text-[var(--primary)] font-medium mb-3">{achievement.date}</p>
                    <p className="text-[var(--text)] leading-relaxed">{achievement.description}</p>
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