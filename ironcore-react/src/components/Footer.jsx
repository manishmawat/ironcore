import React from 'react';
import { Linkedin, Github, MessageSquare, Code } from 'lucide-react';

const Footer = ({ 
  name = "Manish Kumar Mawatwal",
  description = "Senior AI/Software Engineer passionate about building intelligent systems and scalable solutions.",
  quickLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'blog', label: 'Blog', href: '#blog' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ],
  socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/manishkumarmawatwal', 
      icon: Linkedin 
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/manishkumarmawatwal', 
      icon: Github 
    },
    { 
      name: 'Stack Overflow', 
      url: 'https://stackoverflow.com/users/yourprofile', 
      icon: MessageSquare 
    },
    { 
      name: 'LeetCode', 
      url: 'https://leetcode.com/yourusername', 
      icon: Code 
    }
  ],
  copyrightText = "© 2024 Manish Kumar Mawatwal. All rights reserved.",
  className = "",
  onLinkClick = null
}) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Call custom link handler if provided
      if (onLinkClick) {
        onLinkClick(sectionId);
      }
    }
  };

  return (
    <footer className={`footer ${className}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href} 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      scrollToSection(link.id); 
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
