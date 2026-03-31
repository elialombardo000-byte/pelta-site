import Navbar from "./Navbar";

export default function Home() {
  const solutions = [
    {
      title: "Sicurezza Urbana",
      description:
        "Individua aree e fasi di rischio, supportando la pianificazione operativa sul territorio.",
      image: "/shield.png",
    },
    {
      title: "Retail & GDO",
      description:
        "Analizza fenomeni di perdita e vulnerabilità ricorrenti, supportando strategie di prevenzione mirate.",
      image: "/shield.png",
    },
    {
      title: "Sicurezza sul lavoro",
      description:
        "Riconosce condizioni operative critiche e supporta la prevenzione degli incidenti.",
      image: "/shield.png",
    },
    {
      title: "Sicurezza stradale",
      description:
        "Individua dinamiche e comportamenti ricorrenti per ridurre l’incidentalità.",
      image: "/shield.png",
    },
    {
      title: "Cyber Security",
      description:
        "Analizza sistemi digitali, identifica pattern anomali e supporta la risposta preventiva.",
      image: "/shield.png",
    },
  ];

  const functions = [
    "Organizza e struttura i dati provenienti dal campo",
    "Identifica pattern ricorrenti e anomalie",
    "Riconosce le condizioni che precedono il rischio",
    "Restituisce indicazioni operative utilizzabili",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <img src="/logo.png" alt="PELTA" className="mb-8 w-72 max-w-full" />
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Intelligenza artificiale per la lettura dei sistemi complessi e il supporto alle decisioni operative
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                PELTA® è una suite di soluzioni che applica un modello avanzato di analisi dei sistemi per individuare pattern ricorrenti, riconoscere fasi evolutive e anticipare condizioni di rischio.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950">
                  Richiedi demo
                </button>
                <button className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white">
                  Scopri le soluzioni
                </button>
              </div>
            </div>

            <div>
              <div className="rounded-[28px] border border-cyan-400/20 bg-slate-900/70 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                    <div className="text-sm text-slate-400">Suite</div>
                    <div className="mt-2 text-2xl font-semibold">5 ambiti</div>
                    <div className="mt-2 text-sm text-slate-300">
                      Urbana, Retail, Lavoro, Stradale, Cyber
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                    <div className="text-sm text-slate-400">Logica</div>
                    <div className="mt-2 text-2xl font-semibold">Unica</div>
                    <div className="mt-2 text-sm text-slate-300">
                      Un unico metodo applicato a contesti diversi
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 sm:col-span-2">
                    <div className="text-sm text-slate-400">Obiettivo</div>
                    <div className="mt-2 text-xl font-semibold">
                      Leggere il sistema. Decidere prima.
                    </div>
                    <div className="mt-2 text-sm text-slate-300">
                      Dalla lettura del contesto alla produzione di indicazioni operative.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRINCIPIO */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Non analizza eventi. Analizza sistemi.
        </h2>
        <p className="text-slate-300">
          Gli eventi sono il risultato di condizioni che si formano nel tempo. PELTA® osserva queste condizioni, ne riconosce le ricorrenze e individua i momenti in cui il sistema tende verso il rischio.
        </p>
      </section>

      {/* FUNZIONE */}
      <section className="px-6 py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Dai dati alla decisione
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {functions.map((item) => (
              <div key={item} className="p-6 border border-white/10 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUZIONI */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Un’unica logica, più applicazioni
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item) => (
            <div key={item.title} className="p-6 border border-white/10 rounded-xl">
              <img src={item.image} alt={item.title} className="h-12 mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHIUSURA */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Leggere il sistema. Decidere prima.
        </h2>
        <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
          Richiedi una demo
        </button>
      </section>

    </div>
  );
}