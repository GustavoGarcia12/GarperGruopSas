function App() {
  return (
    <div className="min-h-screen bg-[#07101f] text-white font-sans">
      
      {/* 1. BARRA DE NAVEGACIÓN */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white text-[#07101f] rounded-lg font-bold flex items-center justify-center text-xl">
            G
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide">GARPER GROUP SAS</h1>
            <p className="text-[9px] text-gray-400 tracking-[0.2em]">LEGAL • STATE • HR</p>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Servicios</a>
          <a href="#" className="hover:text-white transition">Nosotros</a>
          <a href="#" className="hover:text-white transition">Planes</a>
          <a href="#" className="hover:text-white transition">Casos de éxito</a>
          <a href="#" className="hover:text-white transition">Contacto</a>
        </div>
      </nav>

      {/* 2. HERO SECTION (Sección Principal) */}
      <main className="px-10 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Textos principales */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Colombia-Barranquilla
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Soluciones <br /> empresariales <br /> integrales.
          </h2>
          
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Gestion administrativa, tramites, asesorias, gestion humana y licitaciones. <br /> Blindamos tus operaciones con rigor jurídico y visión empresarial.
          </p>
          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-800">
            <div>
              <p className="text-3xl font-bold">+480</p>
              <p className="text-xs text-gray-400 mt-1">Casos corporativos ganados</p>
            </div>
            <div>
              {/* Cambié S/ por $ para hacerlo neutral, puedes poner COP o la moneda que necesite tu cliente */}
              <p className="text-3xl font-bold">$ 2.4B</p>
              <p className="text-xs text-gray-400 mt-1">En licitaciones adjudicadas</p>
            </div>
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-xs text-gray-400 mt-1">Retención de clientes</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Formulario */}
        <div className="bg-white text-[#07101f] p-8 rounded-2xl shadow-2xl max-w-md ml-auto w-full relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Aseroria Inicial</h3>
            <span className="bg-gray-100 text-xs px-3 py-1.5 rounded-full text-gray-600 font-bold border border-gray-200">
              30 min / Gratis
            </span>
          </div>
          
          <p className="text-sm text-gray-500 mb-6 font-medium">
            Diagnóstico legal exprés con un socio senior.
          </p>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Nombre completo" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#07101f] focus:ring-1 focus:ring-[#07101f] transition" 
            />
            <input 
              type="email" 
              placeholder="Correo corporativo" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#07101f] focus:ring-1 focus:ring-[#07101f] transition" 
            />

            <input 
              type="tel" 
              placeholder="Teléfono / Celular (ej. +57...)" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#07101f] focus:ring-1 focus:ring-[#07101f] transition" 
            />

            <button type="submit" className="w-full bg-[#07101f] text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition mt-2">
              Agendar Consulta
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Tus datos están protegidos (Ley 1581)
          </p>
        </div>

      </main>
    </div>
  );
}

export default App;