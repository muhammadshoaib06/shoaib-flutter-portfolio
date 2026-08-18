import type { Translations } from '../types';

export const de: Translations = {
  nav: {
    about: 'Über mich',
    skills: 'Fähigkeiten',
    experience: 'Erfahrung',
    projects: 'Projekte',
    contact: 'Kontakt',
  },
  header: {
    available: 'Verfügbar für Remote-Verträge',
    title: 'Mobile App Entwickler | Senior Flutter Developer',
    tagline:
      'Produktionstaugliche Flutter-Apps von Ende zu Ende — Clean Architecture, Offline-First-Systeme und Store-ready Releases für Teams in UK, EU und Nahost.',
    downloadCv: 'CV herunterladen',
    viewProjects: 'Projekte ansehen',
    location: 'Dir, Khyber Pakhtunkhwa, Pakistan',
    badge: '5+ Jahre · Flutter · Remote',
  },
  about: {
    title: 'Berufliches Profil',
    subtitle:
      'Produktionsorientierte Flutter-Lieferung mit Architektur-Verantwortung und Store-Release-Erfahrung.',
    summary:
      'Senior Flutter Developer mit 5 Jahren Erfahrung im Versand und der Wartung produktiver Mobile-Apps für internationale Kunden. Starke Erfolgsbilanz mit Clean Architecture, Bloc/Cubit, Provider und Riverpod sowie Firebase-Diensten einschließlich Auth, Firestore, Cloud Functions, Analytics, Crashlytics und Push-Benachrichtigungen. Erfahren im Aufbau von Offline-First-Systemen mit SQLite, Floor, Hive und ObjectBox sowie in der Integration von REST-, GraphQL- und WebSocket-APIs für Echtzeit- und datengetriebene Features. Erfahrung in der End-to-End-Verantwortung für Apps — von Architektur, Dependency Injection und Performance-Tuning bis zu Secure Storage, IAP, CI/CD (GitHub Actions, Codemagic, Fastlane) und Play-Store-/App-Store-Releases. Sicher im Umsetzen von Figma- und Adobe-XD-Designs in pixelgenaue UI, im Schreiben von Unit-/Widget-/Integrationstests und in der Remote-Zusammenarbeit mit Agile-Teams in UK, EU und Nahost. Auch praxisnah mit KI-gestützten Entwicklungstools wie Cursor, Codex und Claude, um die Lieferung zu beschleunigen und gleichzeitig hohe Codequalität zu halten.',
    years: 'Jahre Erfahrung',
    apps: 'Veröffentlichte Apps',
    clients: 'Remote-Kunden',
  },
  skills: {
    title: 'Stärken & Expertise',
    subtitle:
      'Von Clean Architecture und Offline-First-Speicherung bis CI/CD und Store-Publishing.',
    skillsCount: '{n} Skills',
    categories: {
      'Flutter & Dart': 'Flutter & Dart',
      'State Management': 'State Management',
      'Offline-First & Performance': 'Offline-First & Performance',
      'APIs & Backend': 'APIs & Backend',
      'AI & Developer Tools': 'KI & Developer Tools',
      'Quality & Delivery': 'Qualität & Delivery',
      'Security & Stores': 'Sicherheit & Stores',
      'UI & Collaboration': 'UI & Zusammenarbeit',
      Platforms: 'Plattformen',
    },
  },
  experience: {
    title: 'Berufserfahrung',
    subtitle:
      'Remote- und Vor-Ort-Rollen für stabile, skalierbare Flutter-Produkte.',
    jobs: [
      {
        role: 'Flutter Developer (Vertrag & Remote)',
        company: 'ShiftOpus | UK (Remote)',
        period: 'Dez 2025 – Apr 2026',
        description: [
          'Wartung und Verbesserung bereits veröffentlichter Flutter-Apps mit Fokus auf Stabilität, Zuverlässigkeit und eine reibungslose User Experience in der Produktion.',
          'Diagnose und Behebung von Produktionsproblemen, Reduktion von Crashes und gezielte Fixes basierend auf Nutzerberichten und Monitoring-Insights.',
          'Verbesserung der App-Performance durch Profiling, Widget-Optimierung und intelligentere Caching-Strategien.',
          'Stärkung der Offline-First-Fähigkeiten, sodass Kernfunktionen auch bei schwacher oder unterbrochener Verbindung nutzbar bleiben.',
        ],
      },
      {
        role: 'Sr. Flutter Developer',
        company: 'CloudLaunch | UK (Remote)',
        period: 'Jan 2023 – Okt 2025',
        description: [
          'Entwurf und Entwicklung skalierbarer plattformübergreifender Mobile-Apps mit Flutter, Bloc/Cubit State Management und Clean Architecture.',
          'Integration von REST-APIs, GraphQL und Firebase-Services für Echtzeit- und datengetriebene Features mit starker Sicherheit und konsistenter UI/UX.',
          'Zusammenarbeit mit globalen Agile/Scrum-Teams bei Sprint-Planung, technischen Diskussionen, Code Reviews und der Lösung von Produktionsproblemen.',
        ],
      },
      {
        role: 'Sr. Flutter Developer',
        company: 'Bridge Softwares | Tallinn (Teilzeit Remote)',
        period: 'Aug 2024 – Sep 2025',
        description: [
          'Aufbau und Iteration mehrerer plattformübergreifender Flutter-Projekte mit Provider und Riverpod für saubere, reaktive, wartbare Architekturen.',
          'Integration von Firebase (Auth, Firestore, Cloud Functions, Analytics, Push Notifications) für sichere, Echtzeit- und datengetriebene Anwendungen.',
          'Implementierung KI-gestützter Features zur Stärkung der Produktfähigkeiten und User Experience.',
        ],
      },
      {
        role: 'Sr. Flutter Developer',
        company: 'JMM Technologies LTD | Peshawar',
        period: 'Jun 2021 – Nov 2022',
        description: [
          'Leitung eines Teams von Flutter-Entwicklern bei Implementierungsstrategie, Coding-Standards und Sprint-Zielen für pünktliche, hochwertige Lieferung.',
          'Entwicklung unternehmensweiter Mobile-Apps mit Google Maps, Firebase und Drittanbieter-APIs, einschließlich responsiver UI und Offline-First-Support.',
          'Code Reviews, Mentoring und technische Dokumentation zur Einhaltung von OOP-, SOLID-Prinzipien und langfristiger Wartbarkeit.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projekte & Arbeitsverlauf',
    subtitle:
      'Ausgewählte Produktions-Apps in POS, Healthcare, Learning, Finance und Logistics — gruppiert nach Unternehmen.',
    all: 'Alle',
    showMore: 'Mehr anzeigen',
    showLess: 'Weniger anzeigen',
    playStore: 'Play Store',
    appStore: 'App Store',
    clientInternal: 'Kunden- / internes Projekt',
    locallyDistributed: 'Lokal verteilt',
    availableStores: 'Verfügbar im Play Store & App Store',
    companies: {
      CloudLaunch: 'CloudLaunch',
      'Bridge Softwares': 'Bridge Softwares',
      'JMM Technologies': 'JMM Technologies',
      'Outsourcing Projects': 'Outsourcing-Projekte',
    },
    descriptions: {
      FabPOS:
        'FabPOS ist eine moderne Point-of-Sale-Plattform, die den täglichen Geschäftsbetrieb für Einzelhändler und wachsende Teams vereinfacht. Sie deckt Verkaufsabwicklung, Einkaufsmanagement und Bestandssteuerung in einer kohärenten Mobile-Experience ab. Die App hilft Unternehmen, Lagerbestände zu verfolgen, Produktkataloge zu verwalten und Verkaufsdaten genau und zugänglich zu halten. Für Zuverlässigkeit in Produktionsumgebungen ausgelegt, unterstützt sie reibungslosere Checkout-Workflows und klarere operative Transparenz über Filialen hinweg.',
      FabMedic:
        'FabMedic ist eine Gesundheits-Begleit-App, die Patienten hilft, persönliche und familiäre medizinische Informationen an einem sicheren Ort zu verwalten. Nutzer können Testergebnisse, Medikamente, Impfhistorie, Besuchszusammenfassungen und klinische Notizen einsehen, die von Behandlern geteilt werden. Die App unterstützt auch Terminplanung, Kommunikation mit dem Care-Team und sicheres Teilen von Patientenakten bei Bedarf. Sie ist darauf ausgelegt, Gesundheitsinformationen leichter zugänglich, organisierbar und im Blick zu behalten — für Einzelpersonen und Familien.',
      'MRL Admin':
        'MRL Admin ist die Operations-Konsole einer Fahrzeugfinanzierungsplattform, gebaut für Administratoren, die Kredit-Workflows von Ende zu Ende steuern. Sie unterstützt Antragsprüfung, Kunden-Onboarding, Zahlungsverfolgung und Performance-Analysen in einem strukturierten Dashboard. Die App hilft Teams, die Portfolio-Gesundheit zu überwachen, operative Probleme schnell zu lösen und Finanzierungsprozesse konsistent zu halten. Für den Produktionseinsatz mit Fokus auf Klarheit, Kontrolle und zuverlässige tägliche Administration konzipiert.',
      'MRL Finance – Customer':
        'MRL Finance – Customer ist der kundenorientierte Begleiter der MRL-Finanzierungssuite. Kunden können Fahrzeugdetails einsehen, Zahlungshistorie prüfen und Zahlungen über integrierte Kanäle wie M-PESA abschließen. Die App fokussiert eine klare, mobile-first Experience, damit Nutzer über ihren Finanzierungsstatus informiert bleiben, ohne den Support für Routine-Updates zu kontaktieren. Sie ergänzt die Admin-Plattform, indem sie Kunden Self-Service-Zugang zu den wichtigsten Informationen und Aktionen gibt.',
      'Fly-ME':
        'Fly-ME ist eine Flugticket-Buchungs-App, die Suche, Reservierung und Zahlung für Reisende vereinfacht. Nutzer können Flugoptionen erkunden, Echtzeit-Verfügbarkeit prüfen und Buchungen über einen sicheren Checkout-Flow abschließen. Das Produkt betont eine klare Buchungsreise — von der Routenfindung bis zur Bestätigung — mit Fokus auf Usability und Zuverlässigkeit. Es wurde für ein modernes Reiseerlebnis gebaut, bei dem Geschwindigkeit, Klarheit und Vertrauen in jedem Schritt zählen.',
      'FastDrop – eCommerce Shopping':
        'FastDrop ist eine grenzüberschreitende E-Commerce-Shopping-App, die internationale Stores wie Shein, Amazon, AliExpress, Temu und Alibaba in einer praktischen Plattform vereint. Käufer können Kataloge durchstöbern, Warenkörbe verwalten, Bestellungen in Echtzeit verfolgen und den Checkout über sichere Zahlungsoptionen abschließen. Die App übernimmt internationale Logistik und Last-Mile-Delivery, damit Kunden weltweit einkaufen können, ohne zwischen mehreren Shops zu wechseln. Gebaut für ein reibungsloses Shopping-Erlebnis — von Entdeckung und Checkout bis zu Liefer-Updates.',
      'Islam Simplified: Learn & Grow':
        'Islam Simplified: Learn & Grow ist eine bildungsorientierte Lern-App für alle, die neugierig auf den Islam sind — einschließlich Anfänger und Nichtmuslime, die den Glauben erkunden. Sie bietet gut strukturierte Artikel, Lehrvideos, eine vollständige Quran-Übersetzung, einen FAQ-Bereich und ein Glossar wichtiger islamischer Begriffe. Lernende können Inhalte im eigenen Tempo verfolgen, Favoriten speichern und personalisierte Empfehlungen nach Interessen erhalten. Die App bündelt wesentliche Lernressourcen in einer klaren, modernen Oberfläche, die das Verständnis des Islam zugänglicher macht.',
      'Path to Arabic: Learn Arabic':
        'Path to Arabic ist eine strukturierte Arabisch-Lernplattform, die Nutzern Sprachkompetenzen für Alltagskommunikation und Quran-Verständnis aufbaut. Sie kombiniert geführte Lektionen, Video-Tutorials, gamifizierte Übungen, Quizzes und Fortschritts-Tracking in einem progressiven Lernpfad. Die App unterstützt Grundlagen des Modern Standard Arabic und praxisnahe Engagement-Tools, die das Behalten motivierender machen. Mit geräteübergreifender Fortschritts-Sync und klarem Curriculum bietet sie eine vollständige Mobile-Learning-Experience für Anfänger und Fortgeschrittene.',
      'Miswarak Consumer App':
        'Miswarak Consumer ist eine lieferorientierte Mobile-App, die Kunden hilft, Bestellungen aufzugeben, Lieferungen zu verwalten und den Fortschritt mit mehr Sicherheit zu verfolgen. Sie vereinfacht die Consumer-Journey rund um Auftragserstellung, Status-Sichtbarkeit und Liefer-Tracking, damit Nutzer immer wissen, wo Dinge stehen. Die Experience ist auf Zuverlässigkeit und Klarheit ausgelegt — und reduziert Reibung zwischen Browsen, Bestellen und Empfangen. Sie unterstützt eine reibungslosere Customer Experience für On-Demand-Liefer-Workflows in der Produktion.',
      'Find My Filmmaker':
        'Find My Filmmaker verbindet Auftraggeber weltweit mit Filmemachern — Regisseure, Editoren, Kameraleute und mehr. Filmemacher präsentieren Portfolios und werden entdeckt; Kunden durchsuchen verifizierte Talente, filtern nach Standort und Rolle und arbeiten per Echtzeit-Messaging zusammen. Nahtloser Wechsel zwischen Filmemacher- und Kundenmodus in einem Konto.',
      'Luna Little Bedtime Stories':
        'Luna Little Bedtime Stories ist eine kindgerechte Storytelling-App, die das abendliche Vorlesen ruhig, ansprechend und einfach für Familien macht. Sie bietet erzählte Gute-Nacht-Geschichten in einer sanften, altersgerechten Experience, die Kindern hilft, vor dem Schlafen herunterzukommen. Das Design priorisiert Einfachheit, Wärme und angenehme Erzählmomente für junge Zuhörer. Für Kinder und Eltern gebaut, macht sie die Schlafenszeit zu einer beständigeren und angenehmeren gemeinsamen Routine.',
      'Home Interior Exterior Design':
        'Home Design AI transformiert Innenräume, Außenbereiche, Küchen und Gärten mit KI-Design-Tools. Wählen Sie aus 70+ Stilen und 30+ Raumtypen, planen Sie Layouts, wandeln Sie Skizzen in Renderings um und speichern oder teilen Sie Designs — für Hausbesitzer, Designer und DIY-Enthusiasten.',
      Plodyo:
        'Plodyo ist eine KI-Storytelling-App für Kinder, mit der Eltern, Pädagogen und Organisationen personalisierte Kindergeschichten mit Text, Illustrationen, Hörbüchern und Video in vielen Sprachen erstellen können. Entwickelt mit Flutter und Supabase, umfasst sie rollenbasierten Signup (Eltern / Pädagoge / Organisation), Story- und Videogenerierung, Bibliothek, Abonnements und Push-Benachrichtigungen für länger laufende Content-Jobs.',
      Invogen:
        'Invogen ist eine Rechnungs-Lösung für kleine Unternehmen und größere Organisationen, die eine klarere Art brauchen, Rechnungen zu erstellen und zu verwalten. Sie hilft Teams, professionelle Rechnungen zu erzeugen, Abrechnungsdaten organisiert zu halten und manuelles Nachfassen bei Zahlungen zu reduzieren. Das Produkt fokussiert praktische Business-Workflows — Rechnungsstellung schneller, klarer und bei wachsendem Volumen leichter wartbar zu machen. Es unterstützt sowohl alltägliche Freelancer als auch strukturierte Unternehmensabläufe.',
      Hijria:
        'Hijria ist eine islamische Lifestyle-App, die alltägliche Glaubens-Tools in einer durchdachten Mobile-Experience vereint. Kernfunktionen sind Qibla-Finder, Azaan-Benachrichtigungen, digitales Tasbeeh, Hijri-Kalender und Ereignis-Erinnerungen. Die App hilft Nutzern, bei Gebet und spirituellen Routinen beständig zu bleiben, bei einfacher und zugänglicher Oberfläche. Sie verbindet praktischen Nutzen mit einer ruhigen, zweckorientierten User Experience für die tägliche islamische Praxis.',
      DirtX:
        'DirtX ist eine Baumanagement-Anwendung zur besseren Koordination von Projekten, Teams und Baustellenbetrieb. Sie unterstützt Task-Management, Projekt-Tracking und Kommunikation, damit Stakeholder im Fortschritt aligned bleiben. Die App reduziert operative Verwirrung, indem Tickets, Updates und Fortschritts-Sichtbarkeit zentralisiert werden. Für reale Bau-Workflows konzipiert, liegt der Fokus auf praktischer Usability für Büro- und Außenteams.',
      'FlowCash Pro':
        'FlowCash Pro ist eine Flutter-Finanzanwendung, die Agenturen hilft, Cashflow, Banken, Personal und Transaktionen mit Firebase Auth und Firestore zu verwalten. Sie bietet rollenbasierten Zugriff für Administratoren und Mitarbeitende sowie agenturbezogene Dashboards, die die Daten jeder Organisation klar trennen. Teams können Banküberweisungen abwickeln, Mitarbeiterkredite zuweisen und Salden in Echtzeit überwachen — für stärkere tägliche Finanzkontrolle. Das Produkt wurde für operative Klarheit gebaut und gibt Agenturen ein zuverlässiges System, um Geldflüsse und Verantwortlichkeit in der Belegschaft zu tracken.',
    },
  },
  education: {
    title: 'Ausbildung & Sprachen',
    education: 'Ausbildung',
    languages: 'Sprachen',
    degree: 'Bachelor of Software Engineering',
    university: 'COMSATS University, Abbottabad, Pakistan',
    spoken: [
      { name: 'Englisch', proficiency: 'Konversationssicher' },
      { name: 'Urdu', proficiency: 'Fließend' },
    ],
  },
  contact: {
    title: 'Kontakt aufnehmen',
    heading: 'Lass uns etwas Solides bauen',
    body: 'Offen für Remote-Flutter-Verträge und Vollzeitrollen. Gerne sprechen wir über Architektur, Produktionsfixes oder den nächsten Release.',
    emailMe: 'E-Mail schreiben',
    whatsapp: 'WhatsApp',
    downloadCv: 'CV herunterladen',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
  },
  language: 'Sprache',
};
