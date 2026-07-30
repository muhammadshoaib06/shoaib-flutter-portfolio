import type { Translations } from '../types';

export const es: Translations = {
  nav: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  header: {
    available: 'Disponible para contratos remotos',
    title: 'Desarrollador Flutter Senior',
    tagline:
      'Entrega de apps Flutter en producción de extremo a extremo — Clean Architecture, sistemas offline-first y lanzamientos listos para las tiendas para equipos en el Reino Unido, la UE y Oriente Medio.',
    downloadCv: 'Descargar CV',
    viewProjects: 'Ver proyectos',
    location: 'Dir, Khyber Pakhtunkhwa, Pakistán',
    badge: '5+ años · Flutter · Remoto',
  },
  about: {
    title: 'Resumen profesional',
    subtitle:
      'Entrega Flutter orientada a producción, con ownership de arquitectura y experiencia en publicaciones en tiendas.',
    summary:
      'Desarrollador Flutter Senior con 5 años de experiencia enviando y manteniendo apps móviles en producción para clientes internacionales. Sólida trayectoria con Clean Architecture, Bloc/Cubit, Provider y Riverpod, junto con servicios de Firebase como Auth, Firestore, Cloud Functions, Analytics, Crashlytics y notificaciones push. Hábil en la creación de sistemas offline-first con SQLite, Floor, Hive y ObjectBox, e integración de APIs REST, GraphQL y WebSocket para funciones en tiempo real basadas en datos. Experiencia liderando apps de extremo a extremo — desde arquitectura, inyección de dependencias y tuning de rendimiento hasta almacenamiento seguro, IAP, CI/CD (GitHub Actions, Codemagic, Fastlane) y lanzamientos en Play Store / App Store. Cómodo traduciendo diseños de Figma y Adobe XD a UI pixel-perfect, escribiendo tests unitarios/widget/integración y colaborando de forma remota con equipos Agile en el Reino Unido, la UE y Oriente Medio. También con experiencia práctica en herramientas de desarrollo asistidas por IA como Cursor, Codex y Claude para acelerar la entrega sin perder calidad de código.',
    years: 'Años de experiencia',
    apps: 'Apps publicadas',
    clients: 'Clientes remotos',
  },
  skills: {
    title: 'Fortalezas y expertise',
    subtitle:
      'Desde Clean Architecture y almacenamiento offline-first hasta CI/CD y publicación en tiendas.',
    skillsCount: '{n} habilidades',
    categories: {
      'Flutter & Dart': 'Flutter & Dart',
      'State Management': 'Gestión de estado',
      'Offline-First & Performance': 'Offline-First y rendimiento',
      'APIs & Backend': 'APIs y backend',
      'AI & Developer Tools': 'IA y herramientas de desarrollo',
      'Quality & Delivery': 'Calidad y entrega',
      'Security & Stores': 'Seguridad y tiendas',
      'UI & Collaboration': 'UI y colaboración',
      Platforms: 'Plataformas',
    },
  },
  experience: {
    title: 'Experiencia profesional',
    subtitle:
      'Roles remotos y presencial entregando productos Flutter estables y escalables.',
    jobs: [
      {
        role: 'Desarrollador Flutter (Contrato y remoto)',
        company: 'ShiftOpus | Reino Unido (Remoto)',
        period: 'Dic 2025 – Abr 2026',
        description: [
          'Mantenimiento y mejora de apps Flutter ya publicadas, enfocándome en estabilidad, fiabilidad y una experiencia de usuario fluida en producción.',
          'Diagnóstico y resolución de problemas de producción, reducción de crashes y entrega de correcciones específicas basadas en reportes de usuarios e insights de monitoreo.',
          'Mejora del rendimiento de la app mediante profiling, optimización de widgets y estrategias de caché más inteligentes.',
          'Refuerzo de las capacidades offline-first para que las funciones principales sigan siendo usables con conectividad pobre o intermitente.',
        ],
      },
      {
        role: 'Desarrollador Flutter Senior',
        company: 'CloudLaunch | Reino Unido (Remoto)',
        period: 'Ene 2023 – Oct 2025',
        description: [
          'Diseño y desarrollo de aplicaciones móviles multiplataforma escalables con Flutter, gestión de estado Bloc/Cubit y Clean Architecture.',
          'Integración de APIs REST, GraphQL y servicios Firebase para entregar funciones en tiempo real basadas en datos, con seguridad sólida y UI/UX consistente.',
          'Colaboración con equipos Agile/Scrum globales en planificación de sprints, discusiones técnicas, code reviews y resolución de incidencias en producción.',
        ],
      },
      {
        role: 'Desarrollador Flutter Senior',
        company: 'Bridge Softwares | Tallin (Remoto a tiempo parcial)',
        period: 'Ago 2024 – Sep 2025',
        description: [
          'Construcción e iteración de múltiples proyectos Flutter multiplataforma usando Provider y Riverpod para arquitecturas limpias, reactivas y mantenibles.',
          'Integración de Firebase (Auth, Firestore, Cloud Functions, Analytics, Push Notifications) para aplicaciones seguras, en tiempo real y basadas en datos.',
          'Implementación de funciones impulsadas por IA para potenciar las capacidades del producto y la experiencia de usuario.',
        ],
      },
      {
        role: 'Desarrollador Flutter Senior',
        company: 'JMM Technologies LTD | Peshawar',
        period: 'Jun 2021 – Nov 2022',
        description: [
          'Liderazgo de un equipo de desarrolladores Flutter en estrategia de implementación, estándares de código y objetivos de sprint para una entrega puntual y de alta calidad.',
          'Desarrollo de apps móviles de nivel empresarial con Google Maps, Firebase y APIs de terceros, incluyendo UI responsive y soporte offline-first.',
          'Code reviews, mentoring y documentación técnica para mantener principios OOP, SOLID y mantenibilidad a largo plazo.',
        ],
      },
    ],
  },
  projects: {
    title: 'Proyectos e historial',
    subtitle:
      'Apps de producción seleccionadas en POS, salud, aprendizaje, finanzas y logística — agrupadas por empresa.',
    all: 'Todos',
    showMore: 'Ver más',
    showLess: 'Ver menos',
    playStore: 'Play Store',
    appStore: 'App Store',
    clientInternal: 'Proyecto de cliente / interno',
    locallyDistributed: 'Distribución local',
    availableStores: 'Disponible en Play Store y App Store',
    companies: {
      CloudLaunch: 'CloudLaunch',
      'JMM Technologies': 'JMM Technologies',
      'Outsourcing Projects': 'Proyectos de outsourcing',
    },
    descriptions: {
      FabPOS:
        'FabPOS es una plataforma moderna de punto de venta creada para agilizar las operaciones diarias de minoristas y equipos en crecimiento. Cubre el procesamiento de ventas, la gestión de compras y el control de inventario en una experiencia móvil cohesionada. La app ayuda a las empresas a rastrear niveles de stock, gestionar catálogos de productos y mantener registros de ventas precisos y accesibles. Diseñada para la fiabilidad en entornos de producción, favorece flujos de checkout más fluidos y una mayor visibilidad operativa entre tiendas.',
      FabMedic:
        'FabMedic es una app compañera de salud que ayuda a los pacientes a gestionar información médica personal y familiar en un solo lugar seguro. Los usuarios pueden revisar resultados de pruebas, medicamentos, historial de vacunación, resúmenes de visitas y notas clínicas compartidas por los proveedores de cuidado. También admite programación de citas, comunicación con el equipo de atención y el intercambio seguro de historiales médicos cuando sea necesario. Está diseñada para hacer la información de salud más fácil de acceder, organizar y seguir — tanto para individuos como para familias.',
      'MRL Admin':
        'MRL Admin es la consola de operaciones de una plataforma de financiamiento de vehículos, pensada para administradores que gestionan flujos de préstamos de extremo a extremo. Admite revisión de solicitudes, onboarding de clientes, seguimiento de pagos y analítica de rendimiento en un dashboard estructurado. La app ayuda a los equipos a monitorear la salud de la cartera, resolver problemas operativos con rapidez y mantener procesos de financiamiento consistentes. Fue diseñada para uso en producción con foco en claridad, control y administración diaria fiable.',
      'MRL Finance – Customer':
        'MRL Finance – Customer es el compañero orientado al cliente de la suite de financiamiento MRL. Los clientes pueden ver detalles del vehículo, consultar el historial de pagos y completar pagos a través de canales integrados como M-PESA. La app se centra en una experiencia clara y mobile-first para que los usuarios se mantengan informados sobre su estado de financiamiento sin contactar soporte para actualizaciones rutinarias. Complementa la plataforma admin ofreciendo acceso de autoservicio a la información y acciones que más necesitan.',
      'Fly-ME':
        'Fly-ME es una aplicación de reserva de billetes de avión que simplifica la búsqueda, la reserva y el pago para viajeros. Los usuarios pueden explorar opciones de vuelo, comprobar disponibilidad en tiempo real y completar reservas mediante un flujo de checkout seguro. El producto enfatiza un recorrido de reserva limpio — desde descubrir rutas hasta confirmar reservas — con foco en usabilidad y fiabilidad. Se construyó para una experiencia de viaje moderna donde la velocidad, la claridad y la confianza importan en cada paso.',
      'FastDrop – eCommerce Shopping':
        'FastDrop es una app de e-commerce transfronterizo que reúne tiendas internacionales como Shein, Amazon, AliExpress, Temu y Alibaba en una sola plataforma conveniente. Los compradores pueden navegar catálogos, gestionar carritos, rastrear pedidos en tiempo real y completar el checkout con opciones de pago seguras. La app gestiona logística internacional y entrega de última milla para que los clientes puedan comprar a nivel global sin alternar entre múltiples tiendas. Está pensada para una experiencia de compra fluida — desde el descubrimiento y el checkout hasta las actualizaciones de entrega.',
      'Islam Simplified':
        'Islam Simplified es una app educativa de aprendizaje diseñada para cualquiera curioso sobre el Islam, incluidos principiantes y no musulmanes que exploran la fe. Ofrece artículos bien estructurados, videos educativos, una experiencia completa de traducción del Corán, una sección de FAQ y un glosario de términos islámicos clave. Los alumnos pueden seguir el contenido a su ritmo, guardar favoritos y recibir recomendaciones personalizadas según sus intereses. La app reúne recursos esenciales de aprendizaje en una interfaz clara y moderna que hace más accesible comprender el Islam.',
      'Path to Arabic: Learn Arabic':
        'Path to Arabic es una plataforma estructurada de aprendizaje de árabe que ayuda a los usuarios a desarrollar habilidades lingüísticas para la comunicación cotidiana y la comprensión coránica. Combina lecciones guiadas, tutoriales en video, práctica gamificada, quizzes y seguimiento de progreso en un camino de aprendizaje progresivo. La app cubre fundamentos del árabe estándar moderno y herramientas prácticas de engagement que hacen la retención más motivadora. Con sincronización de progreso entre dispositivos y un currículo claro, ofrece una experiencia móvil completa para principiantes y estudiantes avanzados.',
      'Miswarak Consumer App':
        'Miswarak Consumer es una app móvil centrada en entregas que ayuda a los clientes a realizar pedidos, gestionar entregas y seguir el progreso con mayor confianza. Agiliza el recorrido del consumidor en torno a la creación de pedidos, la visibilidad del estado y el seguimiento de entregas para que los usuarios siempre sepan en qué punto están. La experiencia se diseña en torno a la fiabilidad y la claridad — reduciendo la fricción entre navegar, pedir y recibir. Favorece una experiencia de cliente más fluida para flujos de entrega bajo demanda en producción.',
      'Luna Little Bedtime Stories':
        'Luna Little Bedtime Stories es una app de cuentos amigable para niños, creada para hacer la lectura nocturna calmada, atractiva y fácil para las familias. Ofrece cuentos narrados para la hora de dormir en una experiencia suave y apropiada para la edad que ayuda a los niños a relajarse antes de dormir. El diseño prioriza la simplicidad, la calidez y momentos de narración encantadores para oyentes pequeños. Hecha para niños y padres por igual, convierte la hora de dormir en una rutina compartida más constante y agradable.',
      Invogen:
        'Invogen es una solución de facturación creada para pequeños negocios y organizaciones más grandes que necesitan una forma más clara de crear y gestionar facturas. Ayuda a los equipos a generar facturas profesionales, mantener organizados los registros de facturación y reducir el seguimiento manual de pagos. El producto se centra en flujos de trabajo empresariales prácticos — haciendo la facturación más rápida, clara y fácil de mantener a medida que crece el volumen. Está diseñada para apoyar tanto a freelancers cotidianos como a operaciones empresariales estructuradas.',
      Hijria:
        'Hijria es una app de estilo de vida islámico que reúne herramientas de fe cotidianas en una experiencia móvil cuidada. Las funciones principales incluyen un buscador de Qibla, notificaciones de Azaan, un Tasbeeh digital, soporte de calendario Hijri y recordatorios de eventos. La app está diseñada para ayudar a los usuarios a mantener la constancia en la oración y las rutinas espirituales, manteniendo la interfaz simple y accesible. Combina utilidad práctica con una experiencia de usuario calmada y con propósito para la práctica islámica diaria.',
      DirtX:
        'DirtX es una aplicación de gestión de construcción creada para mejorar la coordinación entre proyectos, equipos y operaciones en obra. Admite gestión de tareas, seguimiento de proyectos y comunicación para que las partes interesadas se mantengan alineadas a medida que avanza el trabajo. La app reduce la confusión operativa al centralizar tickets, actualizaciones y visibilidad del progreso en un solo lugar. Diseñada para flujos de construcción del mundo real, se centra en la usabilidad práctica para equipos de oficina y de campo.',
      'FlowCash Pro':
        'FlowCash Pro es una aplicación financiera en Flutter que ayuda a las agencias a gestionar flujo de caja, bancos, personal y transacciones con Firebase Auth y Firestore. Incluye acceso basado en roles para administradores y personal, con dashboards por agencia que mantienen los datos de cada organización claramente separados. Los equipos pueden gestionar transferencias bancarias, asignar crédito al personal y monitorear saldos en tiempo real para un control financiero diario más sólido. El producto se construyó para claridad operativa — ofreciendo a las agencias un sistema fiable para rastrear el movimiento de dinero y la responsabilidad en su fuerza laboral.',
    },
  },
  education: {
    title: 'Educación e idiomas',
    education: 'Educación',
    languages: 'Idiomas',
    degree: 'Licenciatura en Ingeniería de Software',
    university: 'COMSATS University, Abbottabad, Pakistán',
    spoken: [
      { name: 'Inglés', proficiency: 'Conversacional' },
      { name: 'Urdu', proficiency: 'Fluido' },
    ],
  },
  contact: {
    title: 'Contacto',
    heading: 'Construyamos algo sólido',
    body: 'Abierto a contratos Flutter remotos y roles a tiempo completo. Encantado de hablar de arquitectura, correcciones en producción o del lanzamiento de tu próxima release.',
    emailMe: 'Escríbeme',
    whatsapp: 'WhatsApp',
    downloadCv: 'Descargar CV',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
  language: 'Idioma',
};
