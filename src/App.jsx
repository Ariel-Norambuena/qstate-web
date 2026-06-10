import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Atom,
  BookOpen,
  BrainCircuit,
  Camera,
  Check,
  ChevronRight,
  Cpu,
  ExternalLink,
  Fish,
  FlaskConical,
  Globe2,
  Lightbulb,
  Mail,
  Menu,
  Microscope,
  Network,
  Orbit,
  Sparkles,
  Target,
  Users,
  Waves,
  X,
} from "lucide-react";
import { initAnalytics, trackEvent } from "./analytics.js";

const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const scholarUrl =
  "https://scholar.google.com/citations?user=LCy8r2wAAAAJ&hl=en";
const instagramUrl = "https://www.instagram.com/qstate.group/";
const salmonPostUrl =
  "https://www.linkedin.com/posts/ariel-norambuena-80622275_inteligenciaartificial-computervision-yolo-activity-7467260165256474625-6ENg";

const navItems = [
  { id: "inicio", es: "Inicio", en: "Home" },
  { id: "investigacion", es: "Investigación", en: "Research" },
  { id: "tecnologia", es: "Tecnología", en: "Technology" },
  { id: "metodologia", es: "Metodología", en: "Method" },
  { id: "publicaciones", es: "Publicaciones", en: "Publications" },
  { id: "equipo", es: "Equipo", en: "People" },
  { id: "red", es: "Red", en: "Network" },
];

const researchLines = [
  {
    icon: Waves,
    number: "01",
    es: {
      title: "Sistemas cuánticos abiertos",
      subtitle: "Memoria, ruido y reconstrucción espectral",
      description:
        "Estudiamos cómo un entorno modifica la dinámica cuántica y cómo extraer información útil de esos efectos. Combinamos teoría de no-Markovianidad, aprendizaje automático y reconstrucción de densidades espectrales.",
      works: [
        "Learning spectral density functions in open quantum systems (2026)",
        "Memory effects in pulsed optomechanical systems (2026)",
        "Kernel-based quantum regressors for learning non-Markovianity (2023)",
      ],
    },
    en: {
      title: "Open quantum systems",
      subtitle: "Memory, noise, and spectral reconstruction",
      description:
        "We study how environments reshape quantum dynamics and how useful information can be recovered from those effects. Our work combines non-Markovian theory, machine learning, and spectral-density reconstruction.",
      works: [
        "Learning spectral density functions in open quantum systems (2026)",
        "Memory effects in pulsed optomechanical systems (2026)",
        "Kernel-based quantum regressors for learning non-Markovianity (2023)",
      ],
    },
  },
  {
    icon: BrainCircuit,
    number: "02",
    es: {
      title: "Control cuántico e IA científica",
      subtitle: "Aprender dinámicas sin perder la física",
      description:
        "Desarrollamos métodos de inteligencia artificial informados por leyes físicas para diseñar protocolos de control, reconocer transiciones dinámicas y acelerar problemas inversos en sistemas cuánticos.",
      works: [
        "Physics-informed neural networks for quantum control (PRL, 2024)",
        "Quantum kernels for classifying dynamical singularities (2024)",
        "Variational quantum circuits for non-Markovianity estimation (2023)",
      ],
    },
    en: {
      title: "Quantum control and scientific AI",
      subtitle: "Learning dynamics without losing the physics",
      description:
        "We develop physics-informed artificial-intelligence methods to design control protocols, recognize dynamical transitions, and accelerate inverse problems in quantum systems.",
      works: [
        "Physics-informed neural networks for quantum control (PRL, 2024)",
        "Quantum kernels for classifying dynamical singularities (2024)",
        "Variational quantum circuits for non-Markovianity estimation (2023)",
      ],
    },
  },
  {
    icon: Atom,
    number: "03",
    es: {
      title: "Espines, fonones y materia cuántica",
      subtitle: "Plataformas sólidas para sensado y control",
      description:
        "Modelamos defectos de espín en sólidos y su interacción con vibraciones, campos y cargas. Buscamos comprender límites de coherencia y convertirlos en recursos para metrología cuántica.",
      works: [
        "Phonon-induced non-equilibrium dynamics in a solid-state spin (2025)",
        "Temperature dependence of zero-field splitting in diamond (2023)",
        "State-dependent phonon-limited spin relaxation of NV centers (2021)",
      ],
    },
    en: {
      title: "Spins, phonons, and quantum matter",
      subtitle: "Solid-state platforms for sensing and control",
      description:
        "We model solid-state spin defects and their interactions with vibrations, fields, and charges. Our aim is to understand coherence limits and turn them into resources for quantum metrology.",
      works: [
        "Phonon-induced non-equilibrium dynamics in a solid-state spin (2025)",
        "Temperature dependence of zero-field splitting in diamond (2023)",
        "State-dependent phonon-limited spin relaxation of NV centers (2021)",
      ],
    },
  },
  {
    icon: Orbit,
    number: "04",
    es: {
      title: "Información y termodinámica cuántica",
      subtitle: "Entrelazamiento, transporte y criticidad",
      description:
        "Investigamos recursos cuánticos fuera del equilibrio, máquinas térmicas de pocos cuerpos, transporte y estados ligados en el continuo. Conectamos estructura espectral, geometría y desempeño operativo.",
      works: [
        "Geometric control of maximal entanglement via BIC (2026)",
        "Three-qubit thermal machines near quantum criticality (2024-2025)",
        "Polariton-based quantum memristors (2022)",
      ],
    },
    en: {
      title: "Quantum information and thermodynamics",
      subtitle: "Entanglement, transport, and criticality",
      description:
        "We investigate nonequilibrium quantum resources, few-body thermal machines, transport, and bound states in the continuum, linking spectral structure and geometry to operational performance.",
      works: [
        "Geometric control of maximal entanglement via BIC (2026)",
        "Three-qubit thermal machines near quantum criticality (2024-2025)",
        "Polariton-based quantum memristors (2022)",
      ],
    },
  },
  {
    icon: Network,
    number: "05",
    es: {
      title: "Materia activa y sistemas complejos",
      subtitle: "De agentes autopropulsados a comportamiento animal",
      description:
        "Aplicamos herramientas de física estadística, redes temporales y simulación a sistemas activos. Esta línea crea un puente natural hacia el análisis de movimiento colectivo y comportamiento animal.",
      works: [
        "Contact temporal networks during motility-induced phase separation (2025)",
        "Active Brownian particles as a complex network (2024)",
        "Epidemic-like spread between self-propelled agents (2023)",
      ],
    },
    en: {
      title: "Active matter and complex systems",
      subtitle: "From self-propelled agents to animal behavior",
      description:
        "We apply statistical-physics, temporal-network, and simulation tools to active systems. This creates a natural bridge toward collective-motion analysis and animal behavior.",
      works: [
        "Contact temporal networks during motility-induced phase separation (2025)",
        "Active Brownian particles as a complex network (2024)",
        "Epidemic-like spread between self-propelled agents (2023)",
      ],
    },
  },
];

const methodSteps = [
  {
    icon: Lightbulb,
    es: ["Pregunta física", "Identificamos el mecanismo y la escala relevante."],
    en: ["Physical question", "We identify the mechanism and relevant scale."],
  },
  {
    icon: Atom,
    es: ["Modelo microscópico", "Construimos una descripción mínima y trazable."],
    en: ["Microscopic model", "We build a minimal, traceable description."],
  },
  {
    icon: Cpu,
    es: ["Simulación y experimento", "Contrastamos escenarios con datos observables."],
    en: ["Simulation and experiment", "We test scenarios against observable data."],
  },
  {
    icon: BrainCircuit,
    es: ["Control e IA", "Diseñamos, inferimos y optimizamos con restricciones físicas."],
    en: ["Control and AI", "We design, infer, and optimize under physical constraints."],
  },
  {
    icon: Target,
    es: ["Validación", "Convertimos resultados en predicciones reproducibles."],
    en: ["Validation", "We turn results into reproducible predictions."],
  },
];

const projects = [
  {
    code: "FONDECYT REGULAR 1251131",
    year: "2025-2028",
    es: "Control, memoria y aprendizaje en sistemas cuánticos abiertos",
    en: "Control, memory, and learning in open quantum systems",
    members: "Karime Cerón · Francisco Ahumada",
  },
  {
    code: "FONDECYT EXPLORACIÓN 13250014",
    year: "2025-2027",
    es: "Nuevas rutas para dinámica cuántica y no equilibrio",
    en: "New routes for quantum dynamics and nonequilibrium physics",
    members: "Diego Montero",
  },
  {
    code: "ANILLO TEMÁTICO ATE 250066",
    year: "2025-2028",
    es: "Información, simulación y tecnologías cuánticas",
    en: "Quantum information, simulation, and technologies",
    members: "Alexis Legón · Alonso Recabarren · Ignacio Reyes · Rafael Reveco",
  },
];

const publications = [
  {
    year: "2026",
    title: "Learning spectral density functions in open quantum systems",
    venue: "arXiv:2602.24056",
    url: "https://arxiv.org/abs/2602.24056",
  },
  {
    year: "2026",
    title: "Geometric control of maximal entanglement via bound states in the continuum",
    venue: "arXiv:2602.23082",
    url: "https://arxiv.org/abs/2602.23082",
  },
  {
    year: "2025",
    title: "Contact temporal network during motility-induced phase separation",
    venue: "Physical Review E 112, 045409",
    url: "https://doi.org/10.1103/PhysRevE.112.045409",
  },
  {
    year: "2024",
    title: "Physics-informed neural networks for quantum control",
    venue: "Physical Review Letters 132, 010801",
    url: "https://doi.org/10.1103/PhysRevLett.132.010801",
  },
  {
    year: "2023",
    title: "Kernel-based quantum regressor models for learning non-Markovianity",
    venue: "Physical Review A 107, 022402",
    url: "https://doi.org/10.1103/PhysRevA.107.022402",
  },
  {
    year: "2022",
    title: "Polariton-based quantum memristors",
    venue: "Physical Review Applied 17, 024056",
    url: "https://doi.org/10.1103/PhysRevApplied.17.024056",
  },
];

const team = [
  {
    name: "Ariel Norambuena",
    roleEs: "Doctor en Física · Director de QState",
    roleEn: "PhD in Physics · QState Director",
    image: "ariel-norambuena.webp",
    url: scholarUrl,
  },
  {
    name: "Alexis Legón",
    roleEs: "Doctor en Física",
    roleEn: "PhD in Physics",
    image: "alexis-legon.webp",
  },
  {
    name: "Diego Montero",
    roleEs: "Estudiante de Magíster USM",
    roleEn: "MSc student at USM",
    image: "diego-montero.webp",
  },
  {
    name: "Karime Cerón",
    roleEs: "Estudiante de Licenciatura en Física",
    roleEn: "BSc Physics student",
    image: "karime-ceron.webp",
  },
  {
    name: "Alonso Recabarren",
    roleEs: "Estudiante de Licenciatura en Física",
    roleEn: "BSc Physics student",
    image: "alonso-recabarren.webp",
  },
  {
    name: "Francisco Ahumada",
    roleEs: "Estudiante de Licenciatura en Física",
    roleEn: "BSc Physics student",
    image: "francisco-ahumada.webp",
  },
  {
    name: "Iñaki Bermeo",
    roleEs: "Estudiante de Licenciatura en Astrofísica",
    roleEn: "BSc Astrophysics student",
    image: "inaki-bermeo.webp",
  },
  {
    name: "Rafael Reveco",
    roleEs: "Estudiante de Licenciatura en Astrofísica",
    roleEn: "BSc Astrophysics student",
    image: "rafael-reveco.webp",
  },
  {
    name: "Eduardo Novoa",
    roleEs: "Ingeniero Civil Telemático",
    roleEn: "Telematics Civil Engineer",
    image: "eduardo-novoa.webp",
  },
  {
    name: "Ignacio Farías",
    roleEs: "Estudiante de Ingeniería Civil Física",
    roleEn: "Engineering Physics student",
    image: "ignacio-farias.webp",
  },
  {
    name: "Clemente Velasco",
    roleEs: "Licenciado en Física",
    roleEn: "BSc in Physics",
    image: "clemente-velasco.webp",
  },
  {
    name: "Ignacio Reyes",
    roleEs: "Estudiante de Ingeniería Civil Física",
    roleEn: "Engineering Physics student",
    image: null,
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
  ["Felipe Fanchini", "UNESP", "Brasil"],
  ["Massimiliano Di Ventra", "UC San Diego", "Estados Unidos"],
  ["Shimon Kolkowitz", "UC Berkeley", "Estados Unidos"],
];

const copy = {
  es: {
    skip: "Ir al contenido",
    menu: "Abrir menú",
    heroEyebrow: "Quantum Science & Technology",
    heroTitle: "Entender, simular y controlar sistemas complejos.",
    heroDescription:
      "QState es un grupo de investigación de la Universidad Técnica Federico Santa María. Conectamos física fundamental, simulación, experimentos e inteligencia artificial para convertir preguntas difíciles en conocimiento verificable.",
    explore: "Explorar investigación",
    collaborate: "Colaborar con QState",
    based: "Santiago, Chile",
    institution: "Departamento de Física · UTFSM",
    disciplines: "Física · Computación · Ingeniería",
    researchEyebrow: "Líneas de investigación",
    researchTitle: "Una agenda científica conectada",
    researchDescription:
      "Nuestras líneas emergen de publicaciones recientes y convergen en una misma pregunta: cómo describir, inferir y controlar dinámicas complejas con modelos que respeten la física.",
    selectedWorks: "Trabajos relacionados",
    scholar: "Ver perfil completo en Google Scholar",
    techEyebrow: "Tecnología aplicada",
    techTitle: "Inteligencia artificial para comprender el movimiento de salmones",
    techDescription:
      "Junto a equipos de la Pontificia Universidad Católica de Chile, Universidad de Chile, AquaChile y UTFSM, estamos desarrollando experimentos, visión computacional, modelos de IA y simulación para observar y predecir el comportamiento de salmones en estanques.",
    techVision:
      "El proyecto conecta una necesidad real de la acuicultura con preguntas de física de sistemas activos: movimiento colectivo, respuesta al entorno y bienestar animal.",
    techPillars: [
      ["Experimentos", "Adquisición de datos y protocolos reproducibles en estanques."],
      ["Visión computacional", "Detección, seguimiento y trayectorias con redes neuronales."],
      ["Modelación", "Modelos predictivos y simulación de dinámica colectiva."],
      ["Transferencia", "Prototipos útiles para investigación y operación acuícola."],
    ],
    techTeam: "Equipo interdisciplinario",
    techPeople:
      "Ariel Norambuena · Sebastián Escobar · Nicolás Viaux · Osvaldo Greve · Ignacio Farías · Diego Yáñez",
    techCallout:
      "Abrimos colaboración en comportamiento animal, física estadística, ingeniería, IA y acuicultura.",
    seeProject: "Conocer el proyecto",
    methodEyebrow: "Cómo trabajamos",
    methodTitle: "De una pregunta física a una predicción comprobable",
    methodDescription:
      "Nuestra metodología integra escalas y disciplinas. Partimos desde el mecanismo, construimos modelos microscópicos, contrastamos simulación y experimento, e incorporamos control e IA cuando aportan capacidad explicativa.",
    methodPrinciple:
      "La inteligencia artificial no reemplaza el modelo físico: lo ayuda a inferir, diseñar y conectar con los datos.",
    programsEyebrow: "Investigación en curso",
    programsTitle: "Proyectos y publicaciones seleccionadas",
    projects: "Proyectos financiados",
    publications: "Publicaciones recientes",
    allPublications: "Todas las publicaciones",
    teamEyebrow: "Personas",
    teamTitle: "Un grupo que aprende construyendo",
    teamDescription:
      "Investigadores y estudiantes trabajan en problemas comunes con responsabilidades reales en teoría, código, experimentos y comunicación científica.",
    networkEyebrow: "Red científica",
    networkTitle: "Colaboración local, alcance internacional",
    networkDescription:
      "QState crece a través de problemas compartidos. Nuestra red conecta instituciones en Chile, América Latina y Estados Unidos.",
    contactEyebrow: "Conversemos",
    contactTitle: "Buscamos preguntas que valga la pena resolver juntos.",
    contactDescription:
      "Recibimos propuestas de colaboración científica, proyectos tecnológicos y estudiantes interesados en física, simulación e inteligencia artificial.",
    email: "Escribir a QState",
    follow: "Seguir en Instagram",
    footer: "QState · Quantum Science & Technology",
  },
  en: {
    skip: "Skip to content",
    menu: "Open menu",
    heroEyebrow: "Quantum Science & Technology",
    heroTitle: "Understand, simulate, and control complex systems.",
    heroDescription:
      "QState is a research group at Universidad Técnica Federico Santa María. We connect fundamental physics, simulation, experiments, and artificial intelligence to turn difficult questions into testable knowledge.",
    explore: "Explore our research",
    collaborate: "Collaborate with QState",
    based: "Santiago, Chile",
    institution: "Department of Physics · UTFSM",
    disciplines: "Physics · Computing · Engineering",
    researchEyebrow: "Research areas",
    researchTitle: "A connected scientific agenda",
    researchDescription:
      "Our areas emerge from recent publications and converge on one question: how to describe, infer, and control complex dynamics with models that respect the physics.",
    selectedWorks: "Related work",
    scholar: "View full Google Scholar profile",
    techEyebrow: "Applied technology",
    techTitle: "Artificial intelligence to understand salmon motion",
    techDescription:
      "Together with teams from Pontificia Universidad Católica de Chile, Universidad de Chile, AquaChile, and UTFSM, we are developing experiments, computer vision, AI models, and simulation to observe and predict salmon behavior in tanks.",
    techVision:
      "The project connects a real aquaculture challenge with active-matter physics: collective motion, environmental response, and animal welfare.",
    techPillars: [
      ["Experiments", "Data acquisition and reproducible protocols in tanks."],
      ["Computer vision", "Neural-network detection, tracking, and trajectories."],
      ["Modeling", "Predictive models and collective-dynamics simulation."],
      ["Transfer", "Useful prototypes for research and aquaculture operations."],
    ],
    techTeam: "Interdisciplinary team",
    techPeople:
      "Ariel Norambuena · Sebastián Escobar · Nicolás Viaux · Osvaldo Greve · Ignacio Farías · Diego Yáñez",
    techCallout:
      "We welcome collaboration in animal behavior, statistical physics, engineering, AI, and aquaculture.",
    seeProject: "Explore the project",
    methodEyebrow: "How we work",
    methodTitle: "From a physical question to a testable prediction",
    methodDescription:
      "Our method connects scales and disciplines. We begin with the mechanism, build microscopic models, compare simulation and experiment, and add control and AI when they improve explanatory power.",
    methodPrinciple:
      "Artificial intelligence does not replace the physical model: it helps infer, design, and connect it to data.",
    programsEyebrow: "Ongoing research",
    programsTitle: "Selected projects and publications",
    projects: "Funded projects",
    publications: "Recent publications",
    allPublications: "All publications",
    teamEyebrow: "People",
    teamTitle: "A group that learns by building",
    teamDescription:
      "Researchers and students work on shared problems with real responsibilities in theory, code, experiments, and scientific communication.",
    networkEyebrow: "Scientific network",
    networkTitle: "Local collaboration, international reach",
    networkDescription:
      "QState grows through shared problems. Our network connects institutions across Chile, Latin America, and the United States.",
    contactEyebrow: "Let’s talk",
    contactTitle: "We look for questions worth solving together.",
    contactDescription:
      "We welcome scientific collaborations, technology projects, and students interested in physics, simulation, and artificial intelligence.",
    email: "Email QState",
    follow: "Follow on Instagram",
    footer: "QState · Quantum Science & Technology",
  },
};

function SectionHeading({ eyebrow, title, description, inverted = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`section-eyebrow ${inverted ? "text-cyan-300" : "text-teal-700"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${
          inverted ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
            inverted ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function QuantumField() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineFade" x1="0" x2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="0.55" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fbbf24" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id="fieldGlow">
          <stop offset="0" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="1" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="1210" cy="430" r="390" fill="url(#fieldGlow)" />
      <g
        fill="none"
        stroke="url(#lineFade)"
        strokeWidth="2"
        transform="translate(1190 430)"
      >
        <ellipse rx="310" ry="105" transform="rotate(-14)" />
        <ellipse rx="310" ry="105" transform="rotate(46)" />
        <ellipse rx="310" ry="105" transform="rotate(106)" />
      </g>
      <g fill="#67e8f9">
        <circle cx="895" cy="510" r="7" />
        <circle cx="1375" cy="176" r="6" />
        <circle cx="1385" cy="660" r="8" />
      </g>
      <g fill="#fbbf24">
        <circle cx="1210" cy="430" r="14" />
        <circle cx="1095" cy="147" r="5" />
      </g>
      <path
        d="M40 735 C340 590 520 820 780 675 S1220 560 1570 715"
        fill="none"
        stroke="#0f766e"
        strokeOpacity="0.28"
        strokeWidth="2"
      />
    </svg>
  );
}

function App() {
  const [language, setLanguage] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    initAnalytics();
  }, [language]);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    trackEvent("navigation", { section: id, language });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#contenido"
        className="fixed left-4 top-3 z-[60] -translate-y-20 bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg transition focus:translate-y-0"
      >
        {text.skip}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/92 text-white backdrop-blur-md">
        <div className="page-shell flex h-20 items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => goTo("inicio")}
            className="flex shrink-0 items-center gap-3 text-left"
            aria-label="QState"
          >
            <img
              src={asset("qstate-mark.png")}
              alt=""
              className="h-10 w-10 rounded-lg bg-white object-contain p-1"
            />
            <span>
              <span className="block text-lg font-semibold leading-none">QState</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                Research Group
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Principal">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => goTo(item.id)}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item[language]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div
              className="flex rounded-md border border-white/15 p-1"
              aria-label="Language"
            >
              {["es", "en"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => {
                    setLanguage(item);
                    trackEvent("language_change", { language: item });
                  }}
                  className={`rounded px-2.5 py-1 text-xs font-semibold uppercase transition ${
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
              className="grid h-10 w-10 place-items-center rounded-md border border-white/15 xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={text.menu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-white/10 bg-slate-950 px-5 py-5 xl:hidden"
            aria-label="Mobile"
          >
            <div className="mx-auto grid max-w-6xl gap-1">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="rounded-md px-3 py-3 text-left text-sm font-medium text-slate-200 hover:bg-white/5"
                >
                  {item[language]}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="contenido">
        <section
          id="inicio"
          className="relative min-h-[760px] overflow-hidden bg-slate-950 pt-20 text-white"
        >
          <QuantumField />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.9)_48%,rgba(2,6,23,0.35)_100%)]" />
          <div className="page-shell relative flex min-h-[620px] items-center py-14 sm:min-h-[680px] sm:py-20">
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-300" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  {text.heroEyebrow}
                </p>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl sm:leading-[1.05] lg:text-7xl">
                {text.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-xl sm:leading-8">
                {text.heroDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
                <button
                  type="button"
                  onClick={() => goTo("investigacion")}
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  {text.explore}
                  <ArrowRight size={17} />
                </button>
                <button
                  type="button"
                  onClick={() => goTo("contacto")}
                  className="hidden items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex"
                >
                  {text.collaborate}
                </button>
              </div>
              <div className="mt-14 hidden max-w-3xl gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid sm:grid-cols-3">
                {[text.based, text.institution, text.disciplines].map(
                  (item, index) => {
                    const icons = [Globe2, Microscope, Cpu];
                    const Icon = icons[index];
                    return (
                      <div
                        key={item}
                        className="flex min-h-24 items-center gap-3 bg-slate-950/75 px-5 py-4"
                      >
                        <Icon className="shrink-0 text-cyan-300" size={20} />
                        <span className="text-sm leading-5 text-slate-200">
                          {item}
                        </span>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="investigacion" className="section-pad bg-slate-50">
          <div className="page-shell">
            <SectionHeading
              eyebrow={text.researchEyebrow}
              title={text.researchTitle}
              description={text.researchDescription}
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {researchLines.map((line, index) => {
                const Icon = line.icon;
                const content = line[language];
                return (
                  <article
                    key={line.number}
                    className={`group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg sm:p-8 ${
                      index === researchLines.length - 1 ? "lg:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50 text-teal-700">
                        <Icon size={24} />
                      </div>
                      <span className="text-sm font-semibold text-slate-300">
                        {line.number}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                      {content.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-teal-700">
                      {content.subtitle}
                    </p>
                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                      {content.description}
                    </p>
                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {text.selectedWorks}
                      </p>
                      <ul className="mt-3 grid gap-2">
                        {content.works.map((work) => (
                          <li
                            key={work}
                            className="flex gap-2 text-sm leading-6 text-slate-600"
                          >
                            <ChevronRight
                              size={16}
                              className="mt-1 shrink-0 text-teal-600"
                            />
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
              onClick={() => trackEvent("external_link", { target: "scholar" })}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-600"
            >
              {text.scholar}
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

        <section
          id="tecnologia"
          className="relative overflow-hidden bg-slate-950 text-white"
        >
          <img
            src={asset("technology-salmon-ai.webp")}
            alt={
              language === "es"
                ? "Salmones observados desde arriba con trayectorias de visión computacional"
                : "Overhead salmon tank with computer-vision trajectories"
            }
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.88)_52%,rgba(2,6,23,0.35)_100%)]" />
          <div className="page-shell relative py-20 sm:py-28">
            <div className="max-w-3xl">
              <p className="section-eyebrow text-cyan-300">{text.techEyebrow}</p>
              <div className="mt-5 flex items-start gap-4">
                <Fish className="mt-1 hidden shrink-0 text-cyan-300 sm:block" size={34} />
                <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                  {text.techTitle}
                </h2>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                {text.techDescription}
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                {text.techVision}
              </p>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-4">
              {text.techPillars.map(([title, description], index) => {
                const icons = [FlaskConical, Activity, Cpu, Sparkles];
                const Icon = icons[index];
                return (
                  <article
                    key={title}
                    className="rounded-lg border border-white/15 bg-slate-950/72 p-5 backdrop-blur-sm"
                  >
                    <Icon className="text-cyan-300" size={22} />
                    <h3 className="mt-4 font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {description}
                    </p>
                  </article>
                );
              })}
            </div>
            <div className="mt-9 max-w-4xl rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                {text.techTeam}
              </p>
              <p className="mt-3 leading-7 text-white">{text.techPeople}</p>
              <p className="mt-4 text-sm leading-6 text-cyan-50">
                {text.techCallout}
              </p>
              <a
                href={salmonPostUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("external_link", { target: "salmon_project" })
                }
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
              >
                {text.seeProject}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="metodologia" className="section-pad bg-white">
          <div className="page-shell">
            <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <SectionHeading
                  eyebrow={text.methodEyebrow}
                  title={text.methodTitle}
                  description={text.methodDescription}
                />
                <div className="mt-9 grid gap-3">
                  {methodSteps.map((step, index) => {
                    const Icon = step.icon;
                    const [title, description] = step[language];
                    return (
                      <article
                        key={title}
                        className="grid grid-cols-[44px_1fr] gap-4 rounded-lg border border-slate-200 p-4"
                      >
                        <div className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-cyan-300">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-teal-700">
                              0{index + 1}
                            </span>
                            <h3 className="font-semibold text-slate-950">{title}</h3>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
              <div className="lg:sticky lg:top-28">
                <img
                  src={asset("qstate-methodology.webp")}
                  alt={
                    language === "es"
                      ? "Diagrama de la metodología de trabajo QState"
                      : "Diagram of the QState working method"
                  }
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 object-cover shadow-lg"
                  loading="lazy"
                />
                <div className="mt-4 flex gap-3 rounded-lg bg-teal-50 p-5 text-teal-950">
                  <Check className="mt-0.5 shrink-0 text-teal-700" size={20} />
                  <p className="text-sm font-medium leading-6">
                    {text.methodPrinciple}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="publicaciones" className="section-pad bg-slate-100">
          <div className="page-shell">
            <SectionHeading
              eyebrow={text.programsEyebrow}
              title={text.programsTitle}
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <Target className="text-teal-700" size={22} />
                  <h3 className="text-xl font-semibold text-slate-950">
                    {text.projects}
                  </h3>
                </div>
                <div className="grid gap-4">
                  {projects.map((project) => (
                    <article
                      key={project.code}
                      className="rounded-lg border border-slate-200 bg-white p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                          {project.code}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          {project.year}
                        </span>
                      </div>
                      <h4 className="mt-4 text-lg font-semibold leading-7 text-slate-950">
                        {project[language]}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {project.members}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <BookOpen className="text-teal-700" size={22} />
                  <h3 className="text-xl font-semibold text-slate-950">
                    {text.publications}
                  </h3>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  {publications.map((publication) => (
                    <a
                      key={publication.title}
                      href={publication.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent("publication_open", {
                          title: publication.title,
                        })
                      }
                      className="group grid grid-cols-[52px_1fr_20px] gap-4 border-b border-slate-100 p-5 last:border-b-0 hover:bg-teal-50"
                    >
                      <span className="text-sm font-semibold text-teal-700">
                        {publication.year}
                      </span>
                      <span>
                        <span className="block font-semibold leading-6 text-slate-950">
                          {publication.title}
                        </span>
                        <span className="mt-1 block text-sm leading-5 text-slate-500">
                          {publication.venue}
                        </span>
                      </span>
                      <ExternalLink
                        size={16}
                        className="mt-1 text-slate-300 group-hover:text-teal-700"
                      />
                    </a>
                  ))}
                </div>
                <a
                  href={scholarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-600"
                >
                  {text.allPublications}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="equipo" className="section-pad bg-white">
          <div className="page-shell">
            <SectionHeading
              eyebrow={text.teamEyebrow}
              title={text.teamTitle}
              description={text.teamDescription}
            />
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {team.map((member) => {
                const content = (
                  <>
                    {member.image ? (
                      <img
                        src={asset(`team/${member.image}`)}
                        alt={member.name}
                        className="aspect-square w-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="grid aspect-square w-full place-items-center bg-slate-100">
                        <Users className="text-slate-300" size={48} />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-950">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-slate-500">
                        {language === "es" ? member.roleEs : member.roleEn}
                      </p>
                    </div>
                  </>
                );

                return member.url ? (
                  <a
                    key={member.name}
                    href={member.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {content}
                  </a>
                ) : (
                  <article
                    key={member.name}
                    className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                  >
                    {content}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="red" className="section-pad overflow-hidden bg-slate-950 text-white">
          <div className="page-shell">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionHeading
                  eyebrow={text.networkEyebrow}
                  title={text.networkTitle}
                  description={text.networkDescription}
                  inverted
                />
                <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {collaborators.map(([name, institution, country]) => (
                    <div
                      key={name}
                      className="flex items-start gap-3 border-b border-white/10 py-3"
                    >
                      <Globe2
                        size={17}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />
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
                alt={
                  language === "es"
                    ? "Mapa de la red internacional de colaboradores QState"
                    : "Map of the QState international collaborator network"
                }
                className="w-full opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-cyan-300">
          <div className="page-shell grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-eyebrow text-slate-800">{text.contactEyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                {text.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-800">
                {text.contactDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:qstate.socials@gmail.com"
                onClick={() => trackEvent("contact", { channel: "email" })}
                className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <Mail size={17} />
                {text.email}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("contact", { channel: "instagram" })}
                className="inline-flex items-center gap-2 rounded-md border border-slate-950/30 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/30"
              >
                <Camera size={17} />
                {text.follow}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400">
        <div className="page-shell flex flex-col gap-4 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={asset("qstate-mark.png")}
              alt=""
              className="h-8 w-8 rounded-md bg-white object-contain p-1"
            />
            <span>{text.footer}</span>
          </div>
          <p>
            © {new Date().getFullYear()} · Universidad Técnica Federico Santa
            María
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
