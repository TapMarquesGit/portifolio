import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, certifications } from '../data/portfolioData';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="education" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-12 relative">
                Formação Acadêmica
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#2c5a6e]"></span>
              </h2>
            </motion.div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-[#2c5a6e]">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '10px',
                    gap: '4px',
                  }}>
                    <p style={{
                      fontWeight: 'bold'
                    }}>Atividades e grupos: Projetos de Extensão: </p>
                      <span style={{
                        marginLeft: '10px'
                      }}>• Escritório Modelo de Arquitetura e Urbanismo (EMAU)</span>
                    
                  </div>
                  <div style={{
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    <p style={{
                      fontWeight: 'bold'
                    }}>Descrição do curso:</p>
                    <p>O curso é estruturado em torno das seguintes áreas de formação:</p>
                    <div style={{
                      marginLeft: '8px'
                    }}> 
                    <p>• Fundamentos Teóricos da Arquitetura e Urbanismo</p>
                    <p>• Projeto Arquitetônico e Urbanístico</p>
                    <p>• Conforto Ambiental e Tecnologias Construtivas</p>
                    <p>• História e Patrimônio</p>
                    <p>• Paisagismo</p>
                    <p>• Gestão de Projetos e Obras</p>
                    </div>
    
                    <p>Além disso, o curso permite explorar temas contemporâneos como Sustentabilidade, Acessibilidade, Habitação Social e Cidades Inteligentes. No meu caso, pude aprofundar conhecimentos em tipologias diversas, como projetos residenciais, culturais, educacionais e hospitalares, além de desenvolver competências em liderança e gestão interdisciplinar.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-12 relative">
                Certificações e Workshops
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#2c5a6e]"></span>
              </h2>
            </motion.div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="border-l-4 border-[#2c5a6e] pl-4 py-2"
                >
                  <h3 className="text-lg font-medium text-gray-800">{cert.title}</h3>
                  <p className="text-gray-600">{cert.institution}</p>
                  <p className="text-gray-500 text-sm">{cert.year}</p>
                  {index === 4 && (
                    <p className="text-gray-500 text-sm">Código da credencial: 26344392000108</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;