import React from 'react';

const AvisoLegal: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white">
      <section className="w-full bg-[#14161c] border-t border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-[#e8e2d5] mb-6 text-center">
          Aviso Legal
        </h1>
        
        <div className="flex flex-col gap-6 text-zinc-300 leading-relaxed">
          <p className="text-base text-center sm:text-left">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen a continuación los datos identificativos del titular del sitio web:
          </p>

          <div className="border-t border-zinc-800 my-2" />

          <ul className="list-disc pl-5 flex flex-col gap-2 text-sm text-zinc-400">
            <li>
              <strong className="text-zinc-200">Denominación social:</strong> Bohemia Restaurante
            </li>
            <li>
              <strong className="text-zinc-200">Domicilio:</strong> Calle Jacinta García Hernández, 21, 06011 Badajoz, España
            </li>
            <li>
              <strong className="text-zinc-200">Contacto:</strong> bohemiabadajoz@gmail.com
            </li>
            <li>
              <strong className="text-zinc-200">Actividad:</strong> Servicios de restauración y hostelería
            </li>
          </ul>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Condiciones de Uso
            </h2>
            <p className="text-sm text-zinc-400">
              El acceso y uso de este sitio web atribuye la condición de usuario, aceptando desde dicho acceso las presentes Condiciones de Uso. La información contenida sobre la carta, menús y precios se ofrece con fines informativos y puede estar sujeta a modificaciones.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AvisoLegal;