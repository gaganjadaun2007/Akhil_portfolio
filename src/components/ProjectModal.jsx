import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm transition-opacity">
      <div className="bg-background border border-border w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl flex flex-col relative reveal active">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-secondary hover:text-text rounded-full hover:bg-border/50 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <div className="mb-6">
            <span className="text-sm font-semibold text-accent tracking-wider uppercase mb-2 block">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold text-text mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-text/5 text-text-secondary text-xs font-medium rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 text-text-secondary">
            <div>
              <h3 className="text-lg font-semibold text-text mb-2">Overview</h3>
              <p className="leading-relaxed">{project.shortDescription}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">Problem</h3>
                <p className="leading-relaxed">{project.details.problem}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">Solution</h3>
                <p className="leading-relaxed">{project.details.solution}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-text mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">Challenges</h3>
                <p className="leading-relaxed">{project.details.challenges}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">Learning</h3>
                <p className="leading-relaxed">{project.details.learning}</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border flex gap-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-text text-background rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                <FaGithub size={20} />
                GitHub
              </a>
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-border text-text rounded-md font-medium hover:bg-border/50 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
