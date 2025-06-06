import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Vinicius Marques – Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-8">
            <a href="#about" className="text-gray-400 hover:text-white transition">Sobre</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition">Projetos</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;