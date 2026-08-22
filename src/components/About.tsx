import React from 'react';
import { Book, Code, Star, GitBranch, Download } from 'lucide-react';
import ConstellationAccent from './ConstellationAccent';

const highlights = [
  {
    icon: Book,
    title: 'Education',
    body: 'B.Tech CSE (AI & ML) · Newton School of Technology · 3rd Year',
    tint: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    icon: GitBranch,
    title: 'Open Source',
    body: 'SDE @ Apache Software Foundation · Grails Committer',
    tint: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: Code,
    title: 'Experience',
    body: 'Former SDE @ Kiran Foundation · Mobile auth, profiles & registration',
    tint: 'bg-pink-100 dark:bg-pink-900/30',
  },
  {
    icon: Star,
    title: 'Wins',
    body: '1st @ Hyperlume Game Jam · 1st @ NIRMAAN Hackathon',
    tint: 'bg-green-100 dark:bg-green-900/30',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50/70 dark:bg-gray-900/40 relative overflow-hidden">
      <div className="absolute -right-20 top-10 w-72 h-72 rounded-full bg-[var(--primary)]/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 bottom-10 w-64 h-64 rounded-full bg-[var(--secondary)]/5 blur-3xl pointer-events-none" />

      <div className="container relative">
        <h2 className="section-title !mb-4 pb-3">About Me</h2>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mt-6 items-start">
          <div className="lg:col-span-3 animate-fade-in delay-100">
            <p className="text-lg leading-relaxed mb-4">
              I'm Sanjana, a 3rd-year B.Tech student in Computer Science (AI &amp; ML)
              at Newton School of Technology, Ajeenkya DY Patil University.
              I write production code for open source and ship mobile apps that real users touch.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              As an Apache Grails Committer, I work on documentation, Testcontainers
              pipelines, Postgres search, and API validation. Before that, I was an SDE
              at Kiran Foundation building auth and profile flows for a mobile app.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Outside class, I win hackathons and build full-stack projects with
              React, TypeScript, and Node.js. Always looking for the next hard
              problem to solve.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { value: '2×', label: 'Hackathon wins' },
                { value: 'SDE', label: 'At Apache' },
                { value: '3rd', label: 'Year B.Tech' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-sm p-3 text-center"
                >
                  <p className="text-xl md:text-2xl font-bold text-[var(--primary)]">{stat.value}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="/resume.txt"
              download="Sanjana_Resume.txt"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="lg:col-span-2 relative animate-fade-in delay-200">
            <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 overflow-hidden shadow-lg">
              <ConstellationAccent className="w-full max-h-40 h-auto mx-auto opacity-90" />
              <p className="text-center text-sm text-[var(--muted)] relative z-10 mt-1">
                Connecting dots — code, community, impact
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 mt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="card p-3.5 flex gap-3 items-start animate-fade-in hover:border-[var(--primary)] transition-colors"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <div className={`p-2 rounded-xl shrink-0 ${item.tint}`}>
                      <Icon className="text-[var(--primary)]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                      <p className="text-xs text-[var(--muted)] leading-snug">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
