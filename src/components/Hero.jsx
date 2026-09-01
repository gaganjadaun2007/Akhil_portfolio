import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left reveal active">
            <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-2">
              {personalInfo.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">
              Hi, I'm {personalInfo.name}.
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-text-secondary mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {personalInfo.about}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors text-center shadow-sm"
              >
                View Projects
              </a>
              <a 
                href="#resume" 
                className="w-full sm:w-auto px-6 py-3 bg-transparent text-text border border-border rounded-md font-medium hover:bg-border/50 transition-colors text-center"
              >
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-text-secondary hover:text-text transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end reveal active" style={{ transitionDelay: '200ms' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-border rounded-full flex items-center justify-center text-text-secondary relative overflow-hidden shadow-sm">
               {/* Placeholder for Profile Photo */}
               <svg className="w-32 h-32 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
