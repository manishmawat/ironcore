import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision"]
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "Java", "C++", "TypeScript", "Go"]
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Microservices"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="skill-category fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
