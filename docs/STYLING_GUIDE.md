# Styling Guide

This document provides comprehensive information about the styling system used in the portfolio project.

## Overview

The project uses a hybrid styling approach combining:
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Custom classes and animations
- **CSS-in-JS**: Inline styles for dynamic values

## File Structure

```
src/
├── index.css              # Global styles and utilities
├── components/
│   └── [Component].js     # Component-specific styles
└── App.js                 # App-level styles
```

## Global Styles (index.css)

### CSS Variables
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  --accent-gradient: linear-gradient(135deg, #45b7d1, #96ceb4);
}
```

### Typography System

#### Font Families
```css
body {
  font-family: 'Poppins', 'Inter', system-ui, -apple-system, sans-serif;
}

/* Display text */
.text-display {
  font-family: 'Space Grotesk', 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Body text */
.text-body {
  font-family: 'Poppins', 'Inter', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.text-body-lg {
  font-size: 18px;
  line-height: 1.7;
}
```

#### Responsive Typography
```css
/* Mobile first approach */
.text-display {
  font-size: 2.5rem; /* 40px */
}

@media (min-width: 768px) {
  .text-display {
    font-size: 3rem; /* 48px */
  }
}

@media (min-width: 1024px) {
  .text-display {
    font-size: 3.5rem; /* 56px */
  }
}
```

### Color System

#### Primary Colors
```css
/* Gradients */
.gradient-text {
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-text-secondary {
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

#### Background Gradients
```css
body {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
}

/* Section backgrounds */
.section-bg {
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(15, 52, 96, 0.6));
}
```

### Glassmorphism System

#### Base Glass Effect
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
```

#### Enhanced Card Styling
```css
.card-enhanced {
  @apply glass-card rounded-2xl p-6 transition-all duration-300;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.card-enhanced:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

### Button System

#### Primary Button
```css
.btn-primary {
  @apply bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 
         hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 
         text-white font-semibold py-4 px-8 rounded-xl 
         transition-all duration-300 transform hover:scale-105 
         hover:shadow-2xl hover:shadow-purple-500/30 text-lg;
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
  will-change: transform, background-position;
}
```

#### Secondary Button
```css
.btn-secondary {
  @apply glass-card border border-purple-500/40 text-purple-300 
         hover:bg-purple-500/20 hover:border-purple-400 hover:text-white 
         font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg;
}
```

#### Ghost Button
```css
.btn-ghost {
  @apply text-purple-300 hover:text-white hover:bg-purple-500/10 
         font-semibold py-3 px-6 rounded-lg transition-all duration-300 
         border border-transparent hover:border-purple-500/30;
}
```

### Glow Effects

#### Color Variants
```css
.glow-purple {
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
}

.glow-blue {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.glow-pink {
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
}
```

#### Animated Glow
```css
.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(147, 51, 234, 0.6);
  }
}
```

### Animation System

#### Gradient Animation
```css
@keyframes gradientShift {
  0%, 100% { 
    background-position: 0% 50%; 
  }
  50% { 
    background-position: 100% 50%; 
  }
}

.gradient-text {
  animation: gradientShift 6s ease infinite;
  will-change: background-position;
}
```

#### Performance Optimizations
```css
/* GPU acceleration */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component-Specific Styles

### Hero Section
```jsx
// Typing animation container
<div className="text-5xl md:text-6xl font-bold mb-6 text-display">
  <span className="gradient-text">Jeel Patel</span>
</div>

// Skill cards
<div className="card-enhanced text-center p-4 hover:scale-105 transition-transform duration-300">
  <FaIcon className="text-2xl text-purple-400 mb-2" />
  <span className="text-sm font-medium">Skill Name</span>
</div>
```

### About Section
```jsx
// Statistics cards
<div className="card-enhanced text-center p-6">
  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center glow-purple">
    <FaIcon className="text-white text-2xl" />
  </div>
  <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
  <p className="text-gray-300">Projects Completed</p>
</div>
```

### Experience Section
```jsx
// Certification cards
<div className="card-enhanced text-center p-8 min-h-[240px]">
  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center glow-purple">
    <FaCertificate className="text-white text-3xl" />
  </div>
  <h4 className="text-xl font-bold text-white mb-4 leading-tight">Certification Name</h4>
  <p className="text-gray-300 mb-3 text-base font-medium">Issuing Organization</p>
  <p className="text-gray-400 mb-5 text-sm italic">Description</p>
</div>
```

## Responsive Design

### Breakpoint System
```css
/* Mobile First Approach */
/* Base styles for mobile (320px+) */

/* Small devices (640px+) */
@media (min-width: 640px) { }

/* Medium devices (768px+) */
@media (min-width: 768px) { }

/* Large devices (1024px+) */
@media (min-width: 1024px) { }

/* Extra large devices (1280px+) */
@media (min-width: 1280px) { }

/* 2XL devices (1536px+) */
@media (min-width: 1536px) { }
```

### Responsive Typography
```css
/* Mobile */
.text-display { font-size: 2.5rem; }
.text-body-lg { font-size: 1rem; }

/* Tablet */
@media (min-width: 768px) {
  .text-display { font-size: 3rem; }
  .text-body-lg { font-size: 1.125rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .text-display { font-size: 3.5rem; }
  .text-body-lg { font-size: 1.25rem; }
}
```

### Responsive Grids
```jsx
// Skills grid
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

// Projects grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// Certifications grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

## Customization Guide

### Changing Colors
1. **Update CSS variables** in `:root`
2. **Modify gradient definitions** in `.gradient-text`
3. **Adjust glassmorphism colors** in `.glass` variants
4. **Update button colors** in `.btn-*` classes

### Adding New Animations
1. **Define keyframes** in CSS
2. **Create animation class** with `animation` property
3. **Add to components** using className
4. **Test performance** and adjust timing

### Modifying Typography
1. **Update font imports** in `index.css`
2. **Modify font families** in `.text-*` classes
3. **Adjust sizes** in responsive breakpoints
4. **Update line heights** for better readability

### Creating New Components
1. **Follow naming convention** (PascalCase)
2. **Use consistent class structure**
3. **Implement responsive design**
4. **Add proper animations**
5. **Test across devices**

## Best Practices

### Performance
- Use `will-change` for animated elements
- Minimize repaints and reflows
- Optimize animations for 60fps
- Use `transform` and `opacity` for animations

### Accessibility
- Ensure sufficient color contrast
- Use semantic HTML elements
- Provide focus indicators
- Support reduced motion preferences

### Maintainability
- Use consistent naming conventions
- Group related styles together
- Comment complex CSS
- Use CSS custom properties for theming

### Browser Support
- Test in major browsers
- Use vendor prefixes when needed
- Provide fallbacks for modern features
- Consider progressive enhancement
