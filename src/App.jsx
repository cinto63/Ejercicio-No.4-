import Carta from "./components/Carta";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-800 antialiased">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
          Ejercicio de Props
        </h1>
        <h2 className="mt-2 text-xl font-medium text-slate-500">
          Perfiles de usuario
        </h2>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Carta nombre="Enzo" rol="Programador" actividad="Activo" />
        <Carta nombre="Diego" rol="Diseñador" actividad="Inactivo" />
        <Carta nombre="Maria" rol="Programador" />
        <Carta nombre="Luis" />
        <Carta nombre="Matias" />
        <Carta nombre="Jorge" />
      </main>
    </div>

  );
}

export default App;
