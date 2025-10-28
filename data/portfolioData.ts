import type { PersonalInfo, SkillCategory, ExperienceItem, Project, Education, Language } from '../types';

interface PortfolioData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  education: Education[];
  languages: Language[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "MUHAMMAD SHOAIB",
    title: "FLUTTER DEVELOPER",
    email: "ms09390080@gmail.com",
    phone: "+923-4193-90080",
    location: "Dir, Khyber Pakhtunkhwa Pakistan",
    imageUrl: "https://i.ibb.co/7tCQHS6B/Whats-App-Image-2025-09-26-at-16-27-53.jpg",
    cvUrl: "https://drive.google.com/file/d/1-rChRBxX_XIOfH-sDbvxxKQpIeN3QPrE/view?usp=sharing",
    socials: {
      github: "https://github.com/muhammadshoaib06",
      linkedin: "https://www.linkedin.com/in/muhammad-shoaib-flutter-dev/",
      instagram: "https://www.instagram.com/muhammadshoaib.06/"
    }
  },
  professionalSummary: "Seasoned Senior Flutter Developer with 4+ years of hands-on experience in crafting cutting-edge mobile applications. Demonstrated expertise in the Flutter framework, problem-solving, and delivering scalable solutions. Skilled in leading projects from concept to completion, ensuring optimal functionality and user satisfaction. A collaborative team player committed to staying abreast of industry trends, bringing technical acumen and leadership skills to foster innovation and deliver outstanding results.",
  skills: [
    {
      category: "Core Expertise",
      items: ["Dart & Streams/RxDart", "OOP & SOLID Principles", "Mobile Architecture", "Clean Architecture (MVVM/MVC)"]
    },
    {
      category: "Flutter & UI/UX",
      items: ["State Management (Bloc, Cubit, Provider)", "Responsive Design", "Widget Optimization & Profiling", "Caching"]
    },
    {
      category: "APIs & Realtime",
      items: ["REST", "GraphQL", "Sockets Integration"]
    },
    {
      category: "Firebase",
      items: ["Auth", "Firestore", "Functions", "Analytics", "Crashlytics", "Notifications"]
    },
    {
      category: "Offline-First Solutions",
      items: ["SQLite", "Floor", "Hive", "ObjectBox"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git & GitHub Actions", "CI/CD (Codemagic, Fastlane)", "Agile/Scrum (Jira, Trello, ClickUp)"]
    },
    {
      category: "Testing & Quality",
      items: ["Unit, Widget, Integration Testing", "Functional Testing (TDD/BDD)"]
    },
    {
      category: "Cross-Platform & Native",
      items: ["Kotlin", "Java", "Swift"]
    }
  ],
  experience: [
    {
      role: "Sr. Flutter Developer",
      company: "CloudLaunch | UK (Remote)",
      period: "January 2023 – October 2025",
      description: [
        "Designed and developed scalable cross-platform mobile applications using Flutter, implementing advanced state management (Bloc/Cubit) and best practices in Clean Architecture.",
        "Integrated REST APIs, GraphQL, and Firebase services to deliver real-time, data-driven solutions while ensuring security, performance optimization, and smooth UI/UX across devices.",
        "Collaborated with global teams in an Agile/Scrum environment, participating in sprint planning, code reviews, and resolving complex issues."
      ]
    },
    {
      role: "Flutter Developer",
      company: "Bridge Softwares | Tallinn (Part-time Remote)",
      period: "Aug 2024 - Sep 2025",
      description: [
        "Worked on multiple cross-platform projects using Flutter, focusing on Provider & Riverpod state management for clean, reactive, and maintainable architectures.",
        "Integrated Firebase services to build secure, real-time, and data-driven applications.",
        "Implemented AI-powered features."
      ]
    },
    {
      role: "Flutter Developer",
      company: "JMM Technologies LTD | Peshawar",
      period: "Jun 2021 - Nov 2022",
      description: [
        "Led a team of Flutter developers, guiding implementation strategies, code standards, and sprint goals.",
        "Developed enterprise-grade mobile applications with integrations such as Google Maps, Firebase, and third-party APIs.",
        "Conducted code reviews and mentoring sessions, ensuring adherence to OOP, SOLID principles, and long-term maintainability."
      ]
    }
  ],
  projects: [
    { name: "DirtX", description: "A complete Flutter-based mobile application designed to streamline project and ticket management for construction material logistics.", link: "Available on Play Store & App Store", imageUrl: "https://i.ibb.co/KcHqYXBj/SCR-20251028-lbbq.png" },
    { name: "FabPOS", description: "A modern POS application to simplify business operations with sales, purchase, and inventory management.", link: "Available on Play Store & App Store", imageUrl: "https://i.ibb.co/6RNXw0hX/SCR-20251028-lfjl.png" },
    { name: "FabMedic", description: "A healthcare app for managing personal and family medical information, including results, medications, and appointments.", link: "Available on Play Store & App Store", imageUrl: "https://i.ibb.co/3mW7bVvp/SCR-20251028-lful.png" },
    { name: "MRL Admin", description: "A suite of financing applications for loan applications, payment tracking, and customer onboarding.", link: "Available on Play Store & App Store", imageUrl: "https://i.ibb.co/m5HtWq6d/Whats-App-Image-2025-07-31-at-13-06-45.jpg" },
    { name: "MRL Customer", description: "A MRL Application for MRL customer where customers can check their vehicle details, payment history and make payment through M-PESA.", link: "Available on Play Store & App Store", imageUrl: "https://i.ibb.co/m5HtWq6d/Whats-App-Image-2025-07-31-at-13-06-45.jpg" },
    { name: "Miswarak Consumer App", description: "A consumer delivery app for managing orders and tracking deliveries.", link: null, imageUrl: "https://i.ibb.co/cSJ93fys/SCR-20251028-lged.png" },
    { name: "Path to Arabic", description: "A cross-platform Arabic learning app with structured lessons, quizzes, and gamification.", link: "Available on Play Store & App Store", imageUrl: "https://i.ibb.co/Tq4pnVQG/SCR-20251028-lhjb.png" },
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      university: "COMSATS University, Abbottabad Pakistan",
      year: "Graduated: 2021"
    }
  ],
  languages: [
    { name: "Urdu", proficiency: "Fluent" },
    { name: "English", proficiency: "Conversational" }
  ]
};