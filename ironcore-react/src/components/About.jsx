import React from 'react';
import { Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Senior AI/Software Engineer with over 10 years of experience in developing 
              intelligent systems and scalable software solutions. I specialize in machine learning, 
              artificial intelligence, and full-stack development.
            </p>
            <p>
              My expertise includes building AI-powered applications, designing scalable architectures, 
              and leading technical teams. I'm passionate about staying current with emerging technologies 
              and contributing to open-source projects.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
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
