import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, MessageSquare, Code } from 'lucide-react';

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
                <span>manish.mawat@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Toronto, Canada</span>
              </div>
            </div>
            <div className="contact-social">
              <a href="https://linkedin.com/in/manishkumarmawatwal" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/manishkumarmawatwal" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://stackoverflow.com/users/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <MessageSquare size={20} />
              </a>
              <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <Code size={20} />
              </a>
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
