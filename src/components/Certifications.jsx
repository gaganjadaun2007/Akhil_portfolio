import React from 'react';
import { certifications } from '../data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-20 reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-4">
          Certifications
          <span className="h-px bg-border flex-1 ml-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-lg p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-text/5 rounded-md text-accent">
                  <Award size={24} />
                </div>
                {cert.link && cert.link !== "[ADD CERTIFICATE LINK]" && (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                    aria-label="View Certificate"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
                {cert.name}
              </h3>
              
              <p className="text-text-secondary font-medium mb-1">
                {cert.issuer}
              </p>
              
              <p className="text-text-secondary text-sm mt-auto pt-4 border-t border-border/50">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
