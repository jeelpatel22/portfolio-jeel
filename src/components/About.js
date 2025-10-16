import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGraduationCap, FaMapMarkerAlt, FaHeart, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: '19+', label: 'Projects', icon: FaCode },
    { number: '3+', label: 'Languages', icon: FaGraduationCap },
    { number: '2+', label: 'Years Learning', icon: FaHeart }
  ];

  const interests = [
    { icon: FaCode, title: 'Programming', description: 'Passionate about solving complex problems through code' },
    { icon: FaLightbulb, title: 'Innovation', description: 'Always exploring new technologies and methodologies' },
    { icon: FaUsers, title: 'Collaboration', description: 'Enjoy working in teams and learning from others' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-display">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-10"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-enhanced">
              <h3 className="text-3xl font-bold mb-6 text-white text-display">Hello, I'm Jeelkumar!</h3>
              <p className="text-lg mb-6 text-gray-200 leading-relaxed">
                I'm a passionate Computer Science graduate from Seneca College, having completed 
                the Computer Programming and Analysis (CPA) program in August 2025. My journey in technology 
                began with a curiosity for how things work, and it has evolved into a deep 
                passion for creating innovative solutions through code.
              </p>
              <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                I specialize in multiple programming languages including Python, C, C++, and SQL, 
                with a strong foundation in web development and data analysis. My goal is to 
                leverage these skills in real-world applications and contribute to meaningful 
                projects that make a difference.
              </p>
              <div className="flex items-center space-x-3 text-purple-300 text-lg">
                <FaMapMarkerAlt className="text-xl" />
                <span className="font-medium">Toronto, Ontario, Canada</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="card-enhanced text-center"
                >
                  <stat.icon className="text-3xl text-purple-400 mx-auto mb-3 glow-purple" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-base text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-display">What Drives Me</h3>
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card-enhanced flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <interest.icon className="text-2xl text-purple-400 glow-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">{interest.title}</h4>
                  <p className="text-base text-gray-200 leading-relaxed">{interest.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="card-enhanced text-center"
            >
              <h4 className="text-xl font-semibold text-white mb-4 text-display">Ready to Collaborate?</h4>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                I'm actively seeking internship and entry-level opportunities in software development 
                to apply my skills and contribute to innovative projects.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-block"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);

