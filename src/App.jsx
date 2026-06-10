import Carta from "./components/Carta";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans antialiased">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Navbar simulado */}
      <nav className="relative z-10 border-b border-slate-200/60 bg-white/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-600/20">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">TeamSync</span>
            </div>

            <div className="hidden sm:flex sm:items-center sm:gap-6 text-sm font-medium text-slate-600">
              <a href="#" className="text-indigo-600">Directorio</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Departamentos</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Reportes</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-64 rounded-full border-0 py-1.5 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white/50 backdrop-blur-sm transition-all hover:bg-white"
                  placeholder="Buscar miembro..."
                />
              </div>
              <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white">
                <img src="https://ui-avatars.com/api/?name=Admin&background=475569&color=fff" alt="Admin" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="relative z-10 px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-5xl mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 ring-1 ring-indigo-200/50 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                Directorio Activo
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Nuestro{" "}
                <span className="relative whitespace-nowrap">
                  <span className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-lg rounded-xl"></span>
                  <span className="relative bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Equipo
                  </span>
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
                Conoce a las personas que hacen todo posible. Explora los perfiles, roles y el estado actual de cada miembro de la organización.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-all">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filtrar
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Nuevo Miembro
              </button>
            </div>
          </div>
        </header>

        {/* Grid de cartas */}
        <main className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Carta nombre="Enzo" rol="Programador" actividad="Activo" />
            <Carta nombre="Diego" rol="Diseñador" actividad="Inactivo" />
            <Carta nombre="Maria" rol="Programador" actividad="Activo" />
            <Carta nombre="Luis" />
            <Carta nombre="Matias" />
            <Carta nombre="Carlos" rol="Diseñador" actividad="Activo" />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/60 bg-white/50 backdrop-blur-sm py-8 mt-auto">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TeamSync. Proyecto de React Props.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
