import React from 'react';

const Privacidad: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white ">
      <section className="w-full bg-[#14161c] border-t border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-[#e8e2d5] mb-6 text-center">
          Política de Privacidad
        </h1>
        
        <div className="flex flex-col gap-6 text-zinc-300 leading-relaxed">
          <p className="text-base text-center sm:text-left">
            En Bohemia Badajoz nos tomamos muy en serio la privacidad de nuestros clientes. Esta política describe cómo tratamos la información personal recopilada a través de nuestra web, en cumplimiento con el Reglamento General de Protección de Datos (RGPD) y la LOPDGDD.
          </p>

          <div className="border-t border-zinc-800 my-2" />

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Responsable del Tratamiento
            </h2>
            <p className="text-sm text-zinc-400">
              El responsable del tratamiento de los datos recogidos en este sitio web es Bohemia Restaurante, con domicilio en Calle Jacinta García Hernández, 21, Badajoz.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Datos que Recopilamos y Finalidad
            </h2>
            <p className="text-sm text-zinc-400">
              Recopilamos la información que nos facilitas voluntariamente (como nombre, teléfono o correo electrónico) al gestionar tu reserva o contactar con nosotros. Estos datos se utilizan exclusivamente para gestionar tus peticiones de reserva y ofrecerte la mejor atención en nuestro establecimiento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Conservación y Cesión de Datos
            </h2>
            <p className="text-sm text-zinc-400 ">
              Tus datos personales no se cederán a terceros salvo obligación legal. Se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacidad;