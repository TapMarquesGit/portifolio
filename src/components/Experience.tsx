import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 relative">
            Experiência Profissional
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#2c5a6e]"></span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-12 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-200"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#2c5a6e] z-10"></div>
                
                <div className={`md:w-1/2 pb-8 md:pb-0 ${
                  index % 2 === 0 ? 'md:pl-12 md:pr-8' : 'md:pr-12 md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                    <p className="text-[#2c5a6e] font-medium mb-2">{exp.position}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span style={{
                            marginRight: '10px'
                          }}>•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;