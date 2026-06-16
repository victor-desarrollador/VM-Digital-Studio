import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'VM Digital Studio | Agencia de Desarrollo Web & Automatización AI-Native',
  description: 'Creamos landing pages de alta conversión, sitios web institucionales y e-commerce robustos en Argentina. Potenciamos tu negocio con IA y automatizaciones.',
  keywords: ['desarrollo web argentina', 'crear pagina web', 'landing page pymes', 'ecommerce personalizado', 'agencia ia', 'nextjs', 'express'],
  authors: [{ name: 'Víctor - VM Digital Studio' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
        {/* Navbar Simplificado */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="text-xl font-black tracking-wider text-blue-500">
              VM <span className="text-white">DIGITAL</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
              <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
              <a href="#precios" className="hover:text-blue-400 transition-colors">Tarifas</a>
              <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
            </nav>
            <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all">
              Cotizar Web
            </a>
          </div>
        </header>

        <main className="pt-16 min-h-screen">
          {children}
        </main>

        {/* Footer Simplificado */}
        <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} VM Digital Studio. Todos los derechos reservados. San Miguel de Tucumán, Argentina.</p>
        </footer>
      </body>
    </html>
  );
}