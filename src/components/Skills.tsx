import React from 'react';
import {
  Brain,
  Users,
  GitPullRequest,
  MessageCircle,
  Lightbulb,
  Zap,
  Code2,
  Database,
  Server,
  Terminal,
} from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'JavaScript / TypeScript', proficiency: 88, icon: Code2 },
    { name: 'React / React Native', proficiency: 85, icon: Terminal },
    { name: 'Python', proficiency: 82, icon: Code2 },
    { name: 'Node.js / Express', proficiency: 80, icon: Server },
    { name: 'SQL / PostgreSQL', proficiency: 78, icon: Database },
    { name: 'Java / Go', proficiency: 70, icon: Terminal },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Brain },
    { name: 'Team Leadership', icon: Users },
    { name: 'Open Source Collab', icon: GitPullRequest },
    { name: 'Communication', icon: MessageCircle },
    { name: 'Critical Thinking', icon: Lightbulb },
    { name: 'Adaptability', icon: Zap },
  ];

  const tools = [
    'Git & GitHub',
    'GitHub Actions',
    'Prisma ORM',
    'D3.js',
    'Pandas',
    'Testcontainers',
    'Expo',
    'Tailwind CSS',
    'MySQL',
    'PostgreSQL',
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute -left-10 top-20 w-64 h-64 rounded-full bg-[var(--primary)]/5 blur-3xl pointer-events-none" />

      <div className="container relative">
        <h2 className="section-title pb-4">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in delay-100">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <div className="flex justify-between mb-2 items-center">
                      <span className="font-medium flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                          <Icon size={16} />
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-sm text-[var(--muted)]">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="card p-4 animate-fade-in hover:border-[var(--primary)] transition-colors group"
                    style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                  >
                    <div className="flex flex-col items-center text-center gap-2">
                      <span className="p-2.5 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </span>
                      <p className="font-medium text-sm">{skill.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-6">Tools &amp; Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-[var(--primary)] text-white font-medium text-sm animate-fade-in shadow-sm hover:shadow-md hover:scale-105 transition-all"
                  style={{ animationDelay: `${index * 0.05 + 0.6}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
