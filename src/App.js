import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load heavy components
const LazyProjects = lazy(() => import('./components/Projects'));
const LazySkills = lazy(() => import('./components/Skills'));

function App() {
  return (
    <Router>
      <div className="App">
        {/* Performance Monitoring */}
        <PerformanceMonitor />
        
        {/* Animated Background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div></div>}>
            <LazySkills />
          </Suspense>
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div></div>}>
            <LazyProjects />
          </Suspense>
          <Experience />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

