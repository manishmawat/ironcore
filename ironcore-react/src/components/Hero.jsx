import React, { useEffect, useState } from 'react';
import { Linkedin, Github, MessageSquare, Code } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = siteConfig.hero.title;

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
  }, [fullText]);

  // Icon mapping for social links
  const iconMap = {
    'Linkedin': Linkedin,
    'Github': Github,
    'MessageSquare': MessageSquare,
    'Code': Code
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {displayText}<span className="highlight"></span>
          </h1>
          <h2 className="hero-subtitle">{siteConfig.hero.subtitle}</h2>
          <p className="hero-description">
            {siteConfig.hero.description}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="hero-social">
            {siteConfig.footer.socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  title={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
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
