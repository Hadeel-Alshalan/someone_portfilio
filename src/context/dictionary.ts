export interface ProjectDetail {
  icon?: string;
  title: string;
  content: string;
  impact?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  tech: string[];
  metric: string;
  metricAr: string;
  stats?: { value: string; label: string; labelAr: string; icon: string }[];
  highlights?: { icon: string; title: string; titleAr: string; desc: string; descAr: string }[];
  details: ProjectDetail[];
  detailsAr: ProjectDetail[];
  coverImage?: string;
  images?: string[];
  color: 'cyan' | 'violet' | 'pink' | 'emerald';
}

export const dictionary = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      experience: "الخبرات",
      projects: "المشاريع",
      certifications: "الشهادات",
      contact: "تواصل"
    },
    hero: {
      badge: "متاح للمشاريع الريادية",
      title: "م. ريان الشهري",
      subtitle: "Founding AI Systems Architect • Generative AI Specialist",
      description: "أقوم بتصميم منصات ذكاء اصطناعي للمؤسسات تجمع بين التعلم العميق، الأنظمة الموزعة، وهندسة السحابة الحديثة لتقديم تجارب مستقبلية ذكية وقابلة للتوسع.",
      contactBtn: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
      scrollDown: "اسحب للأسفل"
    },
    about: {
      badge: "البعد الهندسي",
      title: "من أنا",
      subtitle: "معماري أنظمة ذكاء اصطناعي متقدم ومطور حلول ذكاء اصطناعي توليدي",
      paragraph1: "أؤمن بأن معمار أنظمة الذكاء الاصطناعي يجب أن يمتلك رؤية شمولية دقيقة، تماماً كمهندس البناء الذي يربط بين القواعد المتينة والتصميم المستقبلي. لا يمكن تصميم أنظمة ذكاء اصطناعي فعالة دون فهم عميق للبنية الأساسية للشبكات، والأنظمة الموزعة، بالإضافة إلى خوارزميات الاستنتاج المعقدة.",
      paragraph2: "انطلاقاً من هذا المفهوم، تخصصت في هندسة البنى التحتية للذكاء الاصطناعي التوليدي، وتطوير وكلاء برمجية مستقلة قادرة على التخطيط، التعلم الذاتي، واتخاذ القرارات الذكية لتنفيذ مهام مؤسسية معقدة بكفاءة تشغيلية غير مسبوقة.",
      paragraph3: "خلال مسيرتي، قمت بقيادة تطوير وكلاء وأنظمة RAG للمؤسسات، وتصميم محركات استدلال موزعة قادرة على العمل تحت ضغط تشغيلي عالٍ في كبرى بيئات العمل الرقمية في الشرق الأوسط والعالم.",
      paragraph4: "اليوم، أكرس مهاراتي لربط البحوث النظرية المتقدمة بالتطبيقات العملية عالية الإنتاجية لبناء مستقبل الأنظمة المستقلة.",
      stats: {
        experience: "سنوات خبرة",
        projects: "مشاريع ريادية",
        certifications: "شهادات عالمية",
        papers: "أوراق بحثية"
      }
    },
    skills: {
      badge: "القدرات الهندسية",
      title: "المهارات التقنية المتخصصة",
      description: "حقيبة مهارات متكاملة تغطي كامل الطيف الهندسي لبيئات الذكاء الاصطناعي الحديثة",
      categories: {
        ai: "الذكاء الاصطناعي والتعلم الآلي",
        cyber: "البنية التحتية والمنصات",
        embedded: "هندسة النماذج والوكلاء",
        systems: "التفكير النظمي"
      }
    },
    experience: {
      badge: "المسيرة المهنية",
      title: "الخبرات والتعليم",
      description: "رحلة مهنية وأكاديمية تركز على بناء وتطوير الأنظمة الذكية المستقلة",
      viewCertificate: "عرض الاعتماد"
    },
    projects: {
      badge: "الأنظمة الذكية المطورة",
      title: "المشاريع البارزة",
      description: "نماذج حية للتصميم المعماري الفائق وأنظمة الاستدلال الموزعة وحوسبة الوكلاء المستقلين.",
      projectGallery: "معرض المشاريع والحلول",
      galleryDesc: "مجموعة مكملة من المختبرات الهندسية والحلول في مجالات الذكاء الاصطناعي والوكلاء المستقلين.",
      accuracy: "دقة التنبؤ",
      compliance: "نسبة الامتثال",
      speed: "سرعة الاستجابة"
    },
    certifications: {
      badge: "الاعتمادات المهنية",
      title: "الشهادات والاعتمادات العالمية",
      description: "اعتمادات وشهادات متخصصة تؤكد التميز في مجالات هندسة السحابة وتطبيقات الذكاء الاصطناعي",
      categories: {
        cloud: "الذكاء الاصطناعي والحوسبة السحابية",
        ml: "تخصص التعلم الآلي وهندسة البيانات",
        specialty: "التطوير المتقدم والاعتمادات المهنية"
      }
    },
    research: {
      badge: "النشاط البحثي",
      title: "الأوراق البحثية المنشورة",
      description: "المساهمات الأكاديمية والنظرية في تطوير هندسة الذكاء الاصطناعي وتحسين أداء النماذج الضخمة"
    },
    contact: {
      badge: "قنوات الاتصال",
      title: "لنبنِ النظام الذكي القادم معاً!",
      description: "سواء كنت بحاجة إلى استشارة لتصميم بنية تحتية خاصة للنماذج اللغوية، أو ترغب في تطوير وكلاء ذكاء اصطناعي مستقلين لمنشأتك، أنا هنا للمساعدة.",
      form: {
        title: "أرسل لي رسالة",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        namePlaceholder: "اسمك الكريم",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "اكتب تفاصيل طلبك هنا...",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.",
        error: "عذراً، حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
      },
      info: {
        email: "البريد الإلكتروني",
        location: "الموقع",
        locationValue: "دبي، الإمارات العربية المتحدة"
      },
      social: {
        follow: "تابعني على المنصات التقنية"
      },
      availability: {
        title: "متاح للعمل الاستشاري",
        description: "أعمل حالياً كمهندس استشاري للمشاريع الكبرى والشركات الناشئة الطموحة. تواصل الآن لمناقشة مشروعك!"
      }
    },
    footer: {
      copyright: "© 2026 م. ريان الشهري. جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى"
    },
    language: {
      switchTo: "English",
      current: "العربية"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      badge: "Available for Elite Projects",
      title: "Eng. Rayyan Al-Shehri",
      subtitle: "Founding AI Systems Architect • Generative AI Specialist",
      description: "Designing enterprise-grade AI platforms combining deep learning, distributed systems, and modern cloud architecture to power scalable, futuristic experiences.",
      contactBtn: "Contact Me",
      downloadCv: "Download CV",
      scrollDown: "Scroll Down"
    },
    about: {
      badge: "WHO I AM",
      title: "About Me",
      subtitle: "Founding AI Systems Architect & Generative AI Specialist",
      paragraph1: "I believe that an AI Systems Architect must possess a holistic vision, much like a structural engineer who bridges raw foundation with futuristic design. Designing high-performance AI systems requires deep knowledge of distributed systems, network infrastructure, and complex inference algorithms.",
      paragraph2: "Driven by this principle, I have specialized in generative AI infrastructure and the development of autonomous agent systems capable of planning, learning, and making logical decisions to execute complex business tasks with unprecedented operational efficiency.",
      paragraph3: "Throughout my career, I have led the deployment of production-grade LLM architectures, RAG infrastructure, and high-throughput distributed inference engines for large-scale enterprise environments.",
      paragraph4: "Today, I focus on bridging cutting-edge academic research with practical, production-level engineering to build the next generation of autonomous intelligence.",
      stats: {
        experience: "Years of Experience",
        projects: "Elite Projects",
        certifications: "Certifications",
        papers: "Research Papers"
      }
    },
    skills: {
      badge: "TECHNICAL EXPERTISE",
      title: "Specialized Tech Stack",
      description: "A comprehensive engineering stack covering the entire lifecycle of modern AI and distributed infrastructures",
      categories: {
        ai: "AI & Machine Learning",
        cyber: "Infrastructure & Platforms",
        embedded: "LLM & Agent Engineering",
        systems: "Systems Thinking"
      }
    },
    experience: {
      badge: "CAREER TIMELINE",
      title: "Experience & Education",
      description: "My professional and academic journey in building autonomous, enterprise-grade intelligent systems",
      viewCertificate: "View Credential"
    },
    projects: {
      badge: "ENGINEERED SOLUTIONS",
      title: "Featured Projects",
      description: "Real-world instances of advanced system design, distributed inference optimization, and multi-agent reasoning systems.",
      projectGallery: "Project Gallery",
      galleryDesc: "A complementary collection of engineering labs and solutions in AI, agents, and distributed infrastructures.",
      accuracy: "Prediction Accuracy",
      compliance: "Compliance Rate",
      speed: "Response Time"
    },
    certifications: {
      badge: "CREDENTIALS",
      title: "Certifications & Licenses",
      description: "Professional credentials and technical specializations verifying expertise in cloud and AI architecture",
      categories: {
        cloud: "AI & Cloud Technologies",
        ml: "ML Specialty & Data Engineering",
        specialty: "Advanced Development Licenses"
      }
    },
    research: {
      badge: "ACADEMIC OUTREACH",
      title: "Research Papers",
      description: "Academic contributions and theoretical insights focusing on multi-agent collaboration, LLM tuning, and semantic intelligence"
    },
    contact: {
      badge: "GET IN TOUCH",
      title: "Let's Build the Future of AI Together",
      description: "Whether you need consultation on setting up a private enterprise LLM infrastructure, or developing custom multi-agent execution workflows, I'm here to help.",
      form: {
        title: "Send Me a Message",
        name: "Name",
        email: "Email Address",
        message: "Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Describe your project or inquiry...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! I will get back to you soon.",
        error: "Oops! Something went wrong. Please try again."
      },
      info: {
        email: "Email",
        location: "Location",
        locationValue: "Dubai, United Arab Emirates"
      },
      social: {
        follow: "Follow me on technical platforms"
      },
      availability: {
        title: "Available for Consulting",
        description: "Currently open to high-impact contract roles, architectural reviews, and advisory engagements. Get in touch to schedule a briefing."
      }
    },
    footer: {
      copyright: "© 2026 Eng. Rayyan Al-Shehri. All rights reserved.",
      backToTop: "Back to Top"
    },
    language: {
      switchTo: "العربية",
      current: "English"
    }
  }
};

export const projectsData: ProjectData[] = [
  {
    id: "synapse-os",
    title: "SynapseOS",
    titleAr: "ساينابس أو إس (SynapseOS)",
    description: "A fully autonomous AI operating system capable of multi-agent reasoning, memory persistence, task planning, and intelligent workflow execution.",
    descriptionAr: "نظام تشغيل ذكاء اصطناعي مستقل بالكامل قادر على الاستنتاج متعدد الوكلاء، واستمرارية الذاكرة، وتخطيط المهام، وتنفيذ سير العمل الذكي.",
    tech: ["AI Agents", "LangChain", "VectorDB", "FastAPI", "Docker"],
    metric: "98% Task Success",
    metricAr: "98% نجاح المهام",
    color: "cyan",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
    ],
    stats: [
      { value: "25+", label: "Active Agents", labelAr: "وكيل نشط", icon: "cpu" },
      { value: "<3s", label: "Task Execution", labelAr: "زمن تنفيذ المهمة", icon: "zap" },
      { value: "98%", label: "Accuracy Rate", labelAr: "معدل الدقة", icon: "shield" }
    ],
    highlights: [
      { icon: "cpu", title: "Multi-Agent Networks", titleAr: "شبكات وكلاء متعددة", desc: "Cooperative workflows where specialization agents solve sub-tasks", descAr: "مسارات عمل تعاونية حيث تحل وكلاء متخصصة مهاماً فرعية" },
      { icon: "database", title: "Vector Memory Bank", titleAr: "بنك ذاكرة متجهية", desc: "Long-term vector database memories to persist context across runs", descAr: "ذاكرة طويلة الأجل لحفظ السياق عبر قواعد البيانات المتجهة" },
      { icon: "zap", title: "Dynamic Orchestrator", titleAr: "منسق ديناميكي", desc: "Hierarchical task planner allocating resources based on complexity", descAr: "مخطط مهام هرمي يوزع الموارد بناءً على مستوى التعقيد" }
    ],
    details: [
      { title: "Autonomous Core Design", content: "Built with hierarchical task planners that break user commands into structured JSON DAGs, directing sub-agents to carry out execution autonomously.", impact: "Automates complex multi-step digital processes." },
      { title: "Distributed Memory Persistence", content: "Integrates ChromaDB and Redis to manage short-term chat context and long-term semantic knowledge graph recall.", impact: "Achieves near-zero context leakage." }
    ],
    detailsAr: [
      { title: "تصميم النواة الذاتية", content: "بنيت بنظام تخطيط مهام هرمي يقوم بتجزئة أوامر المستخدم إلى مخططات تنفيذية هيكلية (JSON DAGs)، ويوجه الوكلاء الفرعيين لإكمالها تلقائياً.", impact: "أتمتة العمليات الرقمية المعقدة متعددة الخطوات." },
      { title: "استمرارية الذاكرة الموزعة", content: "تكامل مع ChromaDB و Redis لإدارة سياق الدردشة قصير المدى واسترجاع الرسوم المعرفية الدلالية طويلة المدى.", impact: "تجنب كامل لتسريب سياق المحادثات." }
    ]
  },
  {
    id: "omni-vision",
    title: "OmniVision AI",
    titleAr: "أومني فيجن (OmniVision AI)",
    description: "Real-time multimodal surveillance intelligence platform using computer vision and behavioral anomaly detection.",
    descriptionAr: "منصة ذكاء اصطناعي متعددة الوسائط للمراقبة الذكية لحظياً باستخدام الرؤية الحاسوبية واكتشاف السلوك الشاذ.",
    tech: ["Computer Vision", "PyTorch", "YOLOv8", "CUDA", "FastAPI"],
    metric: "99.2% Detection Acc.",
    metricAr: "99.2% دقة الكشف",
    color: "violet",
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=600&auto=format&fit=crop"
    ],
    stats: [
      { value: "60 FPS", label: "Processing Speed", labelAr: "سرعة المعالجة", icon: "activity" },
      { value: "<150ms", label: "Latency", labelAr: "زمن الاستجابة", icon: "zap" },
      { value: "99.2%", label: "Detection Accuracy", labelAr: "دقة التعرف والكشف", icon: "eye" }
    ],
    highlights: [
      { icon: "eye", title: "Behavioral Recognition", titleAr: "التعرف السلوكي", desc: "Deep temporal models evaluating action patterns for danger", descAr: "نماذج زمنية عميقة تقيم أنماط السلوك لتحديد المخاطر" },
      { icon: "activity", title: "Edge Acceleration", titleAr: "تسريع الحوسبة الطرفية", desc: "Direct TensorRT optimizations enabling 60fps on local edge nodes", descAr: "تحسينات TensorRT مباشرة تتيح معالجة 60 إطاراً بالثانية طرفياً" },
      { icon: "shield", title: "Zero False Alarms", titleAr: "إنذارات خاطئة معدومة", desc: "Dual classification filters screening out noise and dynamic shadows", descAr: "مرشحات تصنيف مزدوجة تصفي الضوضاء والظلال المتحركة" }
    ],
    details: [
      { title: "Multimodal Video Pipeline", content: "Processes real-time RTSP camera feeds, extracting spatial frame vectors and matching temporal motion sequences with trained anomaly baselines.", impact: "Deploys on low-power Edge NVIDIA hardware successfully." },
      { title: "Real-Time CUDA Operations", content: "Utilizes optimized GPU shaders and multi-threaded frame queue ingestion to keep latencies below the critical threshold.", impact: "Reduces processing times from 1.2s to 120ms." }
    ],
    detailsAr: [
      { title: "خط معالجة الفيديو متعدد الوسائط", content: "يعالج بث الكاميرات الحي بروتوكول RTSP، مستخرجاً متجهات إطارات الفيديو ومطابقاً الأنماط الزمنية للحركة مع السلوكيات الشاذة المدربة.", impact: "يعمل بنجاح على أجهزة NVIDIA الطرفية منخفضة الطاقة." },
      { title: "عمليات CUDA اللحظية", content: "يوظف معالجات تظليل الرسوميات المحسّنة وطوابير الإطارات متعددة الخيوط للحفاظ على زمن استجابة دون حد الخطر.", impact: "تقليل زمن المعالجة من 1.2 ثانية إلى 120 مللي ثانية." }
    ]
  },
  {
    id: "cortex-gpt",
    title: "CortexGPT Enterprise",
    titleAr: "كورتكس جي بي تي (CortexGPT Enterprise)",
    description: "Private enterprise LLM infrastructure with secure retrieval-augmented generation and internal AI copilots.",
    descriptionAr: "بنية تحتية خاصة للنماذج اللغوية الضخمة للمؤسسات مع توليد مسترجع معزز آمن ووكلاء مساعدين للذكاء الاصطناعي الداخلي.",
    tech: ["LLMs", "RAG Systems", "Kubernetes", "Pinecone", "OAuth2"],
    metric: "100% Data Isolation",
    metricAr: "100% عزل البيانات",
    color: "pink",
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
    ],
    stats: [
      { value: "100%", label: "Data Sovereignty", labelAr: "سيادة البيانات والخصوصية", icon: "lock" },
      { value: "10k+", label: "Concurrent Queries", labelAr: "استعلام متزامن", icon: "activity" },
      { value: "85%", label: "Cost Efficiency", labelAr: "توفير التكاليف السحابية", icon: "trending-up" }
    ],
    highlights: [
      { icon: "lock", title: "Enterprise Firewall", titleAr: "جدار حماية مؤسسي", desc: "No data is leaked outwards; fully self-hosted model deployments", descAr: "لا تسرب للبيانات خارج المؤسسة؛ نماذج مستضافة ذاتياً بالكامل" },
      { icon: "database", title: "Sub-Second RAG", titleAr: "استرجاع معزز خاطف", desc: "Vector indexing linking knowledge repositories to prompt contexts", descAr: "فهرسة متجهية تربط مستودعات المعرفة بسياقات الاستفسار" },
      { icon: "cpu", title: "Custom Embeddings", titleAr: "متجهات مخصصة", desc: "Domain-specific embeddings trained on proprietary technical data", descAr: "نماذج ترميز مخصصة مدربة على مستندات الشركة التقنية" }
    ],
    details: [
      { title: "Highly Secure Architecture", content: "Ensures no prompt data or company documents are sent to public APIs by running fine-tuned open-source models inside a strict VPC.", impact: "Maintains absolute legal and corporate compliance." },
      { title: "Horizontal Scale & Orchestration", content: "Deploys LLM replicas across GPU Kubernetes clusters with dynamic load balancing and vLLM acceleration engines.", impact: "Supports thousands of active enterprise employees." }
    ],
    detailsAr: [
      { title: "بنية تحتية فائقة الأمان", content: "تضمن عدم خروج الاستعلامات أو مستندات الشركة إلى خوادم عامة عبر تشغيل نماذج مفتوحة المصدر داخل شبكة افتراضية خاصة VPC.", impact: "التزام كامل بالقوانين ومعايير خصوصية الشركات." },
      { title: "توسع أفقي مرن", content: "توزيع نسخ النماذج اللغوية على مجموعات Kubernetes المسرعة بالرسوميات مع موازنة الأحمال ومحركات تسريع vLLM.", impact: "يدعم آلاف الموظفين المتزامنين بكفاءة عالية." }
    ]
  },
  {
    id: "atlas-engine",
    title: "Atlas Neural Engine",
    titleAr: "محرك أطلس العصبي (Atlas Neural Engine)",
    description: "High-performance distributed AI inference engine optimized for large-scale enterprise deployment.",
    descriptionAr: "محرك استدلال ذكاء اصطناعي موزع عالي الأداء ومحسّن لنشر المؤسسات على نطاق واسع.",
    tech: ["AI Infrastructure", "C++", "gRPC", "Kubernetes", "vLLM"],
    metric: "4x Throughput Boost",
    metricAr: "4 أضعاف إنتاجية الاستدلال",
    color: "emerald",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601597111158-2fceff270190?q=80&w=600&auto=format&fit=crop"
    ],
    stats: [
      { value: "4.2x", label: "Throughput Increase", labelAr: "زيادة إنتاجية الاستدلال", icon: "trending-up" },
      { value: "99.99%", label: "Uptime SLA", labelAr: "استمرارية الخدمة", icon: "activity" },
      { value: "-60%", label: "GPU Cost Cuts", labelAr: "تخفيض تكلفة الرسوميات", icon: "zap" }
    ],
    highlights: [
      { icon: "cpu", title: "Custom C++ Core", titleAr: "نواة C++ مخصصة", desc: "Low-level batch memory managers bypassing standard Python locks", descAr: "إدارة ذاكرة منخفضة المستوى تتجاوز قيود Python" },
      { icon: "zap", title: "Continuous Batching", titleAr: "تجميع متواصل للمهام", desc: "vLLM-style batch scheduler processing token streams on-the-fly", descAr: "جدولة وتجميع مستمر لمعالجة حزم النصوص أثناء إنشائها" },
      { icon: "activity", title: "gRPC Streaming", titleAr: "تدفق عبر gRPC", desc: "Sub-millisecond connection times with persistent network layers", descAr: "أزمنة اتصال جزء من المللي ثانية مع قنوات شبكية مستمرة" }
    ],
    details: [
      { title: "Dynamic Memory Managers", content: "Designed a custom KV cache allocation algorithm in C++ to prevent memory fragmentation during high-concurrency token generation.", impact: "Optimizes GPU hardware allocation rates." },
      { title: "Distributed Inference Layer", content: "Synchronizes weights and tokens across multiple cluster nodes with minimal sync overhead, supporting giant 70B+ parameters.", impact: "Maintains sub-second token generation latency." }
    ],
    detailsAr: [
      { title: "إدارة الذاكرة الديناميكية", content: "تصميم خوارزمية مخصصة لإدارة الذاكرة المؤقتة (KV Cache) بلغة C++ لمنع تجزئة الذاكرة أثناء توليد الحزم الكبيرة.", impact: "تحقيق أقصى استغلال ممكن لمعالجات الرسوميات." },
      { title: "طبقة الاستدلال الموزعة", content: "مزامنة الأوزان والنصوص المولدة بين عُقد متعددة بأقل تكلفة اتصال، مما يدعم النماذج الضخمة (+70B).", impact: "الحفاظ على أزمنة استجابة سريعة وجزء من الثانية." }
    ]
  },
  {
    id: "arabica-mind",
    title: "ArabicaMind",
    titleAr: "أرابيكا مايند (ArabicaMind)",
    description: "Advanced Arabic LLM optimized for semantic understanding, contextual reasoning, and AI search.",
    descriptionAr: "نموذج لغوي كبير متقدم للغة العربية محسّن للفهم الدلالي، والاستنتاج السياقي، والبحث الذكي.",
    tech: ["LLM Engineering", "PyTorch", "HuggingFace", "Python", "SQL"],
    metric: "State-of-the-art Arabic NLP",
    metricAr: "ريادة معالجة العربية",
    color: "cyan",
    coverImage: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005198143-d528b80df3ab?q=80&w=600&auto=format&fit=crop"
    ],
    stats: [
      { value: "13B", label: "Model Parameters", labelAr: "معاملات النموذج", icon: "cpu" },
      { value: "95%", label: "Arabic Evaluation", labelAr: "دقة التقييم العربي", icon: "check" },
      { value: "3x", label: "Semantic Speed", labelAr: "سرعة البحث الدلالي", icon: "activity" }
    ],
    highlights: [
      { icon: "cpu", title: "Diacritics Handling", titleAr: "معالجة التشكيل والضم", desc: "Custom tokenizer optimized for Arabic diacritics and syntax structures", descAr: "مجزئ نصوص ذكي يتعرف على الحركات النحوية واللهجات العربية" },
      { icon: "database", title: "100GB Arabic Corpus", titleAr: "مستودع لغوي 100 جيجا", desc: "Pre-trained on cleaned regional texts, academic papers, and news", descAr: "تدريب مسبق على نصوص نظيفة، مقالات أكاديمية، ومصادر إخبارية" },
      { icon: "zap", title: "Fine-Tuned Reasoning", titleAr: "استدلال سياقي دقيق", desc: "Fine-tuned with RLHF to offer high-quality business advice in Arabic", descAr: "تعديل دقيق باستخدام RLHF لتقديم استشارات ممتازة بالعربية" }
    ],
    details: [
      { title: "Arabic-First Tokenization", content: "Designed a specialized tokenizer that reduces token-to-word ratios for Arabic text, leading to faster inference speeds and lower deployment costs.", impact: "Solves standard LLM performance penalties in non-English scripts." },
      { title: "Semantic Search Optimization", content: "Integrates with dual-encoder dense retrieval frameworks, helping local financial and legal groups search native Arabic archives.", impact: "Increases search recall accuracy by 35%." }
    ],
    detailsAr: [
      { title: "تجزئة نصوص عربية ذكية", content: "تصميم مجزئ نصوص متخصص يقلل نسبة الرموز إلى الكلمات للنصوص العربية، مما يزيد سرعة الاستدلال ويخفض التكلفة.", impact: "حل مشكلة بطء النماذج اللغوية التقليدية مع المحتوى العربي." },
      { title: "تحسين البحث الدلالي", content: "دمج مع إطارات الاسترجاع الكثيف ثنائية التشفير، مما يمكن المؤسسات القانونية والمالية من البحث في أرشيفاتها العربية.", impact: "زيادة دقة استرجاع النتائج بنسبة 35%." }
    ]
  },
  {
    id: "quantum-predict",
    title: "Quantum Predict X",
    titleAr: "كوانتوم بريدكت (Quantum Predict X)",
    description: "AI forecasting ecosystem for financial analytics, market prediction, and enterprise risk modeling.",
    descriptionAr: "نظام بيئي للتنبؤ بالذكاء الاصطناعي للتحليلات المالية، وتنبؤات السوق، ونمذجة مخاطر المؤسسات.",
    tech: ["Deep Learning", "FastAPI", "Pandas", "PyTorch", "Kubernetes"],
    metric: "96% Predictive Accuracy",
    metricAr: "96% دقة التنبؤ",
    color: "pink",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=600&auto=format&fit=crop"
    ],
    stats: [
      { value: "96%", label: "Prediction Accuracy", labelAr: "دقة التنبؤ المالي", icon: "trending-up" },
      { value: "$2B+", label: "Monitored Assets", labelAr: "أصول تحت المراقبة", icon: "database" },
      { value: "10ms", label: "Decision Latency", labelAr: "زمن معالجة القرار", icon: "zap" }
    ],
    highlights: [
      { icon: "trending-up", title: "Temporal Forecaster", titleAr: "متنبئ زمني متطور", desc: "Combines LSTM and Transformer architectures for market trends", descAr: "يدمج بين بنيات LSTM والمحولات لتوقع اتجاهات الأسواق" },
      { icon: "database", title: "Heterogeneous Data", titleAr: "بيانات غير متجانسة", desc: "Ingests structural tabular, financial news, and macro indexes", descAr: "يدمج المؤشرات الهيكلية، الأخبار الاقتصادية، والمؤشرات الكلية" },
      { icon: "shield", title: "Stress Scenarios", titleAr: "محاكاة الأزمات", desc: "Simulates black swan scenarios using adversarial AI techniques", descAr: "محاكاة السيناريوهات الصعبة باستخدام تقنيات الذكاء الاصطناعي التنافسي" }
    ],
    details: [
      { title: "Hybrid Temporal Pipeline", content: "Blends classical time-series statistical models with modern deep-learning sequence transformers to provide highly resilient market estimations.", impact: "Supports multi-million dollar asset allocation models." },
      { title: "Adversarial Stress Engine", content: "Employs GANs to generate worst-case financial shocks and evaluate portfolio vulnerabilities proactively.", impact: "Prevents losses during high-volatility market events." },
    ],
    detailsAr: [
      { title: "خط معالجة زمني هجين", content: "يمزج بين النماذج الإحصائية الكلاسيكية ونماذج المحولات العميقة لتوفير تقديرات سوقية مرنة.", impact: "دعم اتخاذ القرار وتوزيع الأصول المالية الكبرى." },
      { title: "محرك الأزمات التنافسي", content: "يوظف شبكات GAN التنافسية لتوليد أسوأ الأزمات المالية الافتراضية وتقييم حساسية المحافظ المالية استباقياً.", impact: "حماية المحافظ من الخسائر خلال فترات تقلبات السوق الشديدة." }
    ]
  }
];

export const experienceData = [
  {
    id: 1,
    type: "work",
    title: "Founding AI Engineer",
    titleAr: "مهندس ذكاء اصطناعي مؤسس",
    company: "NexusMind AI",
    companyAr: "شركة نكسس مايند للذكاء الاصطناعي",
    location: "Dubai, UAE",
    period: "2024 — Present",
    periodAr: "2024 — الآن",
    description: "Led development of enterprise autonomous agent systems and scalable LLM infrastructure for global clients.",
    descriptionAr: "قيادة تطوير أنظمة الوكلاء الذاتيين للمؤسسات والبنية التحتية القابلة للتوسع للنماذج اللغوية الكبيرة للعملاء العالميين.",
    color: "cyan"
  },
  {
    id: 2,
    type: "work",
    title: "Senior Generative AI Engineer",
    titleAr: "مهندس أول ذكاء اصطناعي توليدي",
    company: "QuantumLayer Technologies",
    companyAr: "كوانتوم لاير للتقنية",
    location: "Dubai, UAE (Remote)",
    period: "2022 — 2024",
    periodAr: "2022 — 2024",
    description: "Built multimodal AI systems integrating language, vision, and reasoning models.",
    descriptionAr: "بناء أنظمة ذكاء اصطناعي متعددة الوسائط تدمج نماذج اللغة، الرؤية، والاستنتاج والتفكير المنطقي.",
    color: "violet"
  },
  {
    id: 3,
    type: "work",
    title: "Machine Learning Research Engineer",
    titleAr: "مهندس أبحاث تعلم الآلة",
    company: "Gulf Artificial Intelligence Center",
    companyAr: "مركز الخليج للذكاء الاصطناعي",
    location: "Abu Dhabi, UAE",
    period: "2020 — 2022",
    periodAr: "2020 — 2022",
    description: "Worked on advanced Arabic NLP systems and predictive deep learning architectures.",
    descriptionAr: "العمل على أنظمة معالجة اللغة الطبيعية العربية المتقدمة وبنيات التعلم العميق التنبؤية للبيانات غير المتجانسة.",
    color: "pink"
  }
];

export const researchData = [
  {
    id: "research-1",
    title: "Autonomous Multi-Agent Collaboration Using LLM Architectures",
    titleAr: "التعاون المستقل متعدد الوكلاء باستخدام بنيات النماذج اللغوية الكبيرة",
    journal: "Gulf AI Summit & Publications",
    year: "2024",
    link: "#",
    description: "Introduces dynamic task division frameworks for LLM networks with sub-second task coordination and vector-based role persistence.",
    descriptionAr: "تقديم إطار عمل لتقسيم المهام ديناميكياً لشبكات النماذج اللغوية الضخمة مع تنسيق مهام سريع وجزء من الثانية واستمرارية الأدوار."
  },
  {
    id: "research-2",
    title: "Distributed AI Inference Optimization for Enterprise Systems",
    titleAr: "تحسين استدلال الذكاء الاصطناعي الموزع لأنظمة المؤسسات",
    journal: "International Journal of Intelligent Platforms",
    year: "2023",
    link: "#",
    description: "Proposes key-value cache pooling optimizations inside cluster nodes, accelerating large LLM tokens generation by 4.2x.",
    descriptionAr: "اقتراح تحسينات لتجميع ذاكرة التخزين المؤقت (KV Cache) داخل عُقد الحوسبة، مسرعاً توليد النصوص للنماذج الكبيرة بـ 4.2 ضعف."
  },
  {
    id: "research-3",
    title: "Arabic Semantic Intelligence Using Transformer-Based Models",
    titleAr: "الذكاء الدلالي العربي باستخدام النماذج القائمة على المحولات",
    journal: "MENA NLP Research Symposium",
    year: "2021",
    link: "#",
    description: "Presents tokenization techniques and custom embeddings tailored for Arabic dialects and formal grammar parsing.",
    descriptionAr: "عرض تقنيات تجزئة نصوص متقدمة وترميز مخصص مصمم للتعامل مع اللهجات وقواعد اللغة العربية الفصحى."
  }
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "AWS Certified Machine Learning Specialty",
    titleAr: "تخصص التعلم الآلي المعتمد من AWS",
    issuer: "Amazon Web Services (AWS)",
    category: "cloud"
  },
  {
    id: "cert-2",
    title: "Google Professional Machine Learning Engineer",
    titleAr: "مهندس تعلم آلي محترف معتمد من Google",
    issuer: "Google Cloud",
    category: "ml"
  },
  {
    id: "cert-3",
    title: "NVIDIA Deep Learning Institute Certification",
    titleAr: "شهادة معهد NVIDIA للتعلم العميق",
    issuer: "NVIDIA DLI",
    category: "specialty"
  },
  {
    id: "cert-4",
    title: "Microsoft Azure AI Engineer Associate",
    titleAr: "مهندس ذكاء اصطناعي شريك معتمد من Azure",
    issuer: "Microsoft",
    category: "cloud"
  },
  {
    id: "cert-5",
    title: "DeepLearning.AI Generative AI Engineering",
    titleAr: "هندسة الذكاء الاصطناعي التوليدي من DeepLearning.AI",
    issuer: "DeepLearning.AI",
    category: "ml"
  }
];

export const skillsData = [
  {
    category: "ai",
    title: "AI & Machine Learning",
    titleAr: "الذكاء الاصطناعي والتعلم الآلي",
    color: "cyan",
    skills: ["Deep Learning", "NLP", "LLM Engineering", "RAG Systems", "AI Agents", "PyTorch", "TensorFlow", "FastAPI"]
  },
  {
    category: "cyber",
    title: "Infrastructure & Platforms",
    titleAr: "البنية التحتية والمنصات",
    color: "violet",
    skills: ["Kubernetes", "AWS", "Docker", "Vector Databases", "AI Infrastructure", "gRPC", "Linux Server"]
  },
  {
    category: "embedded",
    title: "Development & APIs",
    titleAr: "التطوير والواجهات البرمجية",
    color: "pink",
    skills: ["Python", "React", "Next.js", "LangChain", "SQL", "Git / GitHub", "C++"]
  }
];
