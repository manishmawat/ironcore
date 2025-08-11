// Site Configuration
export const siteConfig = {
  // Site metadata
  site: {
    title: "Manish Kumar Mawatwal - Senior AI/Software Engineer",
    description: "Senior AI/Software Engineer Portfolio - Personal projects, blog posts, and professional achievements",
    author: "Manish Kumar Mawatwal",
    email: "manishkumarmawatwal@gmail.com",
    location: "Toronto, Canada",
    year: "2024"
  },

  // Header configuration
  header: {
    logoText: "Manish Kumar Mawatwal",
    logoIcon: "fas fa-code",
    navItems: [
      { id: 'home', label: 'Home', href: '#home' },
      { id: 'about', label: 'About', href: '#about' },
      { id: 'skills', label: 'Skills', href: '#skills' },
      { id: 'projects', label: 'Projects', href: '#projects' },
      { id: 'blog', label: 'Blog', href: '#blog' },
      { id: 'contact', label: 'Contact', href: '#contact' }
    ]
  },

  // Footer configuration
  footer: {
    name: "Manish Kumar Mawatwal",
    description: "Senior AI/Software Engineer passionate about building intelligent systems and scalable solutions.",
    quickLinks: [
      { id: 'home', label: 'Home', href: '#home' },
      { id: 'about', label: 'About', href: '#about' },
      { id: 'projects', label: 'Projects', href: '#projects' },
      { id: 'blog', label: 'Blog', href: '#blog' },
      { id: 'contact', label: 'Contact', href: '#contact' }
    ],
    socialLinks: [
      { 
        name: 'LinkedIn', 
        url: 'https://linkedin.com/in/manishkumarmawatwal', 
        icon: 'Linkedin' 
      },
      { 
        name: 'GitHub', 
        url: 'https://github.com/manishkumarmawatwal', 
        icon: 'Github' 
      },
      { 
        name: 'Stack Overflow', 
        url: 'https://stackoverflow.com/users/yourprofile', 
        icon: 'MessageSquare' 
      },
      { 
        name: 'LeetCode', 
        url: 'https://leetcode.com/yourusername', 
        icon: 'Code' 
      }
    ],
    copyrightText: "© 2024 Manish Kumar Mawatwal. All rights reserved."
  },

  // Hero section
  hero: {
    title: "Hi, I'm Manish Kumar Mawatwal",
    subtitle: "Senior AI/Software Engineer",
    description: "Passionate about building intelligent systems and scalable software solutions. Specializing in AI/ML, full-stack development, and cloud architecture."
  },

  // About section
  about: {
    title: "About Me",
    description: "I'm a Senior AI/Software Engineer with over 10 years of experience in developing intelligent systems and scalable software solutions. I specialize in machine learning, artificial intelligence, and full-stack development.",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "50+", label: "Projects Completed" },
      { value: "10+", label: "Technologies" }
    ]
  },

  // Skills section
  skills: {
    title: "Skills & Technologies",
    categories: [
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
    ]
  }
};

export default siteConfig;
