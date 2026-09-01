import React from 'react';
import { education, learningJourney } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-text/5 reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-bold text-text flex items-center gap-4 mb-12">
              Education
              <span className="h-px bg-border flex-1 ml-4 md:hidden"></span>
            </h2>
            
            <div className="bg-background border border-border p-6 rounded-lg shadow-sm border-l-4 border-l-accent">
              <span className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-1 block">
                {education.period}
              </span>
              <h3 className="text-xl font-bold text-text mb-2">{education.degree}</h3>
              <p className="text-text-secondary font-medium">{education.field}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-text flex items-center gap-4 mb-12">
              Currently Learning
              <span className="h-px bg-border flex-1 ml-4 md:hidden"></span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learningJourney.map((topic, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border p-4 rounded-lg flex items-center gap-3 shadow-sm hover:border-accent/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-text-secondary font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
