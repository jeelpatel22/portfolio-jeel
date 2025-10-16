import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaCode, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/jeelpatel22', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jeelkumar-patel-8bb3b9259', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaEnvelope, href: 'mailto:jeel2222patel@gmail.com', label: 'Email', color: 'hover:text-red-400' }
  ];

  const skills = [
    { icon: FaCode, name: 'Programming' },
    { icon: FaLaptopCode, name: 'Web Development' },
    { icon: FaDatabase, name: 'Data Analysis' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl top-1/4 right-1/4"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-display"
            >
              <span className="gradient-text">Jeelkumar Patel</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 font-medium"
            >
              <ReactTyped
                strings={[
                  'Computer Science Student',
                  'Software Developer',
                  'Web Developer',
                  'Data Analyst',
                  'Problem Solver'
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
                className="gradient-text"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Passionate about creating innovative solutions through code. 
              Recent Computer Science graduate from Seneca College, seeking 
              internship and entry-level opportunities in software development to apply my skills in real-world projects.
            </motion.p>
          </motion.div>

          {/* Skills showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="card-enhanced p-6 flex flex-col items-center space-y-3 group"
              >
                <skill.icon className="text-3xl text-purple-400 group-hover:text-purple-300 transition-colors glow-purple" />
                <span className="text-lg text-gray-200 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social links and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-3 rounded-full glass hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaChevronDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
