const estadoConfig = {
  Activo: {
    dot: "bg-emerald-400",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200/50",
    label: "Activo",
  },
  Inactivo: {
    dot: "bg-rose-400",
    badge: "bg-rose-50 text-rose-700 ring-rose-200/50",
    label: "Inactivo",
  },
  Desconocido: {
    dot: "bg-amber-400",
    badge: "bg-amber-50 text-amber-700 ring-amber-200/50",
    label: "Desconocido",
  },
};

const rolIconos = {
  Programador: "💻",
  Diseñador: "🎨",
  "No asignado": "❓",
};

const Carta = ({ nombre, rol = "No asignado", actividad = "Desconocido" }) => {
  const estado = estadoConfig[actividad] ?? estadoConfig["Desconocido"];
  const icono = rolIconos[rol] ?? "👤";

  // Iniciales del nombre
  const iniciales = nombre
    ? nombre
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 hover:ring-indigo-300">
      {/* Fondo decorativo sutil */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-2xl transition-all duration-500 group-hover:bg-indigo-100 group-hover:opacity-70" />

      {/* Degradado decorativo superior */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header de la tarjeta */}
      <div className="relative mb-5 flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xl font-bold text-white shadow-inner shadow-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {iniciales}
        </div>
        
        {/* Badge de estado mejorado */}
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset shadow-sm backdrop-blur-sm ${estado.badge}`}
        >
          <span className={`relative flex h-2 w-2`}>
            {actividad === 'Activo' && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            )}
            <span className={`relative inline-flex h-2 w-2 rounded-full ${estado.dot}`} />
          </span>
          {estado.label}
        </span>
      </div>

      {/* Información principal */}
      <div className="relative mb-5 flex-1">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
          {nombre}
        </h2>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-xs">
            {icono}
          </span>
          <span className="font-medium text-slate-600">{rol}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50" />

      {/* Acciones */}
      <div className="relative flex gap-3">
        <button className="flex-1 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-600 hover:shadow-indigo-500/25 active:scale-95">
          Ver Perfil
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-400 ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:text-indigo-600 hover:ring-indigo-200 active:scale-95">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carta;