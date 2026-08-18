import type { Translations } from '../types';

export const fr: Translations = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',
  },
  header: {
    available: 'Disponible pour des contrats à distance',
    title: 'Développeur d’applications mobiles | Développeur Flutter Senior',
    tagline:
      'Livraison d’applications Flutter en production de bout en bout — Clean Architecture, systèmes offline-first et publications prêtes pour les stores pour des équipes au Royaume-Uni, dans l’UE et au Moyen-Orient.',
    downloadCv: 'Télécharger le CV',
    viewProjects: 'Voir les projets',
    location: 'Dir, Khyber Pakhtunkhwa, Pakistan',
    badge: '5+ ans · Flutter · Remote',
  },
  about: {
    title: 'Résumé professionnel',
    subtitle:
      'Livraison Flutter orientée production, avec responsabilité d’architecture et expérience de publication sur les stores.',
    summary:
      'Développeur Flutter Senior avec 5 ans d’expérience dans la livraison et la maintenance d’applications mobiles en production pour des clients internationaux. Solide expérience avec Clean Architecture, Bloc/Cubit, Provider et Riverpod, ainsi que les services Firebase dont Auth, Firestore, Cloud Functions, Analytics, Crashlytics et les notifications push. Compétent dans la création de systèmes offline-first avec SQLite, Floor, Hive et ObjectBox, et dans l’intégration d’API REST, GraphQL et WebSocket pour des fonctionnalités temps réel basées sur les données. Expérimenté dans la prise en charge d’applications de bout en bout — de l’architecture, l’injection de dépendances et l’optimisation des performances au stockage sécurisé, IAP, CI/CD (GitHub Actions, Codemagic, Fastlane) et publications Play Store / App Store. À l’aise pour traduire des designs Figma et Adobe XD en UI pixel-perfect, écrire des tests unitaires/widget/intégration, et collaborer à distance avec des équipes Agile au Royaume-Uni, dans l’UE et au Moyen-Orient. Également familier des outils de développement assistés par l’IA tels que Cursor, Codex et Claude pour accélérer la livraison tout en maintenant une haute qualité de code.',
    years: 'Années d’expérience',
    apps: 'Apps livrées',
    clients: 'Clients à distance',
  },
  skills: {
    title: 'Forces & Expertise',
    subtitle:
      'De Clean Architecture et du stockage offline-first au CI/CD et à la publication sur les stores.',
    skillsCount: '{n} compétences',
    categories: {
      'Flutter & Dart': 'Flutter & Dart',
      'State Management': 'Gestion d’état',
      'Offline-First & Performance': 'Offline-First & Performance',
      'APIs & Backend': 'APIs & Backend',
      'AI & Developer Tools': 'IA & Outils développeur',
      'Quality & Delivery': 'Qualité & Livraison',
      'Security & Stores': 'Sécurité & Stores',
      'UI & Collaboration': 'UI & Collaboration',
      Platforms: 'Plateformes',
    },
  },
  experience: {
    title: 'Expérience professionnelle',
    subtitle:
      'Rôles à distance et sur site pour livrer des produits Flutter stables et évolutifs.',
    jobs: [
      {
        role: 'Développeur Flutter (Contrat & Remote)',
        company: 'ShiftOpus | Royaume-Uni (Remote)',
        period: 'Déc 2025 – Avr 2026',
        description: [
          'Maintenance et amélioration d’applications Flutter déjà publiées, en mettant l’accent sur la stabilité, la fiabilité et une expérience utilisateur fluide en production.',
          'Diagnostic et résolution des problèmes de production, réduction des crashes et livraison de correctifs ciblés basés sur les retours utilisateurs et les insights de monitoring.',
          'Amélioration des performances de l’app via le profiling, l’optimisation des widgets et des stratégies de cache plus intelligentes.',
          'Renforcement des capacités offline-first afin que les fonctionnalités principales restent utilisables avec une connectivité faible ou intermittente.',
        ],
      },
      {
        role: 'Développeur Flutter Senior',
        company: 'CloudLaunch | Royaume-Uni (Remote)',
        period: 'Jan 2023 – Oct 2025',
        description: [
          'Conception et développement d’applications mobiles multiplateformes évolutives avec Flutter, gestion d’état Bloc/Cubit et Clean Architecture.',
          'Intégration d’API REST, GraphQL et services Firebase pour livrer des fonctionnalités temps réel basées sur les données, avec une sécurité solide et une UI/UX cohérente.',
          'Collaboration avec des équipes Agile/Scrum internationales sur la planification de sprints, les discussions techniques, les revues de code et la résolution des incidents de production.',
        ],
      },
      {
        role: 'Développeur Flutter Senior',
        company: 'Bridge Softwares | Tallinn (Remote à temps partiel)',
        period: 'Août 2024 – Sep 2025',
        description: [
          'Construction et itération sur plusieurs projets Flutter multiplateformes avec Provider et Riverpod pour des architectures propres, réactives et maintenables.',
          'Intégration de Firebase (Auth, Firestore, Cloud Functions, Analytics, Push Notifications) pour des applications sécurisées, temps réel et basées sur les données.',
          'Mise en œuvre de fonctionnalités alimentées par l’IA pour enrichir les capacités produit et l’expérience utilisateur.',
        ],
      },
      {
        role: 'Développeur Flutter Senior',
        company: 'JMM Technologies LTD | Peshawar',
        period: 'Juin 2021 – Nov 2022',
        description: [
          'Direction d’une équipe de développeurs Flutter sur la stratégie d’implémentation, les standards de code et les objectifs de sprint pour une livraison ponctuelle et de haute qualité.',
          'Développement d’applications mobiles de niveau entreprise avec Google Maps, Firebase et des API tierces, incluant une UI responsive et un support offline-first.',
          'Revues de code, mentoring et documentation technique pour garantir les principes OOP, SOLID et la maintenabilité à long terme.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projets & Historique',
    subtitle:
      'Applications de production sélectionnées dans le POS, la santé, l’apprentissage, la finance et la logistique — regroupées par entreprise.',
    all: 'Tous',
    showMore: 'Voir plus',
    showLess: 'Voir moins',
    playStore: 'Play Store',
    appStore: 'App Store',
    clientInternal: 'Projet client / interne',
    locallyDistributed: 'Distribution locale',
    availableStores: 'Disponible sur Play Store & App Store',
    companies: {
      CloudLaunch: 'CloudLaunch',
      'Bridge Softwares': 'Bridge Softwares',
      'JMM Technologies': 'JMM Technologies',
      'Outsourcing Projects': 'Projets d’externalisation',
    },
    descriptions: {
      FabPOS:
        'FabPOS est une plateforme de point de vente moderne conçue pour simplifier les opérations quotidiennes des commerçants et des équipes en croissance. Elle couvre le traitement des ventes, la gestion des achats et le contrôle des stocks dans une expérience mobile cohérente. L’application aide les entreprises à suivre les niveaux de stock, gérer les catalogues produits et conserver des registres de ventes précis et accessibles. Conçue pour la fiabilité en production, elle favorise des parcours de caisse plus fluides et une meilleure visibilité opérationnelle entre les magasins.',
      FabMedic:
        'FabMedic est une application compagnon de santé qui aide les patients à gérer les informations médicales personnelles et familiales en un seul endroit sécurisé. Les utilisateurs peuvent consulter les résultats d’examens, médicaments, historiques de vaccination, résumés de visites et notes cliniques partagés par les soignants. L’app prend aussi en charge la prise de rendez-vous, la communication avec l’équipe de soins et le partage sécurisé des dossiers médicaux si nécessaire. Elle est conçue pour rendre les informations de santé plus faciles d’accès, d’organisation et de suivi — pour les individus comme pour les familles.',
      'MRL Admin':
        'MRL Admin est la console d’opérations d’une plateforme de financement automobile, conçue pour les administrateurs qui gèrent les parcours de prêt de bout en bout. Elle prend en charge la revue des dossiers, l’onboarding clients, le suivi des paiements et les analyses de performance dans un tableau de bord structuré. L’application aide les équipes à surveiller la santé du portefeuille, résoudre rapidement les problèmes opérationnels et maintenir des processus de financement cohérents. Elle a été conçue pour un usage en production, avec un accent sur la clarté, le contrôle et une administration quotidienne fiable.',
      'MRL Finance – Customer':
        'MRL Finance – Customer est le compagnon côté client de la suite de financement MRL. Les clients peuvent consulter les détails du véhicule, vérifier l’historique des paiements et effectuer des paiements via des canaux intégrés tels que M-PESA. L’application privilégie une expérience claire et mobile-first afin que les utilisateurs restent informés de leur statut de financement sans contacter le support pour les mises à jour courantes. Elle complète la plateforme admin en offrant un accès en libre-service aux informations et actions les plus utiles.',
      'Fly-ME':
        'Fly-ME est une application de réservation de billets d’avion qui simplifie la recherche, la réservation et le paiement pour les voyageurs. Les utilisateurs peuvent explorer les options de vol, vérifier la disponibilité en temps réel et finaliser leurs réservations via un parcours de paiement sécurisé. Le produit met l’accent sur un parcours de réservation clair — de la découverte des itinéraires à la confirmation — avec un focus sur l’utilisabilité et la fiabilité. Il a été conçu pour une expérience de voyage moderne où la rapidité, la clarté et la confiance comptent à chaque étape.',
      'FastDrop – eCommerce Shopping':
        'FastDrop est une application e-commerce transfrontalière qui réunit des magasins internationaux comme Shein, Amazon, AliExpress, Temu et Alibaba sur une seule plateforme pratique. Les acheteurs peuvent parcourir les catalogues, gérer leurs paniers, suivre les commandes en temps réel et finaliser le paiement via des options sécurisées. L’app gère la logistique internationale et la livraison du dernier kilomètre afin que les clients puissent acheter à l’échelle mondiale sans jongler entre plusieurs boutiques. Elle est conçue pour une expérience d’achat fluide — de la découverte au suivi de livraison.',
      'Islam Simplified: Learn & Grow':
        'Islam Simplified: Learn & Grow est une application d’apprentissage éducative destinée à toute personne curieuse de l’islam, y compris les débutants et les non-musulmans qui explorent la foi. Elle propose des articles structurés, des vidéos éducatives, une expérience complète de traduction du Coran, une FAQ et un glossaire des termes islamiques clés. Les apprenants peuvent suivre le contenu à leur rythme, enregistrer des favoris et recevoir des recommandations personnalisées selon leurs centres d’intérêt. L’app rassemble les ressources d’apprentissage essentielles dans une interface claire et moderne qui rend la compréhension de l’islam plus accessible.',
      'Path to Arabic: Learn Arabic':
        'Path to Arabic est une plateforme structurée d’apprentissage de l’arabe qui aide les utilisateurs à développer des compétences linguistiques pour la communication quotidienne et la compréhension coranique. Elle combine leçons guidées, tutoriels vidéo, pratique gamifiée, quiz et suivi de progression dans un parcours progressif. L’application couvre les bases de l’arabe standard moderne et des outils d’engagement pratiques qui rendent la mémorisation plus motivante. Avec la synchronisation multi-appareils et un curriculum clair, elle offre une expérience d’apprentissage mobile complète pour débutants et étudiants confirmés.',
      'Miswarak Consumer App':
        'Miswarak Consumer est une application mobile axée sur la livraison qui aide les clients à passer des commandes, gérer les livraisons et suivre l’avancement avec plus de confiance. Elle fluidifie le parcours consommateur autour de la création de commande, de la visibilité du statut et du suivi de livraison afin que les utilisateurs sachent toujours où en sont les choses. L’expérience est conçue autour de la fiabilité et de la clarté — en réduisant les frictions entre navigation, commande et réception. Elle favorise une meilleure expérience client pour les workflows de livraison à la demande en production.',
      'Find My Filmmaker':
        'Find My Filmmaker met en relation clients et cinéastes du monde entier — réalisateurs, monteurs, directeurs photo et plus. Les cinéastes présentent leur portfolio et se font découvrir ; les clients parcourent des profils vérifiés, filtrent par lieu et rôle, et collaborent via la messagerie en temps réel. Basculez facilement entre modes cinéaste et client depuis un seul compte.',
      'Luna Little Bedtime Stories':
        'Luna Little Bedtime Stories est une application de contes adaptée aux enfants, créée pour rendre la lecture du soir calme, engageante et simple pour les familles. Elle propose des histoires du coucher narrées dans une expérience douce et adaptée à l’âge, qui aide les enfants à se détendre avant de dormir. Le design privilégie la simplicité, la chaleur et de délicieux moments de narration pour les jeunes auditeurs. Conçue pour les enfants comme pour les parents, elle transforme le coucher en une routine partagée plus régulière et agréable.',
      'Home Interior Exterior Design':
        'Home Design AI transforme intérieurs, extérieurs, cuisines et jardins avec des outils de design IA. Choisissez parmi 70+ styles et 30+ types de pièces, planifiez les agencements, convertissez des croquis en rendus et enregistrez ou partagez vos designs — pour propriétaires, designers et bricoleurs.',
      Plodyo:
        'Plodyo est une application de narration IA pour enfants qui aide les parents, éducateurs et organisations à créer des histoires personnalisées avec texte, illustrations, livres audio et vidéo dans de nombreuses langues. Construite avec Flutter et Supabase, elle inclut une inscription basée sur les rôles (parent / éducateur / organisation), la génération d’histoires et de vidéos, la bibliothèque, les abonnements et les notifications push pour les tâches de contenu longues.',
      Invogen:
        'Invogen est une solution de facturation conçue pour les petites entreprises et les organisations plus grandes qui ont besoin d’une façon plus claire de créer et gérer des factures. Elle aide les équipes à générer des factures professionnelles, organiser les dossiers de facturation et réduire les relances manuelles autour des paiements. Le produit se concentre sur des workflows métier pratiques — rendre la facturation plus rapide, plus claire et plus facile à maintenir à mesure que le volume augmente. Il est conçu pour soutenir aussi bien les freelances au quotidien que les opérations structurées.',
      Hijria:
        'Hijria est une application de style de vie islamique qui rassemble les outils de foi du quotidien dans une expérience mobile soignée. Les fonctionnalités principales incluent un chercheur de Qibla, des notifications d’Azaan, un Tasbeeh numérique, le calendrier Hijri et des rappels d’événements. L’app est conçue pour aider les utilisateurs à rester constants dans la prière et les routines spirituelles, tout en gardant une interface simple et accessible. Elle combine utilité pratique et expérience utilisateur calme, guidée par le sens, pour la pratique islamique quotidienne.',
      DirtX:
        'DirtX est une application de gestion de construction conçue pour améliorer la coordination entre projets, équipes et opérations sur site. Elle prend en charge la gestion des tâches, le suivi de projet et la communication afin que les parties prenantes restent alignées au fil de l’avancement. L’app réduit la confusion opérationnelle en centralisant tickets, mises à jour et visibilité de progression en un seul endroit. Conçue pour des workflows de construction réels, elle privilégie une utilisabilité pratique pour les équipes de bureau comme de terrain.',
      'FlowCash Pro':
        'FlowCash Pro est une application financière Flutter qui aide les agences à gérer la trésorerie, les banques, le personnel et les transactions avec Firebase Auth et Firestore. Elle inclut un accès basé sur les rôles pour administrateurs et personnel, avec des tableaux de bord limités à chaque agence pour séparer clairement les données. Les équipes peuvent gérer les virements bancaires, allouer du crédit au personnel et surveiller les soldes en temps réel pour un contrôle financier quotidien plus solide. Le produit a été conçu pour la clarté opérationnelle — offrant aux agences un système fiable pour suivre les mouvements d’argent et la responsabilité au sein de leurs équipes.',
    },
  },
  education: {
    title: 'Formation & Langues',
    education: 'Formation',
    languages: 'Langues',
    degree: 'Licence en génie logiciel',
    university: 'COMSATS University, Abbottabad, Pakistan',
    spoken: [
      { name: 'Anglais', proficiency: 'Conversationnel' },
      { name: 'Ourdou', proficiency: 'Courant' },
    ],
  },
  contact: {
    title: 'Me contacter',
    heading: 'Construisons quelque chose de solide',
    body: 'Ouvert aux contrats Flutter à distance et aux postes à temps plein. Ravi de discuter d’architecture, de correctifs de production ou de la livraison de votre prochaine release.',
    emailMe: 'M’écrire',
    whatsapp: 'WhatsApp',
    downloadCv: 'Télécharger le CV',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
  language: 'Langue',
};
