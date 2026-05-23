import { useState } from "react";

const navItems = [
  { id: "inicio", labelKey: "home" },
  { id: "investigacion", labelKey: "research" },
  { id: "colaboradores", labelKey: "collaborators" },
  { id: "proyectos", labelKey: "projects" },
  { id: "noticias", labelKey: "news" },
  { id: "integrantes", labelKey: "team" },
  { id: "contacto", labelKey: "contact" },
];

const translations = {
  es: {
    languageLabel: "ES",
    nav: {
      home: "Inicio",
      research: "Investigación",
      collaborators: "Colaboradores",
      projects: "Proyectos",
      news: "Noticias",
      team: "Equipo",
      contact: "Contacto",
    },
    common: {
      seePublication: "Ver publicación",
      associatedMembers: "Integrantes asociados",
      selectedCollaborator: "Colaborador seleccionado",
      collaborationNetwork: "QState collaboration network",
      collaborationCountries: "Chile · Colombia · Brasil · USA",
      leader: "Líder",
      instagram: "Instagram",
      readMore: "Ver publicación",
    },
    home: {
      badge: "Grupo de investigación USM en tecnologías cuánticas",
      title: "QState",
      subtitle: "Quantum Systems Theory And Technology",
      aboutEyebrow: "Quiénes somos",
      aboutTitle:
        "Ciencia cuántica con visión teórica, computacional y tecnológica.",
      aboutParagraph1:
        "QState reúne a personas interesadas en el estudio de la dinámica, simulación y control de sistemas cuánticos abiertos. Nuestro trabajo combina herramientas teóricas de mecánica cuántica, teoría de sistemas abiertos, métodos numéricos, control e inteligencia artificial para abordar problemas fundamentales y aplicaciones emergentes en tecnologías cuánticas.",
      aboutParagraph2:
        "Desde el Departamento de Física de la Universidad Técnica Federico Santa María, Campus San Joaquín, buscamos contribuir al desarrollo de investigación científica de frontera y a la formación de nuevas generaciones en física y tecnologías cuánticas, promoviendo la colaboración, la docencia avanzada y la divulgación científica.",
      exploreResearch: "Explorar investigación",
      seePublications: "Ver publicaciones",
      animationTitle: "open quantum dynamics",
      animationSubtitle: "system · environment · control",
    },
    research: {
      eyebrow: "Líneas de investigación",
      title: "Preguntas cuánticas, métodos modernos y plataformas emergentes.",
      description:
        "Nuestro trabajo se organiza en tres líneas principales que conectan teoría, simulación, control e inteligencia artificial.",
      lines: [
        {
          title: "Sistemas cuánticos abiertos",
          subtitle: "Teoría y simulación",
          description:
            "Estudiamos la dinámica de sistemas cuánticos en interacción con su entorno, incluyendo decoherencia, disipación, no-Markovianidad y simulación de procesos cuánticos.",
        },
        {
          title: "Control cuántico",
          subtitle: "Plataformas cuánticas",
          description:
            "Diseñamos estrategias para manipular, proteger y optimizar recursos cuánticos en plataformas físicas relevantes para tecnologías cuánticas.",
        },
        {
          title: "Inteligencia artificial",
          subtitle: "Mecánica cuántica",
          description:
            "Exploramos métodos de aprendizaje automático, optimización y modelos híbridos para resolver problemas en dinámica, control y simulación cuántica.",
        },
      ],
    },
    collaborators: {
      eyebrow: "Colaboradores",
      title: "Red internacional de colaboración",
      description:
        "QState mantiene una red activa de colaboración científica con investigadoras e investigadores en Chile, Colombia, Brasil y Estados Unidos.",
      mapLabel: "Mapa mundial digital de colaboradores QState",
    },
    projects: {
      eyebrow: "Proyectos y publicaciones",
      title: "Financiamiento, resultados y producción científica",
      description:
        "Una visión conjunta de los proyectos activos del grupo y una selección de publicaciones asociadas a nuestras líneas de investigación.",
      publicationEyebrow: "Publicaciones",
      publicationTitle: "Publicaciones científicas",
      publicationDescription:
        "Artículos y preprints asociados a sistemas cuánticos abiertos, control, simulación, tecnologías cuánticas, materia activa e inteligencia artificial aplicada a problemas de física.",
      projectFunding: "Proyecto de investigación",
      article: "Artículo",
      preprint: "Preprint",
    },
    news: {
      eyebrow: "Noticias",
      title: "Actividades y novedades",
      description:
        "Un espacio para compartir avances del grupo, actividades académicas, seminarios, colaboraciones y oportunidades para estudiantes.",
      items: [
        {
          date: "Miércoles 27 de mayo · 16:10 hrs",
          title:
            "Charla regular QState: Implementación del algoritmo de Laporta para la reducción de integrales multiloop",
          speaker: "Presenta: Diego Montero",
          location: "Sala de reuniones DFIS",
          description:
            "La charla abordará una implementación del algoritmo de Laporta para la reducción de integrales multiloop. Se introducirá el rol de estas integrales en procesos de dispersión de partículas, la relación con diagramas de Feynman y el uso de relaciones IBP.",
          image: "laporta-talk.jpg",
        },
        {
          date: "15 de mayo de 2026 · Instagram",
          title: "Lanzamiento de QState en Instagram",
          speaker: "Comunidad QState",
          location: "QState · Departamento de Física USM",
          description:
            "QState inició su presencia en redes sociales para compartir investigación, formación, actividades académicas y divulgación científica con la comunidad.",
          url: "https://www.instagram.com/p/DYXWJ8UxcZp/",
        },
        {
          date: "2026",
          title: "Proyectos activos de investigación",
          speaker: "QState",
          location: "USM",
          description:
            "El grupo participa en proyectos Fondecyt Regular, Fondecyt Exploración y Anillo Temático, fortaleciendo líneas en sistemas abiertos, control, simulación e inteligencia artificial.",
        },
      ],
    },
    team: {
      eyebrow: "Equipo",
      title: "Integrantes de QState",
      description:
        "Un grupo en crecimiento, compuesto por investigadores, estudiantes y colaboradores con intereses en física cuántica, simulación y tecnologías emergentes.",
      members: [
        [
  "Ariel Norambuena",
  "Doctor en Física · Líder de QState",
  "https://scholar.google.com/citations?user=LCy8r2wAAAAJ&hl=en",
],     
        ["Alexis Legón", "Doctor en Física"],
        ["Diego Montero", "Estudiante de Magíster USM"],
        ["Karime Cerón", "Estudiante de Licenciatura en Física"],
        ["Alonso Recabarren", "Estudiante de Licenciatura en Física"],
        ["Francisco Ahumada", "Estudiante de Licenciatura en Física"],
        ["Iñaki Bermeo", "Estudiante de Licenciatura en Astrofísica"],
        ["Ignacio Reyes", "Estudiante de Ingeniería Civil Física"],
        ["Rafael Reveco", "Estudiante de Licenciatura en Astrofísica"],
        ["Eduardo Novoa", "Ingeniero Civil Telemático"],
        ["Ignacio Farías", "Estudiante de Ingeniería Civil Física"],
        ["Clemente Velasco", "Licenciado en Física"],
      ],
    },
    contact: {
      eyebrow: "Conecta con QState",
      title: "Síguenos y participa de nuestra comunidad cuántica.",
      description:
        "Compartiremos avances de investigación, actividades académicas, oportunidades para estudiantes y contenido de divulgación científica.",
      email: "qstate.socials@gmail.com",
      affiliation:
        "Universidad Técnica Federico Santa María · Departamento de Física · Campus San Joaquín",
    },
    footer: {
      support: "Con el apoyo de ANID Chile y CoreDevX.",
    },
  },

  en: {
    languageLabel: "EN",
    nav: {
      home: "Home",
      research: "Research",
      collaborators: "Collaborators",
      projects: "Projects",
      news: "News",
      team: "Team",
      contact: "Contact",
    },
    common: {
      seePublication: "View publication",
      associatedMembers: "Associated members",
      selectedCollaborator: "Selected collaborator",
      collaborationNetwork: "QState collaboration network",
      collaborationCountries: "Chile · Colombia · Brazil · USA",
      leader: "Leader",
      instagram: "Instagram",
      readMore: "View post",
    },
    home: {
      badge: "USM research group in quantum technologies",
      title: "QState",
      subtitle: "Quantum Systems Theory And Technology",
      aboutEyebrow: "About us",
      aboutTitle:
        "Quantum science with theoretical, computational, and technological vision.",
      aboutParagraph1:
        "QState brings together people interested in the dynamics, simulation, and control of open quantum systems. Our work combines tools from quantum mechanics, open-system theory, numerical methods, control, and artificial intelligence to address fundamental problems and emerging applications in quantum technologies.",
      aboutParagraph2:
        "From the Department of Physics at Universidad Técnica Federico Santa María, San Joaquín Campus, we aim to contribute to frontier scientific research and to the training of new generations in physics and quantum technologies, promoting collaboration, advanced teaching, and scientific outreach.",
      exploreResearch: "Explore research",
      seePublications: "View publications",
      animationTitle: "open quantum dynamics",
      animationSubtitle: "system · environment · control",
    },
    research: {
      eyebrow: "Research lines",
      title: "Quantum questions, modern methods, and emerging platforms.",
      description:
        "Our work is organized around three main research lines connecting theory, simulation, control, and artificial intelligence.",
      lines: [
        {
          title: "Open quantum systems",
          subtitle: "Theory and simulation",
          description:
            "We study the dynamics of quantum systems interacting with their environment, including decoherence, dissipation, non-Markovianity, and simulation of quantum processes.",
        },
        {
          title: "Quantum control",
          subtitle: "Quantum platforms",
          description:
            "We design strategies to manipulate, protect, and optimize quantum resources in physical platforms relevant for quantum technologies.",
        },
        {
          title: "Artificial intelligence",
          subtitle: "Quantum mechanics",
          description:
            "We explore machine learning, optimization, and hybrid models to solve problems in quantum dynamics, control, and simulation.",
        },
      ],
    },
    collaborators: {
      eyebrow: "Collaborators",
      title: "International collaboration network",
      description:
        "QState maintains an active scientific collaboration network with researchers in Chile, Colombia, Brazil, and the United States.",
      mapLabel: "Digital world map of QState collaborators",
    },
    projects: {
      eyebrow: "Projects and publications",
      title: "Funding, results, and scientific production",
      description:
        "A joint view of the group's active research projects and a selection of publications associated with our research lines.",
      publicationEyebrow: "Publications",
      publicationTitle: "Scientific publications",
      publicationDescription:
        "Articles and preprints associated with open quantum systems, control, simulation, quantum technologies, active matter, and artificial intelligence applied to physics problems.",
      projectFunding: "Research project",
      article: "Article",
      preprint: "Preprint",
    },
    news: {
      eyebrow: "News",
      title: "Activities and updates",
      description:
        "A space to share group updates, academic activities, seminars, collaborations, and opportunities for students.",
      items: [
        {
          date: "Wednesday, May 27 · 16:10",
          title:
            "QState regular talk: Implementation of the Laporta algorithm for multiloop integral reduction",
          speaker: "Speaker: Diego Montero",
          location: "DFIS meeting room",
          description:
            "The talk will address an implementation of the Laporta algorithm for reducing multiloop integrals. It will introduce the role of these integrals in particle scattering processes, their connection with Feynman diagrams, and the use of IBP relations.",
          image: "laporta-talk.jpg",
        },
        {
          date: "May 15, 2026 · Instagram",
          title: "QState launch on Instagram",
          speaker: "QState community",
          location: "QState · USM Department of Physics",
          description:
            "QState launched its social media presence to share research, training, academic activities, and scientific outreach with the community.",
          url: "https://www.instagram.com/p/DYXWJ8UxcZp/",
        },
        {
          date: "2026",
          title: "Active research projects",
          speaker: "QState",
          location: "USM",
          description:
            "The group participates in Fondecyt Regular, Fondecyt Exploración, and Anillo Temático projects, strengthening research lines in open systems, control, simulation, and artificial intelligence.",
        },
      ],
    },
    team: {
      eyebrow: "Team",
      title: "QState members",
      description:
        "A growing group of researchers, students, and collaborators interested in quantum physics, simulation, and emerging technologies.",
      members: [
        [
  "Ariel Norambuena",
  "PhD in Physics · QState Leader",
  "https://scholar.google.com/citations?user=LCy8r2wAAAAJ&hl=en",
],
        ["Alexis Legón", "PhD in Physics"],
        ["Diego Montero", "MSc student at USM"],
        ["Karime Cerón", "BSc Physics student"],
        ["Alonso Recabarren", "BSc Physics student"],
        ["Francisco Ahumada", "BSc Physics student"],
        ["Iñaki Bermeo", "BSc Astrophysics student"],
        ["Ignacio Reyes", "Engineering Physics student"],
        ["Rafael Reveco", "BSc Astrophysics student"],
        ["Eduardo Novoa", "Telematics Civil Engineer"],
        ["Ignacio Farías", "Engineering Physics student"],
        ["Clemente Velasco", "BSc in Physics"],
      ],
    },
    contact: {
      eyebrow: "Connect with QState",
      title: "Follow us and join our quantum community.",
      description:
        "We will share research progress, academic activities, opportunities for students, and scientific outreach content.",
      email: "qstate.socials@gmail.com",
      affiliation:
        "Universidad Técnica Federico Santa María · Department of Physics · San Joaquín Campus",
    },
    footer: {
      support: "Supported by ANID Chile and CoreDevX.",
    },
  },
};

const collaborators = [
  {
    name: "Pedro Orellana",
    institution: "UTFSM",
    countryEs: "Chile",
    countryEn: "Chile",
    city: "Valparaíso",
    lat: -33.05,
    lon: -71.62,
  },
  {
    name: "Nicolás Viaux",
    institution: "UTFSM",
    countryEs: "Chile",
    countryEn: "Chile",
    city: "Valparaíso",
    lat: -33.05,
    lon: -71.62,
  },
  {
    name: "Guillermo Romero",
    institution: "USACH",
    countryEs: "Chile",
    countryEn: "Chile",
    city: "Santiago",
    lat: -33.45,
    lon: -70.66,
  },
  {
    name: "Francisco Albarrán",
    institution: "USACH",
    countryEs: "Chile",
    countryEn: "Chile",
    city: "Santiago",
    lat: -33.45,
    lon: -70.66,
  },
  {
    name: "Jerónimo Maze",
    institution: "PUC",
    countryEs: "Chile",
    countryEn: "Chile",
    city: "Santiago",
    lat: -33.45,
    lon: -70.66,
  },
  {
    name: "Dardo Goyeneche",
    institution: "PUC",
    countryEs: "Chile",
    countryEn: "Chile",
    city: "Santiago",
    lat: -33.45,
    lon: -70.66,
  },
  {
    name: "Marco Bianchi",
    institution: "USS",
    countryEs: "Chile",
    countryEn: "Chile",
    city: "Santiago",
    lat: -33.45,
    lon: -70.66,
  },
  {
    name: "Cristian Susa",
    institution: "Universidad de Córdoba",
    countryEs: "Colombia",
    countryEn: "Colombia",
    city: "Montería",
    lat: 8.75,
    lon: -75.88,
  },
  {
    name: "Felipe Fanchini",
    institution: "UNESP",
    countryEs: "Brasil",
    countryEn: "Brazil",
    city: "São Paulo",
    lat: -23.55,
    lon: -46.63,
  },
  {
    name: "Massimiliano Di Ventra",
    institution: "University of California",
    countryEs: "USA",
    countryEn: "USA",
    city: "California",
    lat: 32.88,
    lon: -117.23,
  },
  {
    name: "Shimon Kolkowitz",
    institution: "University of California",
    countryEs: "USA",
    countryEn: "USA",
    city: "California",
    lat: 37.87,
    lon: -122.27,
  },
];

const projects = [
  {
    title: "Fondecyt Regular No. 1251131",
    members: ["Karime Cerón", "Francisco Ahumada"],
  },
  {
    title: "Fondecyt Exploración No. 13250014",
    members: ["Diego Montero"],
  },
  {
    title: "Anillo Temático ATE 250066",
    members: [
      "Alexis Legón",
      "Alonso Recabarren",
      "Ignacio Reyes",
      "Rafael Reveco",
    ],
  },
];

const publications = [
  {
    title:
      "Quantum Magic Reveals CP Phases Invisible to Entanglement in Spin-0 Decays",
    authors: "Nicolas Viaux, Ariel Norambuena, and Pedro Orellana",
    venue: "arXiv:2605.19117 (2026)",
    type: "preprint",
    topicEs: "Quantum magic · fases CP · información cuántica",
    topicEn: "Quantum magic · CP phases · quantum information",
    url: "https://arxiv.org/abs/2605.19117",
  },
  {
    title: "Memory effects in pulsed optomechanical systems",
    authors:
      "Hachisko Tapia-Maureira, Bing He, Massimiliano Di Ventra, and Ariel Norambuena",
    venue: "Physical Review Applied 25, 044083 (2026)",
    type: "article",
    topicEs: "Optomecánica · memoria · tecnologías cuánticas",
    topicEn: "Optomechanics · memory · quantum technologies",
    url: "https://journals.aps.org/prapplied/abstract/10.1103/mxbn-15ry",
  },
  {
    title: "Learning spectral density functions in open quantum systems",
    authors:
      "Felipe Peleteiro, João Victor Shiguetsugo Kawanami Lima, Pedro Marcelo Prado, Felipe Fernandes Fanchini, and Ariel Norambuena",
    venue: "arXiv:2602.24056 (2026)",
    type: "preprint",
    topicEs: "Sistemas abiertos · inteligencia artificial",
    topicEn: "Open systems · artificial intelligence",
    url: "https://arxiv.org/abs/2602.24056",
  },
  {
    title:
      "Geometric control of maximal entanglement via bound states in the continuum",
    authors:
      "Alexis R. Legón, Mario Miranda Rojas, Pedro Orellana, and Ariel Norambuena",
    venue: "arXiv:2602.23082 (2026)",
    type: "preprint",
    topicEs: "Entrelazamiento · giant atoms · BICs",
    topicEn: "Entanglement · giant atoms · BICs",
    url: "https://arxiv.org/abs/2602.23082",
  },
  {
    title: "Phonon-induced non-equilibrium dynamics in a single solid-state spin",
    authors:
      "Ariel Norambuena, Diego Tancara, Vicente F. Chomalí-Castro, and Daniel Castillo",
    venue: "Quantum Science and Technology 10, 045001 (2025)",
    type: "article",
    topicEs: "Sistemas abiertos · fonones · espines sólidos",
    topicEn: "Open systems · phonons · solid-state spins",
    url: "https://iopscience.iop.org/article/10.1088/2058-9565/adf092/meta",
  },
  {
    title: "Contact temporal network during motility-induced phase separation",
    authors:
      "Italo Salas, Francisca Guzmán-Lastra, Denisse Pastén, and Ariel Norambuena",
    venue: "Physical Review E 112, 045409 (2025)",
    type: "article",
    topicEs: "Materia activa · redes complejas",
    topicEn: "Active matter · complex networks",
    url: "https://journals.aps.org/pre/abstract/10.1103/t3k6-hcmr",
  },
  {
    title:
      "Entropy, entanglement, and susceptibility of three qubits near quantum criticality",
    authors:
      "Bastian Castorene, Francisco J. Peña, Ariel Norambuena, Sergio E. Ulloa, Cristobal Araya, and Patricio Vargas",
    venue: "Physical Review E 111, 034118 (2025)",
    type: "article",
    topicEs: "Entrelazamiento · termodinámica cuántica",
    topicEn: "Entanglement · quantum thermodynamics",
    url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.111.034118",
  },
];

const researchVisuals = {
  es: [
    { variant: "open" },
    { variant: "control" },
    { variant: "ai" },
  ],
  en: [
    { variant: "open" },
    { variant: "control" },
    { variant: "ai" },
  ],
};

function assetPath(fileName) {
  return `${import.meta.env.BASE_URL}${fileName}`;
}

function mapPosition(lat, lon) {
  return {
    left: `${((lon + 180) / 360) * 100}%`,
    top: `${((90 - lat) / 180) * 100}%`,
  };
}

function countryName(collaborator, language) {
  return language === "es" ? collaborator.countryEs : collaborator.countryEn;
}

function Logo({ className = "h-14 w-14" }) {
  return (
    <div
      className={`${className} flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-white p-1 shadow-lg shadow-cyan-900/40`}
    >
      <img
        src={assetPath("qstate-logo.png")}
        alt="QState logo"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-300/90">{description}</p>
      )}
    </div>
  );
}

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="flex rounded-full border border-white/10 bg-slate-900 p-1 text-xs font-semibold text-slate-300">
      {["es", "en"].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-3 py-2 transition ${
            language === lang
              ? "bg-cyan-200 text-slate-950 shadow-lg shadow-cyan-400/10"
              : "hover:bg-white/10 hover:text-cyan-200"
          }`}
          aria-label={lang === "es" ? "Cambiar a español" : "Switch to English"}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Header({ activeSection, onNavigate, language, setLanguage, text }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate("inicio")}
          className="flex items-center gap-3 text-left"
          aria-label={language === "es" ? "Ir al inicio" : "Go to home"}
        >
          <Logo />
          <div className="hidden sm:block">
            <p className="text-xl font-semibold text-white">QState</p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Quantum Systems
            </p>
          </div>
        </button>

        <div className="flex items-center gap-3">
          <nav className="hidden flex-wrap justify-end gap-x-3 gap-y-2 text-base font-medium text-slate-300 xl:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`rounded-full px-3 py-2 transition ${
                  activeSection === item.id
                    ? "bg-cyan-200 text-slate-950 shadow-lg shadow-cyan-400/10"
                    : "border border-transparent hover:border-white/10 hover:bg-white/8 hover:text-cyan-200"
                }`}
              >
                {text.nav[item.labelKey]}
              </button>
            ))}
          </nav>

          <select
            value={activeSection}
            onChange={(event) => onNavigate(event.target.value)}
            className="max-w-[185px] rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-white outline-none xl:hidden"
            aria-label={
              language === "es" ? "Seleccionar sección" : "Select section"
            }
          >
            {navItems.map((item) => (
              <option key={item.id} value={item.id}>
                {text.nav[item.labelKey]}
              </option>
            ))}
          </select>

          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
}

function OpenQuantumAnimation({ text }) {
  return (
    <div className="relative mx-auto flex aspect-[1.35/1] w-full max-w-7xl items-center justify-center overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/50 backdrop-blur sm:aspect-[2.2/1] md:rounded-[2.75rem] lg:aspect-[2.9/1]">
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
        .q-flow { stroke-dasharray: 18 18; animation: qstate-pulse-flow 5s linear infinite; }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_70%_28%,rgba(168,85,247,0.20),transparent_24%),radial-gradient(circle_at_20%_78%,rgba(59,130,246,0.18),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 340">
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

        <ellipse
          cx="500"
          cy="170"
          rx="145"
          ry="88"
          fill="none"
          stroke="#67e8f9"
          strokeOpacity="0.18"
        />
        <ellipse
          cx="500"
          cy="170"
          rx="230"
          ry="132"
          fill="none"
          stroke="#a78bfa"
          strokeOpacity="0.16"
        />
        <ellipse
          cx="500"
          cy="170"
          rx="330"
          ry="170"
          fill="none"
          stroke="#60a5fa"
          strokeOpacity="0.10"
        />

        <circle className="q-drift" cx="145" cy="95" r="6" fill="#67e8f9" opacity="0.75" />
        <text
          className="q-drift"
          x="145"
          y="76"
          textAnchor="middle"
          fill="#cffafe"
          fontSize="23"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0.92"
        >
          ρ₁
        </text>

        <circle className="q-drift" cx="845" cy="120" r="5" fill="#c4b5fd" opacity="0.65" style={{ animationDelay: "-2s" }} />
        <text
          className="q-drift"
          x="845"
          y="101"
          textAnchor="middle"
          fill="#ddd6fe"
          fontSize="23"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0.90"
          style={{ animationDelay: "-2s" }}
        >
          ρ₂
        </text>

        <circle className="q-drift" cx="790" cy="260" r="5" fill="#93c5fd" opacity="0.65" style={{ animationDelay: "-4s" }} />
        <text
          className="q-drift"
          x="790"
          y="241"
          textAnchor="middle"
          fill="#bfdbfe"
          fontSize="23"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0.90"
          style={{ animationDelay: "-4s" }}
        >
          ρ₃
        </text>

        <circle className="q-drift" cx="235" cy="250" r="4" fill="#cffafe" opacity="0.70" style={{ animationDelay: "-5s" }} />
        <text
          className="q-drift"
          x="235"
          y="231"
          textAnchor="middle"
          fill="#cffafe"
          fontSize="23"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0.92"
          style={{ animationDelay: "-5s" }}
        >
          ρ₄
        </text>
      </svg>

      <div className="absolute h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl q-breathe" />
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-100/50 bg-cyan-100/80 font-serif text-3xl font-light italic text-slate-950/75 shadow-2xl shadow-cyan-300/50 md:h-24 md:w-24 md:text-4xl">
        ℋ
      </div>

      <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-[11px] text-slate-300 backdrop-blur sm:bottom-6 sm:left-6 sm:px-4 sm:py-3 sm:text-xs">
        <p className="font-semibold text-cyan-100">{text.animationTitle}</p>
        <p className="mt-1 text-slate-400">{text.animationSubtitle}</p>
      </div>
    </div>
  );
}

function HomeGroupSection({ onNavigate, text }) {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 md:py-16">
      <OpenQuantumAnimation text={text.home} />

      <div className="mx-auto mt-10 grid max-w-7xl gap-10 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            {text.home.badge}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
            {text.home.title}
            <span className="mt-4 block bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-200 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-5xl">
              {text.home.subtitle}
            </span>
          </h1>

          <div className="mt-8 flex w-full max-w-md items-center justify-center rounded-[2rem] border border-cyan-200/20 bg-white p-5 shadow-2xl shadow-cyan-950/30">
            <img
              src={assetPath("qstate-logo.png")}
              alt="QState logo"
              className="w-full object-contain"
            />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("investigacion")}
              className="rounded-full bg-cyan-200 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-white"
            >
              {text.home.exploreResearch}
            </button>
            <button
              type="button"
              onClick={() => onNavigate("proyectos")}
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              {text.home.seePublications}
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_70px_rgba(2,6,23,0.42)] backdrop-blur-sm sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            {text.home.aboutEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {text.home.aboutTitle}
          </h2>

          <p className="mt-8 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            {text.home.aboutParagraph1}
          </p>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            {text.home.aboutParagraph2}
          </p>
        </div>
      </div>
    </section>
  );
}

function ResearchPrimaryIcon({ variant }) {
  const shell = "h-20 w-20 md:h-24 md:w-24";

  if (variant === "open") {
    return (
      <svg viewBox="0 0 72 72" className={shell} aria-hidden="true">
        <defs>
          <linearGradient id="openStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="8" fill="#e0f2fe" fillOpacity="0.95" />
        <circle cx="36" cy="36" r="17" fill="none" stroke="url(#openStroke)" strokeWidth="1.4" strokeOpacity="0.9" strokeDasharray="4 3" />
        <path d="M21 18c7-7 23-9 31-1" fill="none" stroke="#67e8f9" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8" />
        <path d="M18 48c2 8 10 15 21 17" fill="none" stroke="#93c5fd" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8" />
        <path d="M54 24c6 7 7 18 2 27" fill="none" stroke="#c4b5fd" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8" />
        <circle cx="52" cy="18" r="3.5" fill="#67e8f9" fillOpacity="0.95" />
        <circle cx="17" cy="47" r="3.2" fill="#93c5fd" fillOpacity="0.9" />
        <circle cx="40" cy="63" r="3.2" fill="#c4b5fd" fillOpacity="0.9" />
      </svg>
    );
  }

  if (variant === "control") {
    return (
      <svg viewBox="0 0 72 72" className={shell} aria-hidden="true">
        <defs>
          <linearGradient id="controlStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="19" fill="none" stroke="url(#controlStroke)" strokeWidth="1.6" strokeOpacity="0.9" />
        <ellipse cx="36" cy="36" rx="19" ry="8.5" fill="none" stroke="#c4b5fd" strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M17 40c6-8 12 8 18 0s12-8 20 0" fill="none" stroke="#67e8f9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M47 15l7 2-2 7" fill="none" stroke="#e0f2fe" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 17c-4 4-8 8-12 12" fill="none" stroke="#e0f2fe" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="36" cy="36" r="4" fill="#e0f2fe" fillOpacity="0.95" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 72 72" className={shell} aria-hidden="true">
      <defs>
        <linearGradient id="aiStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
      </defs>
      <rect x="18" y="18" width="36" height="36" rx="9" fill="none" stroke="url(#aiStroke)" strokeWidth="1.6" strokeOpacity="0.95" />
      <path d="M28 36h16" stroke="#e0f2fe" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 28v16" stroke="#e0f2fe" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="28" r="3.2" fill="#67e8f9" fillOpacity="0.95" />
      <circle cx="44" cy="28" r="3.2" fill="#c4b5fd" fillOpacity="0.95" />
      <circle cx="28" cy="44" r="3.2" fill="#93c5fd" fillOpacity="0.95" />
      <circle cx="44" cy="44" r="3.2" fill="#bfdbfe" fillOpacity="0.95" />
      <path d="M18 30h-6M18 42h-6M54 30h6M54 42h6M30 18v-6M42 18v-6M30 54v6M42 54v6" stroke="#94a3b8" strokeOpacity="0.65" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ResearchChipIcon({ variant, index }) {
  const common = "h-4 w-4";

  if (variant === "open") {
    if (index === 0) {
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M5 12a7 7 0 0111-5.7" fill="none" stroke="#67e8f9" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M19 12a7 7 0 01-11 5.7" fill="none" stroke="#c4b5fd" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    }
    if (index === 1) {
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M6 8c2 3 3 5 6 5s4 2 6 5" fill="none" stroke="#93c5fd" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M4 12c3-4 5-4 8 0s5 4 8 0" fill="none" stroke="#e0f2fe" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "control") {
    if (index === 0) {
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M4 12h4l2-5 4 10 2-5h4" fill="none" stroke="#67e8f9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (index === 1) {
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="6" fill="none" stroke="#93c5fd" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="2.4" fill="#93c5fd" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M6 18l6-12 6 12" fill="none" stroke="#c4b5fd" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="7" cy="12" r="2.2" fill="#67e8f9" />
        <circle cx="12" cy="7" r="2.2" fill="#c4b5fd" />
        <circle cx="17" cy="12" r="2.2" fill="#93c5fd" />
        <path d="M9 11l2-2M13 9l2 2" stroke="#e0f2fe" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <rect x="5" y="6" width="14" height="12" rx="3" fill="none" stroke="#93c5fd" strokeWidth="1.5" />
        <path d="M9 12h6" stroke="#e0f2fe" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path d="M6 17l4-4 3 2 5-7" fill="none" stroke="#c4b5fd" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


function ResearchSection({ text, language }) {
  const visuals = researchVisuals[language];

  return (
    <section className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={text.research.eyebrow}
          title={text.research.title}
          description={text.research.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {text.research.lines.map((line, index) => {
            const visual = visuals[index];

            return (
              <article
                key={line.title}
                className="group h-full rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-7 shadow-[0_24px_70px_rgba(2,6,23,0.42)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))]"
              >
                <div className="relative mb-7 overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#020617] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_25%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_78%_28%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))]" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />

                  <div className="relative flex items-center justify-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-[1.5rem] border border-cyan-200/10 bg-slate-950/75 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                      <ResearchPrimaryIcon variant={visual.variant} />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {line.title}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/70">
                  {line.subtitle}
                </p>
                <p className="mt-5 leading-8 text-slate-300/95">
                  {line.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CollaboratorsSection({ text, language }) {
  const [selectedCollaborator, setSelectedCollaborator] = useState(
    collaborators[0]
  );

  return (
    <section className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={text.collaborators.eyebrow}
          title={text.collaborators.title}
          description={text.collaborators.description}
        />

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-3 shadow-2xl shadow-cyan-950/30 sm:p-5">
          <div className="relative aspect-[1.25/1] overflow-hidden rounded-[2rem] border border-cyan-200/10 bg-slate-900/70 sm:aspect-[1.9/1] lg:aspect-[2.3/1]">
            <div
              aria-label={text.collaborators.mapLabel}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
              style={{
                backgroundImage: `url("${assetPath("qstate-world-map.png")}")`,
                filter: "brightness(1.2) contrast(1.15) saturate(1.2)",
              }}
            />

            <svg
              viewBox="0 0 1000 520"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {collaborators.map((collaborator) => {
                const from = mapPosition(-33.45, -70.66);
                const to = mapPosition(collaborator.lat, collaborator.lon);
                const x1 = parseFloat(from.left) * 10;
                const y1 = parseFloat(from.top) * 5.2;
                const x2 = parseFloat(to.left) * 10;
                const y2 = parseFloat(to.top) * 5.2;

                return (
                  <path
                    key={`${collaborator.name}-arc`}
                    d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${
                      Math.min(y1, y2) - 90
                    } ${x2} ${y2}`}
                    fill="none"
                    stroke="#67e8f9"
                    strokeOpacity="0.28"
                    strokeWidth="1.4"
                    strokeDasharray="6 9"
                  />
                );
              })}
            </svg>

            {collaborators.map((collaborator, index) => {
              const position = mapPosition(collaborator.lat, collaborator.lon);
              const selected =
                selectedCollaborator.name === collaborator.name;

              return (
                <button
                  key={collaborator.name}
                  type="button"
                  onClick={() => setSelectedCollaborator(collaborator)}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition ${
                    selected ? "scale-125" : "hover:scale-110"
                  }`}
                  style={{
                    ...position,
                    marginLeft: `${(index % 3) * 8}px`,
                    marginTop: `${(index % 2) * 6}px`,
                  }}
                  aria-label={`${
                    language === "es" ? "Ver colaborador" : "View collaborator"
                  } ${collaborator.name}`}
                >
                  <span
                    className={`block h-4 w-4 rounded-full border-2 border-slate-950 shadow-lg ${
                      selected
                        ? "bg-white shadow-cyan-200"
                        : "bg-cyan-300 shadow-cyan-300/60"
                    }`}
                  />
                  <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 opacity-0 blur-sm transition group-hover:opacity-100" />
                </button>
              );
            })}

            <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-slate-950/75 px-3 py-2 text-[11px] text-slate-300 backdrop-blur sm:bottom-5 sm:left-5 sm:px-4 sm:py-3 sm:text-xs">
              <p className="font-semibold text-cyan-100">
                {text.common.collaborationNetwork}
              </p>
              <p className="mt-1 text-slate-400">
                {text.common.collaborationCountries}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2.5rem] border border-cyan-200/20 bg-cyan-300/10 p-7 shadow-2xl shadow-cyan-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/80">
            {text.common.selectedCollaborator}
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-3xl font-semibold text-white">
                {selectedCollaborator.name}
              </h3>
              <p className="mt-2 text-lg text-slate-300">
                {selectedCollaborator.institution}
              </p>
            </div>

            <p className="text-slate-400">
              {selectedCollaborator.city},{" "}
              {countryName(selectedCollaborator, language)}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.map((collaborator) => (
            <button
              key={collaborator.name}
              type="button"
              onClick={() => setSelectedCollaborator(collaborator)}
              className={`rounded-2xl border px-5 py-4 text-left transition ${
                selectedCollaborator.name === collaborator.name
                  ? "border-cyan-200/40 bg-cyan-200/10 text-cyan-100"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-200/30 hover:bg-white/[0.06]"
              }`}
            >
              <span className="block font-semibold">{collaborator.name}</span>
              <span className="mt-1 block text-sm text-slate-400">
                {collaborator.institution} · {countryName(collaborator, language)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPublicationsSection({ text, language }) {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={text.projects.eyebrow}
          title={text.projects.title}
          description={text.projects.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                {text.projects.projectFunding}
              </p>
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {text.common.associatedMembers}
                </p>
                <ul className="mt-3 space-y-2 text-slate-300">
                  {project.members.map((member) => (
                    <li key={member}>• {member}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow={text.projects.publicationEyebrow}
            title={text.projects.publicationTitle}
            description={text.projects.publicationDescription}
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {publications.map((paper) => (
              <article
                key={paper.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {paper.type === "article"
                      ? text.projects.article
                      : text.projects.preprint}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {language === "es" ? paper.topicEs : paper.topicEn}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight text-white">
                  {paper.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {paper.authors}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                  {paper.venue}
                </p>

                <a
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full border border-cyan-200/30 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200 hover:text-slate-950"
                >
                  {text.common.seePublication}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection({ text }) {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={text.news.eyebrow}
          title={text.news.title}
          description={text.news.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {text.news.items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
            >
              {item.image && (
                <div className="border-b border-white/10 bg-slate-900">
                  <img
                    src={assetPath(item.image)}
                    alt={item.title}
                    className="h-72 w-full object-cover object-top"
                  />
                </div>
              )}

              <div className="p-7">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                  {item.date}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-semibold text-cyan-100">
                  {item.speaker}
                </p>
                <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                <p className="mt-5 leading-8 text-slate-300">
                  {item.description}
                </p>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-full border border-cyan-200/30 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200 hover:text-slate-950"
                  >
                    {text.common.readMore}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection({ text }) {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={text.team.eyebrow}
          title={text.team.title}
          description={text.team.description}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {text.team.members.map(([name, role], index) => {
            const isLeader = index === 0;

            return (
              <article
                key={name}
                className={`rounded-3xl border p-5 backdrop-blur-sm transition duration-300 ${
                  isLeader
                    ? "border-cyan-200/40 bg-cyan-200/10 shadow-xl shadow-cyan-950/30 sm:col-span-2 lg:col-span-3"
                    : "border-white/10 bg-white/[0.035] hover:border-cyan-200/30 hover:bg-white/[0.06]"
                }`}
              >
                <p className="font-semibold text-white">
                  {name}
                  {isLeader && (
                    <span className="ml-3 rounded-full bg-cyan-200 px-3 py-1 text-xs font-semibold text-slate-950">
                      {text.common.leader}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {role}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ text }) {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-violet-300/10 p-8 text-center shadow-2xl shadow-cyan-950/30 md:p-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
          {text.contact.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {text.contact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-300">
          {text.contact.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://www.instagram.com/qstate_usm/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            {text.common.instagram}
          </a>
          <a
            href={`mailto:${text.contact.email}`}
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            {text.contact.email}
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          {text.contact.affiliation}
        </p>
      </div>
    </section>
  );
}

function ActiveSection({ activeSection, onNavigate, text, language }) {
  switch (activeSection) {
    case "inicio":
      return <HomeGroupSection onNavigate={onNavigate} text={text} />;
    case "investigacion":
      return <ResearchSection text={text} language={language} />;
    case "colaboradores":
      return <CollaboratorsSection text={text} language={language} />;
    case "proyectos":
      return (
        <ProjectsPublicationsSection text={text} language={language} />
      );
    case "noticias":
      return <NewsSection text={text} />;
    case "integrantes":
      return <TeamSection text={text} />;
    case "contacto":
      return <ContactSection text={text} />;
    default:
      return <HomeGroupSection onNavigate={onNavigate} text={text} />;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [language, setLanguage] = useState("es");
  const text = translations[language];

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);

    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)]" />

      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        language={language}
        setLanguage={setLanguage}
        text={text}
      />

      <ActiveSection
        activeSection={activeSection}
        onNavigate={handleNavigate}
        text={text}
        language={language}
      />

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <button
            type="button"
            onClick={() => handleNavigate("inicio")}
            className="flex items-center gap-3 text-left"
          >
            <Logo />
            <div>
              <p className="font-semibold text-white">QState</p>
              <p className="text-sm text-slate-500">
                Quantum Systems Theory And Technology
              </p>
            </div>
          </button>
          <div className="text-sm text-slate-500">
            <p>© 2026 QState · {text.contact.affiliation}</p>
            <p className="mt-2 text-xs text-slate-600">
              {text.footer.support}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
