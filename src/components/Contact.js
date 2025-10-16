import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'jeel2222patel@gmail.com',
      link: 'mailto:jeel2222patel@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Toronto, Ontario, Canada',
      link: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'jeelpatel22',
      link: 'https://github.com/jeelpatel22',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Jeelkumar Patel',
      link: 'https://www.linkedin.com/in/jeelkumar-patel-8bb3b9259',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // EmailJS configuration - You'll need to replace these with your actual values
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    
    // Check if EmailJS is configured
    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setSubmitError('EmailJS is not configured yet. Please follow the setup instructions.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Jeelkumar Patel', // Your name
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError('Failed to send message. Please try again or contact me directly via email.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-display">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-10"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-display">Let's Connect</h3>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed">
                I'm actively seeking internship and entry-level opportunities in software development, 
                web development, and data analysis. Whether you have a project in mind or just 
                want to chat about technology, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-6 p-6 card-enhanced hover:bg-purple-500/10 transition-all duration-300"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} glow-purple`}>
                    <info.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                    <p className="text-gray-300 text-base">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-enhanced p-8"
            >
              <h4 className="text-white font-semibold mb-4 text-xl">Current Status</h4>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse glow-pink"></div>
                <span className="text-gray-200 text-lg font-medium">Available for opportunities</span>
              </div>
              <p className="text-gray-300 text-base">
                Open to internships, entry-level positions, and freelance projects
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-enhanced p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-display">Send a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : submitError ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <FaExclamationTriangle className="text-4xl text-red-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Setup Required</h4>
                <p className="text-gray-300 mb-6">{submitError}</p>
                <motion.button
                  onClick={() => setSubmitError('')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Try Again
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2 text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2 text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2 text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2 text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none text-base"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
