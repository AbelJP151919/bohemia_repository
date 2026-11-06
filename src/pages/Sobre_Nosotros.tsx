import React from 'react';

const Sobre_Nosotros: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white bg-[#14161c]">
      <section className="w-full bg-[#14161c] border-t border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-[#e8e2d5] mb-6 text-center">
          Sobre Nosotros
        </h1>
        
        <div className="flex flex-col gap-6 text-zinc-300 leading-relaxed">
          <p className="text-base text-center sm:text-left">
            Conoce nuestra historia y lo que nos motiva a ofrecer la mejor experiencia culinaria en Bohemia Badajoz.
          </p>

          <div className="border-t border-zinc-800 my-4" />

          <h2 className="text-2xl font-semibold text-white">
            Nuestro Equipo
          </h2>
          <p className="text-base text-zinc-400">
            Somos un equipo de apasionados por la cocina, dedicados a crear experiencias gastronómicas únicas, mezclando la tradición con un toque desenfadado y original.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Sobre_Nosotros;