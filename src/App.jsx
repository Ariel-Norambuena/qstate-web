const researchLines = [
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
      "Diseñamos estrategias para manipular, proteger y optimizar estados cuánticos en plataformas físicas relevantes para tecnologías cuánticas.",
  },
  {
    title: "Inteligencia artificial",
    subtitle: "Mecánica cuántica",
    description:
      "Exploramos métodos de aprendizaje automático, optimización y modelos híbridos para resolver problemas en dinámica, control y simulación cuántica.",
  },
];

const projects = [
  {
    title: "Fondecyt Regular No. 1251131",
    funding: "Proyecto de investigación",
    members: ["Karime Cerón", "Francisco Ahumada"],
  },
  {
    title: "Fondecyt Exploración No. 13250014",
    funding: "Proyecto de investigación",
    members: ["Diego Montero"],
  },
  {
    title: "Anillo Temático ATE 250066",
    funding: "Proyecto de investigación",
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
    title: "Memory effects in pulsed optomechanical systems",
    authors:
      "Hachisko Tapia-Maureira, Bing He, Massimiliano Di Ventra, and Ariel Norambuena",
    venue: "Physical Review Applied 25, 044083 (2026)",
    type: "Artículo",
    topic: "Optomecánica · Memoria · Tecnologías cuánticas",
    url: "https://journals.aps.org/prapplied/abstract/10.1103/mxbn-15ry",
  },
  {
    title: "Learning spectral density functions in open quantum systems",
    authors:
      "Felipe Peleteiro, João Victor Shiguetsugo Kawanami Lima, Pedro Marcelo Prado, Felipe Fernandes Fanchini, and Ariel Norambuena",
    venue: "arXiv:2602.24056 (2026)",
    type: "Preprint",
    topic: "Sistemas abiertos · Inteligencia artificial",
    url: "https://arxiv.org/abs/2602.24056",
  },
  {
    title:
      "Geometric control of maximal entanglement via bound states in the continuum",
    authors:
      "Alexis R. Legón, Mario Miranda Rojas, Pedro Orellana, and Ariel Norambuena",
    venue: "arXiv:2602.23082 (2026)",
    type: "Preprint",
    topic: "Entrelazamiento · Giant atoms · BICs",
    url: "https://arxiv.org/abs/2602.23082",
  },
  {
    title: "Phonon-induced non-equilibrium dynamics in a single solid-state spin",
    authors:
      "Ariel Norambuena, Diego Tancara, Vicente F. Chomalí-Castro, and Daniel Castillo",
    venue: "Quantum Science and Technology 10, 045001 (2025)",
    type: "Artículo",
    topic: "Sistemas abiertos · Fonones · Espines sólidos",
    url: "https://iopscience.iop.org/article/10.1088/2058-9565/adf092/meta",
  },
  {
    title: "Contact temporal network during motility-induced phase separation",
    authors:
      "Italo Salas, Francisca Guzmán-Lastra, Denisse Pastén, and Ariel Norambuena",
    venue: "Physical Review E 112, 045409 (2025)",
    type: "Artículo",
    topic: "Materia activa · Redes complejas",
    url: "https://journals.aps.org/pre/abstract/10.1103/t3k6-hcmr",
  },
  {
    title:
      "Entropy, entanglement, and susceptibility of three qubits near quantum criticality",
    authors:
      "Bastian Castorene, Francisco J. Peña, Ariel Norambuena, Sergio E. Ulloa, Cristobal Araya, and Patricio Vargas",
    venue: "Physical Review E 111, 034118 (2025)",
    type: "Artículo",
    topic: "Entrelazamiento · Termodinámica cuántica",
    url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.111.034118",
  },
];

const newsItems = [
  {
    date: "2026",
    title: "Lanzamiento de QState",
    description:
      "QState abre sus canales oficiales para compartir investigación, formación, actividades académicas y divulgación científica.",
  },
  {
    date: "2026",
    title: "Proyectos activos de investigación",
    description:
      "El grupo participa en proyectos Fondecyt Regular, Fondecyt Exploración y Anillo Temático, fortaleciendo líneas en sistemas abiertos, control, simulación e inteligencia artificial.",
  },
  {
    date: "2026",
    title: "Comunidad QState",
    description:
      "Promovemos la formación de estudiantes y la vinculación científica desde el Departamento de Física USM, Campus San Joaquín.",
  },
];

const outreachItems = [
  "Divulgación científica en tecnologías cuánticas y mecánica cuántica moderna.",
  "Charlas, seminarios y actividades para estudiantes interesados en física.",
  "Comunicación científica responsable a través de redes sociales y actividades académicas.",
];

const members = [
  ["Alexis Legón", "Doctor en Física"],
  ["Diego Montero", "Estudiante de Magíster USM"],
  ["Karime Cerón", "Estudiante de Licenciatura en Física"],
  ["Alonso Recabarren", "Estudiante de Licenciatura en Física"],
  ["Francisco Ahumada", "Estudiante de Licenciatura en Física"],
  ["Iñaki Bermeo", "Estudiante de Licenciatura en Astrofísica"],
  ["Ignacio Reyes", "Estudiante de Ingeniería Civil Física"],
  ["Rafael Reveco", "Estudiante de Licenciatura en Física"],
  ["Eduardo Novoa", "Ingeniero Civil Telemático"],
  ["Ignacio Farías", "Estudiante de Ingeniería Civil Física"],
  ["Clemente Velasco", "Licenciado en Física"],
];

function Logo({ className = "h-14 w-14" }) {
  return (
    <div
      className={`${className} flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-white p-1 shadow-lg shadow-cyan-900/40`}
    >
      <img
        src={`${import.meta.env.BASE_URL}qstate-logo.png`}
        alt="QState logo"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
      )}
    </div>
  );
}

function OpenQuantumAnimation() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-xl items-center justify-center overflow-hidden rounded-[2.75rem] border border-cyan-200/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/50 backdrop-blur">
      <style>{`
        @keyframes qstate-rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes qstate-rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
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
        .q-orbit-slow { animation: qstate-rotate-slow 24s linear infinite; }
        .q-orbit-medium { animation: qstate-rotate-reverse 18s linear infinite; }
        .q-orbit-fast { animation: qstate-rotate-slow 12s linear infinite; }
        .q-breathe { animation: qstate-breathe 5.5s ease-in-out infinite; }
        .q-drift { animation: qstate-drift 7s ease-in-out infinite; }
        .q-flow { stroke-dasharray: 18 18; animation: qstate-pulse-flow 5s linear infinite; }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_70%_28%,rgba(168,85,247,0.20),transparent_24%),radial-gradient(circle_at_20%_78%,rgba(59,130,246,0.18),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 500">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cffafe" stopOpacity="1" />
            <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          className="q-flow"
          d="M88 250 C 145 120, 340 110, 412 245 S 310 420, 130 350"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="1.6"
          opacity="0.55"
        />
        <path
          className="q-flow"
          d="M110 150 C 210 215, 295 210, 405 150"
          fill="none"
          stroke="#c4b5fd"
          strokeWidth="1.4"
          opacity="0.45"
          style={{ animationDelay: "-1.8s" }}
        />
        <path
          className="q-flow"
          d="M95 360 C 210 305, 285 305, 405 362"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.4"
          opacity="0.45"
          style={{ animationDelay: "-3s" }}
        />

        <circle cx="250" cy="250" r="118" fill="none" stroke="#67e8f9" strokeOpacity="0.18" />
        <circle cx="250" cy="250" r="174" fill="none" stroke="#a78bfa" strokeOpacity="0.16" />
        <circle cx="250" cy="250" r="213" fill="none" stroke="#60a5fa" strokeOpacity="0.10" />

        <circle className="q-drift" cx="118" cy="175" r="6" fill="#67e8f9" opacity="0.75" />
        <circle className="q-drift" cx="390" cy="165" r="5" fill="#c4b5fd" opacity="0.65" style={{ animationDelay: "-2s" }} />
        <circle className="q-drift" cx="375" cy="355" r="5" fill="#93c5fd" opacity="0.65" style={{ animationDelay: "-4s" }} />
        <circle className="q-drift" cx="135" cy="345" r="4" fill="#cffafe" opacity="0.70" style={{ animationDelay: "-5s" }} />
      </svg>

      <div className="absolute h-[78%] w-[78%] rounded-full border border-cyan-200/20 q-orbit-slow">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200 shadow-lg shadow-cyan-200" />
      </div>
      <div className="absolute h-[62%] w-[62%] rotate-45 rounded-full border border-violet-200/20 q-orbit-medium">
        <span className="absolute bottom-8 right-4 h-2.5 w-2.5 rounded-full bg-violet-200 shadow-lg shadow-violet-200" />
      </div>
      <div className="absolute h-[46%] w-[46%] -rotate-12 rounded-full border border-blue-200/20 q-orbit-fast">
        <span className="absolute left-5 top-8 h-2 w-2 rounded-full bg-blue-200 shadow-lg shadow-blue-200" />
      </div>

      <div className="absolute h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl q-breathe" />
      <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[2.25rem] border border-white/15 bg-white p-5 shadow-2xl shadow-cyan-900/40">
        <img
          src={`${import.meta.env.BASE_URL}qstate-logo.png`}
          alt="QState logo"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs text-slate-300 backdrop-blur">
        <p className="font-semibold text-cyan-100">open dynamics</p>
        <p className="mt-1 text-slate-400">system · environment · control</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <Logo />
            <div className="hidden sm:block">
              <p className="text-lg font-semibold text-white">QState</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Quantum Systems
              </p>
            </div>
          </a>

          <nav className="hidden gap-5 text-sm text-slate-300 lg:flex">
            <a href="#grupo" className="hover:text-cyan-200">
              Grupo
            </a>
            <a href="#investigacion" className="hover:text-cyan-200">
              Investigación
            </a>
            <a href="#proyectos" className="hover:text-cyan-200">
              Proyectos
            </a>
            <a href="#publicaciones" className="hover:text-cyan-200">
              Publicaciones
            </a>
            <a href="#noticias" className="hover:text-cyan-200">
              Noticias
            </a>
            <a href="#vinculacion" className="hover:text-cyan-200">
              Vinculación
            </a>
            <a href="#integrantes" className="hover:text-cyan-200">
              Equipo
            </a>
            <a href="#contacto" className="hover:text-cyan-200">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Grupo de investigación USM en tecnologías cuánticas
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              QState
              <span className="mt-4 block bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-200 bg-clip-text text-3xl text-transparent md:text-5xl">
                Quantum Systems Theory And Technology
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300 md:text-xl">
              Somos un grupo de investigación de la Universidad Técnica Federico
              Santa María dedicado al estudio teórico y computacional de
              sistemas cuánticos, con énfasis en tecnologías emergentes,
              sistemas abiertos, control, simulación de dinámicas fuera del
              equilibrio y técnicas de inteligencia artificial aplicadas a
              problemas de mecánica cuántica.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#investigacion"
                className="rounded-full bg-cyan-200 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-white"
              >
                Explorar investigación
              </a>
              <a
                href="#publicaciones"
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Ver publicaciones
              </a>
            </div>
          </div>

          <OpenQuantumAnimation />
        </div>
      </section>

      <section id="grupo" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Quiénes somos
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Ciencia cuántica con visión teórica, computacional y tecnológica.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-slate-950/40">
            <p className="text-lg leading-9 text-slate-300">
              QState reúne estudiantes e investigadores interesados en el
              estudio de la dinámica, simulación y control de sistemas cuánticos
              complejos. Nuestro trabajo combina herramientas de mecánica
              cuántica, teoría de sistemas abiertos, métodos numéricos, control
              e inteligencia artificial para abordar problemas fundamentales y
              aplicaciones emergentes en tecnologías cuánticas.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              Desde el Departamento de Física de la Universidad Técnica Federico
              Santa María, Campus San Joaquín, buscamos contribuir al desarrollo
              de investigación científica de frontera y a la formación de nuevas
              generaciones en física y tecnologías cuánticas, promoviendo la
              colaboración, la docencia avanzada y la divulgación científica.
            </p>
          </div>
        </div>
      </section>

      <section id="investigacion" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Líneas de investigación"
            title="Preguntas cuánticas, métodos modernos y plataformas emergentes."
            description="Nuestro trabajo se organiza en tres líneas principales que conectan teoría, simulación, control e inteligencia artificial."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {researchLines.map((line) => (
              <article
                key={line.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
              >
                <div className="mb-6 text-4xl">⚛️</div>
                <h3 className="text-2xl font-semibold text-white">
                  {line.title}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                  {line.subtitle}
                </p>
                <p className="mt-5 leading-8 text-slate-300">
                  {line.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proyectos"
            title="Proyectos de investigación"
            description="QState participa activamente en proyectos de investigación financiados por agencias nacionales, abordando problemas en tecnologías cuánticas, sistemas abiertos, control, simulación e inteligencia artificial aplicada a mecánica cuántica."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
              >
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                  {project.funding}
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Integrantes asociados
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
        </div>
      </section>

      <section id="publicaciones" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Publicaciones"
            title="Publicaciones científicas"
            description="Una selección de artículos y preprints asociados a las líneas de investigación del grupo, incluyendo sistemas cuánticos abiertos, control, simulación, tecnologías cuánticas, materia activa e inteligencia artificial aplicada a problemas de física."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {publications.map((paper) => (
              <article
                key={paper.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {paper.type}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {paper.topic}
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
                  Ver publicación
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="noticias" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Noticias"
            title="Actividades y novedades"
            description="Un espacio para compartir avances del grupo, actividades académicas, seminarios, colaboraciones y oportunidades para estudiantes."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/30"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                  {item.date}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-5 leading-8 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vinculacion" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Vinculación y divulgación
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Acercar la ciencia cuántica a la comunidad.
            </h2>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              Buscamos comunicar investigación de frontera de manera rigurosa,
              accesible y responsable, conectando la formación científica con la
              comunidad universitaria y el público general.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-slate-950/40">
            <ul className="space-y-5">
              {outreachItems.map((item) => (
                <li key={item} className="flex gap-4 text-lg leading-8 text-slate-300">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-200 shadow-lg shadow-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="integrantes" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Equipo"
            title="Integrantes de QState"
            description="Un grupo en crecimiento, compuesto por investigadores, estudiantes y colaboradores con intereses en física cuántica, simulación y tecnologías emergentes."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {members.map(([name, role]) => (
              <article
                key={name}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-200/30 hover:bg-white/[0.06]"
              >
                <p className="font-semibold text-white">{name}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-violet-300/10 p-8 text-center shadow-2xl shadow-cyan-950/30 md:p-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            Conecta con QState
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Síguenos y participa de nuestra comunidad cuántica.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-300">
            Compartiremos avances de investigación, actividades académicas,
            oportunidades para estudiantes y contenido de divulgación científica.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.instagram.com/qstate_usm/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Instagram
            </a>
            <a
              href="mailto:qstate.socials@gmail.com"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              qstate.socials@gmail.com
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Universidad Técnica Federico Santa María · Departamento de Física ·
            Campus San Joaquín
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="font-semibold text-white">QState</p>
              <p className="text-sm text-slate-500">
                Quantum Systems Theory And Technology
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 QState · Universidad Técnica Federico Santa María ·
            Departamento de Física · Campus San Joaquín
          </p>
        </div>
      </footer>
    </main>
  );
}
