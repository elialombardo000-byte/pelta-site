export default function Navbar() {
  return (
    <div className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="PELTA" className="h-8" />
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#" className="hover:text-white">Piattaforma</a>
          <a href="#" className="hover:text-white">Soluzioni</a>
          <a href="#" className="hover:text-white">Metodo</a>
          <a href="#" className="hover:text-white">Casi</a>
        </div>

        {/* CTA */}
        <div>
          <button className="bg-cyan-400 text-black px-4 py-2 rounded-xl text-sm font-semibold">
            Contattaci
          </button>
        </div>

      </div>
    </div>
  );
}