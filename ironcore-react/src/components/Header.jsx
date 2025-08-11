import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ 
  logoText = "Manish Kumar Mawatwal",
  logoIcon = "fas fa-code",
  navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'blog', label: 'Blog', href: '#blog' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ],
  className = "",
  onNavClick = null
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close mobile menu
      
      // Call custom navigation handler if provided
      if (onNavClick) {
        onNavClick(sectionId);
      }
    }
  };

  return (
    <header className={`header ${className}`}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              <i className={logoIcon}></i>
              <span>{logoText}</span>
            </a>
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a 
                  href={item.href} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(item.id); 
                  }} 
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
