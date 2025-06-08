import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useWindowSize from '../hooks/useWindowSize';
const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
const { width } = useWindowSize();
  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), 
                      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f0f0f0' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:w-2/3 mt-10 md:mt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
            Portfólio Profissional<br />
            <span className="font-semibold">Vinicius Marques</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Arquiteto Urbanista | Especialista em Visualização Arquitetônica & Soluções Digitais
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="px-8 py-3 bg-[#2c5a6e] text-white rounded hover:bg-[#1e3d4a] transition duration-300 shadow-md">
              Ver Projetos
            </a>
            <a href="#contact" className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition duration-300 shadow-md">
              Contato
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="md:w-1/3 flex justify-center md:justify-end"
        >
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-[#2c5a6e] overflow-hidden shadow-xl flex items-center justify-center bg-gray-200">
            <img src={new URL('../images/perfil.png', import.meta.url).href} alt="Perfil" width="100%" height="100%"/>
          </div>
        </motion.div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: '80%',
        transform: 'translateY(-100%)',
      }}
      >
        {width > 768 && (
        <>
          <img src={new URL('../images/banner.png', import.meta.url).href} alt="" width="35%" height="35%"/>

          <div>
          <span className="font-semibold" style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#2c5a6e',
          }}>Explore meu trabalho</span>
          </div>
        </>
       )}
      </div>
      
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="inline-block">
            <div className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;