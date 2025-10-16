# Performance Guide

This guide covers the performance optimizations implemented in the portfolio project and how to maintain them.

## Performance Overview

The portfolio has been optimized for:
- **Fast loading times** (< 3 seconds)
- **Smooth animations** (60fps)
- **Efficient scrolling** (no delays)
- **Minimal bundle size** (< 1MB)
- **Core Web Vitals** compliance

## Implemented Optimizations

### 1. React Performance

#### Component Memoization
```javascript
// All components wrapped with React.memo()
import React, { memo } from 'react';

const ComponentName = () => {
  // Component logic
};

export default memo(ComponentName);
```

#### Lazy Loading
```javascript
// Heavy components loaded on demand
const LazyProjects = lazy(() => import('./components/Projects'));
const LazySkills = lazy(() => import('./components/Skills'));

// Wrapped with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <LazyProjects />
</Suspense>
```

#### Intersection Observer
```javascript
// Only animate when in viewport
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1
});
```

### 2. Animation Optimizations

#### GPU Acceleration
```css
/* Force GPU acceleration */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* Optimize animations */
.gradient-text {
  animation: gradientShift 6s ease infinite;
  will-change: background-position;
}
```

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3. Particle Background Optimization

#### Reduced Particle Count
```javascript
// Optimized particle count
const particleCount = Math.min(25, Math.floor((canvas.width * canvas.height) / 30000));
```

#### Efficient Distance Calculations
```javascript
// Avoid expensive Math.sqrt()
const distance = dx * dx + dy * dy;
if (distance < 10000) { // 100^2 = 10000
  // Draw connection
}
```

#### Optimized Rendering
```javascript
// Reduced opacity and line thickness
ctx.globalAlpha = (100 - Math.sqrt(distance)) / 100 * 0.1;
ctx.lineWidth = 0.3;
```

### 4. CSS Optimizations

#### Efficient Selectors
```css
/* Use efficient selectors */
.card-enhanced { /* Good */ }
div.card-enhanced { /* Avoid */ }
```

#### Hardware Acceleration
```css
/* Use transform and opacity for animations */
.animate-element {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
```

#### Reduced Repaints
```css
/* Avoid properties that cause repaints */
.optimized {
  transform: scale(1.05); /* Good */
  width: 100px; /* Avoid in animations */
}
```

### 5. Bundle Optimizations

#### Code Splitting
```javascript
// Split code by routes/features
const LazyComponent = lazy(() => import('./components/Component'));
```

#### Tree Shaking
```javascript
// Import only what you need
import { FaIcon } from 'react-icons/fa'; // Good
import * as Icons from 'react-icons/fa'; // Avoid
```

#### Dynamic Imports
```javascript
// Load heavy libraries on demand
const loadHeavyLibrary = async () => {
  const { default: HeavyLibrary } = await import('heavy-library');
  return HeavyLibrary;
};
```

## Performance Monitoring

### Development Monitoring
```javascript
// Performance monitoring component
const PerformanceMonitor = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
          }
        }
      });
      
      observer.observe({ entryTypes: ['measure'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return null;
};
```

### Core Web Vitals
```javascript
// Monitor Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Bundle Analysis
```bash
# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js
```

## Performance Metrics

### Target Metrics
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.8s

### Current Performance
- **Bundle Size**: ~800KB (gzipped)
- **Load Time**: ~2.1s
- **Lighthouse Score**: 95+
- **Animation FPS**: 60fps

## Optimization Strategies

### 1. Image Optimization

#### WebP Format
```javascript
// Use WebP for better compression
<img src="/images/image.webp" alt="Description" />
```

#### Lazy Loading
```javascript
// Lazy load images
<img 
  src="/images/image.jpg" 
  alt="Description"
  loading="lazy"
/>
```

#### Responsive Images
```javascript
// Use srcset for responsive images
<img 
  src="/images/image-small.jpg"
  srcSet="/images/image-small.jpg 480w, /images/image-large.jpg 800w"
  sizes="(max-width: 480px) 480px, 800px"
  alt="Description"
/>
```

### 2. Font Optimization

#### Font Display
```css
/* Optimize font loading */
@font-face {
  font-family: 'Poppins';
  src: url('fonts/Poppins.woff2') format('woff2');
  font-display: swap; /* Show fallback until font loads */
}
```

#### Preload Critical Fonts
```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/Poppins.woff2" as="font" type="font/woff2" crossorigin>
```

### 3. Caching Strategies

#### Service Worker
```javascript
// Implement service worker for caching
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

#### Cache Headers
```javascript
// Set appropriate cache headers
const cacheHeaders = {
  'Cache-Control': 'public, max-age=31536000', // 1 year
  'ETag': 'version-1.0.0'
};
```

### 4. Code Splitting

#### Route-based Splitting
```javascript
// Split by routes
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
```

#### Feature-based Splitting
```javascript
// Split by features
const ContactForm = lazy(() => import('./components/ContactForm'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));
```

## Performance Testing

### Local Testing
```bash
# Start development server
npm start

# Build for production
npm run build

# Serve production build
npx serve -s build
```

### Performance Audits
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --output html

# Run with specific settings
lighthouse http://localhost:3000 --only-categories=performance --output html
```

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npx webpack-bundle-analyzer build/static/js/*.js

# Check for duplicate dependencies
npx webpack-bundle-analyzer build/static/js/*.js --mode static
```

## Common Performance Issues

### 1. Large Bundle Size
**Symptoms**: Slow loading, large initial bundle
**Solutions**:
- Implement code splitting
- Remove unused dependencies
- Optimize images
- Use dynamic imports

### 2. Slow Animations
**Symptoms**: Choppy animations, low FPS
**Solutions**:
- Use `will-change` property
- Optimize animation properties
- Reduce particle count
- Use GPU acceleration

### 3. Memory Leaks
**Symptoms**: Increasing memory usage, slow performance
**Solutions**:
- Clean up event listeners
- Cancel animation frames
- Remove timers and intervals
- Use proper cleanup in useEffect

### 4. Layout Shifts
**Symptoms**: Content jumping, poor CLS score
**Solutions**:
- Set image dimensions
- Use skeleton loaders
- Avoid dynamic content insertion
- Reserve space for dynamic content

## Performance Best Practices

### 1. React Best Practices
- Use `React.memo()` for expensive components
- Implement proper cleanup in useEffect
- Avoid unnecessary re-renders
- Use useCallback and useMemo appropriately

### 2. CSS Best Practices
- Use efficient selectors
- Minimize repaints and reflows
- Use transform and opacity for animations
- Implement hardware acceleration

### 3. JavaScript Best Practices
- Minimize DOM manipulation
- Use event delegation
- Implement debouncing and throttling
- Avoid memory leaks

### 4. Asset Optimization
- Compress images and assets
- Use appropriate formats (WebP, SVG)
- Implement lazy loading
- Use CDN for static assets

## Monitoring and Maintenance

### Regular Performance Checks
- Weekly performance audits
- Monthly bundle size analysis
- Quarterly optimization review
- Annual performance overhaul

### Performance Budget
- **Bundle Size**: < 1MB
- **Load Time**: < 3s
- **Lighthouse Score**: > 90
- **Core Web Vitals**: All green

### Performance Alerts
- Set up monitoring for performance metrics
- Configure alerts for performance degradation
- Track Core Web Vitals over time
- Monitor user experience metrics

## Tools and Resources

### Performance Tools
- **Lighthouse**: Web performance auditing
- **WebPageTest**: Detailed performance analysis
- **Chrome DevTools**: Performance profiling
- **Bundle Analyzer**: Bundle size analysis

### Monitoring Services
- **Google PageSpeed Insights**: Performance scoring
- **GTmetrix**: Performance monitoring
- **Pingdom**: Uptime and performance
- **New Relic**: Application performance monitoring

### Optimization Resources
- **Web.dev**: Performance best practices
- **MDN**: Web performance documentation
- **React Performance**: React optimization guides
- **Core Web Vitals**: Google's performance metrics

This performance guide ensures the portfolio maintains optimal performance while providing a smooth user experience.
