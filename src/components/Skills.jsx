import React from 'react';
import { skills } from '../data/portfolio';

const SkillCategory = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-lg font-medium text-text mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill, index) => (
        <span 
          key={index} 
          className="px-4 py-2 bg-background border border-border text-text-secondary text-sm font-medium rounded-md hover:border-accent hover:text-accent transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-text/5 reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-4">
          Technical Skills
          <span className="h-px bg-border flex-1 ml-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div>
            <SkillCategory title="Languages" items={skills.languages} />
            <SkillCategory title="Web Technologies" items={skills.web} />
            <SkillCategory title="Databases" items={skills.database} />
          </div>
          <div>
            <SkillCategory title="Tools & Platforms" items={skills.tools} />
            <SkillCategory title="Core Learning" items={skills.learning} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
