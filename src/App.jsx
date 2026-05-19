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

function Logo({ className = "h-12 w-36" }) {
  return (
    <div
      className={`${className} flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-white px-3 py-2 shadow-lg shadow-cyan-900/40`}
    >
      <img
        src={`${import.meta.env.BASE_URL}qstate-logo.png`}
        alt="QState logo"
        className="h-full w-full object-contain"
      />
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
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#grupo" className="hover:text-cyan-200">
              Grupo
            </a>
            <a href="#investigacion" className="hover:text-cyan-200">
              Investigación
            </a>
            <a href="#logro" className="hover:text-cyan-200">
              Logro
            </a>
            <a href="#proyectos" className="hover:text-cyan-200">
              Proyectos
            </a>
            <a href="#integrantes" className="hover:text-cyan-200">
              Integrantes
            </a>
            <a href="#contacto" className="hover:text-cyan-200">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
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
                href="#contacto"
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Contactar al grupo
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center rounded-[2.5rem] border border-cyan-200/20 bg-white p-8 shadow-2xl shadow-cyan-950/40">
            <img
              src={`${import.meta.env.BASE_URL}qstate-logo.png`}
              alt="QState — Quantum Systems Theory And Technology"
              className="w-full object-contain"
            />
          </div>
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Líneas de investigación
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Preguntas cuánticas, métodos modernos y plataformas emergentes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Nuestro trabajo se organiza en tres líneas principales que
              conectan teoría, simulación, control e inteligencia artificial.
            </p>
          </div>

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

      <section id="logro" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-violet-300/10 p-8 text-center shadow-2xl shadow-cyan-950/30 md:p-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            Logro destacado
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Consolidación de QState como grupo de investigación.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            QState articula líneas de investigación en tecnologías cuánticas,
            sistemas abiertos, control, simulación e inteligencia artificial
            aplicada a mecánica cuántica, con participación activa en proyectos
            Fondecyt Regular, Fondecyt Exploración y Anillo Temático.
          </p>
        </div>
      </section>

      <section id="proyectos" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Proyectos
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Proyectos de investigación
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              QState participa activamente en proyectos de investigación
              financiados por agencias nacionales, abordando problemas en
              tecnologías cuánticas, sistemas abiertos, control, simulación e
              inteligencia artificial aplicada a mecánica cuántica.
            </p>
          </div>

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

      <section id="integrantes" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Equipo
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Integrantes de QState
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Un grupo en crecimiento, compuesto por investigadores, estudiantes
              y colaboradores con intereses en física cuántica, simulación y
              tecnologías emergentes.
            </p>
          </div>

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
              href="https://www.instagram.com/"
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
