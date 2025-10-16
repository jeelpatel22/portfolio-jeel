import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaUsers, FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      type: 'education',
      title: 'Computer Programming and Analysis (CPA)',
      company: 'Seneca College',
      location: 'Toronto, Ontario, Canada',
      period: '2022 - 2025',
      description: 'Completed advanced diploma in Computer Programming and Analysis with focus on software development, database management, and system analysis. Graduated in August 2025.',
      achievements: [
        'Maintained strong academic performance across programming courses',
        'Completed multiple milestone projects in C++ and web development',
        'Active participation in collaborative group projects using Jira',
        'Developed proficiency in multiple programming languages'
      ],
      technologies: ['C++', 'C', 'Python', 'JavaScript', 'HTML/CSS', 'SQL', 'Git'],
      icon: FaGraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'project',
      title: 'Web Development Projects',
      company: 'Personal Portfolio',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Developed multiple web applications and websites showcasing modern development practices and user experience design.',
      achievements: [
        'Created interactive e-commerce website for cosmetic products',
        'Built educational website about rare spider species',
        'Implemented responsive design principles across all projects',
        'Utilized modern JavaScript frameworks and libraries'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'React', 'Node.js'],
      icon: FaCode,
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'collaboration',
      title: 'Team Collaboration & Project Management',
      company: 'Academic Projects',
      location: 'Seneca College',
      period: '2022 - Present',
      description: 'Participated in various group projects and collaborative assignments, developing strong teamwork and project management skills.',
      achievements: [
        'Successfully completed group assignments using Jira software',
        'Demonstrated effective communication and coordination skills',
        'Contributed to team problem-solving and code review processes',
        'Maintained project timelines and deliverables'
      ],
      technologies: ['Jira', 'Git', 'Team Collaboration', 'Project Management'],
      icon: FaUsers,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const certifications = [
    {
      name: 'PMI Kickoff',
      issuer: 'Project Management Institute',
      description: 'Project Management Fundamentals',
      icon: FaCertificate,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'C, C++ and Python Programming',
      issuer: 'Institute of Advanced Network Technology',
      description: 'Advanced Programming Languages',
      icon: FaCode,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'GitHub Achievements',
      issuer: 'GitHub',
      achievements: ['Pull Shark', 'YOLO', 'Quickdraw'],
      icon: FaTrophy,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const ExperienceCard = ({ experience, index }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      <div className="card-enhanced relative overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${experience.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
        
        <div className="relative z-10">
          <div className="flex items-start space-x-4 mb-6">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${experience.color}`}>
              <experience.icon className="text-white text-xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 text-display">{experience.title}</h3>
              <div className="flex items-center space-x-6 text-gray-300 text-base mb-3">
                <span className="flex items-center space-x-2">
                  <FaMapMarkerAlt size={16} />
                  <span className="font-medium">{experience.company}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaCalendarAlt size={16} />
                  <span className="font-medium">{experience.period}</span>
                </span>
              </div>
              <p className="text-gray-400 text-base">{experience.location}</p>
            </div>
          </div>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            {experience.description}
          </p>

          <div className="mb-8">
            <h4 className="text-white font-semibold mb-4 text-lg">Key Achievements:</h4>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-gray-200 text-base">
                  <span className="text-purple-400 mt-1 text-lg">•</span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Technologies Used:</h4>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-display">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-10"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey in computer science and software development, including education, projects, and achievements
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-display">
            <span className="gradient-text">Certifications & Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card-enhanced text-center p-8 min-h-[240px]"
              >
                <div className={`w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center glow-purple`}>
                  <cert.icon className="text-white text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 leading-tight">{cert.name}</h4>
                <p className="text-gray-300 mb-3 text-base font-medium">{cert.issuer}</p>
                {cert.description && (
                  <p className="text-gray-400 mb-5 text-sm italic">{cert.description}</p>
                )}
                {cert.achievements && (
                  <div className="flex flex-wrap justify-center gap-3">
                    {cert.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-base bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="card-enhanced max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-display">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              I'm actively seeking internship and entry-level opportunities to apply my skills 
              and contribute to innovative projects. Let's discuss how I can add value to your team.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Experience);

