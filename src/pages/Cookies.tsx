import React from 'react';

const Cookies: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white">
      <section className="w-full bg-[#14161c] border-t border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-[#e8e2d5] mb-6 text-center">
          Política de Cookies
        </h1>
        
        <div className="flex flex-col gap-6 text-zinc-300 leading-relaxed">
          <p className="text-base text-center sm:text-left">
            En Bohemia Badajoz utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento del sitio web y analizar la navegación de los usuarios.
          </p>

          <div className="border-t border-zinc-800 my-2" />

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Tipos de cookies que usamos
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm text-zinc-400">
              <li>
                <strong className="text-zinc-200">Cookies Técnicas:</strong> Necesarias para el funcionamiento básico del sitio web y la navegación por sus secciones.
              </li>
              <li>
                <strong className="text-zinc-200">Cookies de Análisis:</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico del uso que hacen del sitio web para mejorar nuestra oferta.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Gestión de cookies
            </h2>
            <p className="text-sm text-zinc-400">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador que utilices en tu dispositivo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cookies;