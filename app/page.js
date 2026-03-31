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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img src="/logo.png" alt="PELTA®" className="h-9" />

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#piattaforma" className="hover:text-white">Piattaforma</a>
            <a href="#soluzioni" className="hover:text-white">Soluzioni</a>
            <a href="#metodo" className="hover:text-white">Metodo</a>
            <a href="#contatti" className="hover:text-white">Contatti</a>
          </nav>

          <a
            href="#contatti"
            className="bg-cyan-400 text-slate-950 px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Richiedi demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">

          <div className="mb-4 text-cyan-300 text-sm uppercase tracking-widest">
            Suite di soluzioni AI
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            Intelligenza artificiale per leggere sistemi complessi e supportare decisioni operative
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            PELTA® consente di individuare pattern, riconoscere condizioni di rischio
            e trasformare i dati in decisioni operative concrete.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="#contatti" className="bg-cyan-400 px-6 py-3 rounded-xl text-slate-950 font-semibold">
              Richiedi una demo
            </a>

            <a href="#soluzioni" className="border border-white/20 px-6 py-3 rounded-xl">
              Scopri le soluzioni
            </a>
          </div>

        </div>
      </section>

      {/* PIATTAFORMA */}
      <section id="piattaforma" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">
            La piattaforma
          </h2>

          <p className="text-slate-400 text-lg">
            PELTA® legge sistemi complessi. Non analizza eventi isolati,
            ma le condizioni che li generano, permettendo di anticipare il rischio
            e supportare decisioni operative.
          </p>
        </div>
      </section>

      {/* SOLUZIONI */}
      <section id="soluzioni" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-white mb-10 text-center">
            Le soluzioni
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="p-6 border border-white/10 rounded-xl hover:border-cyan-400/30 transition"
              >
                <img src={item.image} alt={item.title} className="h-12 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-semibold text-white mb-6">
            Il metodo
          </h2>

          <p className="text-slate-400 text-lg">
            Gli eventi non emergono dal nulla, ma quando il sistema raggiunge determinate condizioni.
            PELTA® consente di leggere queste condizioni e trasformarle in azione.
          </p>

        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="px-6 py-24 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Vuoi approfondire PELTA®?
        </h2>

        <p className="text-slate-400 mb-8">
          Possiamo mostrarti la piattaforma e valutare una sperimentazione concreta.
        </p>

        <a
          href="mailto:elialombardo000@gmail.com"
          className="bg-cyan-400 px-6 py-3 rounded-xl text-slate-950 font-semibold"
        >
          Contattaci
        </a>
      </section>

    </div>
  );
}