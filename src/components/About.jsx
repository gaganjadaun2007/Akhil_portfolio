import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-4">
          About Me
          <span className="h-px bg-border flex-1 ml-4"></span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 text-lg text-text-secondary leading-relaxed space-y-6">
            <p>
              I am a dedicated Computer Science Engineering student with a strong focus on Artificial Intelligence and Machine Learning. My journey in tech is driven by a passion for building practical software solutions that solve real-world problems.
            </p>
            <p>
              Throughout my studies, I have consistently worked on bridging the gap between theoretical knowledge and practical application, whether it's developing web applications or experimenting with IoT systems and AI models.
            </p>
          </div>
          
          <div className="w-full lg:w-1/3 bg-background border border-border p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Education</h3>
                <p className="text-text font-medium">B.Tech CSE — AI & ML</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Focus</h3>
                <p className="text-text font-medium">Software Development + AI/ML</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Currently Learning</h3>
                <p className="text-text font-medium">DSA + Machine Learning</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Open To</h3>
                <p className="text-text font-medium">Internships & Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
