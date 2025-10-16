import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Fragments & Fragments-UI',
      description: 'Full-Stack Microservice Platform - Designed and built a secure, scalable RESTful API for handling multi-format text and image fragments with full CRUD support and data format conversions (e.g., Markdown to HTML, JPEG to PNG).',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'AWS ECS', 'API Gateway', 'Lambda', 'S3', 'DynamoDB', 'JWT Auth', 'GitHub Actions'],
      category: 'Full-Stack',
      github: 'https://github.com/jeelpatel22/fragments',
      live: '#',
      featured: true,
      highlights: [
        'Implemented robust authentication using JWT and Basic Auth',
        'Deployed on AWS using ECS (Fargate) with S3 and DynamoDB',
        'Set up automated CI/CD pipelines with GitHub Actions',
        'Secure data access with SHA256 hashed IDs'
      ]
    },
    {
      id: 2,
      title: 'EasyExplorer',
      description: 'Travel Planning Platform with Calendar Synchronization, Map, Review system and more. Collaborated in a 5-member Agile team, holding weekly meetings and managing tasks via GitHub issues.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Google Calendar API', 'OAuth2'],
      category: 'Full-Stack',
      github: 'https://github.com/jeelpatel22/easyexplorer',
      live: '#',
      featured: true,
      highlights: [
        'Real-time itinerary management and group collaboration',
        'Google Calendar and iCal synchronization',
        'Secure REST APIs with cross-device compatibility',
        'Agile development with 5-member team'
      ]
    },
    {
      id: 3,
      title: 'Store Products Website',
      description: 'A comprehensive e-commerce website for cosmetic products with customer knowledge base and interactive features.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      category: 'Web Development',
      github: 'https://github.com/jeelpatel22/Store_products',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Zebra Jumping Spider Website',
      description: 'Educational website providing detailed information about the rare Zebra Jumping Spider species with interactive content.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Web Development',
      github: 'https://github.com/jeelpatel22/Web_project',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'OOP244 Milestone 5',
      description: 'Complete milestone project from Seneca College CPA program demonstrating advanced C++ object-oriented programming concepts.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'OOP', 'Data Structures'],
      category: 'Programming',
      github: 'https://github.com/jeelpatel22/OOP244-MS5',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'WEB222 Final Project',
      description: 'Final project for WEB222 course showcasing modern web development techniques and responsive design.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Web Development',
      github: 'https://github.com/jeelpatel22/web222-final',
      live: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Full-Stack', 'Web Development', 'Programming'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden card-hover group"
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <FaCode className="text-6xl text-blue-400/50" />
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Highlights for featured projects */}
        {project.featured && project.highlights && (
          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
            <ul className="space-y-1">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={18} />
            <span>Code</span>
          </motion.a>
          {project.live !== '#' && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={16} />
              <span>Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'glass text-gray-300 hover:text-white hover:bg-blue-500/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/jeelpatel22?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <FaGithub />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
