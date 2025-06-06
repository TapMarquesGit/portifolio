import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactInfo } from '../data/portfolioData';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 relative">
            Contato e Redes Profissionais
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#2c5a6e]"></span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Fale Comigo</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#2c5a6e] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">E-mail</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-800 hover:text-[#2c5a6e] transition">
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#2c5a6e] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-800 hover:text-[#2c5a6e] transition">
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <Linkedin className="w-6 h-6 text-[#2c5a6e] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a 
                      href={`https://${contactInfo.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#2c5a6e] transition flex items-center"
                    >
                      {contactInfo.linkedin}
                    </a>
                  </div>
                </li>
                
                {/* <li className="flex items-start space-x-4">
                  <ExternalLink className="w-6 h-6 text-[#2c5a6e] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Behance</p>
                    <a 
                      href={`https://${contactInfo.behance}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#2c5a6e] transition flex items-center"
                    >
                      {contactInfo.behance}
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Disponibilidade</h3>
              <p className="text-gray-700 mb-4">
                Estou disponível para projetos de visualização arquitetônica, consultorias em fluxos de trabalho digital e ferramentas 3D.
              </p>
              <p className="text-gray-700">
                Para consultas sobre disponibilidade ou para solicitar um orçamento, entre em contato via e-mail ou telefone.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;