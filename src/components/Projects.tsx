import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';

// Mapeamento de quantidade de imagens por projeto
const projectImagesCount: Record<string, number> = {
  '1': 12, // Projeto 1 tem 12 imagens
  '2': 1,  // Projeto 2 tem 1 imagem
  '3': 4,  // Placeholder para futuros projetos
  '4': 7 ,
  '5': 1,
  '6': 3,
  '7': 3,
};

// Função para importar todas as imagens dinamicamente
const getImageUrl = (projectId: string, imageIndex: number): string => {
  try {
    return new URL(`../images/projeto_${projectId}/${imageIndex + 1}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Erro ao carregar imagem: projeto_${projectId}/${imageIndex + 1}.png`, error);
    return '';
  }
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  // Estados para controlar o carrossel de imagens
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});
  
  // Estado para controlar o modal de imagem
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalProjectId, setModalProjectId] = useState<string>('');
  
  // Estado para controle de hover nas imagens
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  // Efeito para adicionar suporte a navegação pelo teclado no modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeImageModal();
          break;
        case 'ArrowRight':
          nextModalImage();
          break;
        case 'ArrowLeft':
          prevModalImage();
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, modalProjectId, currentImageIndex]);
  
  // Função para abrir o modal com a imagem em tamanho real
  const openImageModal = (projectId: string) => {
    const imagePath = getImageUrl(projectId, currentImageIndex[projectId] || 0);
    setModalImageSrc(imagePath);
    setModalProjectId(projectId);
    setModalOpen(true);
    // Impedir o scroll da página quando o modal estiver aberto
    document.body.style.overflow = 'hidden';
  };
  
  // Função para fechar o modal
  const closeImageModal = () => {
    setModalOpen(false);
    // Restaurar o scroll da página
    document.body.style.overflow = 'auto';
  };
  
  // Função para avançar para a próxima imagem no modal
  const nextModalImage = () => {
    if (!modalProjectId) return;
    
    const totalImages = projectImagesCount[modalProjectId] || 1;
    const newIndex = ((currentImageIndex[modalProjectId] || 0) + 1) % totalImages;
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [modalProjectId]: newIndex
    }));
    
    // Atualizar a imagem do modal
    setModalImageSrc(getImageUrl(modalProjectId, newIndex));
  };
  
  // Função para voltar para a imagem anterior no modal
  const prevModalImage = () => {
    if (!modalProjectId) return;
    
    const totalImages = projectImagesCount[modalProjectId] || 1;
    const newIndex = ((currentImageIndex[modalProjectId] || 0) - 1 + totalImages) % totalImages;
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [modalProjectId]: newIndex
    }));
    
    // Atualizar a imagem do modal
    setModalImageSrc(getImageUrl(modalProjectId, newIndex));
  };
  
  // Função para avançar para a próxima imagem
  const nextImage = (projectId: string) => {
    const totalImages = projectImagesCount[projectId] || 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };
  
  // Função para voltar para a imagem anterior
  const prevImage = (projectId: string) => {
    const totalImages = projectImagesCount[projectId] || 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };
  
  const toggleProject = (id: string) => {
    setActiveProject(activeProject === id ? null : id);
  };

  // Função para obter o caminho da imagem atual do projeto
  const getCurrentImagePath = (projectId: string) => {
    const index = currentImageIndex[projectId] || 0;
    return getImageUrl(projectId, index);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 relative">
            Seleção de Projetos
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#2c5a6e]"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const totalImages = projectImagesCount[project.id] || 1;
            return (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div 
                  className="relative aspect-video group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => openImageModal(project.id)}
                >
                  <img
                    src={getCurrentImagePath(project.id)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  
                  {/* Indicador de zoom ao passar o mouse */}
                  <div 
                    className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="bg-white/90 text-gray-800 p-2 rounded-full w-14 h-14 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Controles do carrossel (mostrar apenas se tiver mais de 1 imagem) */}
                  {totalImages > 1 && (
                    <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(project.id);
                        }}
                        className="bg-white/80 hover:bg-white p-2 rounded-full text-gray-800 hover:text-[#2c5a6e] transition-colors w-8 h-8 flex items-center justify-center z-10 pointer-events-auto"
                      >
                        &#8592;
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(project.id);
                        }}
                        className="bg-white/80 hover:bg-white p-2 rounded-full text-gray-800 hover:text-[#2c5a6e] transition-colors w-8 h-8 flex items-center justify-center z-10 pointer-events-auto"
                      >
                        &#8594;
                      </button>
                    </div>
                  )}
                  
                  {/* Indicadores do carrossel (mostrar apenas se tiver mais de 1 imagem) */}
                  {totalImages > 1 && (
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-10 pointer-events-none">
                      {Array.from({ length: totalImages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [project.id]: i
                            }));
                          }}
                          className={`h-1.5 rounded-full transition-all pointer-events-auto ${
                            (currentImageIndex[project.id] || 0) === i 
                              ? 'w-4 bg-[#2c5a6e]' 
                              : 'w-1.5 bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  
                  {/* Descrição com limite de 3 linhas quando não expandido */}
                  <div className="mb-4">
                    <p className={`text-gray-700 ${
                      activeProject !== project.id 
                        ? 'line-clamp-3' 
                        : ''
                    }`}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeProject === project.id ? 'max-h-96' : 'max-h-0'
                  }`}>
                    {project.impact && (
                      <p className="text-gray-700 mb-4">
                        <strong>Resultado/Impacto:</strong> {project.impact}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="text-[#2c5a6e] hover:text-[#1e3d4a] font-medium transition"
                    >
                      {activeProject === project.id ? 'Menos detalhes' : 'Mais detalhes'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal para exibir imagem em tamanho real */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="relative max-w-screen-xl max-h-screen w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              id="modal-title"
              src={modalImageSrc} 
              alt="Imagem ampliada" 
              className="max-w-full max-h-[90vh] object-contain mx-auto"
            />
            
            {/* Informações de navegação */}
            <div className="absolute top-4 left-4 text-white/80 bg-black/50 px-3 py-1 rounded text-sm">
              {modalProjectId && (
                <>
                  <span>{(currentImageIndex[modalProjectId] || 0) + 1}</span>
                  <span> / </span>
                  <span>{projectImagesCount[modalProjectId]}</span>
                </>
              )}
            </div>
            
            {/* Instruções de teclado */}
            <div className="absolute bottom-4 left-4 text-white/80 bg-black/50 px-3 py-1 rounded text-sm hidden md:block">
              <span className="mr-2">← → Navegar</span>
              <span className="mr-2">ESC Fechar</span>
            </div>
            
            {/* Botão para fechar o modal */}
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full text-gray-800 hover:text-red-600 transition-colors w-10 h-10 flex items-center justify-center text-xl font-bold"
              aria-label="Fechar modal"
            >
              &#10005;
            </button>
            
            {/* Controles de navegação do modal (mostrar apenas se o projeto tiver mais de 1 imagem) */}
            {modalProjectId && projectImagesCount[modalProjectId] > 1 && (
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevModalImage();
                  }}
                  className="bg-white/80 hover:bg-white p-3 rounded-full text-gray-800 hover:text-[#2c5a6e] transition-colors w-12 h-12 flex items-center justify-center text-2xl"
                  aria-label="Imagem anterior"
                >
                  &#8592;
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextModalImage();
                  }}
                  className="bg-white/80 hover:bg-white p-3 rounded-full text-gray-800 hover:text-[#2c5a6e] transition-colors w-12 h-12 flex items-center justify-center text-2xl"
                  aria-label="Próxima imagem"
                >
                  &#8594;
                </button>
              </div>
            )}
            
            {/* Indicadores de imagem no modal */}
            {modalProjectId && projectImagesCount[modalProjectId] > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {Array.from({ length: projectImagesCount[modalProjectId] }).map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => ({
                        ...prev,
                        [modalProjectId]: i
                      }));
                      setModalImageSrc(getImageUrl(modalProjectId, i));
                    }}
                    className={`h-2 rounded-full transition-all ${
                      (currentImageIndex[modalProjectId] || 0) === i 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/50'
                    }`}
                    aria-label={`Imagem ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;