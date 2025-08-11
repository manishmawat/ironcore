# Manish Kumar Mawatwal - Portfolio Website (React)

A modern, responsive portfolio website built with React, showcasing AI/ML projects, skills, and professional experience.

## 🚀 Features

- **Modern React Architecture** - Built with functional components and hooks
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Smooth Animations** - CSS animations and smooth scrolling
- **Interactive Components** - Dynamic project and blog rendering
- **Contact Form** - Functional contact form with validation
- **Mobile Navigation** - Hamburger menu for mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with custom animations
- **Icons**: Lucide React (modern icon library)
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Vite (fast development server)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills & technologies
│   ├── Projects.jsx    # Projects showcase
│   ├── Blog.jsx        # Blog posts
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx            # Entry point
├── styles.css          # Global styles
└── index.css           # Base styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
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

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
Update CSS variables in `styles.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --background-color: #fff;
}
```

### Content
- **Projects**: Edit `Projects.jsx` component
- **Skills**: Modify `Skills.jsx` component
- **Blog Posts**: Update `Blog.jsx` component
- **Personal Info**: Change content in respective components

### Styling
- All styles are in `src/styles.css`
- Component-specific styles can be added as CSS modules or styled-components

## 🔧 Development

### Adding New Components
1. Create new component in `src/components/`
2. Import and use in `App.jsx`
3. Add corresponding styles to `styles.css`

### State Management
- Uses React hooks (`useState`, `useEffect`)
- Local component state for forms and UI interactions
- No external state management needed for this portfolio

## 📦 Dependencies

- **react**: ^18.0.0 - UI library
- **react-dom**: ^18.0.0 - DOM rendering
- **lucide-react**: ^0.263.1 - Modern icons
- **react-router-dom**: ^6.8.0 - Routing (if needed later)

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect GitHub repository
2. Vercel will auto-deploy on push
3. Configure build command: `npm run build`

### GitHub Pages
1. Build the project: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🎯 Key Benefits of React Version

- **Component Reusability** - Easy to maintain and update
- **State Management** - Clean form handling and UI state
- **Performance** - Virtual DOM for efficient updates
- **Developer Experience** - Hot reload, debugging tools
- **Scalability** - Easy to add new features
- **Mobile-First** - Responsive design built-in

## 📞 Support

For questions or issues:
- Email: manishkumarmawatwal@gmail.com
- LinkedIn: [Manish Kumar Mawatwal](https://linkedin.com/in/manishkumarmawatwal)

---

Built with ❤️ using React and modern web technologies.
