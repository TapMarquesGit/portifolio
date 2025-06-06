import { Project, Experience, Education, Certification, Skill } from '../types';

export const skills: Skill[] = [
  { id: '1', name: 'Modelagem 3D Hard Surface & Paramétrica (Blender, 3ds Max)' },
  { id: '2', name: 'Desenvolvimento de Materiais PBR (Albedo, Normal, Roughness, Ambient Occlusion)' },
  { id: '3', name: 'Integração de plugins em SketchUp para V-Ray e Enscape' },
  { id: '4', name: 'Renderização Fotorrealista (V-Ray, Enscape)' },
  { id: '5', name: 'Detalhamento Técnico e Projetos Luminotécnicos' },
  { id: '6', name: 'Automação com Inteligência Artificial (scripts de modelagem, texturização e renderização)' },
  { id: '7', name: 'Realidade Aumentada e Otimização de Ativos Digitais' },
  { id: '8', name: 'Curadoria Visual e Gestão de Biblioteca Virtual' },
  { id: '9', name: 'Edição de Imagem (Photoshop, CorelDRAW)' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Collection Studio',
    position: 'Arquiteto → Planejamento | Análise de Dados | Gestão de Projetos',
    period: 'Nov/2022 - Abr/2025 (Tempo integral, Presencial)',
    responsibilities: [
      'Atuei como arquiteto coordenador na área de tecnologia aplicada à arquitetura, com foco na criação e padronização de blocos 3D e materiais PBR para plugin integrado ao SketchUp (compatível com V-Ray).',
      'Desenvolvimento de processos de análise de dados para otimizar fluxos de projeto e reduzir retrabalhos.',
      'Gestão de projetos multidisciplinares, alinhando equipes de modelagem, texturização e renderização a prazos e metas de performance.',
      'Utilização de Mapas Normal, Texturas Seamless e diversas ferramentas de automação para acelerar entregas e manter alta fidelidade visual.',
      'Exploração de recursos de planejamento estratégico para gerar relatórios de KPI e monitorar desempenho da equipe de visualização.'
    ]
  },
  {
    id: '2',
    company: 'Collection LTDA',
    position: 'Estagiário de arquitetura',
    period: 'Mar/2021 - Dez/2021 · 10 meses (Remoto)',
    responsibilities: [
      'Atuação no desenvolvimento de materiais digitais configurados para uso em V-Ray e Enscape, integrados via plugin no SketchUp',
      'Criação de texturas PBR com mapas de Basecolor, Roughness e Normal Map, aplicadas em superfícies realistas e otimizadas para renderização',
      'Coleta, processamento e aplicação de revestimentos reais fornecidos por indústrias de marcas nacionais (porcelanatos, pedras, tintas, entre outros)',
      'Organização e padronização de bibliotecas de materiais virtuais, garantindo fidelidade visual, compatibilidade técnica e uso prático por arquitetos e especificadores',
      'Suporte no aprimoramento da interface do plugin, sugerindo melhorias a partir da experiência prática de aplicação dos materiais no SketchUp',
      'Colaboração com equipe de tecnologia e design para alinhar qualidade visual com desempenho de render em tempo real.'
    ]
  },
  {
    id: '3',
    company: 'Concretta Arquitetura',
    position: 'Estagiário de arquitetura',
    period: 'Fev/2021 - Mar/2021 · 2 meses (Presencial)',
    responsibilities: [
      'Desenvolvimento de detalhamentos técnicos em planta baixa, cortes, elevações e mobiliário sob medida',
      'Elaboração de pranchas executivas com precisão técnica e organização gráfica',
      'Apoio na criação de projetos luminotécnicos, incluindo estudo de posicionamento de luminárias e distribuição de iluminação artificial',
      'Aplicação de critérios de conforto visual, eficiência energética e estética na definição de soluções de iluminação',
      'Uso de softwares de CAD e modelagem para produção de documentação técnica e representação de projeto',
      'Suporte na compatibilização de informações entre disciplinas (arquitetura, elétrica, mobiliário)',
      'Interpretação de normas técnicas e aplicação prática em desenhos e especificações.'
    ]
  },
  {
    id: '4',
    company: 'Formatto Arquitetura',
    position: 'Estagiário de Arquitetura',
    period: 'Out/2019 - Fev/2021 · 1 ano e 5 meses (Presencial)',
    responsibilities: [
      'Apoio na elaboração de projetos arquitetônicos: estudos preliminares, detalhamentos executivos, plantas, cortes e fachadas utilizando AutoCAD e SketchUp.',
      'Produção de maquetes 3D e imagens renderizadas para apresentações de clientes e materiais de marketing interno.',
      'Levantamentos técnicos em visitas a obras, coleta de informações e conferência de medições em campo.',
      'Compatibilização de projetos complementares (estrutural, elétrico, hidrossanitário) para garantir conformidade entre disciplinas.',
      'Pesquisa e seleção de materiais, normas técnicas e referências arquitetônicas para embasar soluções projetuais.',
      'Organização de documentos técnicos (memórias descritivas, planilhas orçamentárias e cronogramas).',
      'Participação em reuniões de equipe, colaborando na comunicação com fornecedores e clientes para validar decisões de projeto.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Criação de Biblioteca de Blocos 3D para Plugin SketchUp',
    imageUrl: '',
    description: 'Desenvolvimento de uma coleção organizada de blocos 3D (categorias: Móveis e Estofados; Iluminação; Louças e Metais; Decoração; Almofadas; Tapetes; Vasos; Tomadas e Interruptores; Plantas e Vegetação) para plugin integrado ao SketchUp, facilitando a inserção rápida de ativos fotorrealistas em projetos arquitetônicos.',
    technologies: ['Blender', 'SketchUp', 'V-Ray', 'Enscape', 'Materiais PBR', 'Scripts de automação', '3DS Max'],
    impact: 'Padronizou mais de 3000 blocos 3D e mais de 15000 materiais PBR em categorias específicas, assegurando consistência visual e técnica. Reduziu em 75% o tempo médio de inserção de ativos em maquetes e projetos de clientes. Facilitou a escolha de componentes pelos arquitetos, aumentando a produtividade e a fidelidade estética nos processos de apresentação',
    link: '#'
  },
  {
    id: '2',
    title: 'Renderização Fotorrealista de Casa de Veraneio',
    imageUrl: '',
    description: 'Projeto de concepção estética. Este projeto representa uma casa de veraneio pensada para ser inserida à beira da praia, atendendo ao pedido do cliente de evocar a atmosfera de residências litorâneas internacionais. Inspirada em construções mediterrâneas e tropicais, a arquitetura reforça a sensação de leveza e descontração, com fachadas abertas, revestimentos claros e elementos naturais como madeira e palha no beiral do telhado. A vegetação exuberante e as varandas amplas buscam criar uma interface direta com o mar e a brisa costeira, valorizando o contato com o exterior. O cliente solicitou esse estilo para posicionar o imóvel como uma opção diferenciada de promoção e lazer à beira-mar, unindo sofisticação e conforto em um contexto de férias.',
    technologies: ['SketchUp', 'Lumion', 'Photoshop'],
    impact: '',
    link: '#'
  },
  {
    id: '3',
    title: 'Projeto de TCC, trabalho de conclusão de curso',
    imageUrl: '',
    description: 'Espaço de coworking para arquitetos em Maringá, voltado à integração de especialidades em um ambiente colaborativo, tecnológico e sustentável. A volumetria em tijolos aparentes e envidraçados valoriza a iluminação natural, ligando fachada contemporânea à área externa com café e lounge à beira do pátio. Internamente, mesas compartilhadas, salas multifuncionais e estufa verde promovem trabalho dinâmico e contato com a natureza, refletindo as demandas pós-pandemia. Áreas de convivência e jardim interno reforçam a mobilidade urbana e o consumo consciente, oferecendo bem-estar aos usuários. O design alia estrutura metálica e vegetação, criando um ambiente inovador que resgata novas formas de viver e trabalhar na cidade.',
    technologies: ['SketchUp', 'Lumion', 'Photoshop'],
    impact: '',
    link: '#'
  },
  {
    id: '4',
    title: 'Projeto de Paisagismo Casa de Campo',
    imageUrl: '',
    description: 'Projeto de paisagismo para uma casa de campo que integra diferentes ambientes ao ar livre, como área de lazer com piscina, pergolado gourmet e lounge sob pérgolas de madeira, além de um caminho de pedra que conecta os espaços de convivência. Foram adicionadas diversas espécies vegetais — palmeiras, arbustos floridos, trepadeiras e gramíneas ornamentais — estrategicamente dispostas para criar câmaras de vegetação densas e tornar o jardim mais dinâmico. A decoração, pensada com elementos geométricos e móveis de linhas retas, remete a uma estética digital, conferindo um toque contemporâneo e tecnológico ao ambiente campestre. Ao final, a combinação de texturas naturais e peças com design “computado” enfatiza a ideia de uma casa que mescla o rústico com referências a um universo digital.',
    technologies: ['SketchUp', 'Lumion', 'Photoshop', 'AutoCad'],
    impact: '',
    link: '#'
  },
  {
    id: '5',
    title: 'Projeto de Parede Vertical Ornamentada com plantas',
    imageUrl: '',
    description: 'Projeto de parede verde vertical com perfil único, combinando estrutura em ripado de madeira e plantio de folhagens ornamentais de diferentes texturas e tonalidades. As plantas suspensas criam um efeito de cascata natural, conferindo um toque de frescor e aconchego ao ambiente interno. O jogo de iluminação embutida valoriza cada camada vegetal, transformando a composição em ponto focal de destaque. A integração harmoniosa entre o revestimento de madeira e a vegetação promove sensação de bem-estar, reforçando a conexão com a natureza mesmo em espaços fechados.',
    technologies: ['SketchUp', 'Lumion', 'Photoshop'],
    impact: '',
    link: '#'
  },
  {
    id: '6',
    title: 'Reforma Área Gourmet',
    imageUrl: '',
    description: 'Espaço gourmet reformado com proposta contemporânea e aconchegante, integrando cozinha e sala de jantar em um layout fluido. A bancada em granito preto, com revestimento texturizado nas laterais, contrasta com o painel de tijolinhos escuros ao fundo, realçando a churrasqueira embutida. Iluminação pendente e trilhos de LED destacam detalhes em madeira natural e ferro, enquanto a parede amarela cria ponto de cor vibrante. Prateleiras rústicas suspensas em madeira de demolição e banquetas de assento claro reforçam o clima acolhedor, perfeito para convivência e celebrações.',
    technologies: ['SketchUp', 'Lumion', 'Photoshop'],
    impact: '',
    link: '#'
  },
  {
    id: '7',
    title: 'Reforma Radio e TV do estúdio Taroba',
    imageUrl: '',
    description: 'Reforma interna e externa da Rede Tarobá (TV e Rádio) em Londrina e Cascavel, Paraná, que unificou identidade visual e funcionalidade em ambientes modernos e acolhedores. Na fachada, uma marquise em vidro e estrutura metálica preta realça letreiros retroiluminados (TV Tarobá e Tarobá FM 95.7), ladeados por um painel em ripado de madeira colorido com LED RGB, criando forte presença urbana. O revestimento externo combina painéis cimentícios texturizados e vegetação local, aliando sofisticação e durabilidade. No interior, a recepção recebeu balcão angulado em MDF ripado com tampo de quartzo branco, em contraste com paredes de mármore e cimento queimado, onde logos iluminados reforçam a marca. O estúdio de rádio/TV ganhou mesa em “V” com frente em LED que simula espectro de áudio e fundo acústico em madeira 3D, garantindo qualidade sonora e atmosfera dinâmica. Divisórias de vidro com esquadrias pretas isolam acusticamente sem perder amplitude, integrando a sala de produção adjacente, que dispõe de mesas contínuas, painéis de tijolo branco aparente e prateleiras flutuantes em madeira e metal. O conjunto da reforma enfatiza materiais nobres (madeira, vidro e metal), iluminação cênica com LEDs embutidos e mobiliário ergonômico, assegurando ambientes funcionais para transmissão e atendimento, refletindo a modernização da emissora e o fortalecimento da sua presença em ambas as cidades.',
    technologies: ['SketchUp', 'Lumion', 'Photoshop'],
    impact: '',
    link: '#'
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Centro Universitário – FEITEP',
    institution: 'Bacharelado em Arquitetura e Urbanismo',
    year: ' Fev/2017 – Dez/2021',
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Gerenciamento de Empresas',
    institution: 'CREA-PR',
    year: 'Outubro/2018'
  },
  {
    id: '2',
    title: 'Oratória: Apresentações do Cotidiano',
    institution: 'CREA-PR',
    year: 'Outubro/2018'
  },
  {
    id: '3',
    title: 'Engenharia 4.0',
    institution: 'Universidade Estadual de Maringá',
    year: 'Setembro/2018'
  },
  {
    id: '4',
    title: 'Programa CAPAZ',
    institution: 'Vivo (Telefônica Brasil)',
    year: 'Maio/2018'
  },
  {
    id: '5',
    title: 'Jornada da Inteligência Artificial',
    institution: 'Hashtag Treinamentos',
    year: 'Emitido em Mar/2025'
  },
];

export const contactInfo = {
  email: 'vinicius.formatto@gmail.com',
  linkedin: 'linkedin.com/in/viniciusmarquesdelima',
  // behance: 'behance.net/viniciusmarques',
  phone: '(+55) 44 99874 - 6983'
};