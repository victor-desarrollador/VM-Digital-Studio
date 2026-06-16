import LeadForm from '@/components/LeadForm'; // Importas el formulario que ya validamos
import { Layout, Shield, Terminal, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative max-w-5xl mx-auto px-6 pt-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full">
          <Zap className="w-3.5 h-3.5" /> Agencia AI-Native 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          Creamos Webs Profesionales <br />
          <span className="text-blue-500">Que Venden Por Vos</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-400 leading-relaxed">
          Somos técnicos en desarrollo web. Combinamos el poder de <span className="text-white font-medium">Next.js, Express y PostgreSQL</span> con automatizaciones inteligentes para entregar páginas rápidas, seguras y optimizadas para captar clientes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20">
            Iniciar Proyecto
          </a>
          <a href="#servicios" className="border border-slate-700 hover:border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-xl transition-all">
            Ver Soluciones
          </a>
        </div>
      </section>

      {/* 🛠️ SECCIÓN SERVICIOS */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Nuestras Soluciones Digitales</h2>
          <p className="text-slate-400">Desarrollo a medida adaptado al presupuesto y escala de tu negocio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Landing Pages</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Páginas de un solo scroll optimizadas para campañas de anuncios (Google/Meta Ads). Ideales para profesionales independientes y lanzamientos de productos rápidos.
            </p>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Sitios Institucionales</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Estructuras multi-página completas para empresas y pymes. Posicionamiento SEO avanzado en Google para que tus clientes corporativos te encuentren orgánicamente.
            </p>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">E-commerce Custom</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tiendas virtuales personalizadas con pasarelas de pago (MercadoPago/Stripe) y control de stock automatizado interconectado a bases de datos relacionales.
            </p>
          </div>
        </div>
      </section>

      {/* 💰 SECCIÓN TARIFAS (Valores fijos de tu Tarifario Oficial) */}
      <section id="precios" className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Tarifas Transparentes</h2>
          <p className="text-slate-400">Sin sorpresas ni costos ocultos. Precios alineados al mercado argentino actual.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Landing Plan */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-4 text-center">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Landing Page</h4>
            <div className="text-2xl font-bold text-white">ARS 420.000 <span className="text-xs text-slate-500">/ pago único</span></div>
            <p className="text-xs text-slate-400">Plan Estándar. Incluye 5 secciones, chat de WhatsApp y SEO on-page básico.</p>
          </div>
          {/* Corp Plan */}
          <div className="bg-blue-600/10 border-2 border-blue-500 p-6 rounded-xl space-y-4 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Recomendado</div>
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Web Institucional</h4>
            <div className="text-2xl font-bold text-white">ARS 1.000.000 <span className="text-xs text-slate-400">/ pago único</span></div>
            <p className="text-xs text-slate-300">Plan Estándar. 7 páginas (FAQ y Blog), diseño adaptado a tu marca y analíticas completas.</p>
          </div>
          {/* Ecom Plan */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-4 text-center">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Tienda Virtual</h4>
            <div className="text-2xl font-bold text-white">ARS 1.500.000 <span className="text-xs text-slate-500">/ pago único</span></div>
            <p className="text-xs text-slate-400">Plan Estándar. Hasta 100 productos, carrito, filtros, MercadoPago y MercadoEnvíos.</p>
          </div>
        </div>
      </section>

      {/* 📥 SECCIÓN CONTACTO / CAPTACIÓN */}
      <section id="contacto" className="max-w-3xl mx-auto px-6 space-y-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl shadow-xl">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">¿Listo para dar el salto digital?</h2>
          <p className="text-slate-400 text-sm md:text-base">Dejanos tus datos. Nuestro sistema asignará tu proyecto a un flujo de diseño automatizado y Víctor se comunicará con vos en minutos.</p>
        </div>

        {/* Inyección del Formulario de la Fábrica */}
        <LeadForm sourceUrl="web-agencia" />
      </section>

    </div>
  );
}