import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ 
  children, 
  headerProps = {},
  footerProps = {},
  className = ""
}) => {
  return (
    <div className={`layout ${className}`}>
      <Header {...headerProps} />
      <main className="main-content">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
};

export default Layout;
