import React from 'react';
import { Eye, Brain, ShoppingCart, MessageSquare, Cloud, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: "AI-Powered Image Recognition System",
      description: "Developed a deep learning model using TensorFlow and OpenCV for real-time image classification with 95% accuracy. Implemented REST API using FastAPI and deployed on AWS.",
      technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "AWS"],
      liveLink: "#",
      codeLink: "#",
      icon: Eye
    },
    {
      title: "Machine Learning Pipeline",
      description: "Built an end-to-end ML pipeline for predictive analytics using scikit-learn and Apache Airflow. Includes data preprocessing, model training, and automated deployment.",
      technologies: ["Python", "Scikit-learn", "Apache Airflow", "Docker", "PostgreSQL"],
      liveLink: "#",
      codeLink: "#",
      icon: Brain
    },
    {
      title: "Full-Stack E-commerce Platform",
      description: "Developed a modern e-commerce platform using React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveLink: "#",
      codeLink: "#",
      icon: ShoppingCart
    },
    {
      title: "Real-time Chat Application",
      description: "Built a real-time chat application using WebSocket technology. Features include group chats, file sharing, and end-to-end encryption.",
      technologies: ["JavaScript", "WebSocket", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "#",
      codeLink: "#",
      icon: MessageSquare
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated cloud infrastructure deployment using Terraform and AWS. Implemented CI/CD pipeline with GitHub Actions for automated testing and deployment.",
      technologies: ["Terraform", "AWS", "GitHub Actions", "Docker", "Kubernetes"],
      liveLink: "#",
      codeLink: "#",
      icon: Cloud
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for data visualization using D3.js and React. Integrates with multiple data sources and provides real-time analytics.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveLink: "#",
      codeLink: "#",
      icon: BarChart3
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={project.title} className="project-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <IconComponent size={40} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveLink} className="live">Live Demo</a>
                    <a href={project.codeLink} className="code">View Code</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
