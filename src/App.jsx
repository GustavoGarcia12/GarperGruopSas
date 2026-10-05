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
      {/* 3. BANDA DE CREDENCIALES */}
      <div className="bg-white text-[#07101f] py-6 px-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 text-sm font-semibold text-gray-700">
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#07101f] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <div>Top Tier 2025 <span className="text-gray-400 font-normal ml-1">| Chambers & Partners</span></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#07101f] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div>OSCE Certificado <span className="text-gray-400 font-normal ml-1">| RNP vigente</span></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#07101f] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <div>10 años <span className="text-gray-400 font-normal ml-1">| Sector público y privado</span></div>
          </div>

        </div>
      </div>

      {/* 4. SECCIÓN DE SERVICIOS */}
      <section className="bg-white text-[#07101f] py-24 px-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Encabezado de la sección */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="text-blue-700 font-bold text-xs tracking-[0.2em] uppercase mb-4">Nuestros Servicios</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                Cuatro prácticas.<br/>Un solo estándar: <br/> excelencia.
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm font-medium">
              Equipos liderados por socios con más de 10 años en estudios top tier y gestión pública.
            </p>
          </div>

          {/* Cuadrícula de 4 Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tarjeta 1 */}
            <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#07101f] text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Derecho Corporativo</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">Constitución, fusiones y gobierno societario con blindaje total.</p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> M&A y due diligence
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Gobierno corporativo
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Contratos marco
                </li>
              </ul>
              <a href="#" className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Explorar práctica <span>&rarr;</span>
              </a>
            </div>

            {/* Tarjeta 2 */}
            <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#07101f] text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Contratación Estatal</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">Licitaciones, OSCE y arbitrajes con tasa de éxito del 94%.</p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Bases y consorcios
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Impugnaciones OSCE
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Arbitraje y JRD
                </li>
              </ul>
              <a href="#" className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Explorar práctica <span>&rarr;</span>
              </a>
            </div>

            {/* Tarjeta 3 */}
            <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#07101f] text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Recursos Humanos</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">Gestión del talento y cumplimiento laboral sin contingencias.</p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Auditoría sociolaboral
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Negociación colectiva
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> SUNAFIL y planillas
                </li>
              </ul>
              <a href="#" className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Explorar práctica <span>&rarr;</span>
              </a>
            </div>

            {/* Tarjeta 4 */}
            <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#07101f] text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Derecho Civil</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">Patrimonio, sucesiones y responsabilidad civil estratégica.</p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Sucesiones y familia
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Responsabilidad civil
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Propiedad y saneamiento
                </li>
              </ul>
              <a href="#" className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Explorar práctica <span>&rarr;</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      

            
    </div>
  );
}

export default App;