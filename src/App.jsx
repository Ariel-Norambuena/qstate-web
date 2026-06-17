import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Atom,
  BrainCircuit,
  Camera,
  Check,
  ChevronRight,
  Cpu,
  ExternalLink,
  FlaskConical,
  Globe2,
  Mail,
  Menu,
  Microscope,
  Orbit,
  Sparkles,
  Target,
  Waves,
  X,
} from "lucide-react";
import { initAnalytics, trackEvent } from "./analytics.js";

const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const scholarUrl =
  "https://scholar.google.cl/citations?user=LCy8r2wAAAAJ&hl=es";
const instagramUrl = "https://www.instagram.com/qstate_usm";
const salmonPostUrl =
  "https://www.linkedin.com/posts/ariel-norambuena-80622275_inteligenciaartificial-computervision-yolo-activity-7467260165256474625-6ENg";

const navItems = [
  { id: "inicio", es: "Inicio", en: "Home" },
  { id: "investigacion", es: "Investigación", en: "Research" },
  { id: "tecnologia", es: "Tecnología", en: "Technology" },
  { id: "metodologia", es: "Metodología", en: "Method" },
  { id: "proyectos", es: "Proyectos", en: "Projects" },
  { id: "publicaciones", es: "Publicaciones", en: "Publications" },
  { id: "equipo", es: "Equipo", en: "People" },
  { id: "contacto", es: "Contacto", en: "Contact" },
];

const copy = {
  es: {
    menu: "Abrir menú",
    closeMenu: "Cerrar menú",
    heroEyebrow: "Quantum Systems Theory and Technology",
    heroTitle: "Teoría y tecnologías cuánticas",
    heroSubtitle:
      "Modelamos, controlamos y aprendemos la dinámica de sistemas cuánticos.",
    heroDescription:
      "QState es un grupo de investigación de la Universidad Técnica Federico Santa María dedicado a sistemas cuánticos abiertos, control cuántico, computación con átomos neutros, algoritmos cuánticos y plataformas de estado sólido.",
    explore: "Explorar investigación",
    papers: "Ver publicaciones",
    animationTitle: "Dinámica cuántica abierta",
    animationSubtitle: "Sistema · entorno · control",
    aboutEyebrow: "Nuestra identidad",
    aboutTitle: "Física fundamental para tecnologías cuánticas",
    aboutBody:
      "Partimos desde modelos microscópicos y teoría cuántica para comprender decoherencia, memoria, transporte, entrelazamiento y control. Integramos simulación numérica e inteligencia artificial informada por física para diseñar protocolos, reconstruir entornos y desarrollar nuevas herramientas para computación y sensado cuántico.",
    coreAreas: [
      "Sistemas cuánticos abiertos",
      "Control cuántico óptimo",
      "Computación cuántica",
      "Átomos neutros",
      "Algoritmos cuánticos",
      "Espines y fonones",
    ],
    researchEyebrow: "Investigación",
    researchTitle: "Qué investigamos",
    researchDescription:
      "Nuestra agenda está centrada en ciencia y tecnologías cuánticas. Las líneas se conectan mediante una pregunta común: cómo describir, proteger, controlar y aprovechar información cuántica en plataformas reales.",
    relatedWork: "Trabajos relacionados",
    scholar: "Perfil completo en Google Scholar",
    technologyEyebrow: "Tecnología aplicada",
    technologyTitle:
      "IA, experimentos y simulación para comprender el movimiento de salmones",
    technologyIntro:
      "Esta iniciativa interdisciplinaria amplía nuestras capacidades de modelación e inteligencia artificial hacia un desafío tecnológico de la acuicultura. Junto a equipos de la Pontificia Universidad Católica de Chile, Universidad de Chile, AquaChile y UTFSM, desarrollamos herramientas para observar y modelar salmones en estanques.",
    technologyScope:
      "El proyecto integra experimentos, visión computacional, redes neuronales y simulación de movimiento colectivo. Su objetivo es construir modelos trazables que conecten datos de video, variables físicas y comportamiento animal.",
    technologyTeam: "Equipo del proyecto",
    technologyPeople:
      "Ariel Norambuena · Sebastián Escobar · Nicolás Viaux · Osvaldo Greve · Ignacio Farías · Diego Yáñez",
    technologyCollab:
      "Buscamos colaboraciones en comportamiento animal, acuicultura, física estadística, ingeniería, visión computacional e inteligencia artificial.",
    technologyLink: "Ver publicación del proyecto",
    technologyPillars: [
      ["Experimentos", "Protocolos reproducibles y adquisición de datos en estanques."],
      ["Visión computacional", "Detección, seguimiento y reconstrucción de trayectorias."],
      ["Modelación física", "Simulación de movimiento individual y colectivo."],
      ["IA científica", "Modelos predictivos con restricciones e interpretación física."],
    ],
    methodEyebrow: "Metodología QState",
    methodTitle: "De la pregunta física a una predicción verificable",
    methodDescription:
      "Trabajamos de manera iterativa: teoría, modelación, cómputo, datos y validación se retroalimentan. La IA es una herramienta para inferir y diseñar, no un reemplazo de la comprensión física.",
    methodPrinciple:
      "Cada resultado debe poder rastrearse hasta una hipótesis, un modelo, un observable y una prueba.",
    projectsEyebrow: "Financiamiento",
    projectsTitle: "Proyectos seleccionados",
    projectsDescription:
      "Programas que sostienen nuestras líneas principales en computación cuántica, control, algoritmos y dinámica de sistemas abiertos.",
    rolePi: "Investigador principal",
    roleCo: "Coinvestigador",
    researchAreas: "Áreas de investigación",
    publicationsEyebrow: "Producción científica",
    publicationsTitle: "Publicaciones 2022–2026",
    publicationsDescription:
      "Trabajos registrados en Google Scholar durante los últimos cuatro años completos y el año en curso. Se muestra una sola versión de cada trabajo cuando existe un preprint y una publicación final.",
    allYears: "Todos",
    openPaper: "Abrir paper",
    teamEyebrow: "Personas",
    teamTitle: "Equipo QState",
    teamDescription:
      "Investigadores y estudiantes trabajan en teoría, simulación, algoritmos, inteligencia artificial y comunicación científica dentro de proyectos de tecnologías cuánticas.",
    collaborators: "Red de colaboradores",
    contactEyebrow: "Contacto",
    contactTitle: "Construyamos la próxima colaboración cuántica.",
    contactDescription:
      "Recibimos propuestas científicas, proyectos tecnológicos y consultas de estudiantes interesados en teoría y tecnologías cuánticas.",
    contactLead:
      "Escríbenos para conversar sobre colaboraciones científicas, proyectos aplicados, seminarios, tesis o pasantías en QState.",
    contactEmailLabel: "Correo",
    contactInstagramLabel: "Instagram",
    contactLocationLabel: "Institución",
    contactLocation:
      "Universidad Técnica Federico Santa María · Departamento de Física",
    email: "Escribir a QState",
    follow: "Seguir en Instagram",
    footer: "QState · Quantum Systems Theory and Technology",
  },
  en: {
    menu: "Open menu",
    closeMenu: "Close menu",
    heroEyebrow: "Quantum Systems Theory and Technology",
    heroTitle: "Quantum theory and technologies",
    heroSubtitle:
      "We model, control, and learn the dynamics of quantum systems.",
    heroDescription:
      "QState is a research group at Universidad Técnica Federico Santa María devoted to open quantum systems, quantum control, neutral-atom computing, quantum algorithms, and solid-state platforms.",
    explore: "Explore our research",
    papers: "View publications",
    animationTitle: "Open quantum dynamics",
    animationSubtitle: "System · environment · control",
    aboutEyebrow: "Our identity",
    aboutTitle: "Fundamental physics for quantum technologies",
    aboutBody:
      "We start from microscopic models and quantum theory to understand decoherence, memory, transport, entanglement, and control. We combine numerical simulation with physics-informed artificial intelligence to design protocols, reconstruct environments, and develop new tools for quantum computing and sensing.",
    coreAreas: [
      "Open quantum systems",
      "Optimal quantum control",
      "Quantum computing",
      "Neutral atoms",
      "Quantum algorithms",
      "Spins and phonons",
    ],
    researchEyebrow: "Research",
    researchTitle: "What we investigate",
    researchDescription:
      "Our agenda is centered on quantum science and technology. Its areas are connected by one question: how can quantum information be described, protected, controlled, and used in realistic platforms?",
    relatedWork: "Related work",
    scholar: "Full Google Scholar profile",
    technologyEyebrow: "Applied technology",
    technologyTitle:
      "AI, experiments, and simulation to understand salmon motion",
    technologyIntro:
      "This interdisciplinary initiative extends our modeling and artificial-intelligence capabilities toward a technological aquaculture challenge. Together with teams from Pontificia Universidad Católica de Chile, Universidad de Chile, AquaChile, and UTFSM, we develop tools to observe and model salmon in tanks.",
    technologyScope:
      "The project combines experiments, computer vision, neural networks, and collective-motion simulation. Its goal is to build traceable models connecting video data, physical variables, and animal behavior.",
    technologyTeam: "Project team",
    technologyPeople:
      "Ariel Norambuena · Sebastián Escobar · Nicolás Viaux · Osvaldo Greve · Ignacio Farías · Diego Yáñez",
    technologyCollab:
      "We welcome collaborations in animal behavior, aquaculture, statistical physics, engineering, computer vision, and artificial intelligence.",
    technologyLink: "View project post",
    technologyPillars: [
      ["Experiments", "Reproducible protocols and data acquisition in tanks."],
      ["Computer vision", "Detection, tracking, and trajectory reconstruction."],
      ["Physical modeling", "Simulation of individual and collective motion."],
      ["Scientific AI", "Predictive models with physical constraints and interpretation."],
    ],
    methodEyebrow: "The QState method",
    methodTitle: "From a physical question to a testable prediction",
    methodDescription:
      "We work iteratively: theory, modeling, computation, data, and validation continuously inform one another. AI is a tool for inference and design, not a replacement for physical understanding.",
    methodPrinciple:
      "Every result must be traceable to a hypothesis, a model, an observable, and a test.",
    projectsEyebrow: "Funding",
    projectsTitle: "Selected projects",
    projectsDescription:
      "Programs supporting our main research in quantum computing, control, algorithms, and open-system dynamics.",
    rolePi: "Principal Investigator",
    roleCo: "Co-Investigator",
    researchAreas: "Research areas",
    publicationsEyebrow: "Scientific output",
    publicationsTitle: "Publications 2022–2026",
    publicationsDescription:
      "Works listed on Google Scholar during the previous four complete years and the current year. Only one version is shown when both a preprint and final publication exist.",
    allYears: "All",
    openPaper: "Open paper",
    teamEyebrow: "People",
    teamTitle: "The QState team",
    teamDescription:
      "Researchers and students work across theory, simulation, algorithms, artificial intelligence, and scientific communication within quantum-technology projects.",
    collaborators: "Collaborator network",
    contactEyebrow: "Contact",
    contactTitle: "Let’s build the next quantum collaboration.",
    contactDescription:
      "We welcome scientific proposals, technology projects, and students interested in quantum theory and technologies.",
    contactLead:
      "Write to us about scientific collaborations, applied projects, seminars, theses, or internships at QState.",
    contactEmailLabel: "Email",
    contactInstagramLabel: "Instagram",
    contactLocationLabel: "Institution",
    contactLocation:
      "Universidad Técnica Federico Santa María · Department of Physics",
    email: "Email QState",
    follow: "Follow on Instagram",
    footer: "QState · Quantum Systems Theory and Technology",
  },
};

const researchLines = [
  {
    icon: Waves,
    number: "01",
    es: {
      title: "Sistemas cuánticos abiertos",
      subtitle: "Memoria, decoherencia y ambientes",
      description:
        "Desarrollamos modelos para comprender cómo el ruido y los entornos modifican la dinámica cuántica. Estudiamos no-Markovianidad, densidades espectrales y estrategias para reconstruir información del ambiente.",
      works: [
        "Memory effects in pulsed optomechanical systems (2026)",
        "Learning spectral density functions in open quantum systems (2026)",
        "Engineering non-Markovianity from defect-phonon interactions (2023)",
      ],
    },
    en: {
      title: "Open quantum systems",
      subtitle: "Memory, decoherence, and environments",
      description:
        "We develop models to understand how noise and environments reshape quantum dynamics. We study non-Markovianity, spectral densities, and strategies for reconstructing environmental information.",
      works: [
        "Memory effects in pulsed optomechanical systems (2026)",
        "Learning spectral density functions in open quantum systems (2026)",
        "Engineering non-Markovianity from defect-phonon interactions (2023)",
      ],
    },
  },
  {
    icon: Target,
    number: "02",
    es: {
      title: "Control cuántico óptimo",
      subtitle: "Diseño de protocolos robustos",
      description:
        "Buscamos controlar sistemas cuánticos abiertos y de muchos cuerpos mediante optimización, aprendizaje profundo y redes neuronales informadas por física.",
      works: [
        "Physics-informed neural networks for quantum control (2024)",
        "Geometric control of maximal entanglement via BIC (2026)",
        "Quantum optimal control in open quantum systems (Fondecyt 1251131)",
      ],
    },
    en: {
      title: "Optimal quantum control",
      subtitle: "Designing robust protocols",
      description:
        "We seek to control open and many-body quantum systems through optimization, deep learning, and physics-informed neural networks.",
      works: [
        "Physics-informed neural networks for quantum control (2024)",
        "Geometric control of maximal entanglement via BIC (2026)",
        "Quantum optimal control in open quantum systems (Fondecyt 1251131)",
      ],
    },
  },
  {
    icon: Atom,
    number: "03",
    es: {
      title: "Computación cuántica con átomos neutros",
      subtitle: "Plataformas, algoritmos y sistemas abiertos",
      description:
        "Investigamos física de átomos neutros, arquitecturas de computación cuántica, efectos ambientales y algoritmos capaces de explotar estas plataformas emergentes.",
      works: [
        "Neutral-atom-based quantum computing in Chile (Anillo ATE250066)",
        "Quantum kernels for classifying dynamical singularities (2024)",
        "Variational quantum circuits for non-Markovianity estimation (2023)",
      ],
    },
    en: {
      title: "Neutral-atom quantum computing",
      subtitle: "Platforms, algorithms, and open systems",
      description:
        "We investigate neutral-atom physics, quantum-computing architectures, environmental effects, and algorithms designed to exploit these emerging platforms.",
      works: [
        "Neutral-atom-based quantum computing in Chile (Anillo ATE250066)",
        "Quantum kernels for classifying dynamical singularities (2024)",
        "Variational quantum circuits for non-Markovianity estimation (2023)",
      ],
    },
  },
  {
    icon: Microscope,
    number: "04",
    es: {
      title: "Plataformas cuánticas de estado sólido",
      subtitle: "Defectos en diamante, espines y fonones",
      description:
        "Modelamos centros de color y otros defectos sólidos desde primeros principios hasta su dinámica efectiva, con énfasis en relajación, interacciones electrón-fonón y aplicaciones de sensado.",
      works: [
        "Phonon-induced non-equilibrium dynamics in a solid-state spin (2025)",
        "Temperature-dependent spin-lattice relaxation of the NV spin triplet (2023)",
        "Dynamical quantum phase transition in diamond (2022)",
      ],
    },
    en: {
      title: "Solid-state quantum platforms",
      subtitle: "Diamond defects, spins, and phonons",
      description:
        "We model color centers and other solid-state defects from first principles to effective dynamics, focusing on relaxation, electron-phonon interactions, and sensing applications.",
      works: [
        "Phonon-induced non-equilibrium dynamics in a solid-state spin (2025)",
        "Temperature-dependent spin-lattice relaxation of the NV spin triplet (2023)",
        "Dynamical quantum phase transition in diamond (2022)",
      ],
    },
  },
  {
    icon: Orbit,
    number: "05",
    es: {
      title: "Información y termodinámica cuántica",
      subtitle: "Entrelazamiento, transporte y máquinas cuánticas",
      description:
        "Estudiamos recursos cuánticos, criticidad, transporte y dispositivos de pocos cuerpos para entender cómo convertir estructura cuántica en desempeño operativo.",
      works: [
        "Quantum Magic Reveals CP Phases Invisible to Entanglement (2026)",
        "Three-qubit thermal machines near quantum criticality (2024–2025)",
        "Polariton-based quantum memristors (2022)",
      ],
    },
    en: {
      title: "Quantum information and thermodynamics",
      subtitle: "Entanglement, transport, and quantum machines",
      description:
        "We study quantum resources, criticality, transport, and few-body devices to understand how quantum structure can be converted into operational performance.",
      works: [
        "Quantum Magic Reveals CP Phases Invisible to Entanglement (2026)",
        "Three-qubit thermal machines near quantum criticality (2024–2025)",
        "Polariton-based quantum memristors (2022)",
      ],
    },
  },
];

const methodSteps = [
  {
    icon: Sparkles,
    es: ["Pregunta cuántica", "Definimos el fenómeno, la plataforma y el observable."],
    en: ["Quantum question", "We define the phenomenon, platform, and observable."],
  },
  {
    icon: Atom,
    es: ["Modelo microscópico", "Identificamos grados de libertad e interacciones relevantes."],
    en: ["Microscopic model", "We identify the relevant degrees of freedom and interactions."],
  },
  {
    icon: Cpu,
    es: ["Simulación", "Resolvemos la dinámica y exploramos regímenes accesibles."],
    en: ["Simulation", "We solve the dynamics and explore accessible regimes."],
  },
  {
    icon: BrainCircuit,
    es: ["Control e inferencia", "Optimizamos protocolos y aprendemos parámetros físicos."],
    en: ["Control and inference", "We optimize protocols and learn physical parameters."],
  },
  {
    icon: Check,
    es: ["Validación", "Contrastamos predicciones, límites y reproducibilidad."],
    en: ["Validation", "We test predictions, limits, and reproducibility."],
  },
];

const projects = [
  {
    years: "2026–2028",
    role: "pi",
    code: "ANILLO TEMÁTICO ATE250066",
    title:
      "Neutral-atom-based quantum computing in Chile",
    institution: "Universidad Técnica Federico Santa María",
    es: [
      "Computación cuántica",
      "Física de átomos neutros",
      "Sistemas cuánticos abiertos",
      "Algoritmos cuánticos",
    ],
    en: [
      "Quantum computing",
      "Neutral-atom physics",
      "Open quantum systems",
      "Quantum algorithms",
    ],
  },
  {
    years: "2025–2026",
    role: "pi",
    code: "FONDECYT REGULAR 1251131",
    title:
      "Quantum optimal control in open quantum systems: deep learning techniques and applications to quantum technologies",
    institution: "Universidad Técnica Federico Santa María",
    es: [
      "Control cuántico óptimo",
      "Física cuántica de muchos cuerpos",
      "Redes neuronales informadas por física",
    ],
    en: [
      "Optimal quantum control",
      "Quantum many-body physics",
      "Physics-informed neural networks",
    ],
  },
  {
    years: "2025–2028",
    role: "co",
    code: "FONDECYT REGULAR 1251132",
    title:
      "QASAR: Quantum Algorithms for simplifying and accelerating reductions in high energy physics",
    institution: "Universidad Técnica Federico Santa María",
    es: [
      "Algoritmos cuánticos",
      "Física de altas energías",
      "Inteligencia artificial",
    ],
    en: [
      "Quantum algorithms",
      "High-energy physics",
      "Artificial intelligence",
    ],
  },
  {
    years: "2022–2024",
    role: "pi",
    code: "FONDECYT INICIACIÓN 11220266",
    title:
      "Memory effects in solid-state systems coupled to phonon environments: a detailed study and applications for color centers in diamond",
    institution: "Universidad Mayor",
    es: [
      "No-Markovianidad cuántica",
      "Defectos en diamante",
      "Interacciones electrón-fonón",
      "Cálculos de fonones",
    ],
    en: [
      "Quantum non-Markovianity",
      "Defects in diamond",
      "Electron-phonon interactions",
      "Phonon calculations",
    ],
  },
];

const publications = [
  {
    year: "2026",
    title: "Quantum Magic Reveals CP Phases Invisible to Entanglement in Spin-0 Decays",
    authors: "N. Viaux, A. Norambuena, P. Orellana",
    venue: "arXiv:2605.19117",
    url: "https://arxiv.org/abs/2605.19117",
  },
  {
    year: "2026",
    title: "Memory effects in pulsed optomechanical systems",
    authors: "H. Tapia-Maureira, B. He, M. Di Ventra, A. Norambuena",
    venue: "Physical Review Applied 25, 044083",
    url: "https://journals.aps.org/prapplied/abstract/10.1103/mxbn-15ry",
  },
  {
    year: "2026",
    title: "Learning spectral density functions in open quantum systems",
    authors: "F. Peleteiro, J. V. S. K. Lima, P. M. Prado, F. F. Fanchini, A. Norambuena",
    venue: "arXiv:2602.24056",
    url: "https://arxiv.org/abs/2602.24056",
  },
  {
    year: "2026",
    title: "Geometric control of maximal entanglement via bound states in the continuum",
    authors: "A. R. Legón, M. M. Rojas, P. Orellana, A. Norambuena",
    venue: "arXiv:2602.23082",
    url: "https://arxiv.org/abs/2602.23082",
  },
  {
    year: "2025",
    title: "Phonon-induced non-equilibrium dynamics in a single solid-state spin",
    authors: "A. Norambuena, D. Tancara, V. F. Chomalí-Castro, D. Castillo",
    venue: "Quantum Science and Technology 10, 045001",
    url: "https://iopscience.iop.org/article/10.1088/2058-9565/adf092",
  },
  {
    year: "2025",
    title: "Contact temporal network during motility-induced phase separation",
    authors: "I. Salas, F. Guzmán-Lastra, D. Pastén, A. Norambuena",
    venue: "Physical Review E 112, 045409",
    url: "https://journals.aps.org/pre/abstract/10.1103/t3k6-hcmr",
  },
  {
    year: "2025",
    title: "Entropy, entanglement, and susceptibility of three qubits near quantum criticality",
    authors: "B. Castorene, F. J. Peña, A. Norambuena, S. E. Ulloa, C. Araya, P. Vargas",
    venue: "Physical Review E 111, 034118",
    url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.111.034118",
  },
  {
    year: "2024",
    title: "Effects of magnetic anisotropy on three-qubit antiferromagnetic thermal machines",
    authors: "B. Castorene, F. J. Peña, A. Norambuena, S. E. Ulloa, C. Araya, P. Vargas",
    venue: "Physical Review E 110, 044135",
    url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.110.044135",
  },
  {
    year: "2024",
    title: "Magnetic susceptibility and entanglement of three interacting qubits under magnetic field and anisotropy",
    authors: "B. Castorene, F. J. Peña, A. Norambuena, S. E. Ulloa, C. Araya, P. Vargas",
    venue: "arXiv:2410.16133",
    url: "https://arxiv.org/abs/2410.16133",
  },
  {
    year: "2024",
    title: "Quantum kernels for classifying dynamical singularities in a multiqubit system",
    authors: "D. Tancara, J. Fredes, A. Norambuena",
    venue: "Quantum Science and Technology 9, 035046",
    url: "https://scholar.google.cl/citations?view_op=view_citation&hl=es&user=LCy8r2wAAAAJ&citation_for_view=LCy8r2wAAAAJ:hFOr9nPyWt4C",
  },
  {
    year: "2024",
    title: "Physics-informed neural networks for quantum control",
    authors: "A. Norambuena, M. Mattheakis, F. J. González, R. Coto",
    venue: "Physical Review Letters 132, 010801",
    url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.010801",
  },
  {
    year: "2023",
    title: "Estimating the degree of non-Markovianity using variational quantum circuits",
    authors: "H. T. Dinani, D. Tancara, F. F. Fanchini, A. Norambuena, R. Coto",
    venue: "Quantum Machine Intelligence 5, 29",
    url: "https://link.springer.com/article/10.1007/s42484-023-00113-6",
  },
  {
    year: "2023",
    title: "Magnetic Stirling cycle for qubits with anisotropy near the quantum critical point",
    authors: "C. Araya, F. J. Peña, A. Norambuena, B. Castorene, P. Vargas",
    venue: "Technologies 11, 169",
    url: "https://www.mdpi.com/2227-7080/11/6/169",
  },
  {
    year: "2023",
    title: "Physically motivated analytical expression for the temperature dependence of the zero-field splitting of the nitrogen-vacancy center in diamond",
    authors: "M. C. Cambria et al.",
    venue: "Physical Review B 108, L180102",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.L180102",
  },
  {
    year: "2023",
    title: "Sequential epidemic-like spread between agglomerates of self-propelled agents in one dimension",
    authors: "P. de Castro, F. Urbina, A. Norambuena, F. Guzmán-Lastra",
    venue: "Physical Review E 108, 044104",
    url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.108.044104",
  },
  {
    year: "2023",
    title: "Temperature-dependent spin-lattice relaxation of the nitrogen-vacancy spin triplet in diamond",
    authors: "M. C. Cambria, A. Norambuena et al.",
    venue: "Physical Review Letters 130, 256903",
    url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.256903",
  },
  {
    year: "2023",
    title: "Engineering non-Markovianity from defect-phonon interactions",
    authors: "F. J. González, D. Tancara, H. T. Dinani, R. Coto, A. Norambuena",
    venue: "New Journal of Physics 25, 043004",
    url: "https://scholar.google.cl/citations?view_op=view_citation&hl=es&user=LCy8r2wAAAAJ&citation_for_view=LCy8r2wAAAAJ:dhFuZR0502QC",
  },
  {
    year: "2023",
    title: "Kernel-based quantum regressor models learning non-Markovianity",
    authors: "D. Tancara, H. T. Dinani, A. Norambuena, F. F. Fanchini, R. Coto",
    venue: "Physical Review A 107, 022402",
    url: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.107.022402",
  },
  {
    year: "2022",
    title: "Dynamical quantum phase transition in diamond: Applications in quantum metrology",
    authors: "F. J. González, A. Norambuena, R. Coto",
    venue: "Physical Review B 106, 014313",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.014313",
  },
  {
    year: "2022",
    title: "Polariton-based quantum memristors",
    authors: "A. Norambuena, F. Torres, M. Di Ventra, R. Coto",
    venue: "Physical Review Applied 17, 024056",
    url: "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.17.024056",
  },
];

const team = [
  {
    name: "Ariel Norambuena",
    es: "Doctor en Física · Director de QState",
    en: "PhD in Physics · QState Director",
    image: "ariel-norambuena.webp",
    url: scholarUrl,
  },
  {
    name: "Alexis Legón",
    es: "Doctor en Física",
    en: "PhD in Physics",
    image: "alexis-legon.webp",
  },
  {
    name: "Diego Montero",
    es: "Estudiante de Magíster USM",
    en: "MSc student at USM",
    image: "diego-montero.webp",
  },
  {
    name: "Diego Yáñez",
    es: "Estudiante de Ingeniería Civil Física",
    en: "Engineering Physics student",
    image: "diego-yanez.webp",
  },
  {
    name: "Karime Cerón",
    es: "Estudiante de Licenciatura en Física",
    en: "BSc Physics student",
    image: "karime-ceron.webp",
  },
  {
    name: "Alonso Recabarren",
    es: "Estudiante de Licenciatura en Física",
    en: "BSc Physics student",
    image: "alonso-recabarren.webp",
  },
  {
    name: "Francisco Ahumada",
    es: "Estudiante de Licenciatura en Física",
    en: "BSc Physics student",
    image: "francisco-ahumada.webp",
  },
  {
    name: "Iñaki Bermeo",
    es: "Estudiante de Licenciatura en Astrofísica",
    en: "BSc Astrophysics student",
    image: "inaki-bermeo.webp",
  },
  {
    name: "Ignacio Reyes",
    es: "Estudiante de Ingeniería Civil Física",
    en: "Engineering Physics student",
    image: "ignacio-reyes.webp",
  },
  {
    name: "Rafael Reveco",
    es: "Estudiante de Licenciatura en Astrofísica",
    en: "BSc Astrophysics student",
    image: "rafael-reveco.webp",
  },
  {
    name: "Eduardo Novoa",
    es: "Ingeniero Civil Telemático",
    en: "Telematics Civil Engineer",
    image: "eduardo-novoa.webp",
  },
  {
    name: "Ignacio Farías",
    es: "Estudiante de Ingeniería Civil Física",
    en: "Engineering Physics student",
    image: "ignacio-farias.webp",
  },
  {
    name: "Clemente Velasco",
    es: "Licenciado en Física",
    en: "BSc in Physics",
    image: "clemente-velasco.webp",
  },
];

const collaborators = [
  ["Pedro Orellana", "UTFSM", "Chile"],
  ["Nicolás Viaux", "UTFSM", "Chile"],
  ["Guillermo Romero", "USACH", "Chile"],
  ["Francisco Albarrán", "USACH", "Chile"],
  ["Jerónimo Maze", "Pontificia Universidad Católica de Chile", "Chile"],
  ["Dardo Goyeneche", "Pontificia Universidad Católica de Chile", "Chile"],
  ["Marco Bianchi", "Universidad San Sebastián", "Chile"],
  ["Cristian Susa", "Universidad de Córdoba", "Colombia"],
  ["Felipe Fanchini", "Einstein Hospital Israelita", "Brasil"],
  ["Massimiliano Di Ventra", "UC San Diego", "Estados Unidos"],
  ["Shimon Kolkowitz", "UC Berkeley", "Estados Unidos"],
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function OpenQuantumAnimation({ text }) {
  return (
    <div className="relative flex aspect-[1.2/1] w-full items-center justify-center overflow-hidden rounded-lg border border-cyan-200/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/50 sm:aspect-[2.2/1] lg:aspect-[2.9/1]">
      <style>{`
        @keyframes qstate-breathe {
          0%, 100% { opacity: 0.35; transform: scale(0.96); }
          50% { opacity: 0.95; transform: scale(1.06); }
        }
        @keyframes qstate-drift {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.25; }
          50% { transform: translate3d(18px, -22px, 0); opacity: 0.75; }
        }
        @keyframes qstate-pulse-flow {
          0% { stroke-dashoffset: 220; opacity: 0.15; }
          45% { opacity: 0.9; }
          100% { stroke-dashoffset: 0; opacity: 0.15; }
        }
        .q-breathe { animation: qstate-breathe 5.5s ease-in-out infinite; }
        .q-drift { animation: qstate-drift 7s ease-in-out infinite; }
        .q-flow {
          stroke-dasharray: 18 18;
          animation: qstate-pulse-flow 5s linear infinite;
        }
      `}</style>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_70%_28%,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_20%_78%,rgba(59,130,246,0.18),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 340"
        aria-hidden="true"
      >
        <path
          className="q-flow"
          d="M80 170 C 220 30, 430 60, 535 170 S 780 310, 930 145"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="2"
          opacity="0.55"
        />
        <path
          className="q-flow"
          d="M110 85 C 290 170, 675 170, 890 90"
          fill="none"
          stroke="#c4b5fd"
          strokeWidth="1.7"
          opacity="0.45"
          style={{ animationDelay: "-1.8s" }}
        />
        <path
          className="q-flow"
          d="M95 265 C 280 210, 700 210, 905 275"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.7"
          opacity="0.45"
          style={{ animationDelay: "-3s" }}
        />
        <ellipse cx="500" cy="170" rx="145" ry="88" fill="none" stroke="#67e8f9" strokeOpacity="0.18" />
        <ellipse cx="500" cy="170" rx="230" ry="132" fill="none" stroke="#a78bfa" strokeOpacity="0.16" />
        <ellipse cx="500" cy="170" rx="330" ry="170" fill="none" stroke="#60a5fa" strokeOpacity="0.1" />
        {[
          [145, 95, "ρ₁", "#67e8f9", "0s"],
          [845, 120, "ρ₂", "#c4b5fd", "-2s"],
          [790, 260, "ρ₃", "#93c5fd", "-4s"],
          [235, 250, "ρ₄", "#cffafe", "-5s"],
        ].map(([cx, cy, label, color, delay]) => (
          <g key={label} className="q-drift" style={{ animationDelay: delay }}>
            <circle cx={cx} cy={cy} r="5" fill={color} opacity="0.75" />
            <text
              x={cx}
              y={cy - 19}
              textAnchor="middle"
              fill={color}
              fontSize="23"
              fontFamily="serif"
              fontStyle="italic"
              opacity="0.92"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
      <div className="q-breathe absolute h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-100/50 bg-cyan-100/90 font-serif text-3xl font-light italic text-slate-950/80 shadow-2xl shadow-cyan-300/50 md:h-24 md:w-24 md:text-4xl">
        ℋ
      </div>
      <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-slate-950/75 px-4 py-3 text-xs backdrop-blur">
        <p className="font-semibold text-cyan-100">{text.animationTitle}</p>
        <p className="mt-1 text-slate-400">{text.animationSubtitle}</p>
      </div>
    </div>
  );
}

function HomeView({ text, onNavigate }) {
  return (
    <section className="page-shell py-8 sm:py-12">
      <OpenQuantumAnimation text={text} />
      <div className="grid gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            {text.heroEyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] text-white sm:text-6xl">
            {text.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-cyan-100">
            {text.heroSubtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {text.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate("investigacion")}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-white"
            >
              {text.explore}
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("publicaciones")}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              {text.papers}
            </button>
          </div>
        </div>
        <aside className="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            {text.aboutEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
            {text.aboutTitle}
          </h2>
          <p className="mt-5 leading-7 text-slate-300">{text.aboutBody}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {text.coreAreas.map((area) => (
              <span
                key={area}
                className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100"
              >
                {area}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function ResearchView({ text, language }) {
  return (
    <section className="page-shell py-14 sm:py-20">
      <SectionHeading
        eyebrow={text.researchEyebrow}
        title={text.researchTitle}
        description={text.researchDescription}
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {researchLines.map((line, index) => {
          const content = line[language];
          const Icon = line.icon;
          return (
            <article
              key={line.number}
              className={`rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8 ${
                index === researchLines.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/10 text-cyan-300">
                  <Icon size={24} />
                </div>
                <span className="text-sm font-bold text-slate-500">
                  {line.number}
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-white">
                {content.title}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-300">
                {content.subtitle}
              </p>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                {content.description}
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {text.relatedWork}
                </p>
                <ul className="mt-3 grid gap-2">
                  {content.works.map((work) => (
                    <li key={work} className="flex gap-2 text-sm leading-6 text-slate-300">
                      <ChevronRight size={16} className="mt-1 shrink-0 text-cyan-300" />
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
      <a
        href={scholarUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-cyan-300 hover:text-white"
      >
        {text.scholar}
        <ExternalLink size={17} />
      </a>
    </section>
  );
}

function TechnologyView({ text }) {
  const icons = [FlaskConical, Camera, Activity, BrainCircuit];
  return (
    <section className="page-shell py-14 sm:py-20">
      <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10">
        <img
          src={asset("technology-salmon-ai.webp")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.9)_55%,rgba(2,6,23,0.35)_100%)]" />
        <div className="relative max-w-3xl p-7 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            {text.technologyEyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {text.technologyTitle}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            {text.technologyIntro}
          </p>
          <p className="mt-4 leading-7 text-slate-300">{text.technologyScope}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {text.technologyPillars.map(([title, description], index) => {
          const Icon = icons[index];
          return (
            <article
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <Icon size={22} className="text-cyan-300" />
              <h2 className="mt-4 font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {description}
              </p>
            </article>
          );
        })}
      </div>
      <div className="mt-6 grid gap-6 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] p-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            {text.technologyTeam}
          </p>
          <p className="mt-3 leading-7 text-white">{text.technologyPeople}</p>
          <p className="mt-3 text-sm leading-6 text-cyan-50">
            {text.technologyCollab}
          </p>
        </div>
        <a
          href={salmonPostUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-100"
        >
          {text.technologyLink}
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

function MethodView({ text, language }) {
  return (
    <section className="page-shell py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow={text.methodEyebrow}
            title={text.methodTitle}
            description={text.methodDescription}
          />
          <div className="mt-10 grid gap-3">
            {methodSteps.map((step, index) => {
              const Icon = step.icon;
              const [title, description] = step[language];
              return (
                <article
                  key={title}
                  className="grid grid-cols-[48px_1fr] gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/10 text-cyan-300">
                    <Icon size={21} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-cyan-300">
                        0{index + 1}
                      </span>
                      <h2 className="font-semibold text-white">{title}</h2>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div>
          <img
            src={asset("qstate-methodology.webp")}
            alt=""
            className="w-full rounded-lg border border-white/10"
          />
          <div className="mt-4 flex gap-3 rounded-lg bg-cyan-300 p-5 text-slate-950">
            <Check className="mt-0.5 shrink-0" size={20} />
            <p className="text-sm font-bold leading-6">{text.methodPrinciple}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsView({ text, language }) {
  return (
    <section className="page-shell py-14 sm:py-20">
      <SectionHeading
        eyebrow={text.projectsEyebrow}
        title={text.projectsTitle}
        description={text.projectsDescription}
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.code}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                {project.code}
              </span>
              <span className="rounded-md bg-white/5 px-3 py-1 text-sm font-semibold text-slate-300">
                {project.years}
              </span>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-400">
              {project.role === "pi" ? text.rolePi : text.roleCo}
            </p>
            <h2 className="mt-3 text-xl font-semibold leading-8 text-white">
              {project.title}
            </h2>
            <p className="mt-3 text-sm text-slate-400">{project.institution}</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                {text.researchAreas}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project[language].map((area) => (
                  <span
                    key={area}
                    className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PublicationsView({ text }) {
  const [year, setYear] = useState("all");
  const years = ["all", "2026", "2025", "2024", "2023", "2022"];
  const visible =
    year === "all"
      ? publications
      : publications.filter((publication) => publication.year === year);

  return (
    <section className="page-shell py-14 sm:py-20">
      <SectionHeading
        eyebrow={text.publicationsEyebrow}
        title={text.publicationsTitle}
        description={text.publicationsDescription}
      />
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Publication year">
        {years.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setYear(item)}
            className={`rounded-md px-4 py-2 text-sm font-bold transition ${
              year === item
                ? "bg-cyan-300 text-slate-950"
                : "border border-white/15 text-slate-300 hover:bg-white/10"
            }`}
          >
            {item === "all" ? text.allYears : item}
          </button>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
        {visible.map((publication) => (
          <a
            key={`${publication.year}-${publication.title}`}
            href={publication.url}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("publication_open", { title: publication.title })
            }
            className="group grid gap-3 border-b border-white/10 bg-white/[0.03] p-5 last:border-b-0 hover:bg-cyan-300/[0.08] sm:grid-cols-[64px_1fr_auto] sm:items-start sm:gap-5"
          >
            <span className="text-base font-bold text-cyan-300">
              {publication.year}
            </span>
            <span>
              <span className="block text-base font-semibold leading-6 text-white">
                {publication.title}
              </span>
              <span className="mt-2 block text-sm leading-5 text-slate-400">
                {publication.authors}
              </span>
              <span className="mt-1 block text-sm font-medium text-slate-300">
                {publication.venue}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 group-hover:text-white">
              {text.openPaper}
              <ExternalLink size={15} />
            </span>
          </a>
        ))}
      </div>
      <a
        href={scholarUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-cyan-300 hover:text-white"
      >
        {text.scholar}
        <ExternalLink size={17} />
      </a>
    </section>
  );
}

function TeamView({ text, language }) {
  return (
    <section className="page-shell py-14 sm:py-20">
      <SectionHeading
        eyebrow={text.teamEyebrow}
        title={text.teamTitle}
        description={text.teamDescription}
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {team.map((member) => {
          const content = (
            <>
              <img
                src={asset(`team/${member.image}`)}
                alt={member.name}
                className="aspect-square w-full object-cover object-top"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="font-semibold text-white">{member.name}</h2>
                <p className="mt-1 text-sm leading-5 text-slate-400">
                  {member[language]}
                </p>
                {member.url && (
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-cyan-300">
                    Google Scholar
                    <ExternalLink size={13} />
                  </span>
                )}
              </div>
            </>
          );
          return member.url ? (
            <a
              key={member.name}
              href={member.url}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              {content}
            </a>
          ) : (
            <article
              key={member.name}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
            >
              {content}
            </article>
          );
        })}
      </div>
      <div className="mt-14 grid gap-8 rounded-lg border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[0.72fr_1.28fr] lg:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            {text.collaborators}
          </p>
          <div className="mt-5 grid gap-3">
            {collaborators.map(([name, institution, country]) => (
              <div key={name} className="flex gap-3 border-b border-white/10 pb-3">
                <Globe2 size={17} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {institution} · {country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={asset("qstate-world-map.png")}
          alt=""
          className="w-full self-center"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function ContactView({ text }) {
  return (
    <section className="page-shell py-14 sm:py-20">
      <SectionHeading
        eyebrow={text.contactEyebrow}
        title={text.contactTitle}
        description={text.contactDescription}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-lg border border-cyan-300/25 bg-cyan-300/[0.08] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            QState
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
            {text.contactLead}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:qstate.socials@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-base font-bold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:bg-white"
            >
              <Mail size={18} />
              {text.email}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-base font-bold text-white transition hover:bg-white/10"
            >
              <Camera size={18} />
              {text.follow}
            </a>
          </div>
        </article>

        <div className="grid gap-4">
          {[
            [Mail, text.contactEmailLabel, "qstate.socials@gmail.com"],
            [Camera, text.contactInstagramLabel, "@qstate_usm"],
            [Globe2, text.contactLocationLabel, text.contactLocation],
          ].map(([Icon, label, value]) => (
            <article
              key={label}
              className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-cyan-300">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 leading-6 text-white">{value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActiveView({ activeSection, text, language, onNavigate }) {
  switch (activeSection) {
    case "investigacion":
      return <ResearchView text={text} language={language} />;
    case "tecnologia":
      return <TechnologyView text={text} />;
    case "metodologia":
      return <MethodView text={text} language={language} />;
    case "proyectos":
      return <ProjectsView text={text} language={language} />;
    case "publicaciones":
      return <PublicationsView text={text} />;
    case "equipo":
      return <TeamView text={text} language={language} />;
    case "contacto":
      return <ContactView text={text} />;
    default:
      return <HomeView text={text} onNavigate={onNavigate} />;
  }
}

function App() {
  const [language, setLanguage] = useState("es");
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    initAnalytics();
  }, [language]);

  useEffect(() => {
    const current = navItems.find((item) => item.id === activeSection);
    document.title = `${current?.[language] ?? "QState"} | QState`;
  }, [activeSection, language]);

  const navigate = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    trackEvent("navigation", { section: id, language });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.1),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate("inicio")}
            className="flex shrink-0 items-center gap-3 text-left"
            aria-label="QState"
          >
            <img
              src={asset("qstate-mark.png")}
              alt=""
              className="h-11 w-11 rounded-lg bg-white object-contain p-1"
            />
            <span>
              <span className="block text-xl font-semibold leading-none text-white">
                QState
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                Quantum Systems
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Principal">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`rounded-md px-3 py-2 text-[15px] font-semibold transition ${
                  activeSection === item.id
                    ? "bg-cyan-300 text-slate-950"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item[language]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-md border border-white/15 p-1">
              {["es", "en"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setLanguage(item)}
                  className={`rounded px-3 py-1.5 text-xs font-bold uppercase transition ${
                    language === item
                      ? "bg-white text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-pressed={language === item}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded-md border border-white/15 xl:hidden"
              aria-label={menuOpen ? text.closeMenu : text.menu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 px-4 py-4 xl:hidden">
            <div className="mx-auto grid max-w-6xl gap-1">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`rounded-md px-4 py-3 text-left text-base font-semibold ${
                    activeSection === item.id
                      ? "bg-cyan-300 text-slate-950"
                      : "text-slate-200 hover:bg-white/10"
                  }`}
                >
                  {item[language]}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main aria-live="polite">
        <ActiveView
          activeSection={activeSection}
          text={text}
          language={language}
          onNavigate={navigate}
        />
      </main>

      <section className="border-t border-white/10 bg-cyan-300 text-slate-950">
        <div className="page-shell grid gap-8 py-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em]">
              {text.contactEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              {text.contactTitle}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-800">
              {text.contactDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:qstate.socials@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-base font-bold text-white shadow-lg hover:bg-slate-800"
              style={{ color: "#ffffff" }}
            >
              <Mail size={18} />
              {text.email}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-slate-950 px-5 py-3 text-base font-bold text-slate-950 hover:bg-white/30"
            >
              <Camera size={18} />
              {text.follow}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950">
        <div className="page-shell flex flex-col gap-4 py-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={asset("qstate-mark.png")}
              alt=""
              className="h-8 w-8 rounded-md bg-white object-contain p-1"
            />
            <span>{text.footer}</span>
          </div>
          <span>© {new Date().getFullYear()} · Universidad Técnica Federico Santa María</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
