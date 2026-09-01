import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 reveal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-text mb-6">Let's Connect</h2>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm open to internships, technical collaborations and opportunities to learn through real-world projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-lg hover:border-accent hover:text-accent transition-colors group shadow-sm"
          >
            <Mail size={32} className="text-text-secondary group-hover:text-accent transition-colors" />
            <span className="font-medium text-text group-hover:text-accent transition-colors">Email</span>
          </a>
          
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-lg hover:border-accent hover:text-accent transition-colors group shadow-sm"
          >
            <FaGithub size={32} className="text-text-secondary group-hover:text-accent transition-colors" />
            <span className="font-medium text-text group-hover:text-accent transition-colors">GitHub</span>
          </a>
          
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-lg hover:border-accent hover:text-accent transition-colors group shadow-sm"
          >
            <FaLinkedin size={32} className="text-text-secondary group-hover:text-accent transition-colors" />
            <span className="font-medium text-text group-hover:text-accent transition-colors">LinkedIn</span>
          </a>

          <a 
            href={personalInfo.resumeLink}
            id="resume"
            className="flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-lg hover:border-accent hover:text-accent transition-colors group shadow-sm"
          >
            <FileText size={32} className="text-text-secondary group-hover:text-accent transition-colors" />
            <span className="font-medium text-text group-hover:text-accent transition-colors">Resume</span>
          </a>
        </div>

        <div className="bg-text/5 p-8 rounded-lg border border-border max-w-2xl mx-auto text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-text mb-2">My Resume</h3>
            <p className="text-text-secondary">A concise overview of my education, technical skills and projects.</p>
          </div>
          <a 
            href={personalInfo.resumeLink}
            className="whitespace-nowrap px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors shadow-sm"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
