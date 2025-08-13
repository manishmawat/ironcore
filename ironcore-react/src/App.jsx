import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogList from './pages/blog/BlogList';
import BlogPostPage from './pages/blog/[slug]';
import BuildingScalableAISystems from './pages/blog/posts/building-scalable-ai-systems';
import MLDeploymentStrategies from './pages/blog/posts/ml-deployment-strategies';
import './styles.css';

// Component to handle scroll-to-section when navigating from other pages
const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a scroll target in the location state
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Use setTimeout to ensure the DOM is fully rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return children;
};

// Main App Routes component
const AppRoutes = () => {
  const navigate = useNavigate();

  // Custom navigation handler
  const handleNavClick = (sectionId) => {
    console.log(`Navigated to: ${sectionId}`);
    // You can add analytics tracking here
  };

  // Custom footer link handler
  const handleFooterLinkClick = (sectionId) => {
    console.log(`Footer link clicked: ${sectionId}`);
    // You can add analytics tracking here
  };

  // Main page content
  const MainPage = () => (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );

  return (
    <ScrollHandler>
      <Routes>
        {/* Main page route */}
        <Route 
          path="/" 
          element={
            <Layout 
              headerProps={{
                onNavClick: handleNavClick,
              }}
              footerProps={{
                onLinkClick: handleFooterLinkClick,
              }}
            >
              <MainPage />
            </Layout>
          } 
        />

        {/* Blog listing page */}
        <Route 
          path="/blog" 
          element={
            <Layout 
              headerProps={{
                onNavClick: handleNavClick,
              }}
              footerProps={{
                onLinkClick: handleFooterLinkClick,
              }}
            >
              <BlogList />
            </Layout>
          } 
        />

        {/* Individual blog post routes */}
        <Route 
          path="/blog/building-scalable-ai-systems" 
          element={
            <Layout 
              headerProps={{
                onNavClick: handleNavClick,
              }}
              footerProps={{
                onLinkClick: handleFooterLinkClick,
              }}
            >
              <BuildingScalableAISystems />
            </Layout>
          } 
        />

        <Route 
          path="/blog/ml-deployment-strategies" 
          element={
            <Layout 
              headerProps={{
                onNavClick: handleNavClick,
              }}
              footerProps={{
                onLinkClick: handleFooterLinkClick,
              }}
            >
              <MLDeploymentStrategies />
            </Layout>
          } 
        />

        {/* Catch-all route for any other blog posts */}
        <Route 
          path="/blog/:slug" 
          element={
            <Layout 
              headerProps={{
                onNavClick: handleNavClick,
              }}
              footerProps={{
                onLinkClick: handleFooterLinkClick,
              }}
            >
              <BlogPostPage />
            </Layout>
          } 
        />

        {/* 404 route */}
        <Route 
          path="*" 
          element={
            <Layout 
              headerProps={{
                onNavClick: handleNavClick,
              }}
              footerProps={{
                onLinkClick: handleFooterLinkClick,
              }}
            >
              <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go Home
                </button>
              </div>
            </Layout>
          } 
        />
      </Routes>
    </ScrollHandler>
  );
};

function App() {
  return (
    <Router basename="/ironcore">
      <AppRoutes />
    </Router>
  );
}

export default App;
