import type { Translations } from '../types';

export const pt: Translations = {
  nav: {
    about: 'Sobre',
    skills: 'Competências',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contacto',
  },
  header: {
    available: 'Disponível para contratos remotos',
    title: 'Desenvolvedor de apps móveis | Desenvolvedor Flutter Sénior',
    tagline:
      'Entrega de apps Flutter em produção de ponta a ponta — Clean Architecture, sistemas offline-first e lançamentos prontos para as lojas para equipas no Reino Unido, UE e Médio Oriente.',
    downloadCv: 'Descarregar CV',
    viewProjects: 'Ver projetos',
    location: 'Dir, Khyber Pakhtunkhwa, Paquistão',
    badge: '5+ anos · Flutter · Remoto',
  },
  about: {
    title: 'Resumo profissional',
    subtitle:
      'Entrega Flutter focada em produção, com ownership de arquitetura e experiência de lançamento nas lojas.',
    summary:
      'Desenvolvedor Flutter Sénior com 5 anos de experiência a entregar e manter apps móveis em produção para clientes internacionais. Sólido historial com Clean Architecture, Bloc/Cubit, Provider e Riverpod, juntamente com serviços Firebase incluindo Auth, Firestore, Cloud Functions, Analytics, Crashlytics e notificações push. Experiente na construção de sistemas offline-first com SQLite, Floor, Hive e ObjectBox, e na integração de APIs REST, GraphQL e WebSocket para funcionalidades em tempo real baseadas em dados. Experiência a assumir apps de ponta a ponta — desde arquitetura, injeção de dependências e tuning de performance até armazenamento seguro, IAP, CI/CD (GitHub Actions, Codemagic, Fastlane) e lançamentos na Play Store / App Store. À vontade a traduzir designs Figma e Adobe XD em UI pixel-perfect, a escrever testes unitários/widget/integração e a colaborar remotamente com equipas Agile no Reino Unido, UE e Médio Oriente. Também com experiência prática em ferramentas de desenvolvimento assistidas por IA como Cursor, Codex e Claude para acelerar a entrega mantendo elevada qualidade de código.',
    years: 'Anos de experiência',
    apps: 'Apps entregues',
    clients: 'Clientes remotos',
  },
  skills: {
    title: 'Pontos fortes e expertise',
    subtitle:
      'De Clean Architecture e armazenamento offline-first a CI/CD e publicação nas lojas.',
    skillsCount: '{n} competências',
    categories: {
      'Flutter & Dart': 'Flutter & Dart',
      'State Management': 'Gestão de estado',
      'Offline-First & Performance': 'Offline-First e performance',
      'APIs & Backend': 'APIs e backend',
      'AI & Developer Tools': 'IA e ferramentas de desenvolvimento',
      'Quality & Delivery': 'Qualidade e entrega',
      'Security & Stores': 'Segurança e lojas',
      'UI & Collaboration': 'UI e colaboração',
      Platforms: 'Plataformas',
    },
  },
  experience: {
    title: 'Experiência profissional',
    subtitle:
      'Funções remotas e presenciais a entregar produtos Flutter estáveis e escaláveis.',
    jobs: [
      {
        role: 'Desenvolvedor Flutter (Contrato e remoto)',
        company: 'ShiftOpus | Reino Unido (Remoto)',
        period: 'Dez 2025 – Abr 2026',
        description: [
          'Manutenção e melhoria de apps Flutter já publicadas, com foco em estabilidade, fiabilidade e uma experiência de utilizador fluida em produção.',
          'Diagnóstico e resolução de problemas de produção, redução de crashes e entrega de correções direcionadas com base em relatos de utilizadores e insights de monitorização.',
          'Melhoria da performance da app através de profiling, otimização de widgets e estratégias de cache mais inteligentes.',
          'Reforço das capacidades offline-first para que as funcionalidades principais permaneçam utilizáveis com conectividade fraca ou intermitente.',
        ],
      },
      {
        role: 'Desenvolvedor Flutter Sénior',
        company: 'CloudLaunch | Reino Unido (Remoto)',
        period: 'Jan 2023 – Out 2025',
        description: [
          'Conceção e desenvolvimento de aplicações móveis multiplataforma escaláveis com Flutter, gestão de estado Bloc/Cubit e Clean Architecture.',
          'Integração de APIs REST, GraphQL e serviços Firebase para entregar funcionalidades em tempo real baseadas em dados, com segurança sólida e UI/UX consistente.',
          'Colaboração com equipas Agile/Scrum globais em planeamento de sprints, discussões técnicas, code reviews e resolução de problemas de produção.',
        ],
      },
      {
        role: 'Desenvolvedor Flutter Sénior',
        company: 'Bridge Softwares | Tallinn (Remoto a tempo parcial)',
        period: 'Ago 2024 – Set 2025',
        description: [
          'Construção e iteração de vários projetos Flutter multiplataforma com Provider e Riverpod para arquiteturas limpas, reativas e manuteníveis.',
          'Integração de Firebase (Auth, Firestore, Cloud Functions, Analytics, Push Notifications) para aplicações seguras, em tempo real e baseadas em dados.',
          'Implementação de funcionalidades alimentadas por IA para potenciar as capacidades do produto e a experiência do utilizador.',
        ],
      },
      {
        role: 'Desenvolvedor Flutter Sénior',
        company: 'JMM Technologies LTD | Peshawar',
        period: 'Jun 2021 – Nov 2022',
        description: [
          'Liderança de uma equipa de desenvolvedores Flutter na estratégia de implementação, padrões de código e objetivos de sprint para entrega atempada e de alta qualidade.',
          'Desenvolvimento de apps móveis de nível empresarial com Google Maps, Firebase e APIs de terceiros, incluindo UI responsiva e suporte offline-first.',
          'Code reviews, mentoring e documentação técnica para manter princípios OOP, SOLID e manutenibilidade a longo prazo.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projetos e historial',
    subtitle:
      'Apps de produção selecionadas em POS, saúde, aprendizagem, finanças e logística — agrupadas por empresa.',
    all: 'Todos',
    showMore: 'Ver mais',
    showLess: 'Ver menos',
    playStore: 'Play Store',
    appStore: 'App Store',
    clientInternal: 'Projeto de cliente / interno',
    locallyDistributed: 'Distribuição local',
    availableStores: 'Disponível na Play Store e App Store',
    companies: {
      CloudLaunch: 'CloudLaunch',
      'Bridge Softwares': 'Bridge Softwares',
      'JMM Technologies': 'JMM Technologies',
      'Outsourcing Projects': 'Projetos de outsourcing',
    },
    descriptions: {
      FabPOS:
        'FabPOS é uma plataforma moderna de ponto de venda criada para simplificar as operações diárias de retalhistas e equipas em crescimento. Cobre o processamento de vendas, gestão de compras e controlo de inventário numa experiência móvel coesa. A app ajuda as empresas a acompanhar níveis de stock, gerir catálogos de produtos e manter registos de vendas precisos e acessíveis. Desenhada para fiabilidade em ambientes de produção, apoia fluxos de checkout mais fluidos e maior visibilidade operacional entre lojas.',
      FabMedic:
        'FabMedic é uma app companheira de saúde que ajuda os pacientes a gerir informação médica pessoal e familiar num único local seguro. Os utilizadores podem rever resultados de exames, medicamentos, historial de vacinação, resumos de visitas e notas clínicas partilhadas pelos prestadores de cuidados. A app também apoia agendamento de consultas, comunicação com a equipa de cuidados e partilha segura de registos médicos quando necessário. Foi desenhada para tornar a informação de saúde mais fácil de aceder, organizar e acompanhar — para indivíduos e famílias.',
      'MRL Admin':
        'MRL Admin é a consola de operações de uma plataforma de financiamento de veículos, construída para administradores que gerem fluxos de empréstimo de ponta a ponta. Apoia revisão de candidaturas, onboarding de clientes, acompanhamento de pagamentos e analytics de performance num dashboard estruturado. A app ajuda as equipas a monitorizar a saúde do portefólio, resolver problemas operacionais rapidamente e manter processos de financiamento consistentes. Foi desenhada para uso em produção com foco em clareza, controlo e administração diária fiável.',
      'MRL Finance – Customer':
        'MRL Finance – Customer é o companheiro virado ao cliente da suite de financiamento MRL. Os clientes podem ver detalhes do veículo, consultar o historial de pagamentos e concluir pagamentos através de canais integrados como M-PESA. A app foca uma experiência clara e mobile-first para que os utilizadores se mantenham informados sobre o seu estado de financiamento sem contactar o suporte para atualizações de rotina. Complementa a plataforma admin ao dar aos clientes acesso self-service à informação e ações de que mais precisam.',
      'Fly-ME':
        'Fly-ME é uma aplicação de reserva de bilhetes de avião que simplifica a pesquisa, reserva e pagamento para viajantes. Os utilizadores podem explorar opções de voo, verificar disponibilidade em tempo real e concluir reservas através de um fluxo de checkout seguro. O produto enfatiza uma jornada de reserva limpa — desde descobrir rotas até confirmar reservas — com foco em usabilidade e fiabilidade. Foi construído para uma experiência de viagem moderna em que velocidade, clareza e confiança importam em cada passo.',
      'FastDrop – eCommerce Shopping':
        'FastDrop é uma app de e-commerce transfronteiriço que reúne lojas internacionais como Shein, Amazon, AliExpress, Temu e Alibaba numa única plataforma conveniente. Os compradores podem navegar catálogos, gerir carrinhos, acompanhar encomendas em tempo real e concluir o checkout com opções de pagamento seguras. A app gere logística internacional e entrega de última milha para que os clientes possam comprar globalmente sem saltar entre várias lojas. Foi construída para uma experiência de compra fluida — da descoberta e checkout até às atualizações de entrega.',
      'Islam Simplified: Learn & Grow':
        'Islam Simplified: Learn & Grow é uma app educativa de aprendizagem concebida para qualquer pessoa curiosa sobre o Islão, incluindo iniciantes e não muçulmanos a explorar a fé. Oferece artigos bem estruturados, vídeos educativos, uma experiência completa de tradução do Alcorão, uma secção de FAQ e um glossário de termos islâmicos-chave. Os aprendizes podem seguir o conteúdo ao seu ritmo, guardar favoritos e receber recomendações personalizadas com base nos interesses. A app reúne recursos essenciais de aprendizagem numa interface clara e moderna que torna a compreensão do Islão mais acessível.',
      'Path to Arabic: Learn Arabic':
        'Path to Arabic é uma plataforma estruturada de aprendizagem de árabe que ajuda os utilizadores a desenvolver competências linguísticas para comunicação quotidiana e compreensão corânica. Combina lições guiadas, tutoriais em vídeo, prática gamificada, quizzes e acompanhamento de progresso num percurso de aprendizagem progressivo. A app cobre fundamentos do árabe padrão moderno e ferramentas práticas de engagement que tornam a retenção mais motivadora. Com sincronização de progresso entre dispositivos e um currículo claro, oferece uma experiência móvel completa para iniciantes e estudantes avançados.',
      'Miswarak Consumer App':
        'Miswarak Consumer é uma app móvel focada em entregas que ajuda os clientes a fazer encomendas, gerir entregas e acompanhar o progresso com maior confiança. Simplifica a jornada do consumidor em torno da criação de encomendas, visibilidade de estado e tracking de entrega para que os utilizadores saibam sempre onde as coisas estão. A experiência é desenhada em torno de fiabilidade e clareza — reduzindo o atrito entre navegar, encomendar e receber. Apoia uma experiência de cliente mais fluida para workflows de entrega on-demand em produção.',
      'Find My Filmmaker':
        'Find My Filmmaker liga clientes a cineastas em todo o mundo — realizadores, editores, operadores de câmara e mais. Cineastas mostram portefólios e são descobertos; clientes exploram talento verificado, filtram por localização e função, e colaboram via mensagens em tempo real. Alterne entre modos cineasta e cliente numa única conta.',
      'Luna Little Bedtime Stories':
        'Luna Little Bedtime Stories é uma app de histórias amigável para crianças, criada para tornar a leitura noturna calma, envolvente e fácil para as famílias. Oferece contos narrados para a hora de dormir numa experiência suave e adequada à idade que ajuda as crianças a relaxar antes de dormir. O design prioriza simplicidade, calor e momentos de narrativa encantadores para ouvintes jovens. Feita para crianças e pais, transforma a hora de dormir numa rotina partilhada mais consistente e agradável.',
      'Home Interior Exterior Design':
        'Home Design AI transforma interiores, exteriores, cozinhas e jardins com ferramentas de design com IA. Escolha entre 70+ estilos e 30+ tipos de divisões, planifique layouts, converta esboços em renders e guarde ou partilhe designs — para proprietários, designers e entusiastas DIY.',
      Plodyo:
        'Plodyo é um app de storytelling com IA para crianças que ajuda pais, educadores e organizações a criar histórias personalizadas com texto, ilustrações, audiolivros e vídeo em vários idiomas. Feito com Flutter e Supabase, inclui cadastro por papéis (pai / educador / organização), geração de histórias e vídeos, biblioteca, assinaturas e notificações push para tarefas longas de conteúdo.',
      Invogen:
        'Invogen é uma solução de faturação criada para pequenas empresas e organizações maiores que precisam de uma forma mais clara de criar e gerir faturas. Ajuda as equipas a gerar faturas profissionais, manter registos de faturação organizados e reduzir o follow-up manual em torno de pagamentos. O produto foca workflows de negócio práticos — tornando a faturação mais rápida, clara e fácil de manter à medida que o volume cresce. Foi desenhado para apoiar freelancers do dia a dia e operações empresariais estruturadas.',
      Hijria:
        'Hijria é uma app de estilo de vida islâmico que reúne ferramentas de fé do quotidiano numa experiência móvel cuidada. As funcionalidades principais incluem um localizador de Qibla, notificações de Azaan, um Tasbeeh digital, suporte de calendário Hijri e lembretes de eventos. A app foi desenhada para ajudar os utilizadores a manter a consistência na oração e rotinas espirituais, mantendo a interface simples e acessível. Combina utilidade prática com uma experiência de utilizador calma e orientada a propósito para a prática islâmica diária.',
      DirtX:
        'DirtX é uma aplicação de gestão de construção criada para melhorar a coordenação entre projetos, equipas e operações no local. Apoia gestão de tarefas, tracking de projetos e comunicação para que as partes interessadas se mantenham alinhadas à medida que o trabalho avança. A app ajuda a reduzir a confusão operacional ao centralizar tickets, atualizações e visibilidade de progresso num só lugar. Desenhada para workflows de construção reais, foca usabilidade prática para equipas de escritório e de campo.',
      'FlowCash Pro':
        'FlowCash Pro é uma aplicação financeira em Flutter que ajuda agências a gerir cash flow, bancos, staff e transações com Firebase Auth e Firestore. Inclui acesso baseado em roles para administradores e staff, com dashboards por agência que mantêm os dados de cada organização claramente separados. As equipas podem gerir transferências bancárias, alocar crédito ao staff e monitorizar saldos em tempo real para um controlo financeiro diário mais sólido. O produto foi construído para clareza operacional — dando às agências um sistema fiável para acompanhar o movimento de dinheiro e a responsabilização na força de trabalho.',
    },
  },
  education: {
    title: 'Educação e idiomas',
    education: 'Educação',
    languages: 'Idiomas',
    degree: 'Licenciatura em Engenharia de Software',
    university: 'COMSATS University, Abbottabad, Paquistão',
    spoken: [
      { name: 'Inglês', proficiency: 'Conversação' },
      { name: 'Urdu', proficiency: 'Fluente' },
    ],
  },
  contact: {
    title: 'Entrar em contacto',
    heading: 'Vamos construir algo sólido',
    body: 'Aberto a contratos Flutter remotos e funções a tempo inteiro. Com gosto discuto arquitetura, correções de produção ou o lançamento da sua próxima release.',
    emailMe: 'Enviar email',
    whatsapp: 'WhatsApp',
    downloadCv: 'Descarregar CV',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  },
  language: 'Idioma',
};
