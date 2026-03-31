export default function Home() {
  const solutions = [
    {
      title: "Sicurezza Urbana",
      description: "Prevenzione predittiva e controllo del territorio",
      image: "/shield.png",
    },
    {
      title: "Retail & GDO",
      description: "Riduzione perdite e analisi comportamenti",
      image: "/shield.png",
    },
    {
      title: "Cyber Security",
      description: "Lettura dinamica del rischio cyber",
      image: "/shield.png",
    },
  ];

  return (
    <div className="bg-[#06101a] text-white min-h-screen">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h1 className="font-bold text-lg">PELTA®</h1>

        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#piattaforma" className="hover:text-white">Piattaforma</a>
          <a href="#soluzioni" className="hover:text-white">Soluzioni</a>
          <a href="#metodo" className="hover:text-white">Metodo</a>
          <a href="#contatti" className="hover:text-white">Contatti</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="px-6 py-20">
        <h2 className="text-4xl font-bold mb-6 max-w-2xl">
          Intelligenza artificiale per leggere sistemi complessi e supportare decisioni operative
        </h2>

        <button className="bg-blue-500 px-6 py-3 rounded-xl">
          Richiedi una demo
        </button>
      </section>

      {/* PIATTAFORMA */}
      <section id="piattaforma" className="px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">
          La piattaforma PELTA®
        </h2>

        <p className="text-slate-400 max-w-2xl">
          PELTA® è una piattaforma di intelligenza artificiale verticale progettata
          per leggere sistemi complessi e supportare decisioni operative attraverso
          modelli predittivi evoluti.
        </p>
      </section>

      {/* SOLUZIONI */}
      <section id="soluzioni" className="px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-10">
          Soluzioni
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div key={item.title} className="p-6 border border-white/10 rounded-xl">
              <img src={item.image} alt={item.title} className="h-12 mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">
          Il Metodo
        </h2>

        <p className="text-slate-400 max-w-2xl">
          Il Metodo APS consente di identificare pattern ricorrenti nei sistemi complessi,
          anticipando eventi attraverso l'analisi delle fasi operative del territorio o del sistema osservato.
        </p>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">
          Contatti
        </h2>

        <p className="text-slate-400 mb-6">
          Vuoi approfondire PELTA® o attivare una sperimentazione?
        </p>

        <button className="bg-green-500 px-6 py-3 rounded-xl">
          Contattaci
        </button>
      </section>

    </div>
  );
}