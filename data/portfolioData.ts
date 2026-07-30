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
    name: "Muhammad Shoaib",
    title: "Senior Flutter Developer",
    email: "ms09390080@gmail.com",
    phone: "+92 341 939 0080",
    location: "Dir, Khyber Pakhtunkhwa, Pakistan",
    imageUrl: `${import.meta.env.BASE_URL}profile.png`,
    cvUrl: "https://drive.google.com/file/d/1-rChRBxX_XIOfH-sDbvxxKQpIeN3QPrE/view?usp=sharing",
    socials: {
      github: "https://github.com/muhammadshoaib06",
      linkedin: "https://www.linkedin.com/in/muhammad-shoaib-flutter-dev/",
      instagram: "https://www.instagram.com/muhammadshoaib.06/"
    }
  },
  professionalSummary:
    "Senior Flutter Developer with 5 years of experience shipping and maintaining production mobile apps for international clients. Strong track record with Clean Architecture, Bloc/Cubit, Provider, and Riverpod, along with Firebase services including Auth, Firestore, Cloud Functions, Analytics, Crashlytics, and push notifications. Skilled in building offline-first systems with SQLite, Floor, Hive, and ObjectBox, and integrating REST, GraphQL, and WebSocket APIs for real-time, data-driven features. Experienced owning apps end-to-end — from architecture, dependency injection, and performance tuning to secure storage, IAP, CI/CD (GitHub Actions, Codemagic, Fastlane), and Play Store / App Store releases. Comfortable translating Figma and Adobe XD designs into pixel-perfect UI, writing unit/widget/integration tests, and collaborating remotely with Agile teams across the UK, EU, and Middle East. Also hands-on with AI-assisted development tools such as Cursor, Codex, and Claude to speed up delivery while keeping code quality high.",
  skills: [
    {
      category: "Flutter & Dart",
      items: ["Advanced Dart (Streams, RxDart)", "OOP & SOLID", "Clean Architecture (MVVM)", "Dependency Injection"]
    },
    {
      category: "State Management",
      items: ["Bloc", "Cubit", "Provider", "Riverpod"]
    },
    {
      category: "Offline-First & Performance",
      items: ["SQLite", "Floor", "Hive", "ObjectBox", "Profiling & Caching", "Widget Optimization"]
    },
    {
      category: "APIs & Backend",
      items: ["REST", "GraphQL", "WebSockets", "Firebase (Auth, Firestore, Functions, Analytics, Crashlytics, Push)"]
    },
    {
      category: "AI & Developer Tools",
      items: ["Cursor", "Codex", "Claude", "AI-assisted debugging & delivery"]
    },
    {
      category: "Quality & Delivery",
      items: ["Unit / Widget / Integration Testing", "CI/CD (GitHub Actions, Codemagic, Fastlane)", "Git"]
    },
    {
      category: "Security & Stores",
      items: ["Secure Storage & Encryption", "IAP", "Google Play & App Store Publishing"]
    },
    {
      category: "UI & Collaboration",
      items: ["Pixel-perfect UI (Figma / Adobe XD)", "Agile/Scrum (Jira, Trello, ClickUp)", "Code Reviews & Mentoring"]
    },
    {
      category: "Platforms",
      items: ["Kotlin", "Java", "Swift"]
    }
  ],
  experience: [
    {
      role: "Flutter Developer (Contract & Remote)",
      company: "ShiftOpus | UK (Remote)",
      period: "Dec 2025 – Apr 2026",
      description: [
        "Maintained and improved already published Flutter apps, focusing on stability, reliability, and a smooth user experience in production.",
        "Diagnosed and resolved production issues, reduced crashes, and delivered targeted fixes based on user reports and monitoring insights.",
        "Improved app performance through profiling, widget optimization, and smarter caching strategies.",
        "Strengthened offline-first capabilities so core features remained usable with poor or intermittent connectivity."
      ]
    },
    {
      role: "Sr. Flutter Developer",
      company: "CloudLaunch | UK (Remote)",
      period: "Jan 2023 – Oct 2025",
      description: [
        "Designed and developed scalable cross-platform mobile applications using Flutter, with Bloc/Cubit state management and Clean Architecture.",
        "Integrated REST APIs, GraphQL, and Firebase services to deliver real-time, data-driven features with strong security and consistent UI/UX.",
        "Collaborated with global Agile/Scrum teams on sprint planning, technical discussions, code reviews, and production issue resolution."
      ]
    },
    {
      role: "Sr. Flutter Developer",
      company: "Bridge Softwares | Tallinn (Part-time Remote)",
      period: "Aug 2024 – Sep 2025",
      description: [
        "Built and iterated on multiple cross-platform Flutter projects using Provider and Riverpod for clean, reactive, maintainable architectures.",
        "Integrated Firebase (Auth, Firestore, Cloud Functions, Analytics, Push Notifications) for secure, real-time, data-driven applications.",
        "Implemented AI-powered features to enhance product capabilities and user experience."
      ]
    },
    {
      role: "Sr. Flutter Developer",
      company: "JMM Technologies LTD | Peshawar",
      period: "Jun 2021 – Nov 2022",
      description: [
        "Led a team of Flutter developers on implementation strategy, coding standards, and sprint goals for timely, high-quality delivery.",
        "Developed enterprise-grade mobile apps with Google Maps, Firebase, and third-party APIs, including responsive UI and offline-first support.",
        "Conducted code reviews, mentoring, and technical documentation to uphold OOP, SOLID principles, and long-term maintainability."
      ]
    }
  ],
  projects: [
    {
      name: "FabPOS",
      company: "CloudLaunch",
      description:
        "FabPOS is a modern point-of-sale platform built to streamline day-to-day business operations for retailers and growing teams. It covers sales processing, purchase management, and inventory control in one cohesive mobile experience. The app helps businesses track stock levels, manage product catalogues, and keep sales records accurate and accessible. Designed for reliability in production environments, it supports smoother checkout workflows and clearer operational visibility across stores.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cloudlaunch.fabpos",
      imageUrl: "https://i.ibb.co/6RNXw0hX/SCR-20251028-lfjl.png"
    },
    {
      name: "FabMedic",
      company: "CloudLaunch",
      description:
        "FabMedic is a healthcare companion app that helps patients manage personal and family medical information in one secure place. Users can review test results, medications, immunization history, visit summaries, and clinical notes shared by care providers. The app also supports appointment scheduling, care-team communication, and secure sharing of medical records when needed. It is designed to make health information easier to access, organize, and stay on top of — for both individuals and families.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cloudlaunch.fabmedic",
      appStoreUrl: "https://apps.apple.com/us/app/fabmedic/id1659138282",
      imageUrl: "https://i.ibb.co/3mW7bVvp/SCR-20251028-lful.png"
    },
    {
      name: "MRL Admin",
      company: "CloudLaunch",
      description:
        "MRL Admin is the operations console for a vehicle financing platform, built for administrators who manage loan workflows end to end. It supports application review, customer onboarding, payment tracking, and performance analytics in a structured dashboard experience. The app helps teams monitor portfolio health, resolve operational issues quickly, and keep financing processes consistent across users. It was designed for production use with a focus on clarity, control, and reliable day-to-day administration.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cloudlaunch.mrl&hl=en",
      imageUrl: "https://i.ibb.co/m5HtWq6d/Whats-App-Image-2025-07-31-at-13-06-45.jpg"
    },
    {
      name: "MRL Finance – Customer",
      company: "CloudLaunch",
      description:
        "MRL Finance – Customer is the client-facing companion to the MRL financing suite. Customers can view vehicle details, check payment history, and complete payments through integrated channels such as M-PESA. The app focuses on a clear, mobile-first experience so users can stay informed about their financing status without contacting support for routine updates. It complements the admin platform by giving customers self-service access to the information and actions they need most.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cloudlaunch.mrl.customer&hl=en",
      imageUrl: "https://i.ibb.co/m5HtWq6d/Whats-App-Image-2025-07-31-at-13-06-45.jpg"
    },
    {
      name: "Fly-ME",
      company: "CloudLaunch",
      description:
        "Fly-ME is a flight ticket booking application that simplifies search, reservation, and payment for travelers. Users can explore flight options, check real-time availability, and complete bookings through a secure checkout flow. The product emphasizes a clean booking journey — from discovering routes to confirming reservations — with a focus on usability and reliability. It was built to support a modern travel experience where speed, clarity, and trust matter at every step.",
      imageUrl: ""
    },
    {
      name: "FastDrop – eCommerce Shopping",
      company: "CloudLaunch",
      description:
        "FastDrop is a cross-border e-commerce shopping app that brings international stores such as Shein, Amazon, AliExpress, Temu, and Alibaba into one convenient platform. Shoppers can browse catalogues, manage carts, track orders in real time, and complete checkout through secure payment options. The app handles international logistics and last-mile delivery so customers can shop globally without juggling multiple storefronts. It is built for a smooth shopping experience — from discovery and checkout through to delivery updates.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.fastdrop.app&hl=en",
      imageUrl: ""
    },
    {
      name: "Islam Simplified",
      company: "CloudLaunch",
      description:
        "Islam Simplified is an education-focused learning app designed for anyone curious about Islam, including beginners and non-Muslims exploring the faith. It offers well-structured articles, educational videos, a full Quran translation experience, an FAQ section, and a glossary of key Islamic terms. Learners can follow content at their own pace, save favorites, and receive personalized recommendations based on their interests. The app brings essential learning resources together in a clear, modern interface that makes understanding Islam more approachable.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aburuqayyah.salah.SalahWidget&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/islam-simplified/id6751723151",
      imageUrl: ""
    },
    {
      name: "Path to Arabic: Learn Arabic",
      company: "CloudLaunch",
      description:
        "Path to Arabic is a structured Arabic learning platform that helps users build language skills for everyday communication and Quranic understanding. It combines guided lessons, video tutorials, gamified practice, quizzes, and progress tracking in a progressive learning path. The app supports both Modern Standard Arabic foundations and practical engagement tools that make retention more motivating. With cross-device progress syncing and a clear curriculum, it offers a complete mobile learning experience for beginners and continuing students alike.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.path.to.arabic&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/path-to-arabic/id6741145209",
      imageUrl: "https://i.ibb.co/Tq4pnVQG/SCR-20251028-lhjb.png"
    },
    {
      name: "Miswarak Consumer App",
      company: "CloudLaunch",
      description:
        "Miswarak Consumer is a delivery-focused mobile app that helps customers place orders, manage deliveries, and follow progress with greater confidence. It streamlines the consumer journey around order creation, status visibility, and delivery tracking so users always know where things stand. The experience is designed around reliability and clarity — reducing friction between browsing, ordering, and receiving goods. It supports a smoother customer experience for on-demand delivery workflows in production environments.",
      imageUrl: "https://i.ibb.co/cSJ93fys/SCR-20251028-lged.png"
    },
    {
      name: "Luna Little Bedtime Stories",
      company: "CloudLaunch",
      description:
        "Luna Little Bedtime Stories is a child-friendly storytelling app created to make nighttime reading calm, engaging, and easy for families. It offers narrated bedtime tales in a gentle, age-appropriate experience that helps children wind down before sleep. The design prioritizes simplicity, warmth, and delightful storytelling moments for young listeners. Built for kids and parents alike, it turns bedtime into a more consistent and enjoyable shared routine.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.kid.story.generator&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/luna-little-bedtime-stories/id6471000539",
      imageUrl: ""
    },
    {
      name: "Invogen",
      company: "JMM Technologies",
      description:
        "Invogen is an invoicing solution built for small businesses and larger organizations that need a cleaner way to create and manage invoices. It helps teams generate professional invoices, keep billing records organized, and reduce manual follow-up around payments. The product focuses on practical business workflows — making invoicing faster, clearer, and easier to maintain as volume grows. It is designed to support both everyday freelancers and structured business operations.",
      availability: "Available on Play Store & App Store",
      imageUrl: ""
    },
    {
      name: "Hijria",
      company: "JMM Technologies",
      description:
        "Hijria is an Islamic lifestyle app that brings everyday faith tools into one thoughtful mobile experience. Core features include a Qibla finder, Azaan notifications, a digital Tasbeeh, Hijri calendar support, and event reminders. The app is designed to help users stay consistent with prayer and spiritual routines while keeping the interface simple and accessible. It combines practical utility with a calm, purpose-driven user experience for daily Islamic practice.",
      availability: "Available on Play Store & App Store",
      imageUrl: ""
    },
    {
      name: "DirtX",
      company: "Outsourcing Projects",
      description:
        "DirtX is a construction management application built to improve coordination across projects, teams, and on-site operations. It supports task management, project tracking, and communication so stakeholders can stay aligned as work progresses. The app helps reduce operational confusion by centralizing tickets, updates, and progress visibility in one place. Designed for real-world construction workflows, it focuses on practical usability for both office and field teams.",
      availability: "Locally distributed",
      imageUrl: "https://i.ibb.co/KcHqYXBj/SCR-20251028-lbbq.png"
    },
    {
      name: "FlowCash Pro",
      company: "Outsourcing Projects",
      description:
        "FlowCash Pro is a Flutter finance application that helps agencies manage cash flow, banks, staff, and transactions with Firebase Auth and Firestore. It includes role-based access for administrators and staff, with agency-scoped dashboards that keep each organization’s data clearly separated. Teams can handle bank transfers, allocate staff credit, and monitor balances in real time for stronger day-to-day financial control. The product was built for operational clarity — giving agencies a reliable system to track money movement and accountability across their workforce.",
      availability: "Locally distributed",
      imageUrl: `${import.meta.env.BASE_URL}projects/flowcash-pro.png`
    }
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      university: "COMSATS University, Abbottabad, Pakistan",
      year: ""
    }
  ],
  languages: [
    { name: "English", proficiency: "Conversational" },
    { name: "Urdu", proficiency: "Fluent" }
  ]
};
