import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Python', proficiency: 90 },
    { name: 'HTML', proficiency: 85 },
    { name: 'CSS', proficiency: 80 },
    { name: 'JavaScript', proficiency: 75 },
    { name: 'React', proficiency: 70 },
    { name: 'React Native', proficiency: 65 },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Communication',
    'Critical Thinking',
    'Adaptability'
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title pb-4">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in delay-100">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1 + 0.2}s`}}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress transition-all duration-1000" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="card p-4 text-center animate-fade-in"
                  style={{animationDelay: `${index * 0.1 + 0.4}s`}}
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mt-10 mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {['Git', 'VS Code', 'TensorFlow', 'Jupyter', 'Docker', 'AWS'].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-[var(--primary)] text-white font-medium text-sm animate-fade-in"
                  style={{animationDelay: `${index * 0.1 + 0.6}s`}}
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