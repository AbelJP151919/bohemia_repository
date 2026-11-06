import React, { useState } from 'react';

const WHATSAPP_NUMBER = '34633321327'; // prefijo de país + número, sin + ni espacios
const TELEFONO_VISIBLE = '633 32 13 27';

interface ReservaForm {
  nombre: string;
  telefono: string;
  fecha: string;
  hora: string;
  personas: string;
  comentarios: string;
}

const inicial: ReservaForm = {
  nombre: '',
  telefono: '',
  fecha: '',
  hora: '',
  personas: '2',
  comentarios: '',
};

const hoy = () =>
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];

const inputClass =
  'w-full rounded-lg border border-zinc-700/80 bg-[#1b1e26] px-4 py-2.5 text-[#e8e2d5] placeholder-zinc-500 ' +
  'focus:outline-none focus:ring-2 focus:ring-[#e8e2d5]/60 [color-scheme:dark]';

const labelClass = 'block text-sm font-semibold text-[#e8e2d5] mb-1.5';

const Reservas: React.FC = () => {
  const [form, setForm] = useState<ReservaForm>(inicial);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fechaLegible = new Date(`${form.fecha}T00:00`).toLocaleDateString(
      'es-ES',
      { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    );

    const lineas = [
      'Hola, me gustaría hacer una reserva en Bohemia Badajoz:',
      '',
      `Nombre: ${form.nombre.trim()}`,
      `Teléfono: ${form.telefono.trim()}`,
      `Fecha: ${fechaLegible}`,
      `Hora: ${form.hora}`,
      `Personas: ${form.personas}`,
    ];

    if (form.comentarios.trim()) {
      lineas.push(`Comentarios: ${form.comentarios.trim()}`);
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lineas.join('\n')
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Cabecera */}
      <section
        aria-labelledby="reservas-heading"
        className="bg-[#14161c] border border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10"
      >
        <h1
          id="reservas-heading"
          className="text-3xl sm:text-4xl font-bold text-[#e8e2d5] mb-4 text-center"
        >
          Reservas
        </h1>
        <p className="text-zinc-300 leading-relaxed text-center max-w-xl mx-auto">
          Reserva tu mesa en Bohemia Badajoz. Rellena el formulario y te
          abriremos WhatsApp con tu solicitud lista para enviar.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="px-5 py-2.5 rounded-lg border border-[#e8e2d5]/60 text-[#e8e2d5] hover:bg-[#e8e2d5]/10 transition-colors"
          >
            Llamar al {TELEFONO_VISIBLE}
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section
        aria-labelledby="formulario-heading"
        className="mt-8 bg-[#14161c] border border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10"
      >
        <h2
          id="formulario-heading"
          className="text-2xl font-bold text-[#e8e2d5] mb-6 pb-3 border-b border-zinc-700/80"
        >
          Solicitar reserva
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="nombre" className={labelClass}>Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Tu nombre"
              required
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="telefono" className={labelClass}>Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="600 000 000"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="fecha" className={labelClass}>Fecha</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              min={hoy()}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="hora" className={labelClass}>Hora</label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="personas" className={labelClass}>Número de personas</label>
            <input
              type="number"
              id="personas"
              name="personas"
              value={form.personas}
              onChange={handleChange}
              min={1}
              max={20}
              required
              className={inputClass}
            />
            <p className="mt-1.5 text-xs text-zinc-500">
              Para grupos de más de 20 personas, llámanos.
            </p>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="comentarios" className={labelClass}>
              Comentarios <span className="font-normal text-zinc-500">(opcional)</span>
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={form.comentarios}
              onChange={handleChange}
              rows={3}
              placeholder="Alergias, trona, celebración…"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto sm:self-start px-6 py-3 rounded-lg bg-[#e8e2d5] text-[#14161c] font-semibold hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e8e2d5]/60"
            >
              Reservar por WhatsApp
            </button>
            <p className="text-xs text-zinc-500">
              Se abrirá WhatsApp con tu solicitud ya escrita. La reserva queda
              confirmada cuando el local te responda.
            </p>
          </div>
        </form>
      </section>

      {/* Otras formas */}
      <section
        aria-labelledby="otras-formas-heading"
        className="mt-8 bg-[#14161c] border border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10"
      >
        <h2
          id="otras-formas-heading"
          className="text-2xl font-bold text-[#e8e2d5] mb-4"
        >
          Otras formas de reservar
        </h2>
        <ul className="flex flex-col gap-3 text-zinc-300">
          <li>
            <span className="text-[#e8e2d5] font-semibold">Por teléfono: </span>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="underline underline-offset-4 hover:text-[#e8e2d5]"
            >
              {TELEFONO_VISIBLE}
            </a>
          </li>
          <li>
            <span className="text-[#e8e2d5] font-semibold">En persona: </span>
            C/ Jacinta García Hernández, 21, 06011 Badajoz
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Reservas;