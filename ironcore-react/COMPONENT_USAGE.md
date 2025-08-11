# React Component Usage Guide

This guide explains how to use the enhanced Header, Footer, and Layout components in your React portfolio.

## 🏗️ **Component Architecture**

```
Layout (Wrapper)
├── Header (Navigation)
├── Main Content (Your sections)
└── Footer (Links & Social)
```

## 📋 **Header Component**

### **Basic Usage:**
```jsx
import Header from './components/Header';

// Default header
<Header />

// Customized header
<Header 
  logoText="Your Name"
  logoIcon="fas fa-star"
  navItems={[
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' }
  ]}
  onNavClick={(sectionId) => console.log(`Clicked: ${sectionId}`)}
/>
```

### **Props:**
- `logoText` - Your name/brand (default: "Manish Kumar Mawatwal")
- `logoIcon` - Font Awesome icon class (default: "fas fa-code")
- `navItems` - Array of navigation items
- `className` - Additional CSS classes
- `onNavClick` - Callback when navigation is clicked

## 🦶 **Footer Component**

### **Basic Usage:**
```jsx
import Footer from './components/Footer';

// Default footer
<Footer />

// Customized footer
<Footer 
  name="Your Name"
  description="Your description"
  socialLinks={[
    { name: 'LinkedIn', url: 'https://linkedin.com/in/you', icon: Linkedin }
  ]}
  onLinkClick={(sectionId) => console.log(`Footer link: ${sectionId}`)}
/>
```

### **Props:**
- `name` - Your name (default: "Manish Kumar Mawatwal")
- `description` - Your description
- `quickLinks` - Array of quick navigation links
- `socialLinks` - Array of social media links
- `copyrightText` - Copyright text
- `className` - Additional CSS classes
- `onLinkClick` - Callback when footer links are clicked

## 🎨 **Layout Component**

### **Basic Usage:**
```jsx
import Layout from './components/Layout';

<Layout>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Blog />
  <Contact />
</Layout>
```

### **With Custom Props:**
```jsx
<Layout 
  headerProps={{
    logoText: "Custom Logo",
    onNavClick: (sectionId) => console.log(sectionId)
  }}
  footerProps={{
    name: "Custom Name",
    onLinkClick: (sectionId) => console.log(sectionId)
  }}
>
  {/* Your content */}
</Layout>
```

## ⚙️ **Configuration File**

### **Using siteConfig.js:**
```jsx
import { siteConfig } from './config/siteConfig';

<Layout 
  headerProps={siteConfig.header}
  footerProps={siteConfig.footer}
>
  {/* Your content */}
</Layout>
```

### **Customizing Configuration:**
Edit `src/config/siteConfig.js` to change:
- Site metadata (title, description, author)
- Header settings (logo, navigation items)
- Footer settings (name, social links, copyright)
- Content sections (hero, about, skills)

## 🔄 **Creating New Pages**

### **Single Page with Layout:**
```jsx
// pages/About.jsx
import Layout from '../components/Layout';
import AboutContent from '../components/AboutContent';

const AboutPage = () => (
  <Layout>
    <AboutContent />
  </Layout>
);

export default AboutPage;
```

### **Multiple Pages with Different Headers:**
```jsx
// pages/Blog.jsx
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';

const BlogPage = () => (
  <Layout 
    headerProps={{
      navItems: [
        { id: 'home', label: 'Home', href: '/#home' },
        { id: 'blog', label: 'Blog', href: '#blog' },
        { id: 'contact', label: 'Contact', href: '/#contact' }
      ]
    }}
  >
    <BlogList />
  </Layout>
);
```

## 🎯 **Advanced Customization**

### **Custom Navigation Handler:**
```jsx
const handleNavClick = (sectionId) => {
  // Analytics tracking
  gtag('event', 'navigation', {
    'event_category': 'menu',
    'event_label': sectionId
  });
  
  // Custom scroll behavior
  if (sectionId === 'contact') {
    // Special handling for contact section
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }
};

<Header onNavClick={handleNavClick} />
```

### **Dynamic Social Links:**
```jsx
const [socialLinks, setSocialLinks] = useState([]);

useEffect(() => {
  // Fetch social links from API
  fetch('/api/social-links')
    .then(res => res.json())
    .then(data => setSocialLinks(data));
}, []);

<Footer socialLinks={socialLinks} />
```

## 🚀 **Benefits of This Approach**

1. **Reusability** - Use same header/footer across pages
2. **Maintainability** - Update once, changes everywhere
3. **Flexibility** - Easy to customize for different pages
4. **Consistency** - Same behavior and styling
5. **Scalability** - Easy to add new pages and features
6. **Testing** - Components can be tested independently

## 📱 **Responsive Design**

All components are mobile-first and include:
- **Hamburger Menu** - Mobile navigation
- **Touch-Friendly** - Mobile-optimized interactions
- **Responsive Layout** - Works on all screen sizes
- **Smooth Animations** - CSS transitions and animations

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **Icons Not Showing**
   - Check if lucide-react icons are imported correctly
   - Verify icon names exist in lucide-react library

2. **Navigation Not Working**
   - Ensure sections have correct IDs
   - Check if smooth scrolling is supported

3. **Styling Issues**
   - Verify CSS is imported correctly
   - Check for CSS conflicts

### **Debug Mode:**
```jsx
<Header 
  onNavClick={(sectionId) => {
    console.log('Navigation clicked:', sectionId);
    console.log('Target element:', document.getElementById(sectionId));
  }}
/>
```

---

Your React portfolio now has a professional, maintainable component architecture! 🎉
