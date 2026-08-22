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
      title: 'SDE — Apache Software Foundation',
      date: 'May 2026 – Present',
      description:
        'Software engineer at Apache working on Grails — documentation, Testcontainers + Postgres pipelines, search optimization, and API validation.',
      icon: 'briefcase',
    },
    {
      id: 2,
      title: 'Apache Grails Committer',
      date: 'May 2026 – Present',
      description:
        'Apache Committer on the Grails project. Writing official Grails 8 Data Access with GORM docs and shipping contributions to the codebase.',
      icon: 'award',
    },
    {
      id: 3,
      title: 'Software Engineer — Kiran Foundation',
      date: 'April 2025 – July 2025',
      description:
        'Built core mobile app features: login/registration, profile photo management, and authentication flows for a production NGO application.',
      icon: 'briefcase',
    },
    {
      id: 4,
      title: 'Hyperlume Game Jam — 1st Place',
      date: 'February 2025',
      description:
        'Won 1st place at Newton School of Technology. Built a playable game from scratch, reviewed by the CEO of GameEon Studios.',
      icon: 'trophy',
    },
    {
      id: 5,
      title: 'NIRMAAN Hackathon — 1st Place',
      date: 'November 2024',
      description:
        'Led a team to design and ship a restaurant food delivery site for hostel students in a 6-hour hackathon.',
      icon: 'trophy',
    },
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'trophy':
        return <Trophy size={22} />;
      case 'award':
        return <Award size={22} />;
      case 'certificate':
        return <Certificate size={22} />;
      case 'briefcase':
        return <Briefcase size={22} />;
      default:
        return <Trophy size={22} />;
    }
  };

  return (
    <section id="achievements" className="section relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-[var(--secondary)]/5 blur-3xl pointer-events-none" />

      <div className="container relative">
        <h2 className="section-title pb-4">Experience &amp; Achievements</h2>

        <div className="relative mt-12 max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={achievement.id}
                  className={`relative animate-fade-in flex md:items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-[var(--primary)] ring-4 ring-[var(--primary)]/20 timeline-pulse" />
                  </div>

                  <div className={`w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="card p-5 hover:border-[var(--primary)] transition-all group hover:shadow-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors shrink-0">
                          {renderIcon(achievement.icon)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold leading-snug">{achievement.title}</h3>
                          <p className="text-sm text-[var(--primary)] font-medium mt-1 mb-2">
                            {achievement.date}
                          </p>
                          <p className="text-sm text-[var(--muted)] leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
