import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 relative">
            Sobre Mim
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#2c5a6e]"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-gray-700 space-y-6 leading-relaxed"
        >
          <p>
            Sou Arquiteto com sólida atuação na interseção entre tecnologia, visualização 
            arquitetônica e desenvolvimento de soluções digitais para o setor. Minha formação 
            une os fundamentos do design arquitetônico à inovação em fluxos de trabalho digitais, 
            permitindo-me entregar projetos de alta qualidade e eficiência desde a concepção até 
            a apresentação final.
          </p>
          
          <p>
            Possuo ampla experiência em Modelagem 3D (hard surface e paramétrica) e no 
            desenvolvimento de Materiais PBR para plugins integrados ao SketchUp, garantindo 
            total compatibilidade com motores de renderização como V-Ray e Enscape. Com foco 
            em realismo e performance, elaboro texturas, mapas Normal, mapas Roughness e mapas 
            Ambient Occlusion que atendem tanto às exigências estéticas quanto às necessidades 
            técnicas de projetos residenciais e comerciais.
          </p>
          
          <p>
            Na minha trajetória profissional, liderei a produção de ativos tridimensionais e 
            texturas digitais em empresa de tecnologia aplicada à arquitetura. Coordenei a 
            equipe de catálogo 3D, supervisei o processo de digitalização de materiais e conduzi 
            a curadoria visual da biblioteca virtual. Desde a modelagem Hard Surface no Blender 
            até a renderização fotorrealista, alinhei cada etapa com marcas parceiras para 
            assegurar fidelidade máxima aos produtos reais.
          </p>
          
          <p>
            Tenho domínio avançado de ferramentas como Blender, SketchUp, V-Ray, Enscape, 
            Photoshop, CorelDRAW e 3ds Max, além de aplicar Inteligência Artificial para 
            automação de fluxos de modelagem, texturização e geração de imagens. Minhas 
            competências incluem detalhamento técnico, projetos luminotécnicos, realidade 
            aumentada e otimização de materiais digitais para diferentes plataformas de 
            visualização.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;