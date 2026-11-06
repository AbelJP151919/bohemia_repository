import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bohemia_Bar from './Bohemia';
import Carta_Bohemia from './pages/Carta';
import Reservas from './pages/Reservas';
import Sobre_Nosotros from './pages/Sobre_Nosotros';
import AvisoLegal from './pages/AvisoLegal';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import bohemiaIcon from './assets/bohemia_icon.png'; // Asegúrate de que la ruta sea correcta

const App: React.FC = () => {

  return (
    <BrowserRouter>
      {/* 4. CLASES DINÁMICAS: Añadimos dark:bg-gray-900 y dark:text-white al fondo principal */}
      <div className="flex flex-col min-h-screen bg-[#14161c] text-white transition-colors duration-300">

        <header className="w-full bg-[#14161c] border-b border-zinc-700/80 py-4 px-4 sm:px-8 flex flex-wrap gap-4 justify-between items-center">
          <Link to="/" aria-label="Bohemia Badajoz - Inicio">
            <img
              src={bohemiaIcon}
              alt="Bohemia Logo"
              className="h-16 w-16 object-contain"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
            <Link
              to="/"
              className="text-sm uppercase tracking-widest text-zinc-400 hover:text-[#e8e2d5] transition-colors font-Montserrat"
            >
              Inicio
            </Link>
            <Link
              to="/carta"
              className="text-sm uppercase tracking-widest text-zinc-400 hover:text-[#e8e2d5] transition-colors font-Montserrat"
            >
              Carta
            </Link>
            <Link
              to="/sobre-nosotros"
              className="text-sm uppercase tracking-widest text-zinc-400 hover:text-[#e8e2d5] transition-colors font-Montserrat"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/reservas"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest bg-[#e8e2d5] text-[#14161c] hover:bg-white transition-colors font-Montserrat"
            >
              Reservas
            </Link>
          </nav>
        </header>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Bohemia_Bar />} />
            <Route path="/carta" element={<Carta_Bohemia />} />
            <Route path="/sobre-nosotros" element={<Sobre_Nosotros />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </div>

        <footer className="w-full bg-[#14161c] border-t border-zinc-800/80 py-8 px-8">
          {/* ... tu footer sigue igual ... */}
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 px-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <Link to="/" className="hover:text-white transition-colors">Bohemia</Link>
              <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
              <Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
            </div>
            <p className="mt-2 text-gray-500">
              © {new Date().getFullYear()} Bohemia. Todos los derechos reservados.
            </p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
};

export default App;