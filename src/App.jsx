import React, { useState } from 'react';
import logoGarper from './assets/logo-garper.jpeg';

// Datos de servicios
const detallesServicios = {
  corporativo: {
    titulo: "Derecho Corporativo",
    descripcion: "Asesoría integral para la constitución, mantenimiento y reorganización de sociedades. Protegemos el patrimonio de su empresa con estructuras legales sólidas y blindaje preventivo.",
    lista: [
      "Fusiones, adquisiciones (M&A) y escisiones.",
      "Due Diligence legal y auditorías preventivas.",
      "Elaboración y negociación de contratos comerciales y civiles.",
      "Gobierno corporativo y compliance empresarial.",
      "Protección al consumidor y competencia desleal."
    ]
  },
  estatal: {
    titulo: "Contratación Estatal",
    descripcion: "Acompañamiento especializado en todas las fases del proceso de selección con el Estado. Maximizamos sus posibilidades de adjudicación minimizando riesgos.",
    lista: [
      "Análisis de pliegos de condiciones y estructuración de ofertas.",
      "Conformación de consorcios y uniones temporales.",
      "Elaboración y presentación de observaciones e impugnaciones.",
      "Representación en audiencias de adjudicación.",
      "Asesoría en la ejecución, liquidación y controversias del contrato."
    ]
  },
  rrhh: {
    titulo: "Recursos Humanos",
    descripcion: "Prevención y solución de conflictos laborales. Aseguramos el cumplimiento normativo para evitar sanciones, optimizando las relaciones con sus colaboradores.",
    lista: [
      "Auditorías sociolaborales y revisión de planillas.",
      "Elaboración de contratos laborales y políticas internas.",
      "Asistencia en procesos disciplinarios y desvinculaciones.",
      "Representación ante requerimientos del Ministerio de Trabajo.",
      "Negociación de convenciones colectivas y relación con sindicatos."
    ]
  },
  civil: {
    titulo: "Derecho Civil",
    descripcion: "Estrategias legales para la protección y gestión del patrimonio familiar y empresarial. Soluciones efectivas ante controversias entre privados.",
    lista: [
      "Planificación patrimonial y estructuración de sucesiones.",
      "Procesos de responsabilidad civil contractual y extracontractual.",
      "Saneamiento físico y legal de predios e inmuebles.",
      "Elaboración de contratos de arrendamiento, compraventa y usufructo.",
      "Resolución de conflictos y litigios civiles en general."
    ]
  }
};

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: ''
  });
  
  const [servicioActivo, setServicioActivo] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp - Formulario principal
  const enviarWhatsApp = (e) => {
    e.preventDefault();
    const { nombre, correo, telefono } = formData;
    const mensaje = `¡Hola Garper Group! Quiero agendar una asesoría inicial gratuita de 30 min.%0A%0A*Mis datos:*%0A👤 Nombre: ${nombre}%0A✉️ Correo: ${correo}%0A📱 Teléfono: ${telefono}`;
    window.open(`https://wa.me/573044610505?text=${mensaje}`, '_blank');
  };

  // WhatsApp - Licitaciones
  const contactarLicitacion = () => {
    const mensaje = "¡Hola Garper Group! Tengo una licitación en puerta y me interesa el diagnóstico exprés de 48 horas.";
    window.open(`https://wa.me/573044610505?text=${mensaje}`, '_blank');
  };

  // WhatsApp - Planes
  const elegirPlan = (nombrePlan) => {
    const mensaje = `¡Hola Garper Group! Me gustaría recibir más información sobre el Plan ${nombrePlan} para mi empresa.`;
    window.open(`https://wa.me/573044610505?text=${mensaje}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#07101f] text-white font-sans relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img 
            src={logoGarper} 
            alt="Garper Group SAS" 
            className="h-24 w-auto scale-[2] invert mix-blend-screen object-contain" 
          />
        </div>
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#nosotros" className="hover:text-white transition">Nosotros</a>
          <a href="#planes" className="hover:text-white transition">Planes</a>
          <a href="#casos" className="hover:text-white transition">Casos de éxito</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-10 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-800">
            <div>
              <p className="text-3xl font-bold">+480</p>
              <p className="text-xs text-gray-400 mt-1">Casos corporativos ganados</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$ 2.4B</p>
              <p className="text-xs text-gray-400 mt-1">En licitaciones adjudicadas</p>
            </div>
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-xs text-gray-400 mt-1">Retención de clientes</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white text-[#07101f] p-8 rounded-2xl shadow-2xl max-w-md ml-auto w-full relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Asesoria gratis</h3>
            <span className="bg-gray-100 text-xs px-3 py-1.5 rounded-full text-gray-600 font-bold border border-gray-200">
              30 min / Gratis
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-6 font-medium">
            Diagnóstico legal exprés con un socio senior.
          </p>
          <form onSubmit={enviarWhatsApp} className="space-y-4">
            <input 
              type="text" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Nombre completo" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#07101f] focus:ring-1 focus:ring-[#07101f] transition" 
            />
            <input 
              type="email" 
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              placeholder="Correo corporativo" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#07101f] focus:ring-1 focus:ring-[#07101f] transition" 
            />
            <input 
              type="tel" 
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="Teléfono / Celular (ej. +57...)" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#07101f] focus:ring-1 focus:ring-[#07101f] transition" 
            />
            <button type="submit" className="w-full bg-[#07101f] text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition mt-2">
              Agendar Asesoria
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Tus datos están protegidos (Ley 1581)
          </p>
        </div>
      </main>

      {/* Credenciales */}
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

      {/* Servicios */}
      <section id="servicios" className="bg-white text-[#07101f] py-24 px-10">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-[#07101f] text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Derecho Corporativo</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">Constitución, fusiones y gobierno societario con blindaje total.</p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700 flex-grow">
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> M&A y due diligence</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Gobierno corporativo</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Contratos marco</li>
              </ul>
              <button onClick={() => setServicioActivo('corporativo')} className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all text-left">
                Explorar práctica <span>&rarr;</span>
              </button>
            </div>

            <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-[#07101f] text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Contratación Estatal</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">Licitaciones, OSCE y arbitrajes con tasa de éxito del 94%.</p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700 flex-grow">
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Bases y consorcios</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Impugnaciones OSCE</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Arbitraje y JRD</li>
              </ul>
              <button onClick={() => setServicioActivo('estatal')} className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all text-left">
                Explorar práctica <span>&rarr;</span>
              </button>
            </div>

            <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-[#07101f] text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Recursos Humanos</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">Gestión del talento y cumplimiento laboral sin contingencias.</p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700 flex-grow">
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Auditoría sociolaboral</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Negociación colectiva</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> SUNAFIL y planillas</li>
              </ul>
              <button onClick={() => setServicioActivo('rrhh')} className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all text-left">
                Explorar práctica <span>&rarr;</span>
              </button>
            </div>

            <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-[#07101f] text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Derecho Civil</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">Patrimonio, sucesiones y responsabilidad civil estratégica.</p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-700 flex-grow">
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Sucesiones y familia</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Responsabilidad civil</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Propiedad y saneamiento</li>
              </ul>
              <button onClick={() => setServicioActivo('civil')} className="text-blue-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all text-left">
                Explorar práctica <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Licitaciones */}
      <section className="bg-[#07101f] text-white py-16 px-10 border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              ¿Tienes una licitación en 15 días? Llegas a tiempo.
            </h2>
            <p className="text-gray-400 text-lg">
              Diagnóstico exprés de bases, consorcio y riesgos OSCE en 48 horas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <button onClick={contactarLicitacion} className="bg-white text-[#07101f] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-200 transition shadow-lg w-full sm:w-auto">
              Agendar Consulta
            </button>
            <button onClick={contactarLicitacion} className="px-8 py-3.5 rounded-lg border border-gray-600 font-bold hover:bg-gray-800 transition w-full sm:w-auto">
              Hablar con un socio
            </button>
          </div>
        </div>
      </section>

      {/* Planes y Honorarios */}
      <section id="planes" className="bg-gray-50 text-[#07101f] py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-700 font-bold text-xs tracking-[0.2em] uppercase mb-4">Planes</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              Honorarios claros, sin letra pequeña.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Suscripción mensual sin permanencia. Cancela cuando quieras, conserva tus expedientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-gray-500 mb-4">Básico</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$ 890.000</span>
                <span className="text-gray-400 text-sm"> / mes</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 h-10">Para emprendedores y pymes que inician su formalización.</p>
              <button onClick={() => elegirPlan('Básico')} className="w-full bg-[#07101f] text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition mb-8">
                Elegir Básico
              </button>
              <ul className="space-y-4 text-sm font-medium text-gray-700">
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 2 consultas legales al mes</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Revisión de 4 contratos</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Constitución de empresa</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Soporte por correo 48h</li>
              </ul>
            </div>

            <div className="bg-[#07101f] text-white rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4 border border-gray-800">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                Más solicitado
              </div>
              <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-gray-400 mb-4 mt-2">Empresarial</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$ 2.490.000</span>
                <span className="text-gray-400 text-sm"> / mes</span>
              </div>
              <p className="text-sm text-gray-400 mb-8 h-10">Para empresas en crecimiento y contratistas del Estado.</p>
              <button onClick={() => elegirPlan('Empresarial')} className="w-full bg-white text-[#07101f] font-bold py-3.5 rounded-xl hover:bg-gray-200 transition mb-8">
                Agendar Consulta
              </button>
              <ul className="space-y-4 text-sm font-medium text-gray-300">
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Consultas ilimitadas</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Licitaciones y OSCE integral</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Auditoría laboral anual</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Abogado in-house 2 días/sem</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Atención prioritaria 12h</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-gray-500 mb-4">Corporativo</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">A medida</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 h-10">Para corporaciones y grupos con operaciones multisector.</p>
              <button onClick={() => elegirPlan('Corporativo')} className="w-full bg-[#07101f] text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition mb-8">
                Contactar socio
              </button>
              <ul className="space-y-4 text-sm font-medium text-gray-700">
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Mesa legal dedicada 24/7</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> M&A y reestructuración</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Arbitrajes y contingencias</li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Gestión RRHH tercerizada</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Garantía de 30 días
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Facturación electrónica
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              Secreto profesional
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#07101f] text-gray-400 py-16 px-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white text-[#07101f] rounded-lg font-bold flex items-center justify-center text-lg">
                G
              </div>
              <h1 className="text-xl font-bold tracking-wide text-white">Garper Group</h1>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Firma premium de asesoría legal, contratación estatal y consultoría en RR.HH. Desde 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-[#07101f] transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-[#07101f] transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Prácticas</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setServicioActivo('corporativo')} className="hover:text-white transition">Derecho Corporativo</button></li>
              <li><button onClick={() => setServicioActivo('estatal')} className="hover:text-white transition">Contratación Estatal</button></li>
              <li><button onClick={() => setServicioActivo('rrhh')} className="hover:text-white transition">Recursos Humanos</button></li>
              <li><button onClick={() => setServicioActivo('civil')} className="hover:text-white transition">Derecho Civil</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Otros</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition">Socios</a></li>
              <li><a href="#" className="hover:text-white transition">Casos de éxito</a></li>
              <li><a href="#" className="hover:text-white transition">Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +57 3044610505
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                contacto@garpergroup.com
              </li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Garper Group SAS. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Aviso de privacidad</a>
            <a href="#" className="hover:text-white transition">Términos del servicio</a>
          </div>
        </div>
      </footer>

      {/* Ventana Modal */}
      {servicioActivo && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white text-[#07101f] rounded-[2rem] max-w-2xl w-full p-8 md:p-12 relative shadow-2xl animate-fade-in-up">
            
            <button 
              onClick={() => setServicioActivo(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#07101f] transition bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg shrink-0">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold">{detallesServicios[servicioActivo].titulo}</h3>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              {detallesServicios[servicioActivo].descripcion}
            </p>
            
            <h4 className="font-bold text-xs tracking-widest uppercase text-gray-400 mb-5">¿Qué incluye esta práctica?</h4>
            
            <ul className="space-y-4 mb-10">
              {detallesServicios[servicioActivo].lista.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-semibold text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex justify-end pt-6 border-t border-gray-100">
              <button 
                onClick={() => {
                  setServicioActivo(null);
                  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#07101f] text-white font-bold py-3 px-8 rounded-xl hover:bg-gray-800 transition"
              >
                Solicitar asesoría
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;