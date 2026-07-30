import type { Translations } from '../types';

export const zh: Translations = {
  nav: {
    about: '关于',
    skills: '技能',
    experience: '经历',
    projects: '项目',
    contact: '联系',
  },
  header: {
    available: '可接远程合同项目',
    title: '高级 Flutter 开发工程师',
    tagline:
      '端到端交付生产级 Flutter 应用 — Clean Architecture、离线优先系统，以及面向英国、欧盟与中东团队的商店就绪发布。',
    downloadCv: '下载简历',
    viewProjects: '查看项目',
    location: '巴基斯坦开伯尔-普赫图赫瓦省，Dir',
    badge: '5+ 年 · Flutter · 远程',
  },
  about: {
    title: '职业概要',
    subtitle: '以生产交付为导向的 Flutter 开发，具备架构主导与商店发布经验。',
    summary:
      '高级 Flutter 开发工程师，拥有 5 年面向国际客户交付与维护生产级移动应用的经验。在 Clean Architecture、Bloc/Cubit、Provider 与 Riverpod 方面有扎实积累，并熟练使用 Firebase 服务，包括 Auth、Firestore、Cloud Functions、Analytics、Crashlytics 与推送通知。擅长使用 SQLite、Floor、Hive 与 ObjectBox 构建离线优先系统，并集成 REST、GraphQL 与 WebSocket API，实现实时、数据驱动功能。具备端到端应用主导经验 — 从架构、依赖注入与性能调优，到安全存储、IAP、CI/CD（GitHub Actions、Codemagic、Fastlane）以及 Play Store / App Store 发布。能够将 Figma 与 Adobe XD 设计还原为像素级 UI，编写单元/组件/集成测试，并与英国、欧盟及中东的 Agile 团队远程协作。同时熟练使用 Cursor、Codex、Claude 等 AI 辅助开发工具，在保证代码质量的同时加快交付。',
    years: '年经验',
    apps: '已上线应用',
    clients: '远程客户',
  },
  skills: {
    title: '优势与专长',
    subtitle: '从 Clean Architecture、离线优先存储，到 CI/CD 与商店发布。',
    skillsCount: '{n} 项技能',
    categories: {
      'Flutter & Dart': 'Flutter 与 Dart',
      'State Management': '状态管理',
      'Offline-First & Performance': '离线优先与性能',
      'APIs & Backend': 'API 与后端',
      'AI & Developer Tools': 'AI 与开发工具',
      'Quality & Delivery': '质量与交付',
      'Security & Stores': '安全与应用商店',
      'UI & Collaboration': 'UI 与协作',
      Platforms: '平台',
    },
  },
  experience: {
    title: '职业经历',
    subtitle: '远程与现场角色，交付稳定、可扩展的 Flutter 产品。',
    jobs: [
      {
        role: 'Flutter 开发工程师（合同 & 远程）',
        company: 'ShiftOpus | 英国（远程）',
        period: '2025年12月 – 2026年4月',
        description: [
          '维护并改进已上线的 Flutter 应用，聚焦生产环境中的稳定性、可靠性与流畅的用户体验。',
          '诊断并解决生产问题，降低崩溃率，基于用户反馈与监控洞察交付针对性修复。',
          '通过性能分析、组件优化与更智能的缓存策略提升应用性能。',
          '强化离线优先能力，使核心功能在弱网或间歇连接下仍可使用。',
        ],
      },
      {
        role: '高级 Flutter 开发工程师',
        company: 'CloudLaunch | 英国（远程）',
        period: '2023年1月 – 2025年10月',
        description: [
          '使用 Flutter 设计并开发可扩展的跨平台移动应用，采用 Bloc/Cubit 状态管理与 Clean Architecture。',
          '集成 REST API、GraphQL 与 Firebase 服务，交付具备强安全性与一致 UI/UX 的实时、数据驱动功能。',
          '与全球 Agile/Scrum 团队协作，参与冲刺规划、技术讨论、代码评审与生产问题处理。',
        ],
      },
      {
        role: '高级 Flutter 开发工程师',
        company: 'Bridge Softwares | 塔林（兼职远程）',
        period: '2024年8月 – 2025年9月',
        description: [
          '使用 Provider 与 Riverpod 构建并迭代多个跨平台 Flutter 项目，打造清晰、响应式、可维护的架构。',
          '集成 Firebase（Auth、Firestore、Cloud Functions、Analytics、推送通知），构建安全、实时、数据驱动的应用。',
          '实现 AI 驱动功能，增强产品能力与用户体验。',
        ],
      },
      {
        role: '高级 Flutter 开发工程师',
        company: 'JMM Technologies LTD | 白沙瓦',
        period: '2021年6月 – 2022年11月',
        description: [
          '带领 Flutter 开发团队制定实现策略、编码规范与冲刺目标，确保按时高质量交付。',
          '使用 Google Maps、Firebase 与第三方 API 开发企业级移动应用，包含响应式 UI 与离线优先支持。',
          '开展代码评审、辅导与技术文档工作，坚持 OOP、SOLID 原则与长期可维护性。',
        ],
      },
    ],
  },
  projects: {
    title: '项目与工作履历',
    subtitle: '精选覆盖 POS、医疗、学习、金融与物流的生产应用 — 按公司分组。',
    all: '全部',
    showMore: '显示更多',
    showLess: '收起',
    playStore: 'Play Store',
    appStore: 'App Store',
    clientInternal: '客户 / 内部项目',
    locallyDistributed: '本地分发',
    availableStores: '可在 Play Store 与 App Store 获取',
    companies: {
      CloudLaunch: 'CloudLaunch',
      'JMM Technologies': 'JMM Technologies',
      'Outsourcing Projects': '外包项目',
    },
    descriptions: {
      FabPOS:
        'FabPOS 是一款现代化的销售点（POS）平台，旨在简化零售商与成长型团队的日常业务运营。它在统一的移动体验中覆盖销售处理、采购管理与库存控制。该应用帮助企业跟踪库存水平、管理产品目录，并保持销售记录准确且可访问。面向生产环境的可靠性设计，支持更顺畅的结账流程与跨门店更清晰的运营可见性。',
      FabMedic:
        'FabMedic 是一款医疗健康伴侣应用，帮助患者在一个安全位置管理个人与家庭医疗信息。用户可查看检测结果、用药、接种史、就诊摘要以及护理提供者共享的临床笔记。应用还支持预约安排、护理团队沟通，以及在需要时安全共享医疗记录。它旨在让健康信息更易于获取、整理与跟进 — 适用于个人与家庭。',
      'MRL Admin':
        'MRL Admin 是车辆融资平台的运营控制台，面向需要端到端管理贷款流程的管理员。它在结构化仪表盘中支持申请审核、客户入驻、付款跟踪与绩效分析。该应用帮助团队监控投资组合健康状况、快速解决运营问题，并在用户间保持融资流程一致。面向生产使用设计，强调清晰度、控制力与可靠的日常管理。',
      'MRL Finance – Customer':
        'MRL Finance – Customer 是 MRL 融资套件面向客户的配套应用。客户可查看车辆详情、核对付款历史，并通过 M-PESA 等集成渠道完成付款。应用聚焦清晰的移动优先体验，使用户无需为常规更新联系客服即可了解融资状态。它通过为客户提供最需要的信息与操作的自助访问，补充管理平台。',
      'Fly-ME':
        'Fly-ME 是一款机票预订应用，简化旅客的搜索、预订与支付流程。用户可浏览航班选项、查看实时可用性，并通过安全结账流程完成预订。产品强调清晰的预订旅程 — 从发现航线到确认预订 — 并注重可用性与可靠性。它旨在支持现代旅行体验，让速度、清晰度与信任贯穿每一步。',
      'FastDrop – eCommerce Shopping':
        'FastDrop 是一款跨境电商购物应用，将 Shein、Amazon、AliExpress、Temu、Alibaba 等国际商店整合到一个便捷平台。购物者可浏览目录、管理购物车、实时跟踪订单，并通过安全支付选项完成结账。应用处理国际物流与最后一公里配送，让客户无需切换多个店铺即可全球购物。它为流畅购物体验而构建 — 从发现与结账到配送更新。',
      'Islam Simplified':
        'Islam Simplified 是一款面向教育的学习应用，适合任何对伊斯兰教感兴趣的人，包括初学者与探索信仰的非穆斯林。它提供结构清晰的文章、教学视频、完整的《古兰经》翻译体验、常见问题与关键伊斯兰术语词汇表。学习者可按自己的节奏学习、保存收藏，并根据兴趣获得个性化推荐。应用将核心学习资源汇集在清晰、现代的界面中，让理解伊斯兰教更易上手。',
      'Path to Arabic: Learn Arabic':
        'Path to Arabic 是一款结构化的阿拉伯语学习平台，帮助用户建立日常交流与《古兰经》理解所需的语言能力。它在渐进式学习路径中结合引导课程、视频教程、游戏化练习、测验与进度跟踪。应用既支持现代标准阿拉伯语基础，也提供提升学习动力的实践互动工具。凭借跨设备进度同步与清晰课程体系，为初学者与进阶学习者提供完整的移动学习体验。',
      'Miswarak Consumer App':
        'Miswarak Consumer 是一款以配送为核心的移动应用，帮助客户下单、管理配送，并以更高信心跟踪进度。它围绕订单创建、状态可见性与配送跟踪简化消费旅程，让用户始终清楚当前进展。体验设计强调可靠性与清晰度 — 减少浏览、下单与收货之间的摩擦。它支持生产环境中按需配送工作流的更顺畅客户体验。',
      'Luna Little Bedtime Stories':
        'Luna Little Bedtime Stories 是一款面向儿童的故事应用，旨在让夜间阅读对家庭来说平静、有趣且轻松。它以温和、适龄的体验提供睡前故事旁白，帮助孩子在入睡前放松。设计优先考虑简洁、温暖，以及为年幼听众带来愉悦的讲述时刻。同时面向孩子与家长，让睡前时间成为更稳定、更愉快的共享日常。',
      Plodyo:
        'Plodyo 是一款面向儿童的 AI 故事应用，帮助家长、教育者和机构用多种语言创建个性化儿童故事，涵盖文本、插图、有声书和视频。基于 Flutter 与 Supabase 构建，支持按角色注册（家长 / 教育者 / 机构）、故事与视频生成、书库浏览、订阅，以及长时间内容任务的推送通知。',
      Invogen:
        'Invogen 是一款面向小型企业与更大组织的发票解决方案，提供更清晰的发票创建与管理方式。它帮助团队生成专业发票、整理账单记录，并减少围绕付款的人工跟进。产品聚焦实用的业务工作流 — 让开票更快、更清晰，并在业务量增长时更易维护。它同时支持日常自由职业者与结构化的企业运营。',
      Hijria:
        'Hijria 是一款伊斯兰生活方式应用，将日常信仰工具整合到一个精心设计的移动体验中。核心功能包括朝拜方向查找、唤礼通知、电子念珠、回历支持与事件提醒。应用旨在帮助用户保持礼拜与精神日常的一致性，同时保持界面简洁易用。它将实用功能与平静、有目的的用户体验相结合，服务日常伊斯兰实践。',
      DirtX:
        'DirtX 是一款施工管理应用，用于改善项目、团队与现场作业之间的协调。它支持任务管理、项目跟踪与沟通，使相关方在工作推进过程中保持对齐。应用通过将工单、更新与进度可见性集中到一处，减少运营混乱。面向真实施工工作流设计，注重办公室与现场团队的实用可用性。',
      'FlowCash Pro':
        'FlowCash Pro 是一款基于 Flutter 的金融应用，帮助机构使用 Firebase Auth 与 Firestore 管理现金流、银行、员工与交易。它为管理员与员工提供基于角色的访问控制，并以机构范围的仪表盘清晰隔离各组织数据。团队可处理银行转账、分配员工额度，并实时监控余额，实现更强的日常财务控制。产品为运营清晰度而构建 — 为机构提供可靠系统，以跟踪资金流动与团队问责。',
    },
  },
  education: {
    title: '教育与语言',
    education: '教育',
    languages: '语言',
    degree: '软件工程学士',
    university: 'COMSATS 大学，巴基斯坦阿伯塔巴德',
    spoken: [
      { name: '英语', proficiency: '会话水平' },
      { name: '乌尔都语', proficiency: '流利' },
    ],
  },
  contact: {
    title: '联系我',
    heading: '让我们打造扎实的产品',
    body: '欢迎远程 Flutter 合同与全职机会。乐于讨论架构、生产修复，或助力您的下一次发布。',
    emailMe: '发邮件',
    whatsapp: 'WhatsApp',
    downloadCv: '下载简历',
  },
  footer: {
    rights: '版权所有。',
  },
  language: '语言',
};
