import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogList from './pages/blog/BlogList';
import BuildingScalableAISystems from './pages/blog/posts/building-scalable-ai-systems';
import MLDeploymentStrategies from './pages/blog/posts/ml-deployment-strategies';
import './styles.css';

function App() {
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
    <Router>
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
          element={<BlogList />} 
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
          path="/blog/:postId" 
          element={
            <Layout 
              headerProps={{
                onNavClick: handleNavClick,
              }}
              footerProps={{
                onLinkClick: handleFooterLinkClick,
              }}
            >
              <div className="container">
                <div className="blog-post">
                  <h1>Blog Post Not Found</h1>
                  <p>The blog post you're looking for doesn't exist.</p>
                  <a href="/blog" className="btn btn-primary">Back to Blog</a>
                </div>
              </div>
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
