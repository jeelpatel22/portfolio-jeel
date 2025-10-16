# Quick Reference Guide

This is a quick reference for common tasks and modifications in the portfolio project.

## 🚀 Quick Commands

```bash
# Development
npm start                    # Start dev server
npm run build               # Build for production
npm test                    # Run tests
npm run lint                # Run linting

# Performance
npm run analyze             # Analyze bundle size
lighthouse http://localhost:3000  # Run performance audit
```

## 📝 Common Modifications

### Adding New Certification
```javascript
// In src/components/Experience.js
{
  name: 'New Certification',
  issuer: 'Issuing Organization',
  description: 'Description text',
  icon: FaCertificate,
  color: 'from-green-500 to-emerald-500'
}
```

### Adding New Project
```javascript
// In src/components/Projects.js
{
  id: projects.length + 1,
  title: 'New Project',
  description: 'Project description',
  image: '/images/project.jpg',
  technologies: ['React', 'Node.js'],
  liveUrl: 'https://project-url.com',
  githubUrl: 'https://github.com/username/project',
  featured: false
}
```

### Updating Personal Info
```javascript
// In src/components/Hero.js
<h1 className="text-5xl md:text-6xl font-bold mb-6 text-display">
  <span className="gradient-text">Your Name</span>
</h1>

// In src/components/About.js
const aboutText = `Your updated description here.`;
```

### Updating Contact Info
```javascript
// In src/components/Contact.js
const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  }
];
```

## 🎨 Styling Quick Reference

### Custom Classes
```css
.text-display     # Large display text
.text-body        # Body text
.text-body-lg     # Large body text
.glass            # Basic glass effect
.glass-card       # Card glass effect
.card-enhanced    # Enhanced card styling
.btn-primary      # Primary button
.btn-secondary    # Secondary button
.gradient-text    # Animated gradient text
.glow-purple      # Purple glow effect
```

### Color System
```css
Primary:   #667eea to #764ba2
Secondary: #ff6b6b to #4ecdc4
Accent:    #45b7d1 to #96ceb4
Success:   #feca57 to #ff9ff3
```

### Responsive Breakpoints
```css
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

## 🔧 Environment Variables

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 File Locations

```
src/
├── App.js                    # Main app
├── components/
│   ├── About.js             # Personal info
│   ├── Contact.js           # Contact form
│   ├── Experience.js        # Education & certifications
│   ├── Hero.js              # Landing section
│   ├── Navbar.js            # Navigation
│   ├── ParticleBackground.js # Animated background
│   ├── Projects.js          # Portfolio projects
│   └── Skills.js            # Technical skills
└── index.css                # Global styles
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag build folder to Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🐛 Common Issues

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling Issues
- Check Tailwind classes
- Verify custom CSS
- Test responsive design

### Performance Issues
- Check bundle size
- Optimize images
- Enable lazy loading

## 📊 Performance Targets

- **Load Time**: < 3s
- **Lighthouse Score**: > 90
- **Bundle Size**: < 1MB
- **Animation FPS**: 60fps

## 🔍 Debug Mode

```javascript
const DEBUG = process.env.NODE_ENV === 'development';
if (DEBUG) {
  console.log('Debug information');
}
```

## 📱 Testing

```bash
# Local testing
npm start

# Production testing
npm run build
npx serve -s build

# Performance testing
lighthouse http://localhost:3000
```

## 🎯 Best Practices

### Performance
- Use `React.memo()` for components
- Implement lazy loading
- Optimize animations
- Use GPU acceleration

### Code Quality
- Follow naming conventions
- Use meaningful variable names
- Comment complex logic
- Test thoroughly

### Accessibility
- Use semantic HTML
- Provide alt text
- Ensure keyboard navigation
- Test with screen readers

## 📞 Quick Help

### Documentation
- **Main Guide**: [README.md](README.md)
- **Components**: [docs/COMPONENT_GUIDE.md](docs/COMPONENT_GUIDE.md)
- **Styling**: [docs/STYLING_GUIDE.md](docs/STYLING_GUIDE.md)
- **Performance**: [docs/PERFORMANCE_GUIDE.md](docs/PERFORMANCE_GUIDE.md)

### Common Tasks
- **Adding Content**: See Component Guide
- **Styling Changes**: See Styling Guide
- **Performance**: See Performance Guide
- **Deployment**: See Deployment Guide

---

**Need more help?** Check the full documentation in the `docs/` folder or refer to the main README.md file.
