import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const Header = ({ 
  logoText = siteConfig.header.logoText,
  logoIcon = siteConfig.header.logoIcon,
  navItems = siteConfig.header.navItems,
  className = "",
  onNavClick = null
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/ironcore';

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation based on current page
  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      // On home page, use smooth scrolling
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false); // Close mobile menu
        
        // Call custom navigation handler if provided
        if (onNavClick) {
          onNavClick(sectionId);
        }
      }
    } else {
      // On other pages, navigate to home page with hash
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  // Handle logo click
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHomePage) {
      handleNavigation('home');
    } else {
      navigate('/');
    }
  };

  return (
    <header className={`header ${className}`}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" onClick={handleLogoClick}>
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
                    handleNavigation(item.id); 
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
