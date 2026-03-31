export default function Home() {
  const solutions = [
    {
      title: "Sicurezza Urbana",
      description:
        "Analisi del territorio, individuazione delle fasi di rischio e supporto alla pianificazione operativa.",
      image: "/shield.png",
    },
    {
      title: "Sicurezza Retail & GDO",
      description:
        "Riduzione delle perdite, analisi delle vulnerabilità ricorrenti e supporto alle strategie di prevenzione.",
      image: "/shield.png",
    },
    {
      title: "Sicurezza Stradale",
      description:
        "Individuazione delle condizioni di rischio e supporto alle strategie di prevenzione degli incidenti.",
      image: "/shield.png",
    },
    {
      title: "Sicurezza sul Lavoro",
      description:
        "Analisi delle dinamiche operative e individuazione delle condizioni che generano rischio negli ambienti di lavoro.",
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

  const methodSteps = [
    {
      step: "Fase 1",
      title: "Osservazione",
      text: "Raccolta e organizzazione dei dati del sistema nel tempo, per leggere contesto, ricorrenze e dinamiche.",
    },
    {
      step: "Fase 2",
      title: "Convergenza",
      text: "Individuazione di pattern ricorrenti e condizioni che tendono a ripetersi fino a rendere il sistema instabile.",
    },
    {
      step: "Fase 3",
      title: "Soglia",
      text: "Quando le condizioni convergono, il sistema entra in una fase critica e l’evento diventa prevedibile.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
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
          className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_30%),linear-gradient(to_bottom,#020617,#020617,#0f172a)]"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Suite di soluzioni AI verticali
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Intelligenza artificiale per leggere sistemi complessi e
                supportare decisioni operative
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                PELTA® è una suite di soluzioni che applica un modello avanzato
                di lettura dei sistemi per individuare pattern ricorrenti,
                riconoscere condizioni di rischio e trasformare i dati in
                indicazioni utili per l’azione.
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
                    <div className="mt-2 text-sm leading-6 text-slate-300">
                      Urbana, retail, stradale, lavoro, cyber e altri contesti
                      ad alta variabilità
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                    <div className="text-sm text-slate-400">Approccio</div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      Predittivo
                    </div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">
                      Dalla lettura del sistema alla decisione operativa
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 sm:col-span-2">
                    <div className="text-sm text-slate-400">Focus</div>
                    <div className="mt-2 text-xl font-semibold leading-8 text-white">
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
                del sistema osservato. Non si limita alla consultazione:
                organizza informazioni, individua ricorrenze e supporta scelte
                operative in contesti dove il fattore tempo è decisivo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/20"
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

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20 transition hover:border-cyan-400/30"
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
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Il metodo
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Il sistema non genera eventi. Genera condizioni.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                PELTA® legge il sistema nel tempo, individua le condizioni che
                si ripetono e riconosce quando queste convergono verso una
                soglia critica. È in quel momento che l’evento diventa
                probabile.
              </p>
            </div>

            <div className="relative mt-16">
              <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 lg:block" />

              <div className="grid gap-6 lg:grid-cols-3">
                {methodSteps.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative rounded-[28px] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
                      {index + 1}
                    </div>

                    <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
                      {item.step}
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 rounded-[28px] border border-cyan-400/20 bg-cyan-400/5 p-8 text-center shadow-xl shadow-black/20">
              <p className="text-xl font-semibold text-white">
                PELTA® non registra ciò che è successo.
              </p>
              <p className="mt-2 text-2xl font-semibold text-cyan-300">
                Identifica quando sta per accadere.
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