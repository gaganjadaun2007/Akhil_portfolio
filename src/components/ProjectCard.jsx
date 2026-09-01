import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="bg-background border border-border rounded-lg p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
      <div className="mb-4 flex-1">
        <span className="text-xs font-semibold text-accent tracking-wider uppercase mb-2 block">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-text/5 text-text-secondary text-xs font-medium rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-text/5 text-text-secondary text-xs font-medium rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
        <div className="flex gap-3">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text transition-colors p-1"
            aria-label="GitHub Repository"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text transition-colors p-1"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        
        <button 
          onClick={() => onViewDetails(project)}
          className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          View Details
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
