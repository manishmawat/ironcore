import React from 'react';
import { Brain } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{siteConfig.about.title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {siteConfig.about.description}
            </p>
            <p>
              My expertise includes building AI-powered applications, designing scalable architectures, 
              and leading technical teams. I'm passionate about staying current with emerging technologies 
              and contributing to open-source projects.
            </p>
            <div className="about-stats">
              {siteConfig.about.stats.map((stat, index) => (
                <div key={index} className="stat">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="about-placeholder">
              <Brain size={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
