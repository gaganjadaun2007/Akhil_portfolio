import React from 'react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold text-text">{personalInfo.name}</p>
          <p className="text-sm text-text-secondary">{personalInfo.subtitle}</p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href={personalInfo.github} className="text-text-secondary hover:text-text transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} className="text-text-secondary hover:text-text transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="text-text-secondary hover:text-text transition-colors">Email</a>
        </div>
        
        <div className="text-sm text-text-secondary">
          © {new Date().getFullYear()} {personalInfo.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
