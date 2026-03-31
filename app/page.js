export default function Home() {
  const solutions = [
    {
      title: "Sicurezza Urbana",
      description:
        "Analisi del territorio, lettura delle fasi di rischio e supporto alla pianificazione operativa.",
      image: "/shield.png",
    },
    {
      title: "Retail & GDO",
      description:
        "Riduzione delle perdite, analisi delle vulnerabilità ricorrenti e supporto alle strategie di prevenzione.",
      image: "/shield.png",
    },
    {
      title: "Cyber Security",
      description:
        "Lettura dinamica del rischio cyber, individuazione di pattern anomali e supporto alla risposta preventiva.",
      image: "/shield.png",
    },
  ];

  const pillars = [
    "Legge sistemi complessi, non singoli eventi isolati",
    "Individua pattern ricorrenti e condizioni di rischio",
    "Supporta decisioni operative concrete",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="PELTA®" className="h-9 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#piattaforma" className="transition hover:text-white">
              Piattaforma
            </a>
            <a href="#soluzioni" className="transition hover:text-white">
              Soluzioni
            </a>
            <a href="#metodo" className="transition hover:text-white">
              Metodo
            </a>
            <a href="#contatti" className="transition hover:text-white">
              Contatti
            </a>
          </nav>

          <a
            href="#contatti"
            className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            Richiedi demo
          </a>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Suite di soluzioni AI verticali
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Intelligenza artificiale per leggere sistemi complessi e
                supportare decisioni operative
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                PELTA® è una suite di soluzioni che applica un modello avanzato
                di lettura dei sistemi per individuare pattern ricorrenti,
                riconoscere condizioni di rischio e restituire indicazioni utili
                per l’azione.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contatti"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Richiedi una demo
                </a>
                <a
                  href="#soluzioni"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Scopri le soluzioni
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-[28px] border border-cyan-400/20 bg-slate-900/70 p-6 shadow-2xl shadow-black/30">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                    <div className="text-sm text-slate-400">Ambiti</div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      5+
                    </div>
                    <div className="mt-2 text-sm text-slate-300">
                      Sicurezza, territorio, retail, cyber e altri contesti ad
                      alta variabilità
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                    <div className="text-sm text-slate-400">Approccio</div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      Predittivo
                    </div>
                    <div className="mt-2 text-sm text-slate-300">
                      Dalla lettura del sistema alla decisione operativa
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 sm:col-span-2">
                    <div className="text-sm text-slate-400">Focus</div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      Non registra soltanto ciò che accade. Aiuta a capire dove
                      e quando agire.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="piattaforma" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                La piattaforma
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Una logica unica per leggere sistemi complessi
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                PELTA® nasce per trasformare dati dispersi in un quadro leggibile
                del sistema osservato. Non si limita alla consultazione: organizza
                informazioni, individua ricorrenze e supporta scelte operative
                in contesti dove il fattore tempo è decisivo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <p className="leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="soluzioni" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Soluzioni
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Un’unica intelligenza, più applicazioni
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                La suite PELTA® applica lo stesso principio di lettura a contesti
                differenti, mantenendo coerenza metodologica e adattando il
                supporto alle esigenze del dominio osservato.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {solutions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-slate-900/70 p-8 transition hover:border-cyan-400/30"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-6 h-14 w-14 object-contain"
                  />
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Il metodo
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Dietro ogni soluzione, una stessa logica di lettura
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-300">
                PELTA® parte da un principio semplice: gli eventi non emergono
                dal nulla, ma si sviluppano quando il sistema raggiunge
                determinate condizioni. Il metodo consente di leggere queste
                condizioni, riconoscerne la ricorrenza e trasformarle in una
                base utile per la decisione.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Questo approccio permette di superare una logica puramente
                reattiva e di costruire una capacità di intervento più tempestiva,
                più coerente e più efficace.
              </p>
            </div>
          </div>
        </section>

        <section id="contatti">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
              Contatti
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Vuoi approfondire PELTA® o valutare una sperimentazione?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Possiamo mostrarti la piattaforma, analizzare il tuo contesto e
              capire insieme come applicare il modello al tuo ambito operativo.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:elialombardo000@gmail.com"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Scrivici
              </a>
              <a
                href="#home"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Torna su
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}