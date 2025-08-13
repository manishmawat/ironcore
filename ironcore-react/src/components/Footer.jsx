import React from 'react';
import { Linkedin, Github, MessageSquare, Code } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const Footer = ({ 
  name = siteConfig.footer.name,
  description = siteConfig.footer.description,
  quickLinks = siteConfig.footer.quickLinks,
  socialLinks = siteConfig.footer.socialLinks,
  copyrightText = siteConfig.footer.copyrightText,
  className = "",
  onLinkClick = null
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/ironcore';

  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      // On home page, use smooth scrolling
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Call custom link handler if provided
        if (onLinkClick) {
          onLinkClick(sectionId);
        }
      }
    } else {
      // On other pages, navigate to home page with hash
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  // Icon mapping for social links
  const iconMap = {
    'Linkedin': Linkedin,
    'Github': Github,
    'MessageSquare': MessageSquare,
    'Code': Code
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
                      handleNavigation(link.id); 
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
                const IconComponent = iconMap[social.icon];
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
