import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">
          <span className="font-light">Vinicius</span> Marques
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-800 hover:text-gray-600 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav className={`
          md:flex md:items-center md:static absolute
          ${menuOpen 
            ? 'flex flex-col top-16 left-0 right-0 bg-white shadow-md py-4 px-4 z-50 space-y-4 md:space-y-0' 
            : 'hidden'
          }
          md:bg-transparent md:shadow-none md:p-0 md:flex-row md:space-x-8
        `}>
          <a href="#about" className="text-gray-800 hover:text-gray-600 transition">Sobre Mim</a>
          <a href="#skills" className="text-gray-800 hover:text-gray-600 transition">Competências</a>
          <a href="#experience" className="text-gray-800 hover:text-gray-600 transition">Experiência</a>
          <a href="#projects" className="text-gray-800 hover:text-gray-600 transition">Projetos</a>
          <a href="#education" className="text-gray-800 hover:text-gray-600 transition">Formação</a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600 transition">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;