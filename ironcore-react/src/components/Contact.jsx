import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, MessageSquare, Code } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Icon mapping for social links
  const iconMap = {
    'Linkedin': Linkedin,
    'Github': Github,
    'MessageSquare': MessageSquare,
    'Code': Code
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities, interesting projects, 
              and connecting with fellow developers and AI enthusiasts.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <span>{siteConfig.site.email}</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>{siteConfig.site.location}</span>
              </div>
            </div>
            <div className="contact-social">
              {siteConfig.footer.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    title={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
