import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaDatabase,
  FaLinux,
  FaBootstrap,
  FaNpm
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiMysql, SiMongodb, SiExpress, SiPostman } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, level: 85, color: 'from-yellow-400 to-orange-500' },
        { name: 'C++', icon: SiCplusplus, level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'C', icon: SiC, level: 75, color: 'from-blue-400 to-blue-500' },
        { name: 'JavaScript', icon: FaJs, level: 70, color: 'from-yellow-300 to-yellow-500' },
        { name: 'Java', icon: FaJava, level: 65, color: 'from-red-500 to-red-600' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML5', icon: FaHtml5, level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', icon: FaCss3Alt, level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'React', icon: FaReact, level: 70, color: 'from-cyan-400 to-blue-500' },
        { name: 'Node.js', icon: FaNodeJs, level: 65, color: 'from-green-500 to-green-600' },
        { name: 'Express', icon: SiExpress, level: 60, color: 'from-gray-600 to-gray-800' },
        { name: 'Bootstrap', icon: FaBootstrap, level: 75, color: 'from-purple-500 to-purple-600' }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', icon: SiMongodb, level: 70, color: 'from-green-500 to-green-700' },
        { name: 'SQL', icon: FaDatabase, level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'Git', icon: FaGitAlt, level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', icon: FaGithub, level: 90, color: 'from-gray-600 to-gray-800' },
        { name: 'Linux', icon: FaLinux, level: 70, color: 'from-yellow-500 to-orange-500' },
        { name: 'Postman', icon: SiPostman, level: 75, color: 'from-orange-500 to-orange-600' },
        { name: 'NPM', icon: FaNpm, level: 80, color: 'from-red-500 to-red-600' }
      ]
    }
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <skill.icon className="text-2xl text-blue-400" />
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Additional Skills & Interests
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Problem Solving',
                'Data Analysis',
                'Version Control',
                'API Development',
                'Responsive Design',
                'Team Collaboration',
                'Project Management',
                'Technical Writing'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 text-center border border-blue-500/30"
                >
                  <span className="text-white font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

