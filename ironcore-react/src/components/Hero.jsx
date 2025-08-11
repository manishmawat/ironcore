import React, { useEffect, useState } from 'react';
import { Linkedin, Github, MessageSquare, Code } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Manish Kumar Mawatwal";

  // Typing effect for hero title
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    typeWriter();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {displayText}<span className="highlight"></span>
          </h1>
          <h2 className="hero-subtitle">Senior AI/Software Engineer</h2>
          <p className="hero-description">
            Passionate about building intelligent systems and scalable software solutions. 
            Specializing in AI/ML, full-stack development, and cloud architecture.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="hero-social">
            <a href="https://linkedin.com/in/manishkumarmawatwal" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/manishkumarmawatwal" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://stackoverflow.com/users/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
              <MessageSquare size={20} />
            </a>
            <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <Code size={20} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
