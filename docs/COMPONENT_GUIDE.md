# Component Guide

This document provides detailed information about each component in the portfolio project.

## Component Overview

### Core Components

#### 1. App.js
**Purpose**: Main application component with routing and layout
**Location**: `src/App.js`
**Dependencies**: React Router, Suspense, Lazy Loading

**Key Features**:
- Lazy loading for performance optimization
- Suspense boundaries with loading states
- Performance monitoring integration
- Particle background setup

**Structure**:
```jsx
function App() {
  return (
    <Router>
      <div className="App">
        <PerformanceMonitor />
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Suspense fallback={<LoadingSpinner />}>
            <LazySkills />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyProjects />
          </Suspense>
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
```

#### 2. Hero.js
**Purpose**: Landing section with animated introduction
**Location**: `src/components/Hero.js`
**Dependencies**: Framer Motion, React Typed, React Icons

**Props**: None
**State**: 
- `mousePosition`: Tracks mouse for interactive effects

**Key Features**:
- Typing animation with ReactTyped
- Mouse tracking for parallax effects
- Responsive design with mobile optimization
- Call-to-action buttons with hover effects

**Usage Example**:
```jsx
<Hero />
```

**Customization**:
- Update name, title, and description in the JSX
- Modify typing strings in ReactTyped component
- Adjust animation timings in motion variants

#### 3. About.js
**Purpose**: Personal information and statistics display
**Location**: `src/components/About.js`
**Dependencies**: Framer Motion, React Icons, Intersection Observer

**Props**: None
**State**: None (uses intersection observer)

**Key Features**:
- Animated statistics counters
- Responsive grid layout
- Intersection observer for scroll animations
- Memoized for performance optimization

**Data Structure**:
```javascript
const stats = [
  { icon: FaCode, label: 'Projects Completed', value: '10+' },
  { icon: FaGraduationCap, label: 'Years Learning', value: '3+' },
  { icon: FaHeart, label: 'Coffee Consumed', value: '1000+' }
];
```

**Customization**:
- Update personal information in the JSX
- Modify statistics in the stats array
- Adjust animation delays and durations

#### 4. Experience.js
**Purpose**: Education and certifications display
**Location**: `src/components/Experience.js`
**Dependencies**: Framer Motion, React Icons, Intersection Observer

**Props**: None
**State**: None (uses intersection observer)

**Key Features**:
- Dynamic certification rendering
- Responsive grid layout
- Hover animations and effects
- Achievement badges for GitHub

**Data Structure**:
```javascript
const certifications = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    description: 'Description text',
    icon: FaIcon,
    color: 'from-color1 to-color2'
  },
  {
    name: 'GitHub Achievements',
    issuer: 'GitHub',
    achievements: ['Achievement 1', 'Achievement 2'],
    icon: FaTrophy,
    color: 'from-yellow-500 to-orange-500'
  }
];
```

**Customization**:
- Add/remove certifications in the array
- Update education information
- Modify achievement badges
- Adjust card styling and animations

#### 5. Contact.js
**Purpose**: Contact form with EmailJS integration
**Location**: `src/components/Contact.js`
**Dependencies**: EmailJS, Framer Motion, React Icons

**Props**: None
**State**: 
- `formData`: Form input values
- `isSubmitting`: Loading state
- `submitSuccess`: Success state
- `submitError`: Error state

**Key Features**:
- Form validation and error handling
- EmailJS integration for email sending
- Success/error message display
- Responsive design

**Environment Variables Required**:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Customization**:
- Update contact information
- Modify form fields and validation
- Adjust EmailJS template settings
- Change success/error messages

#### 6. ParticleBackground.js
**Purpose**: Animated particle background system
**Location**: `src/components/ParticleBackground.js`
**Dependencies**: Canvas API, React useEffect

**Props**: None
**State**: None (uses canvas and animation frames)

**Key Features**:
- Canvas-based particle animation
- Performance optimized with reduced particle count
- Responsive particle scaling
- Connection lines between nearby particles

**Performance Settings**:
```javascript
// Particle count scales with screen size
const particleCount = Math.min(25, Math.floor((canvas.width * canvas.height) / 30000));

// Optimized distance calculation (avoids Math.sqrt)
const distance = dx * dx + dy * dy;
if (distance < 10000) { // 100^2 = 10000
  // Draw connection
}
```

**Customization**:
- Adjust particle count and size
- Modify colors and opacity
- Change connection distance and appearance
- Update animation speed

### Utility Components

#### 7. PerformanceMonitor.js
**Purpose**: Performance tracking and monitoring
**Location**: `src/components/PerformanceMonitor.js`
**Dependencies**: Performance Observer API

**Props**: None
**State**: None

**Key Features**:
- Performance metrics tracking
- Page load time measurement
- Development-only monitoring
- Console logging for debugging

**Usage**:
- Automatically included in App.js
- Only active in development mode
- Provides performance insights in console

## Component Patterns

### Standard Component Structure
```jsx
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaIcon } from 'react-icons/fa';

const ComponentName = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Component content */}
      </motion.div>
    </section>
  );
};

export default memo(ComponentName);
```

### Animation Patterns
```jsx
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}

// Scale in
initial={{ opacity: 0, scale: 0.8 }}
animate={inView ? { opacity: 1, scale: 1 } : {}}
transition={{ duration: 0.5 }}

// Staggered animations
transition={{ duration: 0.5, delay: index * 0.1 }}

// Hover effects
whileHover={{ scale: 1.05 }}
```

### Styling Patterns
```jsx
// Glassmorphism cards
className="card-enhanced glass-card"

// Gradient text
className="gradient-text text-display"

// Glow effects
className="glow-purple glow-blue glow-pink"

// Responsive text
className="text-4xl md:text-5xl lg:text-6xl"
```

## Best Practices

### Performance
- Always use `memo()` for components
- Implement proper cleanup in useEffect
- Use intersection observer for scroll animations
- Optimize animations with `will-change`

### Accessibility
- Include proper ARIA labels
- Ensure keyboard navigation
- Use semantic HTML elements
- Provide alt text for images

### Code Organization
- Keep components focused and single-purpose
- Use descriptive variable and function names
- Comment complex logic
- Follow consistent naming conventions

### Error Handling
- Implement error boundaries
- Validate props and data
- Provide fallback UI states
- Handle loading and error states gracefully
