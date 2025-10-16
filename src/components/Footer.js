import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/jeelpatel22', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jeelkumar-patel-8bb3b9259', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:jeel2222patel@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Jeelkumar Patel</h3>
            <p className="text-gray-400 leading-relaxed">
              Computer Science student passionate about creating innovative solutions 
              through code. Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full glass hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <a 
                  href="mailto:jeel2222patel@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  jeel2222patel@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaGithub className="text-blue-400" />
                <a 
                  href="https://github.com/jeelpatel22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  github.com/jeelpatel22
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-blue-400" />
                <a 
                  href="https://www.linkedin.com/in/jeelkumar-patel-8bb3b9259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Jeelkumar Patel. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              <span>and</span>
              <FaCode className="text-blue-400" />
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Available for opportunities</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
    </footer>
  );
};

export default Footer;

