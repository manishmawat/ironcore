import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{siteConfig.skills.title}</h2>
        <div className="skills-grid">
          {siteConfig.skills.categories.map((category, index) => (
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
