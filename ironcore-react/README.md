# Manish Kumar Mawatwal - Portfolio Website

A modern, responsive portfolio website built with React, showcasing professional experience, projects, and blog posts.

## 🚀 **Live Demo**

[View Live Portfolio](https://your-domain.com)

## ✨ **Features**

### **Portfolio Sections**
- **Hero Section** - Professional introduction with typing effect
- **About Section** - Professional background and experience
- **Skills Section** - Technical skills and expertise
- **Projects Section** - Showcase of professional projects
- **Blog Section** - Technical articles and insights
- **Contact Section** - Professional contact information

### **Blog System**
- **Dynamic Blog Posts** - Easy to add new content
- **Search & Filtering** - Find posts by category, tags, or search terms
- **Responsive Design** - Optimized for all devices
- **SEO Ready** - Proper meta tags and structure

### **Technical Features**
- **React 18** - Latest React features and hooks
- **Vite** - Fast development and build tooling
- **React Router** - Client-side routing for blog pages
- **Lucide React** - Modern icon library
- **CSS3** - Custom styling with animations
- **Responsive Design** - Mobile-first approach

## 🛠️ **Tech Stack**

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Styling:** CSS3 with custom animations
- **Package Manager:** npm
- **Development Server:** Vite Dev Server

## 📁 **Project Structure**

```
ironcore-react/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Layout.jsx     # Page layout wrapper
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Skills.jsx     # Skills section
│   │   ├── Projects.jsx   # Projects section
│   │   ├── Blog.jsx       # Blog section
│   │   └── Contact.jsx    # Contact section
│   ├── pages/
│   │   └── blog/          # Blog-related pages
│   │       ├── BlogList.jsx           # Blog listing page
│   │       └── posts/                 # Individual blog posts
│   │           ├── building-scalable-ai-systems.jsx
│   │           └── ml-deployment-strategies.jsx
│   ├── config/
│   │   ├── siteConfig.js  # Site configuration
│   │   └── blogConfig.js  # Blog configuration
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── styles.css         # Global styles
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ironcore-react.git
   cd ironcore-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

### **Available Scripts**

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint (if configured)

## 📝 **Adding New Blog Posts**

### **Step 1: Create the Post Component**
Create a new file in `src/pages/blog/posts/`:

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';

const YourPostName = () => {
  const post = {
    title: "Your Post Title",
    excerpt: "Brief description of your post...",
    author: "Manish Kumar Mawatwal",
    date: "January 1, 2025",
    readTime: "5 min read",
    tags: ["Tag1", "Tag2", "Tag3"],
    category: "Your Category"
  };

  return (
    <article className="blog-post">
      {/* Your post content here */}
    </article>
  );
};

export default YourPostName;
```

### **Step 2: Add to Configuration**
Update `src/config/blogConfig.js`:

```javascript
export const blogConfig = {
  posts: [
    // ... existing posts
    {
      id: "your-post-name",
      title: "Your Post Title",
      excerpt: "Brief description of your post...",
      content: "your-post-name",
      author: "Manish Kumar Mawatwal",
      date: "January 1, 2025",
      readTime: "5 min read",
      tags: ["Tag1", "Tag2", "Tag3"],
      featured: false,
      image: "your-image",
      category: "Your Category"
    }
  ]
};
```

### **Step 3: Add Route**
Update `src/App.jsx`:

```jsx
<Route 
  path="/blog/your-post-name" 
  element={
    <Layout headerProps={{...}} footerProps={{...}}>
      <YourPostName />
    </Layout>
  } 
/>
```

## 🎨 **Customization**

### **Site Configuration**
Edit `src/config/siteConfig.js` to customize:
- Site metadata (title, description, author)
- Header settings (logo, navigation items)
- Footer settings (name, social links, copyright)
- Content sections (hero, about, skills)

### **Styling**
Modify `src/styles.css` to customize:
- Color scheme and variables
- Typography and spacing
- Animations and transitions
- Responsive breakpoints

### **Content**
Update component files to modify:
- Personal information
- Project details
- Skills and expertise
- Blog content

## 📱 **Responsive Design**

The portfolio is built with a mobile-first approach:
- **Mobile:** Optimized for small screens with touch-friendly interactions
- **Tablet:** Adaptive layouts for medium screens
- **Desktop:** Full-featured experience with hover effects

## 🚀 **Deployment**

### **Build for Production**
```bash
npm run build
```

### **Deploy to Various Platforms**

#### **Netlify**
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

#### **Vercel**
1. Import your Git repository
2. Vercel will auto-detect Vite configuration
3. Deploy automatically on push

#### **GitHub Pages**
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 **Development**

### **Code Style**
- Use functional components with hooks
- Follow React best practices
- Maintain consistent naming conventions
- Add comments for complex logic

### **Performance**
- Lazy load components when possible
- Optimize images and assets
- Use React.memo for expensive components
- Minimize bundle size

## 📚 **Documentation**

- **`COMPONENT_USAGE.md`** - How to use Header, Footer, and Layout components
- **`BLOG_SYSTEM.md`** - Complete guide to the blog system
- **Inline comments** - Code is well-documented

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Manish Kumar Mawatwal**
- LinkedIn: [Manish Kumar Mawatwal](https://linkedin.com/in/manishkumarmawatwal)
- GitHub: [@manishkumarmawatwal](https://github.com/manishkumarmawatwal)
- Email: manishkumarmawatwal@gmail.com

## 🙏 **Acknowledgments**

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - The build tool
- [Lucide](https://lucide.dev/) - The icon library
- [React Router](https://reactrouter.com/) - The routing solution

---

**Built with ❤️ using React and modern web technologies**
